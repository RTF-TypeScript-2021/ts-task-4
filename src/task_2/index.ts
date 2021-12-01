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

    getAuthority(): void {
        console.log("Программирую");
    }
}

export class Calculus extends BaseEmployee {
    constructor(fullname: string) {
        super(fullname, EmployeeDivision.calculus)
    }

    getAuthority(): void {
        console.log("Высчитываю зарплату");
    }
}

export class Manager extends BaseEmployee implements IManageEmployee {
    constructor(fullname: string) {
        super(fullname, EmployeeDivision.management)
    }

    public subordinates: Map<EmployeeDivision, BaseEmployee[]>;

    getAuthority(): void {
        console.log("Управляю сотрудниками");
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
        console.log("Управляю всем");
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