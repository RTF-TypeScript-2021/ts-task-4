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
import { BaseEmployee, IManageEmployee } from "../task_1";
import { AdministrationEmployee, ITEmployee, ManagementEmployee, CalculusEmployee } from "../task_2";

export class EmployeeFabric implements IEmployeeFabric{
    /*Если будем опираться только на division, то не сможем в будущем создать класс Teamlead, который бы смог
    быть в IT отделе и управлять людьми. Теперь достаточно вызвать createManageInstance(divicion.IT, Neo)*/

    //UPD: подозрение, что перемудрил
    createManageInstance(division:EmployeeDivision, name:string): IManageEmployee{
        return ManagerEmployeeFabric.createEmployee(division, name);
    }
    createBaseInstance(division:EmployeeDivision, name:string): BaseEmployee{
        return BaseEmployeeFabric.createEmployee(division, name);
    }
}

class ManagerEmployeeFabric{
    static createEmployee(division:EmployeeDivision, name:string):IManageEmployee{
        switch(division){
            case EmployeeDivision.management:
                return ManagerEmployeeFabric.createManagementEmployee(name);
            case EmployeeDivision.administration:
                return ManagerEmployeeFabric.createAdministrationEmployee(name);
            default:
                throw new Error(`There is no implementation of a managing employee for the ${EmployeeDivision[division]} department`);
        }
    }
    static createManagementEmployee(name:string):IManageEmployee{
        return new ManagementEmployee(name);
    }
    static createAdministrationEmployee(name:string):IManageEmployee{
        return new AdministrationEmployee(name);
    }
}

class BaseEmployeeFabric{
    static createEmployee(division:EmployeeDivision, name:string):BaseEmployee{
        switch(division){
            case EmployeeDivision.IT:
                return BaseEmployeeFabric.createITEmployee(name);
            case EmployeeDivision.calculus:
                return BaseEmployeeFabric.createCalculusEmployee(name);
            default:
                throw new Error(`There is no implementation of a base employee for the ${division} department`);
        }
    }
    static createITEmployee(name: string): ITEmployee{
        return new ITEmployee(name);
    }
    static createCalculusEmployee(name: string): CalculusEmployee{
        return new CalculusEmployee(name);
    }
}


export interface IEmployeeFabric{
    createManageInstance(division:EmployeeDivision, name:string): IManageEmployee;
    createBaseInstance (division:EmployeeDivision, name:string): BaseEmployee;
}
