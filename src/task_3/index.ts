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
    createStandardEmployee(department: EmployeeDivision.IT | EmployeeDivision.calculus, fullName: string): BaseEmployee;

    createManageEmployee(department: EmployeeDivision.administration | EmployeeDivision.management, fullName: string): ManageEmployee;
}

export class EmployeeFabric implements IEmployeeFactory {
    createManageEmployee(department: EmployeeDivision.administration | EmployeeDivision.management, fullName: string): ManageEmployee {
        switch (department) {
            case EmployeeDivision.management:
                return new ManagementEmployee(fullName);
            case EmployeeDivision.administration:
                return new AdministrationEmployee(fullName);
        }
    }

    createStandardEmployee(department: EmployeeDivision.IT | EmployeeDivision.calculus, fullName: string): BaseEmployee {
        switch (department) {
            case EmployeeDivision.IT:
                return new ITEmployee(fullName);
            case EmployeeDivision.calculus:
                return new CalculusEmployee(fullName);
        }
    }
}
