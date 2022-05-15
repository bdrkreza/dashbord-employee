import Image from "next/image";
import React, { Fragment } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IInVoices } from "../../Types";

type Props = {
  data: IInVoices[] | null;
};

const InvoiceTableAccount = ({ data }: Props) => {
  return (
    <Fragment>
      <div className="w-full min-h-fit  border bg-gray-50 p-10 mt-5 rounded-xl">
        <div className="flex justify-between w-full items-center shadow rounded-xl px-5 py-6 bg-fuchsia-300 -mt-20 ">
          <h1 className="font-semibold text-2xl">Client Invoices</h1>
        </div>
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
          <table className="min-w-full bg-transparent dark:bg-gray-800">
            <thead>
              <tr className="w-full h-16 border-gray-300  dark:border-gray-200 border-b font-serif font-semibold py-8">
                <th className="text-gray-600 dark:text-gray-400   pl-5 text-left text-md tracking-normal leading-4">
                  Invoice Number
                </th>

                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left tracking-normal leading-4">
                  Client Name
                </th>
                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left tracking-normal leading-4">
                  Amount
                </th>
                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left tracking-normal leading-4">
                  Start Date
                </th>
                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left  tracking-normal leading-4">
                  End Date
                </th>
                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left  tracking-normal leading-4">
                  status
                </th>
                <td className="text-gray-600 dark:text-gray-400 pr-8 text-left  tracking-normal leading-4">
                  More
                </td>
              </tr>
            </thead>
            <tbody>
              {data?.map((invs: any, index) => {
                return (
                  <tr
                    key={index}
                    className="h-20  border-gray-300 dark:border-gray-200 border-b"
                  >
                    <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 pl-5">
                      {invs.invoiceId}
                    </td>

                    <td className="pr-6 whitespace-no-wrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8">
                          <Image
                            height={100}
                            width={100}
                            src={invs.image}
                            alt="client_image"
                            className="h-full w-full rounded-full overflow-hidden shadow"
                          />
                        </div>
                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">
                          {invs.name}
                        </p>
                      </div>
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      ${invs.amount}
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {invs.start_date}
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {invs.end_date}
                    </td>
                    <td className="text-md  pr-8 text-center">
                      {invs.status ? (
                        <h1
                          className={`bg-green-100 text-green-700 border-1 -ml-2 rounded-xl px-4 text-lg py-0 max-w-fit`}
                        >
                          paid
                        </h1>
                      ) : (
                        <h1
                          className={`bg-red-400 text-gray-100 border-1 -ml-2 rounded-xl px-4 text-lg py-0 max-w-fit`}
                        >
                          Pending
                        </h1>
                      )}
                    </td>
                    <td className="pr-8 relative">
                      <div className="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                        <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                          <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                            Edit
                          </li>
                          <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                            Delete
                          </li>
                          <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                            Duplicate
                          </li>
                        </ul>
                      </div>
                      <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-dots-vertical dropbtn"
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
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={12} cy={19} r={1} />
                          <circle cx={12} cy={5} r={1} />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* pagination  */}
          <div className="flex  items-center justify-end mt-5">
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
      </div>
    </Fragment>
  );
};
export default InvoiceTableAccount;
