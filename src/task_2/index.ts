import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export class ITEmployee extends BaseEmployee{
    public constructor(name: string){
        super(name, EmployeeDivision.IT);
    }
    public getAuthority(){
        console.log("включать пк, заваривать кофе");
    }
}

export class CalculusEmployee extends BaseEmployee{
    public constructor(name: string){
        super(name, EmployeeDivision.calculus);
    }
    public getAuthority(){
        console.log("задерживать зп, урезать премию, ругать excel");
    }
}

export abstract class ManageEmployee extends BaseEmployee implements IManageEmployee {
    public subordinates: Map<EmployeeDivision, BaseEmployee[]> = new Map();

    public getSubordination(flatOutput?: boolean): BaseEmployee[] | Map<EmployeeDivision, BaseEmployee[]> {
        if (flatOutput){
            return this.subordinates;
        } else{
            return [].concat(...Array.from(this.subordinates.values())) as BaseEmployee[];
        }
    }
    public addSubordinate(person: BaseEmployee): void {
        if (!this.subordinates.has(person.employeeDivision)){
            this.subordinates.set(person.employeeDivision, []);
        }
        this.subordinates.get(person.employeeDivision).push(person);
    }
    public removeSubordinate(person: BaseEmployee): void {
        const ar = this.subordinates.get(person.employeeDivision);
        const i = ar.indexOf(person);
        ar.splice(i, 1);
    }

}

export class ManagementEmployee extends ManageEmployee{
    public constructor(name: string){
        super(name, EmployeeDivision.management);
    }
    public getAuthority(): void {
        console.log("ставить задачи, увольнять");
    }  
}

export class AdministrationEmployee extends ManageEmployee{
    public constructor(name: string){
        super(name, EmployeeDivision.administration);
    }
    public getAuthority(): void {
        console.log("ставить задачи, составлять заказы");
    }
}