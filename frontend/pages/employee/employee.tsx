import React, { useEffect, useState } from "react";
import { AddEmployee, EmployeeList, EmployeeTopBar } from "../../components";
import { IEmployee, IEmployeeCount } from "../../Types";
import { employee_api, employee_job } from "../api/employee";

export default function Employee() {
  const [employee, setEmployee] = useState<IEmployee[]>([]);
  const [employeeCount, setEmployeeCount] = useState<IEmployeeCount[]>([]);

  useEffect(() => {
    setEmployee(employee_job);
    setEmployeeCount(employee_api);
  }, []);
  return (
    <div className="space-y-5">
      <EmployeeTopBar employee={employeeCount} />
      <AddEmployee />
      <EmployeeList employee={employee} />
    </div>
  );
}
