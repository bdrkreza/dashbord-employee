import React from "react";
import { invoices } from "../../pages/api/invoice";
import ProjectReport from "./projectReport";
const InvoiceTable = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-flow-row-dense gap-10 mt-20">
        <div className="w-full">
          <ProjectReport />
        </div>
        <div className="xl:col-span-2 w-full min-h-fit  bg-gray-100  p-10   mt-5 xl:mt-0 rounded-xl">
          <div className="flex justify-between w-full items-center shadow-xl rounded-xl px-5 py-6 bg-fuchsia-300 -mt-20 ">
            <h1 className="font-semibold text-2xl">Client Invoices</h1>
            <>
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
            </>
          </div>
          <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table className="min-w-full bg-transparent dark:bg-gray-800">
              <thead>
                <tr className="w-full h-16 border-gray-300  dark:border-gray-200 border-b py-8">
                  <th className="text-gray-600 dark:text-gray-400 font-normal  pl-5 text-left text-sm tracking-normal leading-4">
                    Invoice Number
                  </th>

                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Client Name
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Amount
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Date
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    status
                  </th>
                  <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">
                    More
                  </td>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invs: any, index) => {
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
                            <img
                              src={invs.image}
                              alt
                              className="h-full w-full rounded-full overflow-hidden shadow"
                            />
                          </div>
                          <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">
                            {invs.name}
                          </p>
                        </div>
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {invs.amount}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {invs.date}
                      </td>
                      <td className="text-md  pr-8 text-center">
                        <div
                          className={`bg-${invs.color}-100 text-${invs.color}-700 border-1 -ml-2 rounded-xl px-4 py-1 max-w-fit`}
                        >
                          <h2>{invs.status}</h2>
                        </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvoiceTable;
