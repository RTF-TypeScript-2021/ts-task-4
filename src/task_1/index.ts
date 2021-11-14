import {EmployeeDivision} from "../empoyee-separate.enum";

/**
 * Задание 1 - директор тоже работник
 * Изучите enum EmployeeDivision.
 * Напишите базовый класс BaseEmployee описывающий базовое наполнение сущности работника
 * У работника точно есть следующие поля:
 * 1. Полное имя, тип string,
 * 2. Департамент в котором работает сотрудник, тип EmployeeDivision(см. в enum)
 * Также сущность работника должна содержать метод:
 * 1. getAuthority() - выводит в консоль полномочия сотрудника.
 *
 * Не каждый работник может управлять людьми(Иметь подчиненных)
 * Определите интерфейс IManageEmployee
 * Интерфейс описывает сущность как сотрудника, который может управлять подчиненными
 * Интерфейс должен определять следующие методы:
 * 1. getSubordinates(flatOutput?: boolean)  !Вывод в консоль
 *    Если flatOutput = false - отдает массив, где ключ - департамент, а значение - массив подчиненных.
 *    Иначе - отдает массив подчиненных
 * 2. addSubordinate(person: BaseEmployee) добавляет сотрудника в список подчиненных
 * 3. removeSubordinate(person: BaseEmployee) удаляет сотрудника из списка
 * Интерфейс определяет следующее поле:
 * 1. subordinates - массив, где ключ - департамент, а значение - массив сотрудников.
 *
 *
 *
 */
export type employeesInDivision = Map<EmployeeDivision, BaseEmployee[]>;

export abstract class BaseEmployee {
    protected _fullName: string;
    protected _department: EmployeeDivision;

    protected constructor(fullName: string, department: EmployeeDivision) {
        this._fullName = fullName;
        this._department = department;
    }

    get fullName() {
        return this._fullName;
    }

    get department() {
        return this._department;
    }

    getAuthority(): string {
        return `Name: ${this.fullName}; Department: ${this.department}`
    }
}

export interface IManageEmployee {
    subordinates: employeesInDivision;

    getSubordinates(flatOutput?: boolean): employeesInDivision | BaseEmployee[];

    addSubordinate(person: BaseEmployee): void;

    removeSubordinate(person: BaseEmployee): void;
}
