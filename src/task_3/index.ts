/** Задача 3 - Да кто эта ваша фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Игорь') вернет IT'шника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
 */
import {BaseEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";
import {AdministrationEmployee, CalculusEmployee, ITEmployee, ManageEmployee, ManagementEmployee} from "../task_2";

export interface IEmployeeFactory {
    createEmployee(department: EmployeeDivision, fullName: string): ManageEmployee | BaseEmployee;
}

export class EmployeeFabric implements IEmployeeFactory {
    createEmployee(department: EmployeeDivision, fullName: string): ManageEmployee | BaseEmployee {
        switch (department) {
            case EmployeeDivision.management:
                return new ManagementEmployee(fullName);
            case EmployeeDivision.administration:
                return new AdministrationEmployee(fullName);
            case EmployeeDivision.IT:
                return new ITEmployee(fullName);
            case EmployeeDivision.calculus:
                return new CalculusEmployee(fullName);
        }
    }
}
