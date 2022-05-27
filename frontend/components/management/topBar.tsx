import React from "react";
import { FiUsers } from "react-icons/fi";

type Props = {};

export default function TopBarManage({}: Props) {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {employees.map((emp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl border shadow p-6"
          >
            <div className="flex items-center justify-between w-full sm:w-full mb-8">
              <div className="flex items-center">
                <div className="p-4 bg-green-700 rounded-lg">
                  <FiUsers className="w-7 h-7 text-gray-100" />
                </div>
                <div className="ml-6">
                  <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
                    {emp.count}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-md font-semibold tracking-normal  mt-2 capitalize leading-5">
                    {emp.title}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center pl-3 text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trending-up"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="3 17 9 11 13 15 21 7" />
                    <polyline points="14 7 21 7 21 14" />
                  </svg>
                  <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                    7.2%
                  </p>
                </div>
                <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                  Increase
                </p>
              </div>
            </div>
            <div className="relative mb-3">
              <hr className="h-1 rounded-sm bg-gray-200" />
              <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700 border-indigo-700 left-0" />
            </div>
            <h4 className="text-base text-gray-600 dark:text-gray-400 font-normal tracking-normal leading-5">
              Yearly Goal
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

const employees = [
  {
    title: "total Employee",
    percentage: "120",
    count: "234",
  },
  {
    title: "department",
    percentage: "120",
    count: "36",
  },
  {
    title: "expenses",
    percentage: "27880",
    count: "$25,454",
  },
];
