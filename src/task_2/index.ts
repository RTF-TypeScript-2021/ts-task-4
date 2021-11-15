import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */
export enum ITLevel {
    Junior,
    Middle,
    Senior
}
export class ITWorker extends BaseEmployee {
    private _skillsLevel: ITLevel;
    get skillsLevel() {
        return this._skillsLevel;
    }

    constructor(name: string, skill = ITLevel.Junior) {
        super(name, EmployeeDivision.IT);
        this._skillsLevel = skill;
    }

    public ChangeLvl(newLevel: ITLevel): void {
        if (newLevel === this.skillsLevel) {
            console.log('Сотрудник и так уже имеет данный уровень');

            return;
        }       
        const isBuffed = this.skillsLevel > newLevel? false : true
       
        console.log(`Сотрудник ${this.Name} ${isBuffed? 'повышен' : 'понижен'} до ${ITLevel[newLevel]}`);
        this._skillsLevel = newLevel;
    } 

    public doWork(): void {
        console.log(`${this.Name} поработал(а) и устал(а)`);
    }
}

export class calculusWorker extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.calculus);
    }

    public doWork(): void {
        console.log(`${this.Name} поработал(а) и устал(а)`);
    }
    
    public printDocument(): void {
        console.log(`Сотрудник ${this.Name} получил указание на печать документа`);
    }
}

export abstract class managementWorker extends BaseEmployee implements IManageEmployee {
    public readonly subordinates: Map<EmployeeDivision, Array<BaseEmployee>>;
    private _numberOfSubordinates = 0;
    private static managers = new Array<managementWorker>();
    get numberOfSubordinates() {
        return this._numberOfSubordinates;
    }
    constructor(name: string, department: EmployeeDivision) {
        super(name, department);
        this. subordinates = new Map<EmployeeDivision, Array<BaseEmployee>>();
        managementWorker.managers.push(this);
    }

    public getSubordinates(flatOutput = false): void {
        if (flatOutput) {
            const arr = new Array<BaseEmployee>();
            this.subordinates.forEach(element => {
                for(const e of element) {
                    arr.push(e);
                }
            });
            console.log(arr);

            return;
        }

        console.log(this.subordinates);
    }

    public addSubordinate(person: BaseEmployee): void {
        if (this.Department <= person.Department) {
            console.log('Нельзя добавить в подчинённых сотрудника того же уровня доступа или выше что и он');

            return;
        }
        for (const manager of managementWorker.managers) {
            if (manager !== this) {
                if (manager.hasSubordinate(person)) {
                    console.log(`У управляющего ${manager.Name}(ID ${manager.ID}) уже есть данный сотрудник`);

                    return;
                }
            }
        }
        if (this.subordinates.has(person.Department)) {
            this.subordinates.get(person.Department).push(person);
        } else {
            this.subordinates.set(person.Department, new Array<BaseEmployee>());
            this.subordinates.get(person.Department).push(person);
        }
        console.log(`Сотрудник ${person.Name}(ID ${person.ID}) успешно добавлен в список подчинённых управляющего ${this.Name}(ID ${this.ID})`);
        this._numberOfSubordinates++;
    }

    public removeSubordinate(person: BaseEmployee): void {
        if (!this.subordinates.has(person.Department)) {
            console.log(`Подчинённых у упралящего ${this.Name}(ID ${this.ID}) из департамента ${EmployeeDivision[person.Department]} нету`);

            return;
        }
        const subordinatesOfDepartment = this.subordinates.get(person.Department);
        const foundPerson = this.findWorker(person);
        if (foundPerson) {
            subordinatesOfDepartment.splice(subordinatesOfDepartment.indexOf(foundPerson), 1);
            console.log(`Сотрудник ${foundPerson.Name}(ID ${foundPerson.ID}) успешно удалён из списка подчинённых управляющего ${this.Name}(ID ${this.ID})`);
            this._numberOfSubordinates--;

            return;
        }
        console.log(`Сотрудника ${person.Name}(ID ${person.ID}) нету в списке подчинённых упраляющего ${this.Name}(ID ${this.ID})`);
    }

    private hasSubordinate(person: BaseEmployee): boolean {
        if (this.findWorker(person)) {
            return true;
        }

        return false;
    }

    private findWorker(person: BaseEmployee): BaseEmployee {
        const subordinatesOfDepartment = this.subordinates.get(person.Department);
        if (!subordinatesOfDepartment) {
            return null;
        }
        for (const e of subordinatesOfDepartment) {
            if (e.ID === person.ID) {
                return e;
            }
        }

        return null;
    }
}

export class Manager extends managementWorker {
    constructor(name: string) {
        super(name, EmployeeDivision.management);
    }

    public callAdministration(): void {
        console.log(`Менеджер ${this.Name}(${this.ID}) вызвал администрацию`);
    }
}

export class Administartor extends managementWorker {
    constructor(name: string) {
        super(name, EmployeeDivision.administration);
    }

    public swearOnManager(manager: Manager): void {
        console.log(`Администратор ${this.Name}(ID ${this.ID}) наругал менеджера ${manager.Name}(ID ${manager.ID})`);
    }
}