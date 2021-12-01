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
 import { Worker } from "../task_3";

 const factory = new Worker();

     factory.addWorker(EmployeeDivision.IT, 'Maxim'),
     factory.addWorker(EmployeeDivision.IT, 'Andrey'),
     factory.addWorker(EmployeeDivision.IT, 'Matvey'),
     factory.addWorker(EmployeeDivision.calculus, 'Anastasia'),
     factory.addWorker(EmployeeDivision.calculus, 'Daria')
     factory.addWorker(EmployeeDivision.management, 'Oleg')
     factory.addWorker(EmployeeDivision.management, 'Miron')
     factory.addWorker(EmployeeDivision.administration, 'Ilya')
 
 