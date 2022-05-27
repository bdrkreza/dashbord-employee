import React from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { FiUsers } from "react-icons/fi";

type Props = {};

export default function TopBarManage({}: Props) {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {employees.map(
          ({ count, title, icon: Icon, color, percentage }, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border shadow p-6"
            >
              <div className="flex items-center justify-between w-full sm:w-full mb-8">
                <div className="flex items-center">
                  <div className={`p-4 bg-${color}-500 rounded-lg`}>
                    <Icon className="w-7 h-7 text-gray-100" />
                  </div>
                  <div className="ml-6">
                    <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
                      {count}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-md font-semibold tracking-normal  mt-2 capitalize leading-5">
                      {title}
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
              <div className="h-1 w-full bg-gray-300 relative">
                <div
                  style={{ width: `${percentage}%` }}
                  className={`h-full ${
                    percentage < 50 ? "bg-red-600" : "bg-green-600"
                  }`}
                ></div>
              </div>
              <h4 className="text-base text-gray-600 dark:text-gray-400 font-normal tracking-normal mt-3 leading-5">
                Yearly Goal
              </h4>
            </div>
          )
        )}
      </div>
    </div>
  );
}

const employees = [
  {
    title: "total Employee",
    percentage: 40,
    count: "234",
    color: "green",
    icon: FiUsers,
  },
  {
    title: "department",
    percentage: 60,
    count: "36",
    color: "pink",
    icon: FcDepartment,
  },
  {
    title: "expenses",
    percentage: 70,
    count: "$25,454",
    icon: FaFileInvoiceDollar,
    color: "gray",
  },
];
