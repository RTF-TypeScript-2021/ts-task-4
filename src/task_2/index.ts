/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */
import {Authority, BaseEmployee, IManageEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";

export class ITSpecialist extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.IT, [Authority.PassageToARoom]);
    }
}

export class CalculusSpecialist extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.calculus, [Authority.PassageToBRoom, Authority.ChangeSalary]);
    }
}

export abstract class ManageEmployee extends BaseEmployee implements IManageEmployee {
    private readonly _subordinates: Map<EmployeeDivision, BaseEmployee[]> = new Map<EmployeeDivision, BaseEmployee[]>();

    get subordinates() {
        return this._subordinates;
    }

    getSubordinates = (flatOutput?: boolean): void => console.log(flatOutput ? this._subordinates.values() : this._subordinates);

    addSubordinate(person: BaseEmployee): boolean {
        if (!person) {
            return false;
        }
        let addPerson = true;
        this._subordinates.forEach((value, key) => {
            if (key === person.department) {
                value.push(person);
                addPerson = false;
            }
        });
        if (addPerson) {
            this._subordinates.set(person.department, [person]);
        }

        return true;
    }

    removeSubordinate(person: BaseEmployee): boolean {
        if (!person) {
            return false;
        }
        let personRemoved = false;
        this._subordinates.forEach(((value, key) => {
            if (key === person.department) {
                value.forEach((x, index) => {
                    if (x.name === person.name) {
                        personRemoved = true;
                        value.splice(index, 1);
                    }
                });
            }
        }));

        return personRemoved;
    }
}

export class ManagementSpecialist extends ManageEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.management, [Authority.PassageToAllRooms, Authority.KickOutFromWork, Authority.Recruit, Authority.ChangeSalary]);
    }
}

export class AdministrationSpecialist extends ManageEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.administration, [Authority.PassageToCRoom, Authority.KickOutFromWork, Authority.Recruit]);
    }
}
