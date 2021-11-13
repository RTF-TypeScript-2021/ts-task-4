/**
 * Задание 4 - ООО "Моя оборона"
 *
 * Используя фабрику создайте "окружение" компании.
 * "Окружение" - иерархия работников данного предприятия.
 *
 * По сути это задание - песочница.
 * Вы можете конспектировать свои действия, для более глубокого понимания происходящего.
 */
import { EmployeeFactory, IEmployeeFactory } from "../task_3";
import { EmployeeDivision } from "../empoyee-separate.enum";

const runApp = (factory: IEmployeeFactory) => {
  const CEO = factory.createManageInstance(
    EmployeeDivision.administration,
    "Tim Cook"
  );
  const Manager = factory.createManageInstance(
    EmployeeDivision.management,
    "Craig Federighi"
  );
  CEO.addSubordinate(Manager);
  const ITWorker = factory.createBaseInstance(EmployeeDivision.IT, "Ran Ran");
  Manager.addSubordinate(ITWorker);
  const CalculusWorker = factory.createBaseInstance(
    EmployeeDivision.calculus,
    "Calc Calc"
  );
  Manager.addSubordinate(CalculusWorker);
  console.log(Manager.getSubordinates());
};

runApp(new EmployeeFactory());
