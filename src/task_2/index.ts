import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

 abstract class ManagerBaseEmployee extends BaseEmployee implements IManageEmployee {

    public readonly subordinates: Map<EmployeeDivision, BaseEmployee[]>;

    constructor(name: string, departament: EmployeeDivision) {
        if (departament === EmployeeDivision.calculus || departament === EmployeeDivision.IT) {
            throw Error("ерор: Походу айтишник пытается пробраться в администрацию");
        }
        super(name, departament);
        this.subordinates = new Map<EmployeeDivision, BaseEmployee[]>();
    }

    public getSubordinates(flatOutput?: boolean): void{

        if(!flatOutput){
            console.log(this.subordinates.entries());
        } else {
            console.log(this.subordinates.values());
        }
    }

    public addSubordinate(person: BaseEmployee): void{

        this.subordinates.get(person.department).push(person);
    }

    public removeSubordinate(person: BaseEmployee): void{
        this.subordinates.get(person.department).splice(this.subordinates.get(person.department).indexOf(person),1);
    }
}

export class ManagementSpecialist extends ManagerBaseEmployee{
    constructor(name: string){
        super(name,EmployeeDivision.management);
    }
}
 
export class AdminSpecialist extends ManagerBaseEmployee{
    constructor(name: string){
        super(name,EmployeeDivision.administration);
    }
}

 export class ITSpecialist extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.IT);
    }
}

 export class CalculusSpecialist extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.calculus);
    }
}