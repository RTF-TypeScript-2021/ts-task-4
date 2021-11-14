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
import {
    AdministrationSpecialist,
    CalculusSpecialist,
    ITSpecialist,
    ManageEmployee,
    ManagementSpecialist
} from "../task_2";

export interface IFabric {
    createInstance(name: string): BaseEmployee;
}

export class ITFabric implements IFabric {
    createInstance = (name: string): BaseEmployee => new ITSpecialist(name);
}

export class CalculusFabric implements IFabric {
    createInstance = (name: string): BaseEmployee => new CalculusSpecialist(name);
}

export class ManagementFabric implements IFabric {
    createInstance = (name: string): ManageEmployee => new ManagementSpecialist(name);
}

export class AdministrationFabric implements IFabric {
    createInstance = (name: string): ManageEmployee => new AdministrationSpecialist(name);
}

