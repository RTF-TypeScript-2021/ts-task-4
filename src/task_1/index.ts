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
    public readonly ID: number;
    public readonly Name: string;
    protected _department: EmployeeDivision;
    private static lastId = 0;

    get Department(): EmployeeDivision {
        return this._department;
    } 
    constructor(name: string, department: EmployeeDivision) {
        BaseEmployee.lastId++;
        this.Name = name;
        this._department = department;
        this.ID = BaseEmployee.lastId;
    }
    public getAuthority() : void {
        switch(this.Department) {
            case EmployeeDivision.IT: 
                console.log('Работник IT, не имеет особых полномочий');
                break;
            case EmployeeDivision.calculus:
                console.log('Работник Бухгалтерии, не имеет особых полномочий');
                break;
            case EmployeeDivision.management:
                console.log('Управляющий, имеет подчинённых');
                break;
            case EmployeeDivision.administration:
                console.log('Администратор, имеет подчинённых');
        }
    }
}

export interface IManageEmployee {
    subordinates: Map<EmployeeDivision, Array<BaseEmployee>>,
    getSubordinates(flatOutput?: boolean): void,
    addSubordinate(person: BaseEmployee): void,
    removeSubordinate(person: BaseEmployee): void
}