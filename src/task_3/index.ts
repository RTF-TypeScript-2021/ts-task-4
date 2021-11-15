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
import { Administrator, CalculusEmployee, ITEmploee, ManageEmployee } from "../task_2";

export class HoodFactory{
    static createBasicGangstaWorker(department: EmployeeDivision, fullname: string) {
        if(department === EmployeeDivision.IT){
            return new ITEmploee(fullname);
        }

        if(department === EmployeeDivision.calculus){
            return new CalculusEmployee(fullname);
        }
    }

    static createManageGangstaWorker(department: EmployeeDivision, fullname: string){
        if(department === EmployeeDivision.management){
            return new ManageEmployee(fullname);
        }

        if(department === EmployeeDivision.administration){
            return new Administrator(fullname);
        }
    }
}
