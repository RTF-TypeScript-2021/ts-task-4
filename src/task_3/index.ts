/** Задача 3 - Да кто эта ваша фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Игорь') вернет IT'ника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
 */
import {BaseEmployee, IManageEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";
import {Accountant, Admin, ITSpecialist, Manager} from "../task_2";


export interface IEmployeeFactory {
    createBaseEmployee(department: EmployeeDivision.IT
        | EmployeeDivision.calculus, name: string): BaseEmployee;

    createManageEmployee(department: EmployeeDivision, name: string):
        IManageEmployee
}

export class EmployeeFactory implements IEmployeeFactory {
    public createBaseEmployee = (department: EmployeeDivision.IT
        | EmployeeDivision.calculus, name: string): BaseEmployee => department === EmployeeDivision.IT ? new ITSpecialist(name) : new Accountant(name);

    public createManageEmployee = (department: EmployeeDivision.management
        | EmployeeDivision.administration, name: string): IManageEmployee => department === EmployeeDivision.management ? new Manager(name) : new Admin(name);
}