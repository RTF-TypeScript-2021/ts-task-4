/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */

 import { ManadgerType, NotManadgerType } from "../task_3";
 import { EmployeeDivision } from "../empoyee-separate.enum";

const Masha = new ManadgerType().createInstance('Masha', EmployeeDivision.administration);
const Misha = new ManadgerType().createInstance('Misha', EmployeeDivision.administration);

const Nikita = new ManadgerType().createInstance("Nikita", EmployeeDivision.management);
const Vika = new ManadgerType().createInstance("Vika", EmployeeDivision.management);
const Sveta = new ManadgerType().createInstance("Sveta", EmployeeDivision.management);
const Ilya = new NotManadgerType().createInstance("Ilya", EmployeeDivision.IT);
const Sergey = new NotManadgerType().createInstance("Sergey", EmployeeDivision.IT);
const auntZina = new NotManadgerType().createInstance("auntZina", EmployeeDivision.calculus);

Masha.addSubordinate(Misha); 
Misha.addSubordinate(Nikita);

Nikita.addSubordinate(Ilya);
Nikita.addSubordinate(Sergey);

Misha.addSubordinate(auntZina);
Misha.removeSubordinate(auntZina);
Masha.addSubordinate(auntZina);

Masha.addSubordinate(Vika);
Vika.addSubordinate(Nikita);
Vika.addSubordinate(Sveta);

Ilya.getAuthority(['checkErrorNikita', 'DoBeatufulCOD', "BeHappy"])



