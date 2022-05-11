import React from "react";
import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";

type IHoliday = {
  id: string;
  weakly: string;
  date: string;
  holiday: string;
  color: string;
};

interface IProps {
  holiday: IHoliday[] | null;
}

export default function HolidaysTable({ holiday }: IProps) {
  return (
    <>
      <div className="overflow-x-auto shadow border-x-2  sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <p className="">#</p>
                </div>
              </th>
              <th scope="col" className="px-10 py-5">
                Holiday Day
              </th>
              <th scope="col" className="px-6">
                Holiday Date
              </th>
              <th scope="col" className="px-6">
                Holiday Name
              </th>
              <th scope="col" className="px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {holiday?.map(({ date, holiday, weakly, color, id }) => {
              return (
                <tr
                  key={id}
                  className="bg-white space-y-2 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <p>{id}</p>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-10 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {weakly}
                  </th>
                  <td className="px-6 py-4">{date}</td>

                  <td className="px-6 py-4">
                    <div
                      className={`bg-${color}-100 text-${color}-700 border-1 -ml-2 rounded-xl px-4 py-1 max-w-fit`}
                    >
                      <h2>{holiday}</h2>
                    </div>
                  </td>

                  <td className="px-6 py-4 flex items-center">
                    <BiEdit className="w-5 h-5 text-green-700 mr-5" />
                    <FiDelete className="w-5 h-5 text-red-500" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
