/** Задача 3 - Да кто эта ваща фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Игорь') вернет IT'ника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
*/
import {EmployeeDivision} from "../empoyee-separate.enum";
import {BaseEmployee} from "../task_1";
import {AdministrationEmployee, CalculusEmployee, ITEmployee, ManagementEmployee} from "../task_2";

export class EmployeeFabric {
    public static createEmployee(fullName: string, department: EmployeeDivision): BaseEmployee {
        switch (department) {
            case EmployeeDivision.IT:
                return new ITEmployee(fullName);
            case EmployeeDivision.calculus:
                return new CalculusEmployee(fullName);
            case EmployeeDivision.management:
                return new ManagementEmployee(fullName);
            case EmployeeDivision.administration:
                return new AdministrationEmployee(fullName);
        }
    }
}