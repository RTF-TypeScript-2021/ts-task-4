import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export class ITEmployee extends BaseEmployee{
    constructor(name: string){
        super(name, EmployeeDivision.IT);
    }
}

export class CalculusEmployee extends BaseEmployee{
    constructor(name: string){
        super(name, EmployeeDivision.calculus);
    }
}


export abstract class IManageEmployesSub extends BaseEmployee implements IManageEmployee{
    constructor(name: string, departament: EmployeeDivision){
        super(name, departament);
    }
    
    subordinates: BaseEmployee[][];
    getSubordinates?(flatOutput?: boolean): void {
        const subArray: BaseEmployee[] = this.subordinates.flat();
        
       flatOutput === false ? console.log(this.subordinates) : console.log(subArray);
    }
    addSubordinate(person: BaseEmployee): void {
        if(this.subordinates[person.department].find(per => per === person)){ 
            throw Error("Такой сотрудник уже есть в списке подчиненных");
        }else{
            this.subordinates[person.department].push(person);
        }
    }
    removeSubordinate(person: BaseEmployee): void{
        if(this.subordinates[person.department].find(per => per === person)){ 
            this.subordinates[person.department].splice(this.subordinates[person.department].findIndex(ind => ind === person), 1);
        } else{
            throw Error("Нет такого подчиненного, чтобы его удалять");
        }
    }
}

export class ManagementEmployee extends IManageEmployesSub{

    constructor(name: string){
        super(name, EmployeeDivision.management);
    }
}

export class AdministrationEmployee extends IManageEmployesSub{

    constructor(name: string){
        super(name, EmployeeDivision.administration);
    }
}



