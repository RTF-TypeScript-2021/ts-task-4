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
        if (division === EmployeeDivision.management) {
            return new ManagmentEmployee(name);
        }
        if (division === EmployeeDivision.calculus) {
            return new CalculusEmployee(name);
        }
        if (division === EmployeeDivision.administration) {
            return new AdministratorEmployee(name);
        }
        if (division === EmployeeDivision.IT) {
            return new ITEmployee(name);
        }
    }
}