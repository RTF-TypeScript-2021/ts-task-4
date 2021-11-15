/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */

import {Worker, IEmployeeFactory} from "../task_3";
import {EmployeeDivision} from "../empoyee-separate.enum";

function createCompany(fabric: IEmployeeFactory): void {
    const admin = fabric.makeManageWorker(EmployeeDivision.administration, 'Паша');
    const managerFirst = fabric.makeManageWorker(EmployeeDivision.management, 'Ксюша');
    const managerSecond = fabric.makeManageWorker(EmployeeDivision.management, 'Кирилл');
    const calculusFirst = fabric.makeBaseWorker(EmployeeDivision.calculus, 'Олеся');
    const calculusSecond = fabric.makeBaseWorker(EmployeeDivision.calculus, 'Егор');
    const calculusThird = fabric.makeBaseWorker(EmployeeDivision.calculus, 'Кристина');
    const itFirst = fabric.makeBaseWorker(EmployeeDivision.IT, 'Маша');
    const itSecond = fabric.makeBaseWorker(EmployeeDivision.IT, 'Андрей');
    const itThird = fabric.makeBaseWorker(EmployeeDivision.IT, 'Степан');
    const itFourth = fabric.makeBaseWorker(EmployeeDivision.IT, 'Софья');
    const managers = [admin, managerFirst, managerSecond];
    const employees = [calculusFirst, calculusSecond, calculusThird, itFirst, itSecond, itThird, itFourth];
    for (let i = 0; i < managers.length; i++) {
        for (let j = i + 1; j < managers.length; j++) {
            managers[i].addSubordinate(managers[j]);
        }
        for (let j = 0; j < employees.length; j++) {
            managers[i].addSubordinate(employees[j]);
        }
    }
}

createCompany(new Worker()) 