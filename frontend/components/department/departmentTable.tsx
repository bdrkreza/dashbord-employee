import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { IDepartmentTeam } from "../../Types";

type Props = {
  data: IDepartmentTeam[] | null;
};

export default function DepartmentTable({ data }: Props) {
  return (
    <div>
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
                Department Head
              </th>
              <th scope="col" className="px-6">
                Department Name
              </th>
              <th scope="col" className="px-6">
                Employee Under Work
              </th>
              <th scope="col" className="px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map(
              ({
                id,
                department,
                color,
                image,
                team_head,
                under_work,
              }: IDepartmentTeam) => {
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
                      className="px-10 py-4 flex items-center  font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      <Image
                        src={image}
                        height={40}
                        width={40}
                        alt="profile_image"
                      />
                      <h1 className=" ml-3 font-bold text-md"> {team_head}</h1>
                    </th>
                    <td className="px-6 py-4">
                      <h1
                        className={`bg-${color}-100 text-${color}-700 border-1 -ml-2 rounded-xl px-4 py-1 max-w-fit`}
                      >
                        {department}
                      </h1>
                    </td>

                    <td className="px-6 py-4">
                      <h2
                        className={`bg-${color}-100 text-${color}-100 border-1 ml-10 rounded-xl px-4 py-1 max-w-fit`}
                      >
                        {under_work}
                      </h2>
                    </td>

                    <td className="px-6 py-4 flex items-center">
                      <BiEdit className="w-5 h-5 text-green-700 mr-5" />
                      <FiDelete className="w-5 h-5 text-red-500" />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        {/* pagination  */}
        <div className="flex  items-center justify-end p-5">
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
    </div>
  );
}
