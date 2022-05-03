import Image from "next/image";
import React from "react";
import bengali from "../../../public/bangladesh.svg";
import indian from "../../../public/india.svg";
import english from "../../../public/united-states.svg";
export default function Language() {
  return (
    <>
      <ul className="p-2 w-40 border-2 mt-3 -ml-20 text-md bg-white absolute rounded shadow divide-y">
        <li className="cursor-pointer text-gray-600  leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <div className="flex items-center">
            <Image src={english} width={22} height={22} alt="" />
            <span className="ml-3 ">English</span>
          </div>
        </li>
        <li className="cursor-pointer text-gray-600  leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <div className="flex items-center">
            <Image src={bengali} width={22} height={22} alt="" />
            <span className="ml-3">Bengali</span>
          </div>
        </li>
        <li className="cursor-pointer text-gray-600 py-2 leading-3 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <div className="flex items-center">
            <Image src={indian} width={22} height={22} alt="" />
            <span className="ml-3 ">Hindi</span>
          </div>
        </li>
      </ul>
    </>
  );
}
