import Image from "next/image";
import React, { Fragment } from "react";
import { BiEdit } from "react-icons/bi";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { IExpenses } from "../../Types";

type Props = {
  data: IExpenses[] | null;
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
              <tr className="w-full h-16 border-gray-300  capitalize dark:border-gray-200 border-b font-serif font-semibold py-8">
                <th className="text-gray-600 dark:text-gray-400   pl-5 text-left text-md tracking-normal leading-4">
                  exp ID
                </th>

                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left tracking-normal leading-4">
                  Items
                </th>
                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left tracking-normal leading-4">
                  order by
                </th>
                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left tracking-normal leading-4">
                  Date
                </th>
                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left  tracking-normal leading-4">
                  From
                </th>
                <th className="text-gray-600 dark:text-gray-400  pr-6 text-left  tracking-normal leading-4">
                  status
                </th>
                <td className="text-gray-600 dark:text-gray-400  pr-4 text-left  tracking-normal leading-4">
                  action
                </td>
              </tr>
            </thead>
            <tbody>
              {data?.map((exps) => {
                return (
                  <tr
                    key={exps.expId}
                    className="h-20  capitalize border-gray-300 dark:border-gray-200 border-b"
                  >
                    <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 pl-5">
                      {exps.expId}
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {exps.item}
                    </td>
                    <td className="pr-6 whitespace-no-wrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8">
                          <Image
                            height={100}
                            width={100}
                            src={exps.image}
                            alt="client_image"
                            className="h-full w-full rounded-full overflow-hidden shadow"
                          />
                        </div>
                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">
                          {exps.order_by}
                        </p>
                      </div>
                    </td>

                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {exps.date}
                    </td>

                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {exps.from}
                    </td>
                    <td className="text-md  pr-8 text-center">
                      {exps.status ? (
                        <h1
                          className={`bg-green-100 text-green-700 border-1 -ml-3 rounded-xl px-4 text-md font-serif py-0 max-w-fit`}
                        >
                          Complete
                        </h1>
                      ) : (
                        <h1
                          className={`bg-red-400 text-gray-100 border-1 -ml-2 rounded-xl px-4 text-lg py-0 max-w-fit`}
                        >
                          In Progress
                        </h1>
                      )}
                    </td>
                    <td className="px-6 py-4 -ml-4 flex items-center">
                      <BiEdit className="w-5 h-5 cursor-pointer text-green-700 mr-5" />
                      <FiDelete className="w-5 h-5 cursor-pointer text-red-500" />
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
