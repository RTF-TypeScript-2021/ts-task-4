import {BaseEmployee, IManageEmployee} from "../task_1";
import {EmployeeDivision} from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export class ItEmployee extends BaseEmployee{
    constructor(name: string) {
        super(name, EmployeeDivision.IT);
    }
}

export class CalculusEmployee extends BaseEmployee{
    constructor(name: string) {
        super(name, EmployeeDivision.calculus);
    }
}

abstract class ManageEmployee extends BaseEmployee implements IManageEmployee{
    subordinates: Array<{ department: EmployeeDivision; employees: Array<BaseEmployee> }>;

    addSubordinate(person: BaseEmployee): void {
        this.subordinates.find(x => x.department === person.department).employees.push(person);
    }

    getSubordinates(flatOutput?: boolean): void {
        if (flatOutput === false){
            console.log(this.subordinates)
        } else {
            console.log([].concat(...this.subordinates));
        }
    }

    removeSubordinate(person: BaseEmployee): void {
        const departmentIndex = this.subordinates.findIndex(x => x.department === person.department);
        const employeeIndex = this.subordinates[departmentIndex].employees.findIndex(x => x.name === person.name);
        this.subordinates[departmentIndex].employees.splice(employeeIndex, 1)
    }
}

export class ManagementEmployee extends ManageEmployee{
    constructor(name: string) {
        super(name, EmployeeDivision.management);
    }
}

export class AdministrationEmployee extends ManageEmployee{
    constructor(name: string) {
        super(name, EmployeeDivision.administration);
    }
}