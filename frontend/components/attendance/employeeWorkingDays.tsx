import React from "react";
import TodayTime from "./todayTimeProgressBar";
import WorkingHoursBarCharts from "./workingHoursBarCharts";

type Props = {};

export default function EmployeeWorkingDays({}: Props) {
  return (
    <>
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-flow-row-dense gap-10 mt-20">
        <div className="w-full bg-gray-100 h-full dark:bg-gray-800 shadow rounded px-8 py-6">
          <TodayTime />
        </div>
        <div className="xl:col-span-2 w-full h-full bg-gray-100  p-5 rounded-xl">
          <h1 className="font-bold text-lg mb-5">Employees Yearly Status</h1>
          <WorkingHoursBarCharts />
        </div>
      </div>
    </>
  );
}
