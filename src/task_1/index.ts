import { EmployeeDivision } from "../empoyee-separate.enum";

export abstract class BaseEmployee{
    private _name: string;
    private _employeeDiv: EmployeeDivision;

    public get division() {
        return this._employeeDiv;
    }

    constructor(name: string, division: EmployeeDivision) {
        this._name = name;
        this._employeeDiv = division;
    }

    public getAuthority() {
        return;
    }
}

export interface IManageEmployee {
    subordinates: Map<EmployeeDivision, BaseEmployee[]>,
    getSubordinates(flatOutput?: boolean): Map<EmployeeDivision, BaseEmployee[]> | BaseEmployee[],
    addSubordinate(person: BaseEmployee): void,
    removeSubordinate(person: BaseEmployee): void,
}
