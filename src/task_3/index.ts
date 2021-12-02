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
import { BaseEmployee } from "../task_1";
import { Programmer, Calculus, Manager, Administrator } from "../task_2";

export class Worker {
    public addWorker(division: EmployeeDivision, fullName: string): BaseEmployee {
        switch (division) {
            case EmployeeDivision.management:
                return new Manager(fullName);
            case EmployeeDivision.calculus:
                return new Calculus(fullName);
            case EmployeeDivision.administration:
                return new Administrator(fullName);
            case EmployeeDivision.IT:
                return new Programmer (fullName);
        }
    }
} 