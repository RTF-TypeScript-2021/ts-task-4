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
import { IManageEmployee, BaseEmployee } from "../task_1";
import {Administrator, Calculus,IT, Manager} from "../task_2";


export interface IEmployeeFactory {
    createManageInstance: (departure: EmployeeDivision.management | EmployeeDivision.administration, fullName: string) => IManageEmployee;
    createBaseInstance: (departure: EmployeeDivision.IT | EmployeeDivision.calculus, fullName: string) => BaseEmployee;
}

export class WorkerFactory implements IEmployeeFactory {
    public createManageInstance(departure: EmployeeDivision.management | EmployeeDivision.administration, fullName: string): IManageEmployee {
        if (departure === EmployeeDivision.management) {
            return new Manager(fullName);
        } else if (departure === EmployeeDivision.administration) { 
            return new Administrator(fullName);
        } 

        throw new Error("Ошибка")
    }

    public createBaseInstance(departure: EmployeeDivision.IT | EmployeeDivision.calculus, fullName: string): BaseEmployee {
        if (departure === EmployeeDivision.calculus) {
            return new Calculus(fullName);
        } else if (departure === EmployeeDivision.IT) { 
            return new IT(fullName);
        } 

        throw new Error("Ошибка")
    }
}