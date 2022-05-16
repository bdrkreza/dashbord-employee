import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";

type Props = {
  openTab: any;
  setOpenTab: any;
};

export default function TabsButtonSetting({ setOpenTab, openTab }: Props) {
  return (
    <>
      <div className="mb-4  border-b-2 border-r-2 shadow  dark:border-gray-700">
        <ul
          className="flex flex-col text-xl space-y-3 font-serif  font-medium"
          role="tablist"
        >
          <li className="" role="presentation">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              className={
                "w-full py-3 px-8  rounded flex items-center border-l-4  focus:outline-none focus:ring-0  border-transparent" +
                (openTab == 1
                  ? "text-blue-500 bg-blue-100 border-l-green-800 rounded-r-full border-l-4"
                  : "text-blue-600 bg-white")
              }
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
            >
              <FiSettings className="mr-3" />
              General Setting
            </button>
          </li>
          <li className="" role="presentation">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              className={
                "flex items-center w-full py-3  px-8  rounded border-l-4   focus:outline-none focus:ring-0 border-transparent" +
                (openTab === 2
                  ? "text-blue-500 bg-blue-100 border-l-green-800 rounded-r-full  border-l-4"
                  : "text-blue-600 bg-white")
              }
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              <FaUserCircle className="mr-3" />
              Profile Setting
            </button>
          </li>
          <li className="" role="presentation">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              className={
                "flex items-center w-full py-3 border-l-4  px-8 rounded focus:outline-none  border-1 border-transparent" +
                (openTab === 3
                  ? "text-white bg-blue-100 border-l-green-800 rounded-r-full border-l-4"
                  : "text-blue-600 bg-white")
              }
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              <IoIosNotificationsOutline className="mr-3 w-6 h-6 text-blue-5" />
              Notification
            </button>
          </li>
          <li className="" role="presentation">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              className={
                "flex items-center w-full py-3 px-8 focus:outline-none focus:ring-0 border-l-4 rounded border-1 border-transparent" +
                (openTab === 4
                  ? "text-white bg-blue-100 border-l-green-800 rounded-r-full  border-l-4"
                  : "text-blue-600 bg-white")
              }
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              <BsPencilSquare className="mr-3 " />
              Attendance
            </button>
          </li>
          <li className="" role="presentation">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(5);
              }}
              className={
                "flex items-center w-full py-3  px-8 border-l-4  focus:outline-none focus:ring-0 rounded" +
                (openTab === 5
                  ? "text-white bg-blue-100 border-l-green-800 rounded-r-full  border-l-4"
                  : "text-blue-600 bg-white")
              }
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              <IoColorPalette className="mr-3" />
              Theme Setting
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
