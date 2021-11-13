/** Задача 3 - Да кто эта ваша фабрика
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
import {Accountant, Admin, ITSpecialist, Manager} from "../task_2";


abstract class AbstractEmployeeFactory {
    static createBaseEmployee = (department: EmployeeDivision.IT
        | EmployeeDivision.calculus, name: string): BaseEmployee => {
        return undefined;
    };

    static createManageEmployee = (department: EmployeeDivision, name: string):
        IManageEmployee => {
        return undefined;
    };
}

export class EmployeeFactory extends AbstractEmployeeFactory {
    public static createBaseEmployee(department: EmployeeDivision.IT
        | EmployeeDivision.calculus, name: string): BaseEmployee {
        return department === EmployeeDivision.IT ? new ITSpecialist(name) : new Accountant(name);
    }

    public static createManageEmployee(department: EmployeeDivision.management
        | EmployeeDivision.administration, name: string): IManageEmployee {
        return department === EmployeeDivision.management ? new Manager(name) : new Admin(name);
    }
}