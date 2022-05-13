import React, { useEffect, useState } from "react";
import {
  AddDepartment,
  DepartmentTable,
  DepartmentTopBar,
} from "../../components";
import { IDepartment, IDepartmentTeam } from "../../Types";
import { department_api, department_team } from "../api/department";

type Props = {};

export default function Department({}: Props) {
  const [department, setDepartment] = useState<IDepartment[]>([]);
  const [departmentTeam, setDepartmentTeam] = useState<IDepartmentTeam[]>([]);

  useEffect(() => {
    setDepartment(department_api);
    setDepartmentTeam(department_team);
  }, []);
  return (
    <div>
      <DepartmentTopBar data={department} />
      <AddDepartment />
      <DepartmentTable data={departmentTeam} />
    </div>
  );
}
