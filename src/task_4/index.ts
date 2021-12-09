/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */

import { EmployeeDivision } from "../empoyee-separate.enum";
import { BaseEmployee, IManageEmployee, ManageEmployee } from "../task_1";
import { ITEmployee } from "../task_2";
import { EmployeeFabric, IEmployeeFabric } from "../task_3";

class Company {
    public employeesRepository: Array<BaseEmployee> = [];
    public employeeFabric: IEmployeeFabric;
    public genDirector: IManageEmployee;

    constructor(fabric: IEmployeeFabric, directorsName:string){
        this.employeeFabric = fabric;
        this.genDirector = this.employeeFabric.createManageInstance(
            EmployeeDivision.administration, directorsName
        );
    }

    public dismissEmployee(person: BaseEmployee):void {
        //Если есть подчиненные, то их нужно распределить
        if (person instanceof ManageEmployee && person.subordinates.size !== 0) {
            throw new Error ("distribute the subordinates before the dismissal of the manager") 
        }
        //Руководителя нет у ген директора
        // у каждого работника есть ссылка на текущего руководителя
        //по этой ссылке вызовем метод удаления сотрудника, аргументом передаем себя
        person.leader?.removeSubordinate(person);
        //Убираем работника из коллекции
        this.employeesRepository = this.employeesRepository.filter(
            (item:BaseEmployee) => item !== person
        )
    }

    public addBaseEmployee(name:string, divicion:EmployeeDivision, 
        toManage:IManageEmployee=this.genDirector): BaseEmployee {
        const newEmployee:BaseEmployee = this.employeeFabric.createBaseInstance(divicion, name);
        toManage.addSubordinate(newEmployee);

        return newEmployee;
    }

    public addManageEmployee(name:string, divicion:EmployeeDivision, 
        toManage:IManageEmployee=this.genDirector): IManageEmployee {
        const newEmployee:IManageEmployee = this.employeeFabric.createManageInstance(divicion, name);
        toManage.addSubordinate(newEmployee);

        return newEmployee;
    }

    /**
     * перевод сотрудника на другую должность/к другому руководителю
     * @param person 
     * @param newDivicion 
     * @returns 
     */
    public moveEmployee(person: BaseEmployee, newDivicion:EmployeeDivision, 
        isManage: boolean, toManage?: IManageEmployee): void {
        this.dismissEmployee(person);
        if (isManage) {
            this.addManageEmployee(person.name,newDivicion,toManage);
        } else {
            this.addBaseEmployee(person.name,newDivicion,toManage);
        }
        
    }

    /**
     * Перевод всех подчиненных от одного руководителя к другому
     * @param fromManage экземпляр руководителя
     * @param toManage экземпляр руководителя
     */
    public moveSubordinates(fromManage: IManageEmployee, toManage: IManageEmployee, ){
        (fromManage.getSubordinates(true) as Array<BaseEmployee>).forEach(
            (subordinate: BaseEmployee) => toManage.addSubordinate(subordinate)
        )
        fromManage.subordinates.clear();
    }

    public displaySubordinatesTree(fromPerson: IManageEmployee, tabs=0): void {
        console.log('\t'.repeat(tabs),"|",fromPerson.name, EmployeeDivision[fromPerson.division]);
        console.log('\t'.repeat(tabs),"|","-----------");
        const tmp:Array<BaseEmployee> = fromPerson.getSubordinates(true) as Array<BaseEmployee>;
        tmp.forEach(item => {
            if (item instanceof ManageEmployee) {
                this.displaySubordinatesTree(item, tabs+1);
            } else {
                console.log('\t'.repeat(tabs+1),"|",item.name);
                console.log('\t'.repeat(tabs+1),"|","-----------");
            }
        })
    }
}


const company = new Company(new EmployeeFabric(),"BIG BOSS");

//два администратора под управлением директора
const a1 = company.addManageEmployee("admin1", EmployeeDivision.administration);
const a2 = company.addManageEmployee("admin2", EmployeeDivision.administration);

//один менеджер под управлением директора
const m1 = company.addManageEmployee("manager1", EmployeeDivision.management);

//два менеджера под управлением администратора a1
const m2 = company.addManageEmployee("Manager2", EmployeeDivision.management, a1);
const m3 = company.addManageEmployee("Manager3", EmployeeDivision.management, a1);

//два IT специалиста и бухгалтер под управлением менеджера m2
company.addBaseEmployee("IT spec2", EmployeeDivision.IT, m2);
company.addBaseEmployee("IT spec3", EmployeeDivision.IT, m2);
company.addBaseEmployee("culc spec-m1", EmployeeDivision.calculus, m2);

//три бухгалтера под управлением администратора a2
company.addBaseEmployee("culc spec1", EmployeeDivision.calculus, a2);
company.addBaseEmployee("culc spec2", EmployeeDivision.calculus, a2);
company.addBaseEmployee("culc spec3", EmployeeDivision.calculus, a2);

company.displaySubordinatesTree(company.genDirector);

