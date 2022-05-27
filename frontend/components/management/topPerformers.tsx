import Image from "next/image";
import React from "react";
import { employee_job } from "../../pages/api/employee";
import { IEmployee } from "../../Types";

type Props = {};

export default function TopPerformers({}: Props) {
  return (
    <div className="bg-gray-50 mt-5 p-5">
      <h1 className="text-2xl font-semibold mb-3">Top Performers Employees</h1>
      <div className="grid lg:grid-cols-6 gap-5">
        {employee_job.map(({ name, img, percentage }: IEmployee) => (
          <div
            key={name}
            className="bg-white p-5 rounded-lg flex flex-col items-center border shadow"
          >
            <div className="bg-gray-50 rounded-full border border-gray-200 p-1 w-20 h-18 text-center">
              <Image src={img} alt="image" height={50} width={50} />
            </div>
            <h1 className="text-lg font-semibold">{name}</h1>
            <h2 className="text-2xl font-bold">{percentage}%</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
