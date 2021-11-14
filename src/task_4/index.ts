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
import { Fabric } from "../task_3";

const misha = Fabric.createManageWorker(EmployeeDivision.administration, "Mikhail");
const nikita = Fabric.createManageWorker(EmployeeDivision.management, "Nikita");
const vasya = Fabric.createWorker(EmployeeDivision.IT, "Vasiliy");
const gera = Fabric.createWorker(EmployeeDivision.IT, "George");
const seva = Fabric.createWorker(EmployeeDivision.calculus, "Vsevolod");

/**
 * Я думаю можно увидить, что рабочие похожи на преподователей и студентов Урфу.
 * ЛЮБЫЕ СОВПАДЕНИЯ ЯВЛЯЮТСЯ СЛУЧАЙНЫМИ!!!
 * ВСЕ ЭТИ ЛЮДИ - ПЛОД МОЕГО ВООБРАЖЕНИЯ!!!
 * ВСЕ ОНИ РАБОТНИКИ ООО "Моя оборона"!!!
 * 
 * Иерархия:
 * Админ
 * Менеджер
 * Айтишник, Бухгалтер(или кто он там)
 */
// Добавим в подчинение рабочих

misha.addSubordinate(nikita);
nikita.addSubordinate(vasya);
nikita.addSubordinate(gera);
nikita.addSubordinate(seva);
