import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

export abstract class ManagerEmployee extends BaseEmployee implements IManageEmployee {
    public subordinates: Map<EmployeeDivision, BaseEmployee[]>;

    constructor(name: string, division: EmployeeDivision, subordinates: Map<EmployeeDivision, BaseEmployee[]>) {
        super(name, division);
        this.subordinates = subordinates;
    }

    getSubordinates(flatOutput?: boolean): BaseEmployee[] | Map<EmployeeDivision, BaseEmployee[]> {
        if (flatOutput) {
            return Array.from(this.subordinates.values()).flat();
        }

        return this.subordinates;
    }

    addSubordinate(person: BaseEmployee): void {
        if (this.subordinates.has(person.division)) {
            this.subordinates.get(person.division).push(person);
        } else {
            this.subordinates.set(person.division, Array<BaseEmployee>(person));
        }

    }

    removeSubordinate(person: BaseEmployee): void {
        const subordinate = this.subordinates.get(person.division);
        if (subordinate) {
            subordinate.splice(subordinate.findIndex(x => x === person), 1) ;
        } else {
            throw new Error('Person not found');
        }
    }
}

export class ITEmployee extends BaseEmployee {
    constructor(name: string, division: EmployeeDivision) {
        super(name, division);
    }

    public getAuthority(): void {
        console.log('IT');
    }
}

export class CalculusEmployee extends BaseEmployee {
    constructor(name: string, division: EmployeeDivision) {
        super(name, division);
    }

    public getAuthority(): void {
        console.log('Calculus');
    }
}

export class ManagementEmployee extends ManagerEmployee {
    constructor(name: string, division: EmployeeDivision, subordinates: Map<EmployeeDivision, BaseEmployee[]>) {
        super(name, division, subordinates);
    }

    public getAuthority(): void {
        console.log('Management');
    }
}

export class AdministrationEmployee extends ManagerEmployee {
    constructor(name: string, division: EmployeeDivision, subordinates: Map<EmployeeDivision, BaseEmployee[]>) {
        super(name, division, subordinates);
    }

    public getAuthority(): void {
        console.log('Administration');
    }
}
