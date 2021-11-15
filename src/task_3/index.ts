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
import { BaseEmployee} from "../task_1";
import { ITEmployee, CalculusEmployee, ManagementEmployee, AdministrationEmployee, IManageEmployesSub} from "../task_2";

/*class EmployeeFabric{
    createInstance(fullName: string, departament: EmployeeDivision){
        if(departament === EmployeeDivision.IT){
            return new ITEmployee(fullName);
        } else if(departament === EmployeeDivision.management){
            return new ManagementEmployee(fullName);
        } else if(departament === EmployeeDivision.calculus){
            return new CalculusEmployee(fullName);
        } else if(departament === EmployeeDivision.administration){
            return new AdministrationEmployee(fullName);
        }
    }
}

const ff = new EmployeeFabric();
let g = ff.createInstance("gg,", EmployeeDivision.management)
*/


interface EmployeeFabric {

   createInstance(fullName: string, departament: EmployeeDivision): BaseEmployee | IManageEmployesSub;
}

export class ManadgerType implements EmployeeFabric{

    public createInstance(fullName: string, departament: EmployeeDivision): IManageEmployesSub{
        if(departament === EmployeeDivision.management ||  EmployeeDivision.administration){
            return departament === EmployeeDivision.management ? new ManagementEmployee(fullName) : new AdministrationEmployee(fullName);
        } else{
            throw Error('Этот департамент не имеет подчиненных, попробуйте создать NotManadgerType');
        }
    }
}


export class NotManadgerType implements EmployeeFabric{
    public createInstance(fullName: string, departament: EmployeeDivision): BaseEmployee{
        if(departament === EmployeeDivision.calculus ||  EmployeeDivision.IT){
            return departament === EmployeeDivision.calculus ? new CalculusEmployee(fullName) : new ITEmployee(fullName);
        } else{
            throw Error('Этот департамент имеет подчиненных, попробуйте создать ManadgerType');
        }
    }
}

const Dima= new ManadgerType();
const fff=Dima.createInstance('Dima', EmployeeDivision.management);

const Ksusha = new NotManadgerType();
const ddd = Ksusha.createInstance("KK", EmployeeDivision.calculus);

