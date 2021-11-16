/** Задача 3 - Да кто эта ваща фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Игорь') вернет IT'ника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
*/

import { EmployeeDivision } from "../empoyee-separate.enum";
import { BaseEmployee, IManageEmployee } from "../task_1";
import {ManagmentEmployee, CalculusEmployee, ITEmployee, AdministratorEmployee} from "../task_2";

export class EmployeeFactory {
    public create(division: EmployeeDivision, name: string): BaseEmployee {
        switch (division) {
            case EmployeeDivision.management:
                return new ManagmentEmployee(name);
            case EmployeeDivision.calculus:
                return new CalculusEmployee(name);
            case EmployeeDivision.administration:
                return new AdministratorEmployee(name);
            case EmployeeDivision.IT:
                return new ITEmployee(name);
            default:
                throw new Error('There is no such division');
        }
    }
}