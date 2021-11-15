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
import { WorkerFactory } from "../task_3";

 const armyOfRussia = (factory: WorkerFactory) => {
    const President = factory.createManageInstance(
        EmployeeDivision.administration,
        "Putin"
    );

    const leaders = [];
    leaders[0] = factory.createManageInstance(
        EmployeeDivision.management,
        "Putin v2"
    );
    leaders[1] = factory.createManageInstance(
        EmployeeDivision.management,
        "Putin v3"
    );  

    President.addSubordinate(leaders[0])
    President.addSubordinate(leaders[1])
    
    const calculus = factory.createBaseInstance(
        EmployeeDivision.calculus,
        "Putin Calc"
    )

    const atacker = factory.createBaseInstance(
        EmployeeDivision.IT,
        "Putin ATACKER"
    )

    leaders[0].addSubordinate(calculus);
    leaders[1].addSubordinate(atacker);

    console.log(President.getSubordinates());
    console.log(leaders[0].getSubordinates());
    console.log(leaders[1].getSubordinates());
};

armyOfRussia(new WorkerFactory());