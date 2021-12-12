import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

 export class ITEmployees extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.IT);
    }
}

export class CalculusEmployees extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.calculus);
    }
}

export class ManagementEmployees extends BaseEmployee implements IManageEmployee {
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
        this.subordinates.get(person.division).push(person);
    }

    removeSubordinate(person: BaseEmployee) {
        const index = this.subordinates.get(person.division).indexOf(person);
        if (index === -1) {
            throw new Error("There is no employee");
        }

        this.subordinates.get(person.division).splice(index,1);
    }
}

export class AdministrationEmployees extends BaseEmployee implements IManageEmployee {
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
        this.subordinates.get(person.division).push(person);
    }

    removeSubordinate(person: BaseEmployee) {
        const index = this.subordinates.get(person.division).indexOf(person);
        if (index === -1) {
            throw new Error("There is no employee");
        }
        
        this.subordinates.get(person.division).splice(index,1);
    }
}