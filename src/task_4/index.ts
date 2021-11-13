/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */

import {EmployeeFactory} from "../task_3";
import {EmployeeDivision} from "../empoyee-separate.enum";
import {BaseEmployee, IManageEmployee} from "../task_1";

/**
 * Иерархия: 1 админ -> 3 менеджера (1 -> программисты, 2 -> тестировщики, 3 -> аналитики),
 * бухгалтерия
 *
 * Админ Доминик руководит бухгалтерией
 * Менеджер Симон руководит программистами
 * Менеджер Лука руководит тестировщиками
 * Менеджер Долорес руководит аналитиками
 * Бухгалтерия: Злата, Снежана, Желика.
 * Программисты: Годемир, Мирослав, Богдан
 * Тестировщики: Радомир, Тихомир, Венцеслав
 * Аналитики: Светлана, Весна, Катарина
 * */

const Hierarchy = {
    Programmers: new Array<BaseEmployee>(),
    Testers: new Array<BaseEmployee>(),
    Analysts: new Array<BaseEmployee>(),
    Calculus: new Array<BaseEmployee>(),
    Management: new Array<IManageEmployee>(),
    Administration: EmployeeFactory.createManageEmployee(EmployeeDivision.administration, "Доминик")
};

const programmersName = ["Годемир", "Мирослав", "Богдан"];
const testersName = ["Радомир", "Тихомир", "Венцеслав"];
const analystsName = ["Светлана", "Весна", "Катарина"];
const accountantsName = ["Злата", "Снежана", "Желика"];
const managersName = ["Симон", "Лука", "Долорес"];

const createEmployee = function (i: number) {
    Hierarchy.Programmers.push(EmployeeFactory.createBaseEmployee(
        EmployeeDivision.IT, programmersName[i]));
    Hierarchy.Testers.push(EmployeeFactory.createBaseEmployee(
        EmployeeDivision.IT, testersName[i]));
    Hierarchy.Analysts.push(EmployeeFactory.createBaseEmployee(
        EmployeeDivision.IT, analystsName[i]));
    Hierarchy.Calculus.push(EmployeeFactory.createBaseEmployee(
        EmployeeDivision.calculus, accountantsName[i]));
    Hierarchy.Management.push(EmployeeFactory.createManageEmployee(
        EmployeeDivision.management, managersName[i]));
}

const addSubordinates = function (i: number) {
    Hierarchy.Management[0].addSubordinate(Hierarchy.Programmers[i]);
    Hierarchy.Management[1].addSubordinate(Hierarchy.Testers[i]);
    Hierarchy.Management[2].addSubordinate(Hierarchy.Analysts[i]);
    Hierarchy.Administration.addSubordinate(Hierarchy.Calculus[i]);
}

for (let i = 0; i < 3; i++) {
    createEmployee(i);
    addSubordinates(i);
}
