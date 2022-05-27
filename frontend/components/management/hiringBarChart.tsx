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
  tooltips: {
    displayColors: true,
    callbacks: {
      mode: "x",
    },
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: "linear",
      },
    ],
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: { position: "bottom" },
};

const data: any = {
  labels: [
    "<  1",
    "1 - 2",
    "3 - 4",
    "5 - 9",
    "10 - 14",
    "15 - 19",
    "20 - 24",
    "25 - 29",
    "> - 29",
  ],
  datasets: [
    {
      label: "Employee",
      backgroundColor: "#caf270",
      data: [12, 59, 5, 56, 58, 12, 59, 87, 45],
    },
    {
      label: "Engineer",
      backgroundColor: "#45c490",
      data: [12, 59, 5, 56, 58, 12, 59, 85, 23],
    },
    {
      label: "Government",
      backgroundColor: "#008d93",
      data: [12, 59, 5, 56, 58, 12, 59, 65, 51],
    },
    {
      label: "Political parties",
      backgroundColor: "#2e5468",
      data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
    },
  ],
};

type Props = {};

export default function HiringBarChart({}: Props) {
  return (
    <div>
      <Bar options={options} data={data} height={220} />
    </div>
  );
}
