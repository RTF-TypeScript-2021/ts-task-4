import {BaseEmployee, employeesInDivision, IManageEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export abstract class ManageEmployee extends BaseEmployee implements IManageEmployee {
    public readonly subordinates: employeesInDivision;

    protected constructor(fullName: string, department: EmployeeDivision.management | EmployeeDivision.administration) {
        super(fullName, department);
        this.subordinates.set(EmployeeDivision.IT, []);
        this.subordinates.set(EmployeeDivision.calculus, []);
        this.subordinates.set(EmployeeDivision.management, []);
        this.subordinates.set(EmployeeDivision.administration, []);

    }

    addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department)?.push(person)
    }

    getSubordinates(flatOutput?: boolean): employeesInDivision | BaseEmployee[] {
        return flatOutput ?
            Array.from(this.subordinates.values()).reduce(
                (allEmployees, employeesInDepartment) => allEmployees.concat(employeesInDepartment),
                [])
            : this.subordinates;
    }

    removeSubordinate(person: BaseEmployee): void {
        this.subordinates.set(person.department, this.subordinates.get(person.department).filter(p => p.fullName !== person.fullName));
    }

}

export class ITEmployee extends BaseEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.IT);
    }
}

export class CalculusEmployee extends BaseEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.calculus);
    }
}

export class ManagementEmployee extends ManageEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.management);
    }
}

export class AdministrationEmployee extends ManageEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.administration);
    }
}