import React, { useEffect, useState } from "react";
import {
  AddAttendance,
  AttendanceTopBar,
  EmployeeWorkingDays,
} from "../../components";
import { IAttendance } from "../../Types";
import { attn_api } from "../api/attendance";

export default function Attendances() {
  const [attendance, setAttendance] = useState<IAttendance[]>([]);

  useEffect(() => setAttendance(attn_api), []);

  return (
    <div>
      <AttendanceTopBar attendance={attendance} />
      <AddAttendance />
      <EmployeeWorkingDays />
    </div>
  );
}
