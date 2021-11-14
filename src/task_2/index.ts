import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export class ITEmploee extends BaseEmployee {
    constructor(fullname: string) {
        super(fullname, EmployeeDivision.IT)
    }

    getAuthority(): void {
        console.log("The employee works in the IT department");
    }
}

export class Calculus extends BaseEmployee {
    constructor(fullname: string) {
        super(fullname, EmployeeDivision.calculus)
    }

    getAuthority(): void {
        console.log("Counts employee salaries");
    }
}

export class Manager extends BaseEmployee implements IManageEmployee {
    public subordinates: Map<EmployeeDivision, BaseEmployee[]>;
    constructor(fullname: string) {
        super(fullname, EmployeeDivision.management)
    }

    getAuthority(): void {
        console.log("Manages employees");
    }

    getSubordinates(flatOutput?: boolean): void {
        if(flatOutput) {
            console.log(this.subordinates.values())
        } else {
            console.log(this.subordinates.entries())
        }
    }

    addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department).push(person);
    }

    removeSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department).splice(this.subordinates.get(person.department).indexOf(person), 1)
    }
}

export class Administrator extends BaseEmployee implements IManageEmployee {
    public subordinates: Map<EmployeeDivision, BaseEmployee[]>;

    constructor(fullname: string) {
        super(fullname, EmployeeDivision.administration)
    }

    getAuthority(): void {
        console.log("The administrator manages the employees");
    }

    getSubordinates(flatOutput?: boolean): void {
        if(flatOutput) {
            console.log(this.subordinates.values())
        } else {
            console.log(this.subordinates.entries())
        }
    }

    addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department).push(person);
    }

    removeSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department).splice(this.subordinates.get(person.department).indexOf(person), 1)
    }
}