import React from "react";
import { AddEmployee, EmployeeList, EmployeeTopBar } from "../../components";

export default function Employee() {
  return (
    <div className="space-y-5">
      <EmployeeTopBar />
      <AddEmployee />
      <EmployeeList />
    </div>
  );
}
