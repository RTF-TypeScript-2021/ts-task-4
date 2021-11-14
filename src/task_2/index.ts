import { BaseEmployee, ManageEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */
class ITEmployee extends BaseEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.IT)
    }
}

class CalculusEmployee extends BaseEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.calculus)
    }
}

class ManagementEmployee extends ManageEmployee {
    public subordinates: Map<EmployeeDivision, Array<BaseEmployee>>;

    constructor(fullName: string) {
        super(fullName, EmployeeDivision.management)
    }
}

class AdministrationEmployee extends ManageEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.administration)
    }
}