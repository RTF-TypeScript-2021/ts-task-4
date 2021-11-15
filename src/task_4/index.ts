/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */

import { HoodFactory, } from "../task_3";
import { EmployeeDivision } from "../empoyee-separate.enum";
 
const BIG_CEO = HoodFactory.createManageGangstaWorker(EmployeeDivision.administration, "Mikhail");

const Snoop_Manager = HoodFactory.createManageGangstaWorker(EmployeeDivision.management, "YoungNikit1n");

BIG_CEO.addSubordinate(Snoop_Manager);

const Pr0grammer = HoodFactory.createBasicGangstaWorker(EmployeeDivision.IT, "GeraIn");

Snoop_Manager.addSubordinate(Pr0grammer);

const LilProgrammer = HoodFactory.createBasicGangstaWorker(EmployeeDivision.IT, "NeyroMonahVsevolod");

Snoop_Manager.addSubordinate(LilProgrammer);

const GlavBuh = HoodFactory.createBasicGangstaWorker(EmployeeDivision.calculus, "Ural_21");

Snoop_Manager.addSubordinate(GlavBuh);

BIG_CEO.getSubordinates();
Snoop_Manager.getSubordinates();

/*
    Я реализовал скорее ООО "UrFU_Hood"
    Иерархия работников:
        BIG_CEO(Admin) aka Mikhail:
            Snoop_Manager(Manager) aka YoungNikot1n:
                Pr0grammer(IT) aka Garain.
                LilProgrammer(It) aka NeyroMonahVsevolod.
                GlavBuh(Calculus) aka Ural_21.
*/