import React from "react";
import { BsClipboardPlus, BsFillPlusCircleFill } from "react-icons/bs";
import { IoReloadCircle } from "react-icons/io5";

type Props = {};

export default function HolidaysTopBar({}: Props) {
  return (
    <div>
      <div className="mt-10">
        <div className="flex items-center justify-between px-14">
          <div className="flex items-center">
            <h1 className="text-2xl font-sans font-bold mb-2">Holidays</h1>
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
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <BsClipboardPlus className="w-5 h-5 mr-1" />
            Add Holidays
          </button>
        </div>
        <hr className="divide-solid border-2 border-red-100 " />
      </div>
    </div>
  );
}
