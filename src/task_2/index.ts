import { BaseEmployee, ManageEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */
class ITEmployee extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.IT)
    }
}

class CalculusEmployee extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.calculus)
    }
}

class ManagementEmployee extends ManageEmployee {
    public subordinates: Map<EmployeeDivision, Array<BaseEmployee>>;

    constructor(name: string) {
        super(name, EmployeeDivision.management)
    }
}

class AdministrationEmployee extends ManageEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.administration)
    }
}

export {AdministrationEmployee, ManagementEmployee, CalculusEmployee, ITEmployee}