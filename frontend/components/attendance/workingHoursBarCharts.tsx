import React from "react";
import { Bar } from "react-chartjs-2";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const data = {
  labels,
  datasets: [
    {
      type: "bar",
      label: "Working Hours",
      backgroundColor: "rgba(75, 00, 150, 0.2)",
      borderColor: "rgba(75, 00, 150,1)",
      borderWidth: 1,
      borderRadius: 5,
      borderSkipped: false,
      maxBarThickness: 40,
      data: [65, 25, 66, 44, 56, 30, 50, 60, 45, 40, 55, 45],
    },

    {
      type: "line",
      label: "Employees Progress",
      backgroundColor: "#155e75",
      borderColor: "#155e75",
      borderWidth: 2,
      data: [50, 20, 40, 44, 50, 30, 40, 70, 45, 35, 55, 45],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true, //for style circle
      },
    },
  },
};

type Props = {};

export default function WorkingHoursBarCharts({}: Props) {
  return (
    <>
      <Bar options={options} data={data} height={528} width={1760} />
    </>
  );
}
