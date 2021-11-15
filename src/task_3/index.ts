/** Задача 3 - Да кто эта ваща фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Игорь') вернет IT'ника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
*/

import {BaseEmployee, IBaseEmployee, IManageEmployee} from "../task_1/index.js";
import {EmployeeDivision} from "../empoyee-separate.enum";
import { AdministrationEmployee, CalculusEmployee, ITEmployee, ManageEmployee, ManagementEmployee } from "../task_2";

interface AbstructEmployeeFactory{
    createInstance(name: string, employeeDivision: EmployeeDivision): IBaseEmployee;
}

export class BaseEmployeeFactory implements AbstructEmployeeFactory {
    public createInstance(name: string, employeeDivision: EmployeeDivision): BaseEmployee {
        switch (employeeDivision) {
            case EmployeeDivision.IT:
                return new ITEmployee(name);
            case EmployeeDivision.calculus:
                return new CalculusEmployee(name);
        }
    }
}

export class ManageEmployeeFactory implements AbstructEmployeeFactory{
    public createInstance(name: string, employeeDivision: EmployeeDivision):ManageEmployee{
        switch (employeeDivision){
            case EmployeeDivision.management:
                return new ManagementEmployee(name);
            case EmployeeDivision.administration:
                return new AdministrationEmployee(name);
        }
    }
}
