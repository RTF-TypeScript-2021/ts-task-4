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
import { IManageEmployee, IBaseEmployee, BaseEmployee } from "../task_1";
import { ManageEmployee, ManagementEmployee } from "../task_2";
import { BaseEmployeeFactory, ManageEmployeeFactory } from "../task_3";

const managers: ManageEmployee[] = [];
const workers: BaseEmployee[] = [];
const employees: IBaseEmployee[] = [];
const baseFactory = new BaseEmployeeFactory()
const manageFactory = new ManageEmployeeFactory();
const names = ["bill", "bob", "sid", "yan", "jimm"];

names.map((e, i) => {
    const m = manageFactory.createInstance(e, i);
    const w = baseFactory.createInstance(e, i);
    if (m !== undefined){
        managers.push(m);
        employees.push(m);
    }
    if (w !== undefined){
        workers.push(w);
        employees.push(w);
    }
});
managers.map((e, i) => e.addSubordinate(workers[i]));
employees.forEach(e => e.getAuthority());
managers.forEach(e => console.log(e.name, (e.getSubordination() as BaseEmployee[]).map(w => w.name)));