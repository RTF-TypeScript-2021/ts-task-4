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

export interface IBaseEmployee {
    fullName: string;
    department: EmployeeDivision;

    getAuthority(): void;
}


export abstract class ManageEmployee implements IBaseEmployee{
    subordinates: Map<EmployeeDivision, Set<IBaseEmployee>>;

    fullName: string;
    department: EmployeeDivision;
    canSubordinate: boolean;

    getAuthority() {
        console.log("ManageEmployee authorities");
    }


    addSubordinate(person: IBaseEmployee): void {
        if (this.subordinates.has(person.department)) {
            const departmentSubordinates = this.subordinates.get(person.department);
            if (departmentSubordinates.has(person)) {
                throw new Error("person is already subordinated");
            } else {
                departmentSubordinates.add(person);
            }
        } else {
            this.subordinates.set(person.department, new Set([person]));
        }
    }

    getSubordinates(flatOutput?: boolean): void {
        if (flatOutput) {
            this.subordinates.forEach( subs => {
                console.log(Array.from(subs).toString());
            })
        } else {
            this.subordinates.forEach( (value, key) => {
                console.log(`${ key }: ${ Array.from(value).toString() }`);
            })
        }
    }

    removeSubordinate(person: IBaseEmployee): void {
        if (this.subordinates.has(person.department)) {
            const departmentSubordinates = this.subordinates.get(person.department);
            if (departmentSubordinates.has(person)) {
                throw new Error("person is already subordinated");
            } else {
                departmentSubordinates.delete(person);
            }
        }
    }
}
