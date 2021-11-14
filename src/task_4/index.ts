/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */
import {EmployeeFabric} from "../task_3";
import {EmployeeDivision} from "../empoyee-separate.enum";

const victor = EmployeeFabric.createManageEmployee(EmployeeDivision.administration, "Victor");
const olga = EmployeeFabric.createManageEmployee(EmployeeDivision.management, "Olga");
victor.addSubordinate(olga);
const oleg = EmployeeFabric.createManageEmployee(EmployeeDivision.management, "Oleg")
victor.addSubordinate(oleg);
oleg.addSubordinate(EmployeeFabric.createEmployee(EmployeeDivision.IT, "Dmitriy"));
olga.addSubordinate(EmployeeFabric.createEmployee(EmployeeDivision.calculus, "Anastasia"));

