import {IBaseEmployee, ManageEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export class ITEmployee implements IBaseEmployee{
    department: EmployeeDivision;
    fullName: string;

    constructor(name: string) {
        this.fullName = name;
        this.department = EmployeeDivision.IT;
    }

    getAuthority(): void {
        console.log("IT-department worker. Can coding")
    }
}

export class CalculusEmployee implements IBaseEmployee {
    department: EmployeeDivision;
    fullName: string;

    constructor(name: string) {
        this.fullName = name;
        this.department = EmployeeDivision.calculus;
    }

    getAuthority() {
        console.log("Calculus-department worker. Can calculate finances");
    }
}

export class ManagementEmployee extends ManageEmployee{

    constructor(name: string) {
        super();
        this.fullName = name;
        this.department = EmployeeDivision.management;
        this.subordinates = new Map();
    }

    getAuthority() {
        console.log("Management worker. Can manage groups of workers");
    }

}

export class AdministrationEmployee extends ManageEmployee{

    constructor(name: string) {
        super();
        this.fullName = name;
        this.department = EmployeeDivision.administration;
        this.canSubordinate = true;
    }

    getAuthority() {
        console.log("Administration worker. Can control activity all of workers")
    }

}