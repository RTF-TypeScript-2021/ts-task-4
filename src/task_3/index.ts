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
import { ManagementSpecialist, AdminSpecialist, ITSpecialist, CalculusSpecialist } from "../task_2";


export class Fabric{
    static createManageWorker(department: EmployeeDivision, fullname: string){
        if(department === EmployeeDivision.management){
            return new ManagementSpecialist(fullname);
        }

        if(department === EmployeeDivision.administration){
            return new AdminSpecialist(fullname);
        }
    }

    static createWorker(department: EmployeeDivision, fullname: string) {
        if(department === EmployeeDivision.IT){
            return new ITSpecialist(fullname);
        }

        if(department === EmployeeDivision.calculus){
            return new CalculusSpecialist(fullname);
        }
    }

   
} 
