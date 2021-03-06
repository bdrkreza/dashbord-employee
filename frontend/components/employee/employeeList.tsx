import Image from "next/image";
import React from "react";
import { BiBookAdd } from "react-icons/bi";
import { RiProfileFill } from "react-icons/ri";
import { IEmployee } from "../../Types";

interface IProps {
  employee: IEmployee[] | null;
}

export default function EmployeeList({ employee }: IProps) {
  return (
    <>
      <div className="grid grid-cols-1 grid-flow-row-dense xl:grid-cols-2 gap-10">
        {employee?.map(
          ({ name, img, designation, describe }: IEmployee, index) => {
            return (
              <div
                key={index}
                className="grid  grid-cols-1 grid-flow-row-dense md:grid-cols-3  xl:grid-cols-3 w-full items-start  lg:items-center rounded bg-white shadow"
              >
                <div className="w-full h-full dark:border-gray-700 flex items-center justify-center  border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-50">
                  <div className="rounded-full p-5  flex items-center justify-center border-2 ">
                    <Image height={110} width={110} src={img} alt="" />
                  </div>
                </div>
                <div className="w-full h-full  col-span-2  dark:bg-gray-800 space-y-3 p-2 ">
                  <h1 className="font-bold text-xl font-sans ml-1">{name}</h1>
                  <h2 className="bg-blue-200 rounded-md max-w-fit py-1 px-3">
                    {designation}
                  </h2>
                  <hr className="mb-3 border-red-100 mt-2" />
                  <h3>{describe}</h3>
                  <div className="mt-2 flex items-center">
                    <button
                      type="button"
                      className="text-gray-100  bg-[#484c7f] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center"
                    >
                      <BiBookAdd className="mr-1 w-5 h-5" />
                      Add Task
                    </button>
                    <button
                      type="button"
                      className="text-gray-900 bg-gradient-to-r from-blue-200 via-sky-300 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center"
                    >
                      <RiProfileFill className="mr-1 w-5 h-5" />
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
