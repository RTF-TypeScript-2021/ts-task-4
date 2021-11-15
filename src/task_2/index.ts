/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */
import {BaseEmployee, IManageEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";

export abstract class ManageEmployee extends BaseEmployee implements IManageEmployee {
    public readonly subordinates: Map<EmployeeDivision, BaseEmployee[]> = new Map<EmployeeDivision, BaseEmployee[]>();
    
    constructor(fullName: string, department: EmployeeDivision) {
        super(fullName, department);
    }
    
    public addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.department).push(person);
    }
    
    public getSubordinates(flatOutput?: boolean): void {
        console.log(flatOutput ? this.subordinates.values() : this.subordinates);
    }
    
    public removeSubordinate(person: BaseEmployee): void {
        const department = person.department;
        this.subordinates.set(department, this.subordinates.get(department).filter(p => person.fullName !== p.fullName));
    }
    
}

export class ITEmployee extends BaseEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.IT);
    }
    
    public override getAuthority(): void {
        console.log("IT работа");
    }
}

export class CalculusEmployee extends BaseEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.calculus);
    }
    
    public override getAuthority(): void {
        console.log("Бухгалтерия");
    }
}

export class ManagementEmployee extends ManageEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.management);
    }
    
    public override getAuthority(): void {
        console.log("Управление подчиненными");
    }
}

export class AdministrationEmployee extends ManageEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.administration);
    }
    
    public override getAuthority(): void {
        console.log("Администрация");
    }
}