/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */
import {EmployeeFabric, IEmployeeFactory} from "../task_3";
import {EmployeeDivision} from "../empoyee-separate.enum";


function createCompany(fabric: IEmployeeFactory): void {
    const admin = fabric.createManageEmployee(EmployeeDivision.administration, 'Сашка');
    const manager1 = fabric.createManageEmployee(EmployeeDivision.management, 'Маша');
    const manager2 = fabric.createManageEmployee(EmployeeDivision.management, 'Катя');
    const calculus1 = fabric.createStandardEmployee(EmployeeDivision.calculus, 'Артем');
    const calculus2 = fabric.createStandardEmployee(EmployeeDivision.calculus, 'Пётр');
    const calculus3 = fabric.createStandardEmployee(EmployeeDivision.calculus, 'Настя');
    const it1 = fabric.createStandardEmployee(EmployeeDivision.IT, 'Андрей');
    const it2 = fabric.createStandardEmployee(EmployeeDivision.IT, 'Анна');
    const it3 = fabric.createStandardEmployee(EmployeeDivision.IT, 'Сергей');
    const it4 = fabric.createStandardEmployee(EmployeeDivision.IT, 'Антон');
    const managers = [admin, manager1, manager2];
    const employees = [calculus1, calculus2, calculus3, it1, it2, it3, it4];
    for (let i = 0; i < managers.length; i++) {
        for (let j = i + 1; j < managers.length; j++) {
            managers[i].addSubordinate(managers[j]);
        }
        for (let j = 0; j < employees.length; j++) {
            managers[i].addSubordinate(employees[j]);
        }
    }
}


createCompany(new EmployeeFabric())