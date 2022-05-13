import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IAttendanceTable } from "../../Types";

const tableHead = [
  {
    name: "#",
  },
  {
    name: "date",
  },
  {
    name: "punch In Time",
  },
  {
    name: "punch out time",
  },
  {
    name: "Break Time",
  },
  {
    name: "Half Day",
  },
  {
    name: "Full Day",
  },
  {
    name: "OverTime",
  },
  {
    name: "Total Production",
  },
];

type Props = {
  tableDb: IAttendanceTable[] | null;
};

export default function AttendanceTable({ tableDb }: Props) {
  return (
    <>
      <div className="overflow-x-auto shadow border-x-2  mt-10 sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableHead.map((thead, idx) => (
                <th key={idx} scope="col" className="px-10 py-5">
                  {thead.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableDb?.map(
              ({
                date,
                break_time,
                full_day,
                half_day,
                over_time,
                punchIn_time,
                punchOut_time,
                total,
                id,
              }: IAttendanceTable) => {
                return (
                  <tr key={id} className="bg-white font-semibold  border-b ">
                    <td className="px-10 py-6">
                      <h1>{id}</h1>
                    </td>
                    <td className="px-10">
                      <h1>{date}</h1>
                    </td>
                    <td className="px-10">
                      <h1>{punchIn_time}</h1>
                    </td>
                    <td className="px-10 text-pink-400">
                      <h1>{punchOut_time}</h1>
                    </td>
                    <td className="px-10 text-red-500">
                      <h1>{break_time}</h1>
                    </td>
                    <td className="px-10">
                      <h1>
                        {half_day ? (
                          <AiOutlineCloseCircle className="text-green-300 w-5 h-5" />
                        ) : (
                          <AiOutlineCloseCircle className="text-red-300 w-5 h-5" />
                        )}
                      </h1>
                    </td>
                    <td className="px-10">
                      <h1>
                        {full_day ? (
                          <AiOutlineCloseCircle className="text-green-300 w-5 h-5" />
                        ) : (
                          <AiOutlineCloseCircle className="text-red-300 w-5 h-5" />
                        )}
                      </h1>
                    </td>
                    <td className="px-10">
                      <h1>{over_time}</h1>
                    </td>
                    <td className="px-10">
                      <h1>{total}</h1>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>

        {/* pagination  */}
        <div className="flex  items-center justify-end p-5">
          <div className="mr-3 flex">
            <label
              htmlFor="countries"
              className="block mb-2 mr-3 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Rows per page
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-12/12 p-1"
            >
              <option value="US">10</option>
              <option value="CA">15</option>
              <option value="FR">20</option>
              <option value="DE">25</option>
            </select>
          </div>

          <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
            <p
              className="text-base text-gray-600 dark:text-gray-400"
              id="page-view"
            >
              Viewing 1 - 20 of 60
            </p>
            <a className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded">
              <FaChevronLeft />
            </a>
            <a className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer">
              <FaChevronRight className="ml-2" />
            </a>
          </div>
          <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 pb-3 lg:pb-0 lg:px-6">
            <div className="relative w-32 z-10">
              <div className="pointer-events-none text-gray-600 dark:text-gray-400 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                <FaChevronDown className="mt-1" />
              </div>
              <select
                aria-label="Selected tab"
                className="focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent"
              >
                <option>List View</option>
                <option>Grid View</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
