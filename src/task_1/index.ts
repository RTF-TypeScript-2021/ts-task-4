/**
 * Задание 1 - директор тоже работник
 * Изучите enum EmployeeDivision.
 * Напишите базовый класс BaseEmployee описывающий базовое наполнение сущности работника
 * У работника точно есть следущие поля:
 * 1. Полное имя, тип string,
 * 2. Департамент в котором работает сотрудник, тип EmployeeDivision(см. в enum)
 * Также сущность работника должна содержать метод:
 * 1. getAuthority() - выводит в консоль полномочия сотрудника.
 *
 * Не каждый работник может управлять людьми(Иметь подчиненных)
 * Определите интерфейс IManageEmployee
 * Интерфейс описывает сущность как сотрудника, который может управлять подчиненными
 * Интерфейс должен определять следущие методы:
 * 1. getSubordinates(flatOutput?: boolean)  !Вывод в консоль
 *    Если flatOutput = false - отдает массив, где ключ - департамент, а значение - массив подиненных.
 *    Иначе - отдает массив подиненных
 * 2. addSubordinate(person: BaseEmployee) добавляет сотрудника в список подчиненных
 * 3. removeSubordinate(person: BaseEmployee) удаляет сотрудника из списка
 * Интерфейс определяет следущее поле:
 * 1. subordinates - массив, где ключ - департамент, а значение - массив сотрудников.
 *
 *
 *
 */
import {EmployeeDivision} from "../empoyee-separate.enum";

export abstract class BaseEmployee {
    private readonly _name: string;
    private readonly _department: EmployeeDivision;
    private readonly _authorities: Authority[];

    protected constructor(name: string, department: EmployeeDivision, authorities: Authority[]) {
        if (!name || !authorities) {
            throw new Error();
        }

        this._name = name;
        this._department = department
        this._authorities = authorities;
    }

    public get name(): string {
        return this._name;
    }

    public get department(): EmployeeDivision {
        return this._department;
    }

    public getAuthority = (): void => console.log(this._authorities);
}

export enum Authority {
    KickOutFromWork,
    Recruit,
    ChangeSalary,
    PassageToARoom,
    PassageToBRoom,
    PassageToCRoom,
    PassageToAllRooms
}

export interface IManageEmployee {
    subordinates: Map<EmployeeDivision, BaseEmployee[]>;

    getSubordinates(flatOutput?: boolean): void;

    addSubordinate(person: BaseEmployee): boolean;

    removeSubordinate(person: BaseEmployee): boolean;
}
