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

export class CalculusEmployee extends BaseEmployee {
   constructor(name: string) {
       super(name, EmployeeDivision.calculus);
   }
}

export class ManagementEmployee extends BaseEmployee implements IManageEmployee {
   constructor(name: string) {
       super(name, EmployeeDivision.management);
   }

   subordinates: Map<EmployeeDivision, BaseEmployee[]>;
   getSubordinates(flatOutput?: boolean) {
       if(flatOutput) {
           console.log(this.subordinates.values());
       } else {
           console.log(this.subordinates.entries());
       }
   }

   addSubordinate(person: BaseEmployee) {
       this.subordinates.get(person.department).push(person);
   }

   removeSubordinate(person: BaseEmployee) {
       const index = this.subordinates.get(person.department).indexOf(person);
       if (index === -1) {
           throw new Error("No employees");
       }
       this.subordinates.get(person.department).splice(index,1);
   }
}

export class AdministrationEmployee extends BaseEmployee implements IManageEmployee {
   constructor(name: string) {
       super(name, EmployeeDivision.administration);
   }

   subordinates: Map<EmployeeDivision, BaseEmployee[]>;
   getSubordinates(flatOutput?: boolean) {
       if(flatOutput) {
           console.log(this.subordinates.values());
       } else {
           console.log(this.subordinates.entries());
       }
   }

   addSubordinate(person: BaseEmployee) {
       this.subordinates.get(person.department).push(person);
   }

   removeSubordinate(person: BaseEmployee) {
       const index = this.subordinates.get(person.department).indexOf(person);
       if (index === -1) {
           throw new Error("No employees");
       }
       this.subordinates.get(person.department).splice(index,1);
   }
} 
