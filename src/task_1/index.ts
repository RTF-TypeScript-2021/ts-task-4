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
    public leader: IManageEmployee = null;
    constructor(public name: string, public division: EmployeeDivision){}
    public abstract getAuthority(): string;
}

export abstract class ManageEmployee extends BaseEmployee implements IManageEmployee {
    public subordinates: Map<EmployeeDivision, Array<BaseEmployee>> = new Map();
    constructor(name: string, division: EmployeeDivision) {
        super(name, division);
    }
    public addSubordinate(person: BaseEmployee) {
        const tmpEmployees:Array<BaseEmployee> = this.subordinates.get(person.division);
        if(!tmpEmployees){
            this.subordinates.set(person.division, [person]);
            person.leader = this;
            //throw new Error("This division is not in subordinate");
        } else if (tmpEmployees.includes(person)){
            throw new Error("this employee is already in a subordinate")
        } else {
            this.subordinates.get(person.division).push(person);
            person.leader = this;
        }
    }

    public getSubordinates(flatOutput = false): Array<BaseEmployee> | Map<EmployeeDivision, Array<BaseEmployee>> {
        if (flatOutput === false) {
            return this.subordinates;
        } else {
            let tmpArr: Array<BaseEmployee> = [];
            this.subordinates.forEach((employers: Array<BaseEmployee>) => {
                tmpArr = tmpArr.concat(employers);
            })

            return tmpArr;
        }
    }

    public removeSubordinate(person: BaseEmployee) {
        const tmpEmployees:Array<BaseEmployee> = this.subordinates.get(person.division);
        if(!tmpEmployees){
            throw new Error("This division is not in subordinate");
        } 
        if (tmpEmployees.includes(person)){
            this.subordinates.set(person.division, tmpEmployees.filter(
                (employee:BaseEmployee) => employee !== person
            ))
        } else {
            throw new Error("Еhis employee is not found in the subordinate")
        }
    }
}


export interface IManageEmployee {
    leader: IManageEmployee | null; 
    name: string; 
    division: EmployeeDivision; 
    subordinates: Map<EmployeeDivision, Array<BaseEmployee>>;
    getAuthority: ()=>string;
    getSubordinates(flatOutput?:boolean): Array<BaseEmployee> | Map<EmployeeDivision, Array<BaseEmployee>>;
    addSubordinate(person: BaseEmployee): void;
    removeSubordinate(person: BaseEmployee): void;
}