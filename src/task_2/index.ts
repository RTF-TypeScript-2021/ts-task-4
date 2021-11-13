import {BaseEmployee, IManageEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export class ITSpecialist extends BaseEmployee {
    public fullName: string;
    public readonly department: EmployeeDivision = EmployeeDivision.IT;

    constructor(newFullName: string) {
        super();
        this.fullName = newFullName;
    }

    getAuthority(): void {
        console.log("This employee is working in IT department");
    }
}

export class Accountant extends BaseEmployee {
    public fullName: string;
    public readonly department: EmployeeDivision = EmployeeDivision.calculus;

    constructor(newFullName: string) {
        super();
        this.fullName = newFullName;
    }

    getAuthority(): void {
        console.log("This employee is working in calculus department");
    }
}

export class Manager extends BaseEmployee implements IManageEmployee {
    public fullName: string;
    public readonly department: EmployeeDivision = EmployeeDivision.management;
    public subordinates: Map<EmployeeDivision, Array<BaseEmployee>>;

    constructor(newFullName: string) {
        super();
        this.fullName = newFullName;
        this.subordinates = new Map<EmployeeDivision, Array<BaseEmployee>>();
    }

    getAuthority(): void {
        console.log("This employee is working in management department");
    }

    addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department).push(person);
    }

    removeSubordinate(person: BaseEmployee): void {
        const indexOfPerson = this.subordinates.get(person.department).indexOf(person);
        this.subordinates.get(person.department).splice(indexOfPerson, 1);
    }

    getSubordinates(flatOutput?: boolean): void {
        console.log(flatOutput ? this.subordinates.values() : this.subordinates.entries());
    }
}

export class Admin extends BaseEmployee implements IManageEmployee {
    public fullName: string;
    public readonly department: EmployeeDivision = EmployeeDivision.administration;
    public subordinates: Map<EmployeeDivision, Array<BaseEmployee>>;

    constructor(newFullName: string) {
        super();
        this.fullName = newFullName;
        this.subordinates = new Map<EmployeeDivision, Array<BaseEmployee>>();
    }

    getAuthority(): void {
        console.log("This employee is working in administration department");
    }

    addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department).push(person);
    }

    removeSubordinate(person: BaseEmployee): void {
        const indexOfPerson = this.subordinates.get(person.department).indexOf(person);
        this.subordinates.get(person.department).splice(indexOfPerson, 1);
    }

    getSubordinates(flatOutput?: boolean): void {
        console.log(flatOutput ? this.subordinates.values() : this.subordinates.entries());
    }
}
