import Image from "next/image";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsPrinter, BsShare } from "react-icons/bs";
import { FiDelete, FiEdit, FiEye } from "react-icons/fi";
import { IEmployeeSalary } from "../../Types";

type Props = {
  data: IEmployeeSalary[] | null;
};

export default function SalaryTable({ data }: Props) {
  const color = "green";
  return (
    <>
      <div className="container   mx-auto">
        <div className="mx-auto flex justify-center mt-36 relative bg-black border dark:bg-gray-800 shadow rounded">
          <div className="absolute flex -mt-20  bg-blue-200 py-5 px-5  justify-end items-start lg:items-stretch  rounded-xl w-11/12">
            <div className="w-full lg:w-2/3 flex flex-row items-start lg:items-center justify-end">
              <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                <p
                  className="text-base text-gray-600 dark:text-gray-400"
                  id="page-view"
                >
                  Viewing 1 - 20 of 60
                </p>
                <a className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </a>
                <a className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-right"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 pb-3 lg:pb-0 lg:px-6">
                <div className="relative w-32 z-10">
                  <div className="pointer-events-none text-gray-600 dark:text-gray-400 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
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
              <div className="lg:ml-6 flex items-center">
                <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm">
                  Download All
                </button>
                <div className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plus"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table className="min-w-full bg-white ">
              <thead>
                <tr className="w-full h-16 border-gray-300 text-gray-700 text-xl  border-b py-8">
                  <th className=" pr-6 px-5 text-left  tracking-normal leading-4">
                    #Emp ID
                  </th>
                  <th className="  pr-1 text-left  tracking-normal leading-4">
                    Emp Name
                  </th>
                  <th className="  pr-1 text-left  tracking-normal leading-4">
                    month - Year
                  </th>
                  <th className="  pr-6 text-left  tracking-normal leading-4">
                    Designation
                  </th>
                  <th className="  pr-6 text-left  tracking-normal leading-4">
                    salary
                  </th>
                  <th className=" pr-6 text-left  tracking-normal leading-4">
                    date
                  </th>
                  <th className=" pr-6 text-left  tracking-normal leading-4">
                    status
                  </th>
                  <th className="  tracking-normal leading-4">
                    <h1 className="mr-52"> action</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map(
                  ({
                    payId,
                    date,
                    amount,
                    designation,
                    img,
                    month,
                    name,
                    payment,
                  }) => {
                    return (
                      <tr
                        key={payId}
                        className="h-24 border-gray-300 dark:border-gray-200 border-b text-md font-medium "
                      >
                        <td className="pr-1 whitespace-no-wrap text-gray-800 px-5 dark:text-gray-100  leading-4">
                          {payId}
                        </td>
                        <td className="pr-1 whitespace-no-wrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8">
                              <Image
                                height={100}
                                width={100}
                                src={img}
                                alt="profile-image"
                                className="h-full w-full rounded-full overflow-hidden shadow"
                              />
                            </div>
                            <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">
                              {name}
                            </p>
                          </div>
                        </td>
                        <td className="pr-1 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          {month}
                        </td>

                        <td className="pr-1 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          {designation}
                        </td>
                        <td className="pr-1 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          $ {amount}
                        </td>
                        <td className="pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          {date}
                        </td>
                        <td className="pr-6">
                          {payment ? (
                            <h1
                              className={`bg-${color}-100 text-${color}-700 border-1 -ml-2 rounded-xl px-4 text-lg py-0 max-w-fit`}
                            >
                              paid
                            </h1>
                          ) : (
                            <h1
                              className={`bg-red-400 text-gray-100 border-1 -ml-2 rounded-xl px-4 text-lg py-0 max-w-fit`}
                            >
                              unpaid
                            </h1>
                          )}
                        </td>
                        <td>
                          <div className="flex items-center">
                            {menuItem.map(({ icon: Icon, color }, index) => (
                              <a
                                key={index}
                                className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                              >
                                <Icon className={`text-${color}-500 w-5 h-5`} />
                              </a>
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

const menuItem = [
  {
    icon: FiEdit,
    color: "green",
  },
  {
    icon: FiEye,
    color: "blue",
  },
  {
    icon: AiOutlineDownload,
    color: "orange",
  },
  {
    icon: BsPrinter,
    color: "purple",
  },
  {
    icon: BsShare,
    color: "blue",
  },
  {
    icon: FiDelete,
    color: "red",
  },
];
