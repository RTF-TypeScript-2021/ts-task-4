/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */
import {EmployeeDivision} from "../empoyee-separate.enum";
import {EmployeeFabric} from "../task_3";
import {AdministrationEmployee, CalculusEmployee, ITEmployee, ManagmentEmployee} from "../task_2";

class MyDefence {
    static Administration: Array<AdministrationEmployee> = [];
    static Management: Array<ManagmentEmployee> = [];
    static Calculus: Array<CalculusEmployee> = [];
    static IT: Array<ITEmployee> = [];

    static newEmployee(name: string, division: EmployeeDivision, boss?: string) {
        switch (division) {
            case EmployeeDivision.IT:
               this.IT.push(EmployeeFabric.createWorker(name, EmployeeDivision.IT));
               if(boss) {
                   this.Management.find(x => x.name === boss).addSubordinate(this.IT[this.IT.length - 1]);
               }
               break

            case EmployeeDivision.management:
                this.Management.push(<ManagmentEmployee>EmployeeFabric.createManager(name, EmployeeDivision.management));
                if(boss) {
                    this.Administration.find(x => x.name === boss).addSubordinate(this.Management[this.Management.length - 1]);
                }
                break

            case EmployeeDivision.administration:
                this.Administration.push(<AdministrationEmployee>EmployeeFabric.createManager(name, EmployeeDivision.administration));
                break

            case EmployeeDivision.calculus:
                this.Calculus.push(EmployeeFabric.createWorker(name, EmployeeDivision.calculus));
                if(boss) {
                    this.Management.find(x => x.name === boss).addSubordinate(this.Calculus[this.Calculus.length - 1]);
                }
                break
        }
    }

    static removeBoss(name: string, division: EmployeeDivision, bossName: string) {
        if (division === EmployeeDivision.management) {
            this.Administration.find(x=> x.name === bossName).removeSubordinate(this.Management.find(x=> x.name === name));
        } else if (division === EmployeeDivision.calculus) {
            this.Management.find(x=> x.name === bossName).removeSubordinate(this.Calculus.find(x=> x.name === name));
        } else if (division === EmployeeDivision.IT) {
            this.Management.find(x=> x.name === bossName).removeSubordinate(this.IT.find(x=> x.name === name));
        }
    }
}

MyDefence.newEmployee("Дарт Вейдер", EmployeeDivision.administration);
MyDefence.newEmployee("Вин Дроссель", EmployeeDivision.management, "Дарт Вейдер");
MyDefence.newEmployee("Космический Рейнджер", EmployeeDivision.calculus, "Вин Дроссель");
MyDefence.newEmployee("Зернюков Никита", EmployeeDivision.IT, "Вин Дроссель");

MyDefence.removeBoss("Зернюков Никита", EmployeeDivision.IT, "Вин Дроссель"); //теперь ты свободен (если я не наложал в коде)