import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export class ITEmployee extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.IT);
    }
}

export class CalculussEmployee extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.calculus);
    }
}

export abstract class ManageEmployee extends BaseEmployee implements IManageEmployee{
    readonly subordinates: BaseEmployee[][];

    constructor(name: string, departament: EmployeeDivision){
        if (departament === EmployeeDivision.calculus || departament === EmployeeDivision.IT) {
            throw Error("Здесь может обитать только элита");
        }
        super(name, departament);
        this.subordinates = new Array<Array<BaseEmployee>>();
    }

    getSubordinates(flatOutput?: boolean): void{
        if(flatOutput === false) {
            console.log(this.subordinates);
        } else {
            const flatSubordanetes = this.subordinates.flat();

            console.log(flatSubordanetes);
        }
    }
    addSubordinate(person: BaseEmployee): void {
        const ifInSub: BaseEmployee = this.subordinates[person.department].find(x => x.fullName === person.fullName);
        if (!ifInSub) {
            this.subordinates[person.department].push(person);
        } else {
            throw new Error("Такой подчиненный уже подчиняется вашему величеству!!!")
        }
    }
    removeSubordinate(person: BaseEmployee): void {
        const ifInSub: number = this.subordinates[person.department].findIndex(x => x.fullName === person.fullName);
        if (ifInSub === -1) {
            throw new Error("К сожалению, вы ещё не овладели таким рабо(тнико)м!!! Есть к чему стремиться!!!")
        } else {
            this.subordinates[person.department].splice(ifInSub, 1);
        }
    }
}

export class AdministrationEmployee extends ManageEmployee{
    constructor(name: string) {
        super(name, EmployeeDivision.administration);
    }
}


export class ManagementEmployee extends ManageEmployee{
    constructor(name: string) {
        super(name, EmployeeDivision.management);
    }
}