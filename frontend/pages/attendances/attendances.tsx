import React, { useEffect, useState } from "react";
import {
  AddAttendance,
  AttendanceTable,
  AttendanceTopBar,
  EmployeeWorkingDays,
} from "../../components";
import { IAttendance, IAttendanceTable, IProgress } from "../../Types";
import { attn_api, tableBody } from "../api/attendance";
import { progressBar } from "../api/progressBar";

export default function Attendances() {
  const [attendance, setAttendance] = useState<IAttendance[]>([]);
  const [progress, setProgress] = useState<IProgress[]>([]);
  const [tableDb, setTableDb] = useState<IAttendanceTable[]>([]);

  useEffect(() => {
    setAttendance(attn_api), setProgress(progressBar), setTableDb(tableBody);
  }, []);

  return (
    <div>
      <AttendanceTopBar attendance={attendance} />
      <AddAttendance />
      <EmployeeWorkingDays progress={progress} />
      <AttendanceTable tableDb={tableDb} />
    </div>
  );
}
