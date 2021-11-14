/** Задача 3 - Да кто эта ваща фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Игорь') вернет IT'ника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
*/
import {IBaseEmployee, ManageEmployee} from "../task_1";
import {AdministrationEmployee, CalculusEmployee, ITEmployee, ManagementEmployee} from "../task_2"
import {EmployeeDivision} from "../empoyee-separate.enum";

export class EmployeeFabric {

    static createEmployee(dep: EmployeeDivision, name: string) {
        switch (dep) {
            case EmployeeDivision.IT:
                return new ITEmployee(name);

            case EmployeeDivision.calculus:
                return new CalculusEmployee(name);
        }

        throw new Error("Incorrect department for employee");
    }

    static createManageEmployee(dep: EmployeeDivision, name:string) {
        switch(dep) {
            case EmployeeDivision.management:
                return new ManagementEmployee(name);
            case EmployeeDivision.administration:
                return new AdministrationEmployee(name);
        }
    }
}

