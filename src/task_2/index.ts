import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

 export class IT extends BaseEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.IT);
    }

    public override getAuthority() {
        console.log("Решение IT задач");
    }
}

export class Calculus extends BaseEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.calculus);
    }

    public override getAuthority() {
        console.log("Вычисление з/п сотрудников IT");
    }
}

export class Manager extends BaseEmployee implements IManageEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.management);
    }

    public override getAuthority() {
        console.log("Управление работниками");
    }

    public subordinates: BaseEmployee[][];

    addSubordinate(person: BaseEmployee): void {
        this.subordinates[person.department].push(person);
    }

    getSubordinates?(flatOutput?: boolean): void {
        const subArray: BaseEmployee[] = this.subordinates.flat();

        console.log(flatOutput === false ? this.subordinates : subArray)
    }

    removeSubordinate(person: BaseEmployee): void {
        this.subordinates[person.department].splice(this.subordinates[person.department].findIndex(ind => ind === person), 1);
    }
}

export class Administrator extends BaseEmployee implements IManageEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.administration);
    }

    public override getAuthority() {
        console.log("Управление всем");
    }

    public subordinates: BaseEmployee[][];

    addSubordinate(person: BaseEmployee): void {
        this.subordinates[person.department].push(person);
    }

    getSubordinates(flatOutput?: boolean): void {
        const subArray: BaseEmployee[] = this.subordinates.flat();
        
        console.log(flatOutput === false ? this.subordinates : subArray)
    }

    removeSubordinate(person: BaseEmployee): void {
        this.subordinates[person.department].splice(this.subordinates[person.department].findIndex(ind => ind === person), 1);
    }
} 