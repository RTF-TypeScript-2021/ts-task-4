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
 import { Factory } from "../task_3";

 const factory = new Factory();

 factory.addEmployee(EmployeeDivision.administration, 'Drake');
 factory.addEmployee(EmployeeDivision.management, 'Weekend');
 factory.addEmployee(EmployeeDivision.management, 'BigRussianBoss');
 factory.addEmployee(EmployeeDivision.management, 'Kanye');
 factory.addEmployee(EmployeeDivision.IT, 'Yanix'),
 factory.addEmployee(EmployeeDivision.IT, 'Lizer'),
 factory.addEmployee(EmployeeDivision.IT, 'Travis'),
 factory.addEmployee(EmployeeDivision.calculus, 'LanaDelRey'),
 factory.addEmployee(EmployeeDivision.calculus, 'Tyga')
 /* Хочу себе таких сотрудников.... */