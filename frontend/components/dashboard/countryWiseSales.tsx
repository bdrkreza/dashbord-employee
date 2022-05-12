import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
let options = {
  responsive: false,
  defaultFontSize: "14px",
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true, //for style circle
      },
    },
  },
};

const Cdata: any = [
  {
    color: "#047857",
    name: "Bengali",
    project: "23",
    persistance: "+22%",
  },
  {
    color: "#fb923c",
    name: "India",
    project: "30",
    persistance: "+32%",
  },
  {
    color: "#B31942",
    name: "Usa",
    project: "23",
    persistance: "+60%",
  },
  {
    color: "#000087",
    name: "Australia",
    project: "40",
    persistance: "+20%",
  },
  {
    color: "#f43f5e",
    name: "canada",
    project: "35",
    persistance: "+30%",
  },
];

export const data = {
  labels: Cdata.map((country: any) => country.name),
  datasets: [
    {
      label: "# of Votes",
      data: Cdata.map((country: any) => country.project),
      backgroundColor: Cdata.map((country: any) => country.color),
      borderColor: Cdata.map((country: any) => country.color),
      borderWidth: 1,
    },
  ],
};
export default function CountryWiseSales() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full bg-gray-100 h-full dark:bg-gray-800 shadow rounded px-8 py-6">
          <div className="flex items-center justify-between w-full px-8 p-3 bg-blue-400 rounded-xl shadow-xl -mt-14">
            <div>
              <p className="sm:text-2xl text-xl font-semibold leading-6 text-gray-800 dark:text-gray-100">
                County wise Clients
              </p>
              <p className="text-xs leading-3 text-gray-500 mt-1">
                To complete
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Doughnut options={options} data={data} width={250} height={250} />
          </div>
          <div className="m-2 space-y-2 divide-y-2">
            {Cdata.map((country: any) => (
              <div
                key={country.name}
                className="flex justify-between items-center"
              >
                <div className="flex items-center  w-24">
                  <hr
                    className={`w-4 h-4  rounded-full mr-2`}
                    style={{ backgroundColor: country.color }}
                  />
                  <h4>{country.name}</h4>
                </div>
                <h4>{country.project}</h4>
                <h4>{country.persistance}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
