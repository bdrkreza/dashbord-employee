import Image from "next/image";
import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IInVoices } from "../../Types";

type Props = {
  data: IInVoices[] | null;
};

export default function ClientInvoice({ data }: Props) {
  return (
    <div className="container w-3/4 m-auto">
      {data?.map((invoice) => {
        return (
          <div key={invoice.invoiceId} className="mt-5 border-2">
            <div className="flex justify-between bg-white px-5  border-x-2 border-b-2 border-slate-300 py-4 rounded-md">
              <div className="flex space-x-5">
                <Image
                  height={50}
                  width={50}
                  src={invoice.image}
                  alt="profile-image"
                  className="h-full w-full shadow"
                />
                <div>
                  <h1 className="font-semibold text-md">{invoice.company}</h1>
                  <h1 className="text-lg mt-1 capitalize">{invoice.name}</h1>
                </div>
              </div>
              <div>
                <h1 className="text-sm font-serif font-semibold">
                  2211 Jones Avenue,Winston Salem FL 27107
                </h1>
                <div className="flex text-sm items-center space-x-2 justify-end mt-2">
                  <FaMoneyBillAlt className="w-5 h-5 text-gray-600" />
                  <h1>${invoice.amount}</h1>
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
