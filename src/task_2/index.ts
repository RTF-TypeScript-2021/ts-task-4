import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

 
 export abstract class ManagerEmployee extends BaseEmployee implements IManageEmployee {
     private _subordinates: Map<EmployeeDivision, BaseEmployee[]>;
 
     public get subordinates(): Map<EmployeeDivision, BaseEmployee[]> {
         return this._subordinates;
     }
 
     constructor(name: string, division: EmployeeDivision, subordinates: Map<EmployeeDivision, BaseEmployee[]>) {
         super(name, division);
         this._subordinates = subordinates;
     }
 
     public getSubordinates(flatOutput?: boolean): BaseEmployee[] | Map<EmployeeDivision, BaseEmployee[]> {
         if (flatOutput) {
             return Array.from(this._subordinates.values()).flat();
         }
 
         return this._subordinates;
     }
 
     public addSubordinate(person: BaseEmployee): void {
         if (this._subordinates.has(person.division)) {
             if (this._subordinates.get(person.division).some(x => x === person)){
                 throw new Error(`Person ${person.name} already signed as ${this.name} subordinate`)
             }
             this._subordinates.get(person.division).push(person);
         } else {
             this._subordinates.set(person.division, Array<BaseEmployee>(person));
         }
     }
 
     public removeSubordinate(person: BaseEmployee): void {
         const subordinate = this._subordinates.get(person.division);
 
         if (subordinate) {
             subordinate.splice(subordinate.findIndex(x => x === person), 1);
         } else {
             throw new Error(`Person ${person.name} not found`);
         }
     }
 }
 
 export class ITEmployee extends BaseEmployee {
     constructor(name: string, division: EmployeeDivision) {
         super(name, division);
     }
 }
 
 export class CalculusEmployee extends BaseEmployee {
     constructor(name: string, division: EmployeeDivision) {
         super(name, division);
     }
 }
 
 export class ManagementEmployee extends ManagerEmployee {
     constructor(name: string, division: EmployeeDivision, subordinates: Map<EmployeeDivision, BaseEmployee[]>) {
         super(name, division, subordinates);
     }
 }
 
 export class AdministrationEmployee extends ManagerEmployee {
     constructor(name: string, division: EmployeeDivision, subordinates: Map<EmployeeDivision, BaseEmployee[]>) {
         super(name, division, subordinates);
     }
 }
