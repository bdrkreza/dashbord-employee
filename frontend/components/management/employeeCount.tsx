import React from "react";
import { AiOutlineStop } from "react-icons/ai";
import { FaUmbrellaBeach } from "react-icons/fa";
import { SiTimescale } from "react-icons/si";
import { TiInputChecked } from "react-icons/ti";
import TotalEmployeeProgressBar from "./totalEmployeeProgressBar";
type Props = {};

export default function EmployeeCount({}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-white  rounded-md border-2 shadow">
        <h1 className="font-semibold text-2xl mt-3 ml-10">
          Employees Availability
        </h1>
        <div className="flex flex-wrap justify-evenly p-2">
          {employee.map(({ icon: Icon, title, count }, index) => (
            <div
              className="bg-white shadow border w-5/12 h-auto p-3 mt-3 rounded-md "
              key={index}
            >
              <Icon className="w-10 h-10" />
              <h1 className="font-bold text-lg">{title}</h1>
              <h2>{count}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white  mt-5 lg:mt-0 rounded-md border-2 ml-0 lg:ml-5  shadow">
        <h1 className="font-semibold text-2xl mt-3 ml-10">Total Employees</h1>
        <TotalEmployeeProgressBar />
      </div>
    </div>
  );
}

const employee = [
  {
    icon: TiInputChecked,
    title: "attendance",
    count: "40",
  },
  {
    icon: SiTimescale,
    title: "late coming",
    count: "10",
  },
  {
    icon: AiOutlineStop,
    title: "absent",
    count: "07",
  },
  {
    icon: FaUmbrellaBeach,
    title: "leave apply",
    count: "05",
  },
];
