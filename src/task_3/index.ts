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
import {BaseEmployee, IManageEmployee} from "../task_1";
import {AdministrationEmployee, CalculusEmployee, ITEmployee, ManagmentEmployee} from "../task_2";


export class EmployeeFactory {
    static createWorker(name: string, department: EmployeeDivision): BaseEmployee {
        if (department === EmployeeDivision.IT) {
            return new ITEmployee(name);
        }
        if (department === EmployeeDivision.calculus) {
            return new CalculusEmployee(name);
        }
    }

    static createManager(name: string, department: EmployeeDivision): IManageEmployee {
        if (department === EmployeeDivision.administration) {
            return new AdministrationEmployee(name);
        }
        if (department === EmployeeDivision.management) {
            return new ManagmentEmployee(name);
        }
    }
}