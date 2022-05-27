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
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const data = {
//   labels: ["Organic", "Sponsored", "Organic", "Sponsored"],
//   previousDate: {
//     label: "08/10/2019 - 09/30/2019",
//     dataSet: [10000, 150000, 10000, 150000],
//   },
//   currentDate: {
//     label: "10/01/2019 - 11/20/2019",
//     dataSet: [10000, 225000, 10000, 225000],
//   },
// };

// const options: any = {
//   offsetGridLines: true,
//   drawTicks: true,
//   layout: {
//     padding: {
//       top: 30,
//       right: 40,
//       bottom: 40,
//     },
//   },
//   legend: {
//     display: true,
//     position: "right",
//     align: "start",
//     labels: {
//       usePointStyle: true,
//     },
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     xAxes: [
//       {
//         stacked: true,
//         ticks: {
//           padding: 5,
//         },
//         gridLines: {
//           display: false,
//         },
//       },
//     ],
//     yAxes: [
//       {
//         stacked: false,
//         gridLines: {
//           drawBorder: false,
//         },
//         ticks: {
//           beginAtZero: true,
//           maxTicksLimit: 6,
//           padding: 20,
//           callback(n: any) {
//             if (n < 1e3) return n;
//             if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
//           },
//         },
//       },
//     ],
//   },
// };

// const barData: any = {
//   labels: data.labels,
//   responsive: true,
//   offset: true,
//   datasets: [
//     {
//       label: "Mobile",
//       pointStyle: "rectRounded",
//       backgroundColor: "#6ED3FF",
//       barThickness: 40,
//       categoryPercentage: 1,
//       data: data.previousDate.dataSet, //From API
//     },
//     {
//       label: "Desktop",
//       backgroundColor: "#1497FF",
//       barThickness: 40,
//       categoryPercentage: 1,
//       pointStyle: "triangle",
//       data: data.currentDate.dataSet, //From API
//     },
//   ],
// };

const options: any = {
  title: {
    display: true,
    text: "This is title",
  },
  backgroundColor: "#cfcfcf",
  scales: {
    xAxes: [{ stacked: true }],
    yAxes: [{ stacked: true }],
  },
};

const data: any = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      data: [1, 5, 3],
      label: "Jan",
      backgroundColor: "#3e95cd",
    },
    {
      data: [10, 5],
      label: "Feb",
      backgroundColor: "#8e5ea2",
    },
    {
      data: [4, 8],
      label: "Mar",
      backgroundColor: "#4287f5",
    },
    {
      data: [7],
      label: "Apr",
      backgroundColor: "#23ebbc",
    },
    {
      data: [3, 1, 5, 0, 7],
      label: "May",
      backgroundColor: "#e63057",
    },
  ],
};

type Props = {};

export default function HiringBarChart({}: Props) {
  return (
    <div className="bg-white p-5 w-full rounded-xl border shadow">
      <h1 className="text-2xl font-bold">Top Hiring Sources</h1>
      <Bar options={options} data={data} height={80} />
    </div>
  );
}
