import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function AddEmployee() {
  return (
    <>
      <div className="mt-10">
        <div className="flex items-center justify-between px-14">
          <h1 className="text-2xl font-sans font-bold mb-2">
            Recent Employee Update
          </h1>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiOutlineUserAdd className="w-5 h-5 mr-1" />
            Add Employee
          </button>
        </div>
        <hr className="divide-solid border-2 border-red-100 " />
      </div>
    </>
  );
}
