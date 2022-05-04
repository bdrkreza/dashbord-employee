import Chart from "chart.js/auto";
import React from "react";
import ProjectManage from "./projectManage";

export default function ProjectSurvey() {
  const canvasEl = React.useRef(null);

  const colors = {
    purple: {
      default: "rgb(255, 99, 132)",
      half: "rgb(204 251 241 / 0)",
      quarter: "rgb(100, 200, 220)",
      zero: "rgba(149, 76, 233, 0)",
    },
    indigo: {
      default: "#3b82f6",
      quarter: "#4ade80",
    },
  };

  React.useEffect(() => {
    const ctx = canvasEl?.current?.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

    const labels = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ];

    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "My First Dataset",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });
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
              <div className="w-4 h-4 bg-yellow-300 rounded-full" />
              <p className="w-20 text-xs leading-none ml-1.5">Templates</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <canvas id="myChart" ref={canvasEl} height={528} width={1760} />
        </div>
      </div>
      <div className="">
        <ProjectManage />
      </div>
    </div>
  );
}
