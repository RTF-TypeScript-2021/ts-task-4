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
import {ManageEmployee} from "../task_2";
import {EmployeeFabric} from "../task_3";

const admin = EmployeeFabric.createEmployee("Владимир", EmployeeDivision.administration) as ManageEmployee;
const manager = EmployeeFabric.createEmployee("Виктор", EmployeeDivision.management) as ManageEmployee;
const itSpecialist = EmployeeFabric.createEmployee("Владислав", EmployeeDivision.IT);
const calculusSpecialist = EmployeeFabric.createEmployee("Вячеслав", EmployeeDivision.calculus);

admin.addSubordinate(manager);
manager.addSubordinate(itSpecialist);
manager.addSubordinate(calculusSpecialist);
