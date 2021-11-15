import { EmployeeDivision } from "../empoyee-separate.enum";
import { EmployeeFabric } from "../task_3";

export abstract class BaseEmployee{
    private _name: string;
    private _division: EmployeeDivision;

    public get division(): EmployeeDivision {
        return this._division;
    }
    public get name(): string {
        return this._name;
    }

    constructor(name: string, division: EmployeeDivision) {
        this._name = name;
        this._division = division;
    }

    public getAuthority() {
        console.log(EmployeeFabric.divisionAuthoritys[this._division]);
    }
}

export interface IManageEmployee {
    subordinates: Map<EmployeeDivision, BaseEmployee[]>,
    getSubordinates(flatOutput?: boolean): Map<EmployeeDivision, BaseEmployee[]> | BaseEmployee[],
    addSubordinate(person: BaseEmployee): void,
    removeSubordinate(person: BaseEmployee): void,
}
