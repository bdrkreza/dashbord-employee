import React, { useEffect, useState } from "react";
import { AddPayroll } from "../../components";
import { IEmployeeSalary } from "../../Types";
import { employee_salary } from "../api/paymentEmp";

export default function Payroll() {
  const [employeeSalary, setEmployeeSalary] = useState<IEmployeeSalary[]>([]);

  useEffect(() => {
    setEmployeeSalary(employee_salary);
  }, []);
  return (
    <div>
      <AddPayroll data={employeeSalary} />
    </div>
  );
}
