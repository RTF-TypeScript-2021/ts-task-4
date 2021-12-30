/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */
import {WorkerFactory} from "../task_3";
import {EmployeeDivision} from "../empoyee-separate.enum";

const jediCouncil = (factory: WorkerFactory) => {
    const magisterJedi = factory.makeManageWorker(EmployeeDivision.administration, "Yoda");
    const jedi = [];
    const padawans = [];
    const younglings = [];
    jedi[0] = factory.makeManageWorker(EmployeeDivision.management, "Obi-wan Kenobi");
    jedi[1] = factory.makeManageWorker(EmployeeDivision.management, "Anakin Skywalker");
    padawans[0] = factory.makeBaseWorker(EmployeeDivision.calculus, "Ahsoka Tano");
    padawans[1] = factory.makeBaseWorker(EmployeeDivision.calculus, "Luke Skywalker");
    younglings[0] = factory.makeBaseWorker(EmployeeDivision.IT, "Ashla");
    younglings[1] = factory.makeBaseWorker(EmployeeDivision.IT, "Katooni");
    magisterJedi.addSubordinate(jedi[0]);
    magisterJedi.addSubordinate(jedi[1]);
    jedi[0].addSubordinate(padawans[0]);
    jedi[1].addSubordinate(padawans[1]);
    jedi[0].addSubordinate(younglings[0]);
    jedi[1].addSubordinate(younglings[1]);
    magisterJedi.getSubordinates();
    jedi[1].getSubordinates();
};

jediCouncil(new WorkerFactory());