/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */
import {AdministrationFabric, CalculusFabric, IFabric, ITFabric, ManagementFabric} from "../task_3";
import {ManageEmployee} from "../task_2";
import {BaseEmployee} from "../task_1";

const makeWorker = (fabric: IFabric, name: string) => fabric.createInstance(name);
const addSubordinatesToManager = (manager: ManageEmployee, subordinates: BaseEmployee[]): void =>
    subordinates.forEach(x => manager.addSubordinate(x));

const director = makeWorker(new ManagementFabric(), "Макар") as ManageEmployee;
const administrator = makeWorker(new AdministrationFabric(), "Ярослав") as ManageEmployee;
const firstProgrammer = makeWorker(new ITFabric(), "Арсений");
const secondProgrammer = makeWorker(new ITFabric(), "Александр");
const calculusSpecialist = makeWorker(new CalculusFabric(), "Жанна");

addSubordinatesToManager(director, [firstProgrammer, secondProgrammer, calculusSpecialist, administrator]);
addSubordinatesToManager(administrator, [firstProgrammer, secondProgrammer, calculusSpecialist]);
