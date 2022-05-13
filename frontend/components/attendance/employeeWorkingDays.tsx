import React from "react";
import { activityDb } from "../../pages/api/progressBar";
import { IProgress } from "../../Types";
import RecentActivity from "./recentActivity";
import StatisticsProgressBar from "./statisticsProgressBar";
import TodayTime from "./todayTimeProgressBar";
import WorkingHoursBarCharts from "./workingHoursBarCharts";

type Props = {
  progress: IProgress[] | null;
};

export default function EmployeeWorkingDays({ progress }: Props) {
  return (
    <>
      {/* Today Time and Employees Yearly Status */}
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-flow-row-dense gap-10 mt-10">
        <div className="w-full bg-gray-100 h-full dark:bg-gray-800 shadow rounded px-8 py-6">
          <TodayTime />
        </div>
        <div className="xl:col-span-2 w-full h-full bg-gray-100  p-5 rounded-xl">
          <h1 className="font-bold text-lg mb-5">Employees Yearly Status</h1>
          <WorkingHoursBarCharts />
        </div>
      </div>
      {/* Statistics  and Recent Activity */}
      <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-flow-row-dense gap-10 mt-10">
        <div className="w-full bg-gray-100 h-full dark:bg-gray-800 shadow rounded px-8 py-6">
          <h1 className="font-bold text-xl mb-3">Statistics</h1>
          {progress?.map((prog: IProgress) => (
            <StatisticsProgressBar progData={prog} key={prog.id} />
          ))}
        </div>
        <div className="w-full h-full bg-gray-100  p-5 rounded-xl">
          <h1 className="font-bold text-xl mb-3">Recent activity</h1>
          <ol className="relative border-l border-gray-300 ">
            {activityDb.map((item) => (
              <RecentActivity key={item.title} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
