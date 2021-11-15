/** Задача 3 - Да кто эта ваша фабрика
 *
 * Реализуйте фабрику сотрудников.
 * По типу отдела работника, фабрика отдает экземпляр класса данного отдела
 * Например: EmployeeFabric.createInstance(division.IT, 'Айвазовский Игорь Никитич') вернет IT'ника Игоря.
 * Материалы:
 * https://refactoring.guru/ru/design-patterns/factory-method
 * https://refactoring.guru/ru/design-patterns/abstract-factory
*/

import { EmployeeDivision } from "../empoyee-separate.enum";
import { BaseEmployee } from "../task_1";
import { AdministrationEmployee, CalculussEmployee, ITEmployee, ManageEmployee, ManagementEmployee } from "../task_2";

/*
export abstract class EmployeeFabric {
    protected abstract createEmployee(fullName: string): BaseEmployee;

    createInstanse(fullName: string): BaseEmployee {
        const emploee = this.createEmployee(fullName);
        console.log(`Вы создали человека из департамента ${emploee.department} с именем ${emploee.fullName}`)

        return emploee;
    }
}

export class AdminDepartment extends EmployeeFabric {
    protected createEmployee(fullName: string): BaseEmployee {
        return new AdministrationEmployee(fullName);
    }
}

export class ITDepartment extends EmployeeFabric {
    protected createEmployee(fullName: string): BaseEmployee {
        return new ITEmployee(fullName);
    }
}

export class CalculusDepartment extends EmployeeFabric {
    protected createEmployee(fullName: string): BaseEmployee {
        return new CalculussEmployee(fullName);
    }
}

export class ManagementDepartment extends EmployeeFabric {
    protected createEmployee(fullName: string): BaseEmployee {
        return new ManagementEmployee(fullName);
    }
}
*/


// Я запуталась, помогите...

export class EmployeeFactory {
    /**
     * Создает работнка, который не имеет подчиненных
     */
    static createNotDisposerEmployee(division: EmployeeDivision, fullName: string): BaseEmployee {
        if (division === EmployeeDivision.IT) {
            return new ITDepartment().createNotDisposerEmployee(fullName);
        } else if (division === EmployeeDivision.calculus) {
            return new CalculusDepartment().createNotDisposerEmployee(fullName);
        } else {
            throw Error("Вы ввели отдел, который владеет раб(отник)ами, а не раб(отник)а");
        }
    }
    /**
     * Создает работнка, который имеет подчиненных
     */
    static createDisposerEmployee(division: EmployeeDivision, fullName: string): ManageEmployee {
        if (division === EmployeeDivision.administration) {
            return new AdminDepartment().createDisposerEmployee(fullName);
        } else if (division === EmployeeDivision.management){
            return new ManagementDepartment().createDisposerEmployee(fullName);
        } else {
            throw Error("Вы ввели отдел раб(отник)а, а не владельца раб(отник)ами");
        }
    }
}

export abstract class DisposerFactory {
    protected abstract createDisposer(fullName: string): ManageEmployee;
    
    createDisposerEmployee(fullName: string): ManageEmployee {
        const emploee = this.createDisposer(fullName);
        console.log(`Вы создали управляющего из департамента ${emploee.department} с именем ${emploee.fullName}`)

        return emploee;
    }
}

export class AdminDepartment extends DisposerFactory {
    protected createDisposer(fullName: string): ManageEmployee {
        return new AdministrationEmployee(fullName);
    }
}

export class ManagementDepartment extends DisposerFactory {
    protected createDisposer(fullName: string): ManageEmployee {
        return new ManagementEmployee(fullName);
    }
}

export abstract class NotDisposerFactory {
    protected abstract createNotDisposer(fullName: string): BaseEmployee;

    createNotDisposerEmployee(fullName: string): BaseEmployee {
        const emploee = this.createNotDisposer(fullName);
        console.log(`Вы создали человека из департамента ${emploee.department} с именем ${emploee.fullName}`)

        return emploee;
    }
}

export class ITDepartment extends NotDisposerFactory {
    protected createNotDisposer(fullName: string): BaseEmployee {
        return new ITEmployee(fullName);
    }
}

export class CalculusDepartment extends NotDisposerFactory {
    protected createNotDisposer(fullName: string): BaseEmployee {
        return new CalculussEmployee(fullName);
    }
}
