/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */

import {ManageEmployee} from "../task_2";
import {BaseEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";
import {Fabric} from "../task_3";

const addSubordinatesToManager = (manager: ManageEmployee, subordinates: BaseEmployee[]): void =>
    subordinates.forEach(x => manager.addSubordinate(x));

const fabric = new Fabric();

const director = fabric.createManageInstance("Макар", EmployeeDivision.management);
const administrator = fabric.createManageInstance("Ярослав", EmployeeDivision.administration);
const firstProgrammer = fabric.createBaseInstance("Арсений", EmployeeDivision.IT);
const secondProgrammer = fabric.createBaseInstance("Александр", EmployeeDivision.IT);
const calculusSpecialist = fabric.createBaseInstance("Жанна", EmployeeDivision.calculus);

addSubordinatesToManager(director, [firstProgrammer, secondProgrammer, calculusSpecialist, administrator]);
addSubordinatesToManager(administrator, [firstProgrammer, secondProgrammer, calculusSpecialist]);
