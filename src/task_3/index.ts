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
import { BaseEmployee } from "../task_1";
import { Administartor, calculusWorker, ITWorker, Manager } from "../task_2";
interface Fabric {
    createInstance(division: EmployeeDivision, name: string): BaseEmployee
}

export class EmployeeFabric implements Fabric {

    private static fabric: EmployeeFabric;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {

    }

    public static createFabric(): EmployeeFabric {
        if(!EmployeeFabric.fabric) {
            EmployeeFabric.fabric = new EmployeeFabric();
        } 

        return EmployeeFabric.fabric;
    }

    public createInstance(division: EmployeeDivision, name: string): BaseEmployee {
        switch(division) {
            case EmployeeDivision.IT:
                return new ITWorker(name);
            case EmployeeDivision.calculus:
                return new calculusWorker(name);
            case EmployeeDivision.management:
                return new Manager(name);
            case EmployeeDivision.administration:
                return new Administartor(name);
            default:
                throw new Error('Неверный тип департамента');
        }
    }
}