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
 import { AdministrationEmployee, CalculusEmployee, ITEmployee, ManagementEmployee, ManagerEmployee } from "../task_2";
 import { EmployeeFabric } from "../task_3";
 
 test('Create instances', () => {
     const IT = EmployeeFabric.createInstance('empIT', EmployeeDivision.IT);
     expect(IT).toBeInstanceOf(ITEmployee);
 
     const calc = EmployeeFabric.createInstance('empCalc', EmployeeDivision.calculus);
     expect(calc).toBeInstanceOf(CalculusEmployee);
 
     const manage = EmployeeFabric.createInstance('empManage', EmployeeDivision.management);
     expect(manage).toBeInstanceOf(ManagementEmployee);
 
     const admin = EmployeeFabric.createInstance('empAdmin', EmployeeDivision.administration);
     expect(admin).toBeInstanceOf(AdministrationEmployee);
 });
 
 test('Check employee base methods', () => {
     const cnsl = jest.spyOn(console, 'log');
 
     const IT = EmployeeFabric.createInstance('empIT', EmployeeDivision.IT);
     IT.getAuthority();
     expect(cnsl).toHaveBeenCalledWith('Works in the IT department');
 
     const manage = EmployeeFabric.createInstance('empManage', EmployeeDivision.management);
     manage.getAuthority();
     expect(cnsl).toHaveBeenCalledWith('Works in the Management department, has subordinates');
 })
 
 test('Check employee with subordinates methods', () => {
     const manage = EmployeeFabric.createInstance('empManage', EmployeeDivision.management) as ManagerEmployee;
     expect(manage.subordinates).toBeDefined();
     expect(Array.from(manage.subordinates.keys()).length).toEqual(0);
 
     const IT1 = EmployeeFabric.createInstance('empIT1', EmployeeDivision.IT);
     const IT2 = EmployeeFabric.createInstance('empIT2', EmployeeDivision.IT);
     const calc = EmployeeFabric.createInstance('empCalc', EmployeeDivision.calculus);
 
     manage.addSubordinate(IT1);
     expect(Array.from(manage.subordinates.keys()).length).toEqual(1);
     expect(manage.subordinates.get(IT1.division)).toEqual([IT1]);
 
     manage.addSubordinate(IT2);
     expect(Array.from(manage.subordinates.keys()).length).toEqual(1);
     expect(manage.subordinates.get(IT1.division)).toEqual([IT1, IT2]);
     expect(manage.getSubordinates(false)).toBeInstanceOf(Map);
     expect(manage.getSubordinates(false)).toEqual(manage.subordinates);
     expect(manage.getSubordinates(true)).toEqual([IT1, IT2]);
 
     manage.removeSubordinate(IT1);
     expect(Array.from(manage.subordinates.keys()).length).toEqual(1);
     expect(manage.subordinates.get(IT1.division)).toEqual([IT2]);
 
     manage.addSubordinate(calc);
     expect(Array.from(manage.subordinates.keys()).length).toEqual(2);
 });
 
 test('Remove a non-existent subordinate', () => {
     const manage = EmployeeFabric.createInstance('empManage', EmployeeDivision.management) as ManagerEmployee;
     expect(() =>
         manage.removeSubordinate(EmployeeFabric.createInstance('none', EmployeeDivision.IT))
     ).toThrow();
 })
 
 test('Add one person as subordinate twice to one manager', () => {
     const manage = EmployeeFabric.createInstance('empManage', EmployeeDivision.management) as ManagerEmployee;
     const IT = EmployeeFabric.createInstance('empIT', EmployeeDivision.IT);
     manage.addSubordinate(IT);
     expect(() => 
         manage.addSubordinate(IT)
     ).toThrow();
 })
