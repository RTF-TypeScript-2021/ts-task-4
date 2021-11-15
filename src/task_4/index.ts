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
import { EmployeeFactory } from "../task_3";

const Misha = EmployeeFactory.createDisposerEmployee(EmployeeDivision.administration, "Михаил");
const Nikita = EmployeeFactory.createDisposerEmployee(EmployeeDivision.management, "Никита");
const Egor = EmployeeFactory.createNotDisposerEmployee(EmployeeDivision.IT, "Егор");
const Ilya = EmployeeFactory.createNotDisposerEmployee(EmployeeDivision.IT, "Илья");
const Max = EmployeeFactory.createNotDisposerEmployee(EmployeeDivision.IT, "Максим");
const Sasha = EmployeeFactory.createNotDisposerEmployee(EmployeeDivision.IT, "Александр");
const Artem = EmployeeFactory.createNotDisposerEmployee(EmployeeDivision.IT, "Артем");
const Zina = EmployeeFactory.createNotDisposerEmployee(EmployeeDivision.calculus, "Зиночка");

Misha.addSubordinate(Nikita);
Misha.addSubordinate(Zina);
Misha.addSubordinate(Egor);
Misha.addSubordinate(Sasha);

Nikita.addSubordinate(Ilya);
Nikita.addSubordinate(Max);
Nikita.addSubordinate(Artem);

Nikita.getSubordinates(true);
Misha.getSubordinates(false);

Misha.removeSubordinate(Egor);
Nikita.removeSubordinate(Ilya);

Nikita.getSubordinates(true);
Misha.getSubordinates(false);