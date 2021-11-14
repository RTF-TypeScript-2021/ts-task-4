import {AdministrationSpecialist, CalculusSpecialist, ITSpecialist, ManagementSpecialist} from "../src/task_2";
import {EmployeeDivision} from "../src/empoyee-separate.enum";

test("ITSpecialist", () => {
    const itSpecialist = new ITSpecialist("Макар");

    expect(itSpecialist.department).toBe(EmployeeDivision.IT);
});

test("CalculusSpecialist", () => {
    const calculusSpecialist = new CalculusSpecialist("Макар");

    expect(calculusSpecialist.department).toBe(EmployeeDivision.calculus);
});

test("ManagementSpecialist", () => {
    const managementSpecialist = new ManagementSpecialist("Макар");
    const itSpecialist1 = new ITSpecialist("Nikita");
    const itSpecialist2 = new ITSpecialist("Александр");

    expect(managementSpecialist.addSubordinate(itSpecialist1)).toBe(true);
    managementSpecialist.getSubordinates();
    expect(managementSpecialist.removeSubordinate(itSpecialist1)).toBe(true);
    expect(managementSpecialist.removeSubordinate(itSpecialist1)).toBe(false);
    expect(managementSpecialist.removeSubordinate(itSpecialist2)).toBe(false);
    expect(managementSpecialist.addSubordinate(itSpecialist1)).toBe(true);
    managementSpecialist.getSubordinates();
    expect(managementSpecialist.department).toBe(EmployeeDivision.management);
});

test("AdministrationSpecialist", () => {
    const administrationSpecialist = new AdministrationSpecialist("Макар");
    const itSpecialist = new ITSpecialist("Nikita");

    expect(administrationSpecialist.addSubordinate(itSpecialist)).toBe(true);
    administrationSpecialist.getSubordinates();
    expect(administrationSpecialist.removeSubordinate(itSpecialist)).toBe(true);
    administrationSpecialist.getSubordinates();
    expect(administrationSpecialist.department).toBe(EmployeeDivision.administration);
});

