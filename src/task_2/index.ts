import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

 export class Programmer extends BaseEmployee {
    constructor(fullname: string) {
        super(fullname, EmployeeDivision.IT)
    }

    public getAuthority(): void {
        console.log("Программирую");
    }
}

export class Calculus extends BaseEmployee {
    constructor(fullname: string) {
        super(fullname, EmployeeDivision.calculus)
    }

    public getAuthority(): void {
        console.log("Высчитываю зарплату");
    }
}

export abstract class Manager extends BaseEmployee implements IManageEmployee {
    public readonly subordinates: Map<EmployeeDivision, BaseEmployee[]> = new Map<EmployeeDivision, BaseEmployee[]>();

    constructor(fullName: string, department: EmployeeDivision) {
        super(fullName, department);
    }

    public getSubordinates(flatOutput?: boolean): void {
        if(flatOutput) {
            console.log(this.subordinates.values())
        } else {
            console.log(this.subordinates.entries())
        }
    }

    public addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department).push(person);
    }

    public removeSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department).splice(this.subordinates.get(person.department).indexOf(person), 1)
    }
}

export class ManagementEmployee extends Manager {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.management);
    }

    public getAuthority(): void {
        console.log("Управляю сотрудниками");
    }
}

export class AdministrationEmployee extends Manager {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.administration);
    }
    public getAuthority(): void {
        console.log("Управляю всем");
    }
}