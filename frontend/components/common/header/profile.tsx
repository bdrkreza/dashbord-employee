import React from "react";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdForwardToInbox, MdOutlineLogout } from "react-icons/md";
export default function Profile() {
  return (
    <React.Fragment>
      <ul className="p-2 w-48 border text-md bg-white absolute rounded left-0 shadow mt-20 top-0 divide-y ">
        <li className="cursor-pointer text-gray-600  leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <div className="flex items-center">
            <AiOutlineUser className="w-5 h-5" />
            <span className="ml-2">My Profile</span>
          </div>
        </li>
        <li className="cursor-pointer text-gray-600  leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
          <MdForwardToInbox className="w-5 h-5" />
          <span className="ml-2">Inbox</span>
        </li>
        <li className="cursor-pointer text-gray-600  leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
          <AiOutlineSetting className="w-5 h-5" />
          <span className="ml-2">Account Settings</span>
        </li>
        <li className="cursor-pointer text-gray-600 leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
          <MdOutlineLogout className="w-5 h-5" />
          <span className="ml-2">Logout</span>
        </li>
      </ul>
    </React.Fragment>
  );
}
