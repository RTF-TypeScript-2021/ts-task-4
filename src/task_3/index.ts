/** Задача 3 - Да кто эта ваща фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Игорь') вернет IT'ника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
 */
import {BaseEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";
import {
    AdministrationSpecialist,
    CalculusSpecialist,
    ITSpecialist,
    ManageEmployee,
    ManagementSpecialist
} from "../task_2";

export interface IFabric {
    createBaseInstance(name: string, division: EmployeeDivision): BaseEmployee;

    createManageInstance(name: string, division: EmployeeDivision): ManageEmployee;
}

export class Fabric implements IFabric {
    createBaseInstance(name: string, division: EmployeeDivision): BaseEmployee {
        if (division !== EmployeeDivision.calculus && division !== EmployeeDivision.IT) {
            throw new Error("метод должен создавать только BaseEmployee")
        }

        return division === EmployeeDivision.calculus ? new CalculusSpecialist(name) : new ITSpecialist(name);
    }

    createManageInstance(name: string, division: EmployeeDivision): ManageEmployee {
        if (division !== EmployeeDivision.management && division !== EmployeeDivision.administration) {
            throw new Error("метод должен создавать только ManageEmployee")
        }

        return division === EmployeeDivision.management ? new ManagementSpecialist(name) : new AdministrationSpecialist(name);
    }
}


