import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export class Itworker extends BaseEmployee{
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.IT);
    }

    public override getAuthority() {
        console.log("программирую");
    }
}

export class Calculus extends BaseEmployee{
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.calculus);
    }

    public override getAuthority() {
        console.log("считаю зарплату для Itworker");
    }
}

export class Manager extends BaseEmployee implements IManageEmployee{
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.management);
    }

    public override getAuthority() {
        console.log("управляю работниками");
    }

    public subordinates: Map<EmployeeDivision, BaseEmployee[]> = new Map();

    addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.getDepartment()).push(person);
    }

    getSubordinates(flatOutput?: boolean): void {
        if (flatOutput){
            console.log(this.subordinates.values());
        }else{
            console.log(this.subordinates.entries());
        }
    }

    removeSubordinate(person: BaseEmployee): void {
        const indexOfEmployee = this.subordinates.get(person.getDepartment()).indexOf(person);
        this.subordinates.get(person.getDepartment()).splice(indexOfEmployee,1);

    }
}

export class Administrator extends BaseEmployee implements IManageEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.administration);
    }

    public override getAuthority() {
        console.log("управляю управляющими");
    }

    public subordinates: Map<EmployeeDivision, BaseEmployee[]> = new Map();

    addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.getDepartment()).push(person);
    }

    getSubordinates(flatOutput?: boolean): void {
        if (flatOutput) {
            console.log(this.subordinates.values());
        } else {
            console.log(this.subordinates.entries());
        }
    }

    removeSubordinate(person: BaseEmployee): void {
        const indexOfEmployee = this.subordinates.get(person.getDepartment()).indexOf(person);
        this.subordinates.get(person.getDepartment()).splice(indexOfEmployee, 1);

    }
}