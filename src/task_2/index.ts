import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */
export class ITEmployee extends BaseEmployee {
  constructor(fullName: string) {
    super(fullName, EmployeeDivision.IT);
  }

  public override getAuthority(): void {
    console.log("Я могу только писать код");
  }
}

export class CalculusEmployee extends BaseEmployee {
  constructor(fullName: string) {
    super(fullName, EmployeeDivision.calculus);
  }

  public override getAuthority(): void {
    console.log("Я могу считать");
  }
}

export abstract class ManageEmployee
  extends BaseEmployee
  implements IManageEmployee {
  public subordinates: Map<EmployeeDivision, BaseEmployee[]> = new Map();

  constructor(fillName: string, department: EmployeeDivision) {
    super(fillName, department);
  }

  public override getAuthority(): void {
    console.log("Я управляю людьми");
  }

  public addSubordinate(person: BaseEmployee) {
    const { department } = person.info();
    this.subordinates.get(department).push(person);
  }

  public getSubordinates(
    flatOutput?: boolean
  ): Map<EmployeeDivision, BaseEmployee[]> | BaseEmployee[] {
    return flatOutput
      ? this.subordinates
      : ([].concat.apply(
          [],
          [...this.subordinates.values()]
        ) as BaseEmployee[]);
  }

  public removeSubordinate(person: BaseEmployee): void {
    const { department } = person.info();
    this.subordinates.set(
      department,
      this.subordinates
        .get(department)
        .filter((employee) => employee !== person)
    );
  }
}

export class ManagementEmployee extends ManageEmployee {
  constructor(fullName: string) {
    super(fullName, EmployeeDivision.management);
  }
}

export class AdministrationEmployee extends ManageEmployee {
  constructor(fullName: string) {
    super(fullName, EmployeeDivision.administration);
  }
}
