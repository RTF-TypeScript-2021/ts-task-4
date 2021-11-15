import { EmployeeDivision } from "../empoyee-separate.enum";
import { AdministrationEmployee, CalculusEmployee, ITEmployee, ManagementEmployee, ManagerEmployee } from "../task_2";
import { EmployeeFabric } from "../task_3";

test('Create instances', () => {
    const IT = EmployeeFabric.createInstance('bobaIT', EmployeeDivision.IT);
    expect(IT).toBeInstanceOf(ITEmployee);

    const calc = EmployeeFabric.createInstance('bobaCalc', EmployeeDivision.calculus);
    expect(calc).toBeInstanceOf(CalculusEmployee);

    const manage = EmployeeFabric.createInstance('bobaManage', EmployeeDivision.management);
    expect(manage).toBeInstanceOf(ManagementEmployee);

    const admin = EmployeeFabric.createInstance('bobaAdmin', EmployeeDivision.administration);
    expect(admin).toBeInstanceOf(AdministrationEmployee);
});

test('Employee methods', () => {
    const manage = EmployeeFabric.createInstance('bobaManage', EmployeeDivision.management) as ManagerEmployee;
    expect(manage.subordinates).toBeDefined();
    expect(manage.subordinates.keys.length).toEqual(0);

    const IT1 = EmployeeFabric.createInstance('bobaIT1', EmployeeDivision.IT);
    const IT2 = EmployeeFabric.createInstance('bobaIT2', EmployeeDivision.IT);
    const calc = EmployeeFabric.createInstance('bobaIT2', EmployeeDivision.calculus);

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