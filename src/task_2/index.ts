import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

abstract class ManagerBaseEmployee extends BaseEmployee implements IManageEmployee {
    public readonly subordinates: Map<EmployeeDivision, BaseEmployee[]>;

    constructor(name: string, division: EmployeeDivision) {
        super(name, division);
        this.subordinates = new Map<EmployeeDivision, BaseEmployee[]>();
    }

    public getSubordinates(flatOutput?: boolean): Map<EmployeeDivision, BaseEmployee[]> | BaseEmployee[]{
        if (flatOutput){
            return this.subordinates;
        }
        return this.subordinates.get(EmployeeDivision.management);
    }

    public addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(EmployeeDivision.management).push(person);
    }

    public removeSubordinate(person: BaseEmployee): void {
        const persons = this.subordinates.get(EmployeeDivision.management);
        persons.splice(persons.indexOf(person));
    }
}

export class ManagmentEmployee extends ManagerBaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.management);
    }
}

export class ITEmployee extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.IT);
    }
}

export class CalculusEmployee extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.calculus);
    }
}

export class AdministratorEmployee extends ManagerBaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.administration);
    }
}