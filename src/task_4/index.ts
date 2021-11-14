/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */
import {AdministrationEmployee, CalculusEmployee, ItEmployee, ManagementEmployee} from "../task_2";
import {EmployeeFabric} from "../task_3";
import {EmployeeDivision} from "../empoyee-separate.enum";
import {Employee, IManageEmployee} from "../task_1";


class Environment{
    static Administration: Array<AdministrationEmployee> = [];
    static Management: Array<ManagementEmployee> = [];
    static Calculus: Array<CalculusEmployee> = [];
    static IT: Array<ItEmployee> = [];

    static addAdministrator(name: string): void{
        this.Administration.push(<AdministrationEmployee>EmployeeFabric.createInstance(EmployeeDivision.administration, name))
    }

    static addManager(name: string, chiefName: string): void{
        const employee = <ManagementEmployee>EmployeeFabric.createInstance(EmployeeDivision.management, name);
        this.Management.push(employee)
        this.Administration.find(admin => admin.name === chiefName).addSubordinate(employee);
    }

    static addAccountant(name: string, chiefName: string): void{
        const employee = <CalculusEmployee>EmployeeFabric.createInstance(EmployeeDivision.calculus, name);
        this.Calculus.push(employee)
        this.Management.find(admin => admin.name === chiefName).addSubordinate(employee);
    }

    static addDeveloper(name: string, chiefName: string): void{
        const employee = <ItEmployee>EmployeeFabric.createInstance(EmployeeDivision.IT, name);
        this.IT.push(employee)
        this.Management.find(admin => admin.name === chiefName).addSubordinate(employee);
    }

    static dismissEmployee(name: string, department: EmployeeDivision){
        if (department === EmployeeDivision.administration){
            const index = this.Administration.findIndex(person => person.name === name);
            this.Administration.splice(index, 1)
        } else if (department === EmployeeDivision.management){
            this.dismissCertainEmployee(name, department, this.Administration, this.Management)
        } else if (department === EmployeeDivision.calculus){
            this.dismissCertainEmployee(name, department, this.Management, this.Calculus)
        } else if (department === EmployeeDivision.IT){
            this.dismissCertainEmployee(name, department, this.Management, this.IT)
        }
    }

    private static dismissCertainEmployee(name: string, department: EmployeeDivision, chiefs: Array<IManageEmployee>, workers: Array<Employee>){
        const index = workers.findIndex(person => person.name === name);
        workers.splice(index, 1)

        const managerIndex = chiefs.findIndex(person => person.subordinates[department].employees.find(x => x.name === name));
        const subordinateIndex = chiefs[managerIndex].subordinates[department].employees.findIndex(x => x.name === name);
        chiefs[managerIndex].subordinates[department].employees.splice(subordinateIndex, 1)
    }
}

Environment.addAdministrator("одменестратор")
Environment.addManager("манагер", "одменестратор")
Environment.addAccountant("аккаунтант", "манагер")
Environment.addDeveloper("девелопер", "манагер")

Environment.dismissEmployee("аккаунтант",EmployeeDivision.calculus)

