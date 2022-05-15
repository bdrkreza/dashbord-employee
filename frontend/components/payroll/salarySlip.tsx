import React from "react";
import { AiFillGold } from "react-icons/ai";

type Props = {};

export default function SalarySlip({}: Props) {
  return (
    <>
      <div className="flex items-center justify-center p-3 bg-gray-50">
        <div className="w-3/5 bg-white border shadow">
          <div className="flex justify-between p-8 text-xl">
            <div className="flex space-x-2 items-center font-bold">
              <AiFillGold />
              <h1>Bhalogari</h1>
            </div>
            <h1>
              <span>Data:</span>01-02-2021
            </h1>
          </div>
          <div className="w-full h-0.5 bg-indigo-500"></div>
          <div className="flex justify-between px-5 py-6">
            <div>
              <h6 className="font-bold">
                Emp ID:
                <span className="text-sm font-medium ml-2">#5541</span>
              </h6>
              <h6 className="font-bold mt-3">
                Location:
                <span className="text-sm font-medium ml-2">farmgate,dhaka</span>
              </h6>
            </div>
            <div>
              <h1 className="">
                <span className="font-semibold mr-2">Emp Name:</span>Faith
                Harris
              </h1>
              <h1 className="mt-2">
                <span className="font-semibold mr-2">Pay Period:</span>
                January-2021
              </h1>
            </div>
          </div>
          <div className="relative overflow-x-auto border sm:rounded-lg">
            <div className="grid grid-cols-2 border-2 p-2 divide-x-2 divide-solid divide-black">
              <div className="">
                <h1 className="font-semibold ml-2">Earnings</h1>
              </div>
              <div className="">
                <h1 className="font-semibold ml-2">Deduction</h1>
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Pay Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pay Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th className="px-6 py-4 font-medium text-gray-900 dark:text-white ">
                    Basic
                  </th>
                  <td className=" border-x px-6 py-4">HRM</td>
                  <td className="px-6 py-4">Medical Allowance</td>
                  <td className="px-6 py-4 border">00.00</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th className="px-6 py-4 font-medium text-gray-900 dark:text-white ">
                    Total Earning
                  </th>
                  <td className=" border-x px-6 py-4">$20000</td>
                  <td className="px-6 py-4">Total Deduction</td>
                  <td className="px-6 py-4 border">0000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between p-4">
            <div>
              <h1 className="font-bold text-xl">
                <span className="font-semibold  mr-2">Net Salary:</span>
                $20,0000
              </h1>
              <h1 className="font-light font-serif text-blue-300 mt-3">
                <span className="mr-2">InWords:</span>Thirty-Two Thousand only
              </h1>
            </div>
            <div className="p-4">
              <h3>Signature</h3>
              <div className="text-4xl italic text-indigo-500">AAA</div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-indigo-500"></div>

          <div className="p-4">
            <div className="flex items-center justify-center">
              Thank you very much for doing business with us.
            </div>
            <div className="flex items-end justify-end space-x-3 mt-5">
              <button className="px-4 py-2 text-sm text-green-600 bg-green-100">
                Print
              </button>
              <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100">
                Save
              </button>
              <button className="px-4 py-2 text-sm text-red-600 bg-red-100">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
