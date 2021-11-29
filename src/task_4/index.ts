/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */

 import {EmployeeFactory} from "../task_3";
 import {EmployeeDivision} from "../empoyee-separate.enum";


 function createCompany(): void{
    const administrator = EmployeeFactory.createManager('Рафаэль', EmployeeDivision.administration);
    const firstManager = EmployeeFactory.createManager('Александр', EmployeeDivision.management);
    const secondManager = EmployeeFactory.createManager('Максим', EmployeeDivision.management);
    const firstCalculus = EmployeeFactory.createWorker('Артем', EmployeeDivision.calculus);
    const secondCalculus = EmployeeFactory.createWorker('Даша', EmployeeDivision.calculus);
    const firstIT = EmployeeFactory.createWorker('Валера', EmployeeDivision.IT);
    const secondIT = EmployeeFactory.createWorker('София', EmployeeDivision.IT);
    const thirdIT = EmployeeFactory.createWorker('Даниил', EmployeeDivision.IT);
    const workers = [firstCalculus, secondCalculus, firstIT, secondIT, thirdIT];
    const managers = [firstManager, secondManager];
    const administrators = [administrator]

    for (let i = 0; i < administrators.length; i++) {
        for (let j = 0; j < managers.length; j++) {
            administrators[i].addSubordinate(managers[j]);
        }
        for (let k = 0; k < workers.length; k++) {
            administrators[i].addSubordinate(workers[k]);
        }
    }

    for (let i = 0; i < managers.length; i++) {
        for (let k = 0; k < workers.length; k++) {
            managers[i].addSubordinate(workers[k]);
        }
    }
 }
