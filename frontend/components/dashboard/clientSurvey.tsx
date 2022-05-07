import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import CountryWiseSales from "./countryWiseSales";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          color: "#03A5C5",
          lineWidth: 8,
        },
        ticks: {
          fontColor: "white",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          color: "#03A5C5",
          lineWidth: 8,
        },
        ticks: {
          fontColor: "white",
          beginAtZero: true,
        },
      },
    ],
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: new Date().getFullYear(),
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "#03a9f4",
      data: [65, 78, 66, 44, 56, 67, 75],
      fill: true,
      borderWidth: 2,
      lineTension: 0.2,
      pointBackgroundColor: "#03a9f4",
      pointRadius: 3,
    },
    {
      label: new Date().getFullYear() - 1,
      fill: true,
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "#ff9800",
      data: [40, 68, 86, 74, 56, 60, 87],
      borderWidth: 2,
      lineTension: 0.2,
      pointBackgroundColor: "#ff9800",
      pointRadius: 3,
    },
  ],
};
export default function ProjectSurvey() {
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-flow-row-dense gap-10 mt-20">
      <div className="xl:col-span-2 w-full min-h-fit  bg-gray-100 md:p-10 p-4 rounded-xl">
        <div className="flex justify-between w-full items-center shadow-lg rounded-xl px-2 p-4 bg-pink-300 -mt-20 ">
          <div className="py-3 md:px-4 flex items-center  rounded-xl">
            <p className="font-medium leading-none text-center text-gray-500">
              Client Survey
            </p>
          </div>
          <div className="flex items-center mt-4 lg:mt-0">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-sky-700 rounded-full" />
              <p className="w-20 text-xs leading-none ml-1.5">new Client</p>
            </div>
            <div className="flex items-center ml-4">
              <div className="w-4 h-4 bg-yellow-300 rounded-full" />
              <p className="w-20 text-xs leading-none ml-1.5">old client</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Line options={options} data={data} height={328} width={1760} />
        </div>
      </div>
      <div className="">
        <CountryWiseSales />
      </div>
    </div>
  );
}
