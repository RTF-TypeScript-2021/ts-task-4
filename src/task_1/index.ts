import { EmployeeDivision } from "../empoyee-separate.enum";

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

export abstract class BaseEmployee {
    readonly fullName: string;
    readonly department: EmployeeDivision;

    constructor(fullName: string, department: EmployeeDivision) {
        this.fullName = fullName;
        this.department = department;
    }

    getAuthority(): void {
        if (this.department === EmployeeDivision.IT || this.department === EmployeeDivision.calculus) {
            console.log(`${this.fullName} не имеет подчиненных`);
        } else {
            console.log(`${this.fullName} имеет подчиненных`);
        }
    }
}

export interface IManageEmployee {
    subordinates: BaseEmployee[][];
    getSubordinates(flatOutput?: boolean): void;
    addSubordinate(person: BaseEmployee): void;
    removeSubordinate(person: BaseEmployee): void;
}