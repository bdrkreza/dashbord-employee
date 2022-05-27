import React from "react";
import TopBarManage from "./topBar";

type Props = {};

export default function HrDashboard({}: Props) {
  return (
    <div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-flow-row-dense gap-10 mt-20">
      <div className="xl:col-span-3 w-full h-full bg-gray-100 md:p-10 p-4 rounded-xl">
        <TopBarManage />
      </div>
      <div>j</div>
    </div>
  );
}
