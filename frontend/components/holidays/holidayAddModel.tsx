import React from "react";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  onCancel: () => void;
};

export default function HolidayAddModel({ onCancel }: Props) {
  return (
    <div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      <div className="justify-center max-w-full  mt-5 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full py-1  bg-white rounded-xl my-6 mx-auto max-w-3xl">
          <div className="flex justify-between items-baseline px-5 pt-3">
            <h1 className="text-2xl font-bold "> Add Holidays</h1>
            <IoCloseSharp
              onClick={onCancel}
              className="w-8 h-7 cursor-pointer"
            />
          </div>
          <div className="p-5">
            <div className="relative">
              <input
                type="text"
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_filled"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Department Name
              </label>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 p-5 ">
            <div className="relative">
              <input
                type="text"
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_filled"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Department Head
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_filled"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Employee Under Work
              </label>
            </div>
          </div>
          <hr className="h-[1px] bg-gray-100 my-10" />
          <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
            <button
              onClick={onCancel}
              className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full "
            >
              Cancel
            </button>
            <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-lg font-medium px-6 py-3 text-white lg:max-w-[144px] w-full ">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
