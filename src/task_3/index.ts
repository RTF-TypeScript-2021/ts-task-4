/** Задача 3 - Да кто эта ваща фабрика
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
import {Administrator, Calculus, ITEmployee, Manager} from "../task_2";

abstract class EmployeeFactory {
    makeBaseWorker: (department: EmployeeDivision.IT |
       EmployeeDivision.calculus, fullName: string) => BaseEmployee;

    makeManageWorker: (department: EmployeeDivision.administration |
       EmployeeDivision.management, fullName: string) => IManageEmployee;
}

export class Worker extends EmployeeFactory{
    public static makeManageWorker(departure: EmployeeDivision.management |
       EmployeeDivision.administration, fullName: string): IManageEmployee {
        if (departure === EmployeeDivision.management) {
            return new Manager(fullName);
        } else{
            return new Administrator(fullName);
        }
    }

    public static makeBaseWorker(departure: EmployeeDivision.IT |
       EmployeeDivision.calculus, fullName: string): BaseEmployee {
        if (departure === EmployeeDivision.calculus) {
            return new Calculus(fullName);
        } else{
            return new ITEmployee(fullName);
        }
    }
}