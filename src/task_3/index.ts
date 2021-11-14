import { EmployeeDivision } from "../empoyee-separate.enum";
import {Employee} from "../task_1";
import {AdministrationEmployee, CalculusEmployee, ItEmployee, ManagementEmployee} from "../task_2";
/** Задача 3 - Да кто эта ваща фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Игорь') вернет IT'ника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
*/

export abstract class EmployeeFabric{
    static createInstance(division: EmployeeDivision, name: string): Employee{
        if(!name || division < 0 || division > 3){
            throw "Invalid name or division";
        }

        if (division === EmployeeDivision.IT){
            return ItEmployeeFabric.getEmployee(name);
        } else if (division === EmployeeDivision.calculus) {
            return CalculusEmployeeFabric.getEmployee(name);
        } else if (division === EmployeeDivision.management) {
            return ManagementEmployeeFabric.getEmployee(name);
        } else if (division === EmployeeDivision.administration){
            return AdministrationEmployeeFabric.getEmployee(name);
        }
    }
}

class ItEmployeeFabric{
     static getEmployee(name: string) {
         return new ItEmployee(name);
     }
}

abstract class CalculusEmployeeFabric{
    static getEmployee(name: string) {
        return new CalculusEmployee(name);
    }
}

abstract class ManagementEmployeeFabric{
    static getEmployee(name: string) {
        return new ManagementEmployee(name);
    }
}

abstract class AdministrationEmployeeFabric{
    static getEmployee(name: string) {
        return new AdministrationEmployee(name);
    }
}