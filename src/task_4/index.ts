/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */

/**
 * Все имена и совпадения случайны ниче такого не думайте 
 * (а может и не случайны, но думаю суть будет понятна)
 */

 import { EmployeeDivision } from "../empoyee-separate.enum";
 import { Fabric } from "../task_3";
/**
 * Представим наших работничков (вся информация о работниках взята с открытых источников таких как гит и дискорд))))
 */
const loozmax = Fabric.createManageWorker(EmployeeDivision.administration, "Mikhail");
const daleunixal  = Fabric.createManageWorker(EmployeeDivision.management, "Nikita");
const flashart92 = Fabric.createManageWorker(EmployeeDivision.management, "Artem");
const maffas = Fabric.createManageWorker(EmployeeDivision.management, "Ilya");
const nchuk = Fabric.createWorker(EmployeeDivision.IT, "Nastya");
const predeinnikita = Fabric.createWorker(EmployeeDivision.IT, "Nikita");
const svetassveta = Fabric.createWorker(EmployeeDivision.calculus, "Sveta");
const theHomeGera = Fabric.createWorker(EmployeeDivision.calculus, "Gera");


loozmax.addSubordinate(daleunixal);
loozmax.addSubordinate(flashart92);
loozmax.addSubordinate(maffas);
daleunixal.addSubordinate(nchuk);
daleunixal.addSubordinate(predeinnikita);
daleunixal.addSubordinate(svetassveta);
daleunixal.addSubordinate(theHomeGera);
flashart92.addSubordinate(nchuk);
flashart92.addSubordinate(predeinnikita);
flashart92.addSubordinate(svetassveta);
flashart92.addSubordinate(theHomeGera);
maffas.addSubordinate(nchuk);
maffas.addSubordinate(predeinnikita);
maffas.addSubordinate(svetassveta);
maffas.addSubordinate(theHomeGera);