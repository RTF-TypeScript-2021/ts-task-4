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
import { ITEmployees, AdministrationEmployees, ManagementEmployees, CalculusEmployees } from "../task_2";


export class Factory {
    public addEmployee(division: EmployeeDivision, name: string): BaseEmployee {
        switch (division) {
            case EmployeeDivision.IT:
                return new ITEmployees(name);
            case EmployeeDivision.administration:
                return new AdministrationEmployees(name);
            case EmployeeDivision.management:
                return new ManagementEmployees(name);
            case EmployeeDivision.calculus:
                return new CalculusEmployees(name);
        }
    }
} 