import Image from "next/image";
import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IEmployeeSalary } from "../../Types";

type Props = {
  data: IEmployeeSalary[] | null;
};

export default function InvoiceList({ data }: Props) {
  return (
    <div className="container w-3/4 m-auto text-center">
      {data?.map((employee) => {
        return (
          <div key={employee.payId} className="mt-5 border-2">
            <div className="flex justify-between bg-slate-200 px-5  border-x-2 border-b-2 border-slate-300 py-2 rounded-md">
              <div className="flex space-x-5">
                <Image
                  height={50}
                  width={40}
                  src={employee.img}
                  alt="profile-image"
                  className="h-full w-full shadow"
                />
                <div>
                  <h1 className="font-semibold text-lg">{employee.name}</h1>
                  <h1 className="font-serif text-sm mt-2 ">
                    {employee.designation}
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-sm font-serif font-semibold">
                  2211 Jones Avenue,Winston Salem FL 27107
                </h1>
                <div className="flex text-sm items-center space-x-2 justify-end mt-2">
                  <FaMoneyBillAlt className="w-5 h-5 text-gray-600" />
                  <h1>${employee.amount}</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-between  p-2">
              <div>
                <h1>
                  <span className="font-semibold">Payment on:</span> 23 Feb 2021
                </h1>
              </div>
              <div className="space-x-2">
                <button
                  type="button"
                  className="text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-red-100 focus:ring-1  font-medium rounded-md text-sm px-5 py-1"
                >
                  download
                </button>
                <button
                  type="button"
                  className="text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-red-100 focus:ring-1  font-medium rounded-md text-sm px-5 py-1"
                >
                  send
                </button>
                <button
                  type="button"
                  className="text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-red-100 focus:ring-1  font-medium rounded-md text-sm px-5 py-1"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
