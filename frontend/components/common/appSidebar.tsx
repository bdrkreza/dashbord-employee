/* eslint-disable react/jsx-key */
import React from "react";
import { GiHomeGarage } from "react-icons/gi";
import _nav from "../../utils/_nav";
import AppSidebarNav from "./appSidebarNav";

export default function AppSidebar({ open, setOpen }: any) {
  return (
    <React.Fragment>
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen bg-gray-900 relative p-5 pt-8`}
      >
        {/* SideBar Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className=" sm:block focus:outline-none absolute p-1 -right-5 top-10 bg-gray-900 rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              open ? "rotate-90" : "-rotate-90 "
            } h-6 w-6 transition-all duration-300 text-white transform`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* brand logo */}
        <div className="flex gap-x-4 items-center justify-center">
          <GiHomeGarage className="text-white h-6 w-8" />
          <h1
            className={`font-medium text-white  text-xl duration-200 ${
              !open && "hidden"
            }`}
          >
            Bhalogari
          </h1>
        </div>

        {/* sidebar menu Item */}
        <div>
          <ul className="pt-6">
            {_nav.map((items: any, index) => (
              <AppSidebarNav items={items} index={index} open={open} />
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
