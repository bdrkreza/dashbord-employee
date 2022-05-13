import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoReloadCircle } from "react-icons/io5";
import TabsButton from "./tabsButton";

type Props = {};

export default function AddPayroll({}: Props) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
      <div className="mt-10">
        <div className="flex items-center justify-between px-14">
          <div className="flex items-center">
            <h1 className="text-2xl font-sans font-bold mb-2">Payroll</h1>
            <div className="p-4">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                />
              </div>
            </div>
            <BsFillPlusCircleFill className="w-8 h-8 mr-2 text-blue-700 cursor-pointer" />
            <IoReloadCircle className="w-10 h-10 text-blue-700 cursor-pointer" />
          </div>
          <TabsButton setOpenTab={setOpenTab} />
        </div>
        <hr className="divide-solid border-2 border-red-100 " />
      </div>
      <div className="mt-10">
        <div
          className={`${
            openTab === 1 ? "block" : "hidden"
          } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong className="font-medium text-gray-800 dark:text-white">
              Profile tabs associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`${
            openTab === 2 ? "block" : "hidden"
          } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tabs associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`${
            openTab === 3 ? "block" : "hidden"
          } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tabs associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
}
