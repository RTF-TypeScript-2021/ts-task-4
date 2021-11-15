import { EmployeeDivision } from "../empoyee-separate.enum";
import { BaseEmployee } from "../task_1";
import { ManagerEmployee, ITEmployee, ManagementEmployee, AdministrationEmployee, CalculusEmployee} from "../task_2";

export abstract class EmployeeFabric {
    public static readonly divisionAuthoritys: Record<EmployeeDivision, string> = {
        [EmployeeDivision.IT]: 'Works in the IT department',
        [EmployeeDivision.calculus]: 'Works in the Calculus department',
        [EmployeeDivision.management]: 'Works in the Management department, has subordinates',
        [EmployeeDivision.administration]: 'Works as Administrator, has subordinates'
    }

    public static createInstance(name: string, divison: EmployeeDivision): BaseEmployee | ManagerEmployee {
        switch (divison) {
            case (EmployeeDivision.IT):
                return new ITEmployee(name, divison);
            case (EmployeeDivision.calculus):
                return new CalculusEmployee(name, divison);
            case (EmployeeDivision.management):
                return new ManagementEmployee(name, divison, new Map<EmployeeDivision, BaseEmployee[]>());
            case (EmployeeDivision.administration):
                return new AdministrationEmployee(name, divison, new Map<EmployeeDivision, BaseEmployee[]>());
        }
    }
}