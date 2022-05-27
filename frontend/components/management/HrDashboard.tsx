import React from "react";
import EmployeeCount from "./employeeCount";
import HiringBarChart from "./hiringBarChart";
import ManagementAside from "./managementAside";
import TopBarManage from "./topBar";
import TopPerformers from "./topPerformers";
import UpcomingInterviews from "./upcomingInterviews";

type Props = {};

export default function HrDashboard({}: Props) {
  return (
    <div>
      <div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-flow-row-dense gap-10">
        <div className="xl:col-span-3 w-full h-full bg-gray-100  rounded-xl space-y-5">
          <TopBarManage />
          <EmployeeCount />
          <HiringBarChart />
        </div>
        <div className="bg-gray-100">
          <ManagementAside />
          <UpcomingInterviews />
        </div>
      </div>
      <TopPerformers />
    </div>
  );
}
