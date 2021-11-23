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
 import { EmployeeFabric } from "../task_3";

 const BoSS = EmployeeFabric.createEmployee("Mikhail",EmployeeDivision.administration);
 const manager = EmployeeFabric.createWorker("Ivan", EmployeeDivision.management);
 const itEmp = EmployeeFabric.createWorker("Petr", EmployeeDivision.IT);
 const emp = EmployeeFabric.createWorker("Alexey", EmployeeDivision.calculus);
 
 BoSS.addSubordinate(manager);
 BoSS.addSubordinate(itEmp);
 BoSS.addSubordinate(emp);
 BoSS.removeSubordinate(itEmp);

