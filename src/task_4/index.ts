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
import { BaseEmployee, IBaseEmployee, IManageEmployee, ManageEmployee } from "../task_1";
import { ITEmployee } from "../task_2";
import { EmployeeFabric, IEmployeeFabric } from "../task_3";

class Company {
    public employeesRepository: Array<IBaseEmployee> = [];
    public employeeFabric: IEmployeeFabric;
    public genDirector: IManageEmployee;

    constructor(fabric: IEmployeeFabric, directorsName:string){
        this.employeeFabric = fabric;
        this.genDirector = this.employeeFabric.createManageInstance(
            EmployeeDivision.administration, directorsName
        );
    }

    public dismissEmployee(person: IBaseEmployee):boolean {
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
            (item:IBaseEmployee) => item !== person
        )

        return false;
    }

    public addEmployee(name:string, divicion:EmployeeDivision, 
        isManeger:boolean, toManage:IManageEmployee=this.genDirector): BaseEmployee | ManageEmployee {
        let newEmployee:IBaseEmployee;
        if (isManeger){
            newEmployee = this.employeeFabric.createManageInstance(divicion, name);
        } else {
            newEmployee = this.employeeFabric.createBaseInstance(divicion, name);
        }
        this.employeesRepository.push(newEmployee);
        
        //назначили руководителя, если никого нет, то в подчинении ген.дира
        toManage.addSubordinate(newEmployee);

        return newEmployee;
    }

    /**
     * перевод сотрудника на другую должность/к другому руководителю
     * @param person 
     * @param newDivicion 
     * @returns 
     */
    public moveEmployee(person: IBaseEmployee, newDivicion:EmployeeDivision, 
        isManage: boolean, toManage?: IManageEmployee): void {
        this.dismissEmployee(person);
        this.addEmployee(person.name,newDivicion,isManage, toManage);
    }

    /**
     * Перевод всех подчиненных от одного руководителя к другому
     * @param fromManage 
     * @param toManage 
     */
    public moveSubordinates(fromManage: IManageEmployee, toManage: IManageEmployee, ){
        (fromManage.getSubordinates(true) as Array<BaseEmployee>).forEach(
            (subordinate: BaseEmployee) => toManage.addSubordinate(subordinate)
        )
        fromManage.subordinates.clear();
    }

    public getSubordinatesTree(fromPerson: IManageEmployee, tabs=0): void {
        console.log('\t'.repeat(tabs),"|",fromPerson.name, EmployeeDivision[fromPerson.division]);
        console.log('\t'.repeat(tabs),"|","-----------");
        const tmp:Array<BaseEmployee> = fromPerson.getSubordinates(true) as Array<BaseEmployee>;
        tmp.forEach(item => {
            if (item instanceof ManageEmployee) {
                this.getSubordinatesTree(item, tabs+1);
            } else {
                console.log('\t'.repeat(tabs+1),"|",item.name);
                console.log('\t'.repeat(tabs+1),"|","-----------");
            }
        })
    }
}

const ef = new EmployeeFabric();
const company = new Company(ef,"BIG BOSS");


const a1 = company.addEmployee("admin1", EmployeeDivision.administration, true);
const a2 = company.addEmployee("admin2", EmployeeDivision.administration, true);

const m1 = company.addEmployee("Manager1", EmployeeDivision.management, true, a1 as ManageEmployee);
const m2 = company.addEmployee("Manager2", EmployeeDivision.management, true);
const m3 = company.addEmployee("Manager3", EmployeeDivision.management, true);

const i1 = company.addEmployee("IT spec1", EmployeeDivision.IT, false, m1 as ManageEmployee);
company.addEmployee("IT spec2", EmployeeDivision.IT, false, m1 as ManageEmployee);
company.addEmployee("IT spec3", EmployeeDivision.IT, false, m1 as ManageEmployee);
company.addEmployee("culc spec-m1", EmployeeDivision.calculus, false, m1 as ManageEmployee);


company.addEmployee("culc spec1", EmployeeDivision.calculus, false, m2 as ManageEmployee);
company.addEmployee("culc spec2", EmployeeDivision.calculus, false, m2 as ManageEmployee);
company.addEmployee("culc spec3", EmployeeDivision.calculus, false, m2 as ManageEmployee);


company.dismissEmployee(m1);

company.getSubordinatesTree(company.genDirector);

company.dismissEmployee(i1);
company.getSubordinatesTree(company.genDirector);
//console.log(company.employeesRepository)