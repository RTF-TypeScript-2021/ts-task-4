/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */

import { EmployeeDivision } from "../empoyee-separate.enum";
import { BaseEmployee } from "../task_1";
import { ITEmployee, ManagmentEmployee } from "../task_2";
import { EmployeeFactory } from "../task_3";

const factory = new EmployeeFactory();

//работники IT-отдела
const ITWorkers = [
    factory.create(EmployeeDivision.IT, 'Vasiliy'),
    factory.create(EmployeeDivision.IT, 'Petr'),
    factory.create(EmployeeDivision.IT, 'Ivan'),
    factory.create(EmployeeDivision.IT, 'Sergey'),
    factory.create(EmployeeDivision.IT, 'Elena'),
    factory.create(EmployeeDivision.IT, 'Alexandr'),
]

//работники бухгалтерии
const calculusWorkers = [
    factory.create(EmployeeDivision.calculus, 'Natalia'),
    factory.create(EmployeeDivision.calculus, 'Stepan'),
    factory.create(EmployeeDivision.calculus, 'Igor'),
    factory.create(EmployeeDivision.calculus, 'Olga'),
    factory.create(EmployeeDivision.calculus, 'Oleg')
]

//менеджер IT-отдела
const ITManager = <ManagmentEmployee>factory.create(EmployeeDivision.management, 'Vadim');
ITWorkers.forEach(x => {
    ITManager.addSubordinate(x);
});

//менеджер бухгалтерии
const calculusManager = <ManagmentEmployee>factory.create(EmployeeDivision.management, 'Arthur');
calculusWorkers.forEach(x => {
    calculusManager.addSubordinate(x);
})

//босс
const boss = <ManagmentEmployee>factory.create(EmployeeDivision.management, 'Leonid');
boss.addSubordinate(ITManager);
boss.addSubordinate(calculusManager);