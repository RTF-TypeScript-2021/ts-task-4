/** Задача 3 - Да кто эта ваща фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Игорь') вернет IT'ника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
 */
import {
  BaseEmployeeDivision,
  EmployeeDivision,
  ManageEmployeeDivision,
} from "../empoyee-separate.enum";
import {
  AdministrationEmployee,
  CalculusEmployee,
  ITEmployee,
  ManagementEmployee,
} from "../task_2";
import { IBaseEmployee, IManageEmployee } from "../task_1";

export interface IEmployeeFactory {
  createManageInstance: (
    departure: ManageEmployeeDivision,
    fullName: string
  ) => IManageEmployee;
  createBaseInstance: (
    departure: BaseEmployeeDivision,
    fullName: string
  ) => IBaseEmployee;
}

export class EmployeeFactory implements IEmployeeFactory {
  public createManageInstance = (
    departure: ManageEmployeeDivision,
    fullName: string
  ): IManageEmployee => {
    if (departure === EmployeeDivision.management) {
      return new ManagementEmployee(fullName);
    }

    return new AdministrationEmployee(fullName);
  };

  public createBaseInstance = (
    departure: BaseEmployeeDivision,
    fullName: string
  ): IBaseEmployee => {
    if (departure === EmployeeDivision.IT) {
      return new ITEmployee(fullName);
    }

    return new CalculusEmployee(fullName);
  };
}
