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
    public getAuthority(): string{
        return "загружаю npm пакеты"
    }
}

class CalculusEmployee extends BaseEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.calculus)
    }
    public getAuthority(): string{
        return "любит c1"
    }
}

class ManagementEmployee extends ManageEmployee {
    public subordinates: Map<EmployeeDivision, Array<BaseEmployee>>;

    constructor(name: string) {
        super(name, EmployeeDivision.management)
    }
    public getAuthority(): string{
        return "подпинывает подчиненных"
    }
}

class AdministrationEmployee extends ManageEmployee {
    constructor(name: string) {
        super(name, EmployeeDivision.administration)
    }
    public getAuthority(): string{
        return "подпинывает подчиненных"
    }
}

export {AdministrationEmployee, ManagementEmployee, CalculusEmployee, ITEmployee}