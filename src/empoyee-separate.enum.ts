import {ManageEmployee} from "./task_2";

export enum EmployeeDivision{
    /**
     * IT отдел
     */
    IT,
    /**
     * Бухгалтерия
     */
    calculus,
    /**
     * Управляющие
     * Имеет подчиненных.
     */
    management,
    /**
     * Администрация
     * Имеет подчиненных
     */
    administration
}

export type BaseEmployeeDivision = EmployeeDivision.calculus | EmployeeDivision.IT;

export type ManageEmployeeDivision = EmployeeDivision.administration | EmployeeDivision.management;
