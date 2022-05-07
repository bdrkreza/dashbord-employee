import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import ProjectManage from "./projectManage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Project Bar chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Project A",
      data: [65, 78, 66, 44, 56, 67, 75, 60, 45, 58, 55, 45],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Project B",
      data: [40, 68, 86, 74, 56, 60, 65, 42, 35, 65, 75, 45],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function ProjectSurvey() {
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-flow-row-dense gap-10 mt-20">
      <div className="xl:col-span-2 w-full h-full bg-gray-100 md:p-10 p-4 rounded-xl">
        <div className="lg:flex justify-between w-full items-center shadow-lg rounded-xl px-2 p-4 bg-sky-300 -mt-20 ">
          <div className="py-3 md:px-4 flex items-center  rounded-xl">
            <p className="font-medium leading-none text-center text-gray-500">
              Show:
            </p>
            <div className="px-2 sm:px-3.5 border-r border-gray-300">
              <p className="text-xs leading-none text-gray-800">Hour</p>
            </div>
            <div className="px-2 sm:px-3.5 border-r border-gray-300">
              <p className="text-xs leading-none text-gray-800">Day</p>
            </div>
            <div className="px-2 sm:px-3.5 border-r border-gray-300">
              <p className="text-xs leading-none text-gray-800">Week</p>
            </div>
            <div className="px-2 sm:px-3.5 border-r border-gray-300">
              <p className="text-xs leading-none text-gray-800">Month</p>
            </div>
            <div className="px-2 sm:px-3.5">
              <p className="text-xs font-bold leading-none text-indigo-700">
                Year
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4 lg:mt-0">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-pink-300 rounded-full" />
              <p className="w-20 text-xs leading-none ml-1.5">Components</p>
            </div>
            <div className="flex items-center ml-4">
              <div className="w-4 h-4 bg-sky-400 rounded-full" />
              <p className="w-20 text-xs leading-none ml-1.5">Templates</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Bar options={options} data={data} height={528} width={1760} />
        </div>
      </div>
      <div>
        <ProjectManage />
      </div>
    </div>
  );
}
