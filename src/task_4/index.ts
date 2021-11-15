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
import { Administartor, calculusWorker, ITLevel, ITWorker, Manager } from "../task_2";
import { EmployeeFabric } from "../task_3";

//Создадим фабрику
const employeeFabric = EmployeeFabric.createFabric();
//Далее создадим по 5 работников каждого отдела
const ITWorkers = new Array<ITWorker>();
const calculusWorkers = new Array<calculusWorker>();
for (let i = 1; i <= 5; i++) {
   ITWorkers.push(employeeFabric.createInstance(EmployeeDivision.IT, 'Саша' + i.toString()) as ITWorker);
   calculusWorkers.push(employeeFabric.createInstance(EmployeeDivision.calculus, 'Петя' + i.toString()) as calculusWorker);
}
//Посмотрим на работников
console.log(ITWorkers);
console.log(calculusWorkers);
//Создадим 2 менеджера и 1 администратора, менеджерам выдадим в подчинение по 5 сотрудников из отдела
const managerIT = employeeFabric.createInstance(EmployeeDivision.management, 'Володя') as Manager;
const managerCalculus = employeeFabric.createInstance(EmployeeDivision.management, 'Стасян') as Manager;
for (let i = 0; i < 5; i++) {
    managerIT.addSubordinate(ITWorkers[i]);
    managerCalculus.addSubordinate(calculusWorkers[i]);
 }
 const admin = employeeFabric.createInstance(EmployeeDivision.administration, 'Шина') as Administartor;
 //Администратору достанется 2 менеджера в подчинение
 admin.addSubordinate(managerIT);
 admin.addSubordinate(managerCalculus);
//Проверим списки подчинённых у менеджеров и администраторов
admin.getSubordinates();
managerCalculus.getSubordinates(true);
managerIT.getSubordinates(true);
//Проверим методы работников, например повысим первого работника IT отдела, он заслужил
ITWorkers[0].ChangeLvl(ITLevel.Middle); //Теперь он стал мидлом(по умолчанию при создании джун)
//Проверим удаление сотрудников 
managerCalculus.removeSubordinate(calculusWorkers[1]);
managerIT.removeSubordinate(ITWorkers[1]);
//Проверим защиту от повторного удаления
managerCalculus.removeSubordinate(calculusWorkers[1]);
managerIT.removeSubordinate(ITWorkers[1]);
//Проверим, что менеджер не может получить в подчинение уже подчинённого сотрудника
managerIT.addSubordinate(calculusWorkers[3]);
managerCalculus.addSubordinate(ITWorkers[3]);
//Проверка базового метода
admin.getAuthority();
//Проверим так же что администратор не может получить в подчинение подчинённых менеджерами сотрудников
admin.addSubordinate(ITWorkers[4]);
//Получим повторные списки и проверим, что удалённые работники пропали из числа подчинённых
admin.getSubordinates(true);
managerCalculus.getSubordinates(true);
managerIT.getSubordinates(true);
//Всё отработало успешно