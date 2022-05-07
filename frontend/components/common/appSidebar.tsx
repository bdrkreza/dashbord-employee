/* eslint-disable react/jsx-key */
import React from "react";
import { GiHomeGarage } from "react-icons/gi";
import _nav from "../../utils/_nav";
import AppSidebarNav from "./appSidebarNav";

export default function AppSidebar({ open }: any) {
  return (
    <React.Fragment>
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen bg-gray-800 relative p-5 pt-8`}
      >
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
