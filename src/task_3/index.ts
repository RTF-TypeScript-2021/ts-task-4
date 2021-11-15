/** Задача 3 - Да кто эта ваща фабрика(вна2ре)
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


export class EmployeeFabric {

    static createManager(name: string, division: EmployeeDivision): IManageEmployee {
        if (division === EmployeeDivision.administration) {
            return new AdministrationEmployee(name);
        } else if (division === EmployeeDivision.management) {
            return new ManagmentEmployee(name);
        }
    }

    static createWorker(name: string, division: EmployeeDivision): BaseEmployee {
        if (division === EmployeeDivision.IT) {
            return new ITEmployee(name);
        } else if (division === EmployeeDivision.calculus) {
            return new CalculusEmployee(name);
        }
    }
}

