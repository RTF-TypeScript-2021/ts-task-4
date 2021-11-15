"use strict";
exports.__esModule = true;
exports.EmployeeDivision = void 0;
var EmployeeDivision;
(function (EmployeeDivision) {
    /**
     * IT отдел
     */
    EmployeeDivision[EmployeeDivision["IT"] = 0] = "IT";
    /**
     * Бухгалтерия
     */
    EmployeeDivision[EmployeeDivision["calculus"] = 1] = "calculus";
    /**
     * Управляющие
     * Имеет подчиненных.
     */
    EmployeeDivision[EmployeeDivision["management"] = 2] = "management";
    /**
     * Администрация
     * Имеет подчиненных
     */
    EmployeeDivision[EmployeeDivision["administration"] = 3] = "administration";
})(EmployeeDivision = exports.EmployeeDivision || (exports.EmployeeDivision = {}));
