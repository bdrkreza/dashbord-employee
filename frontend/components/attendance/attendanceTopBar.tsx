import React from "react";
import { IAttendance } from "../../Types";

interface IProps {
  attendance: IAttendance[] | null;
}

export default function AttendanceTopBar({ attendance }: IProps) {
  return (
    <>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
        {attendance?.map(({ title, days, color, icon: Icon }: any, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md dark:bg-gray-800 rounded-xl border-x-2  px-8 py-6 flex justify-between items-center"
            >
              <div className="space-y-3 font-bold text-md font-serif">
                <p className="text-gray-600 dark:text-gray-400 tracking-normal leading-5">
                  {title}
                </p>
                <h3 className={`leading-5 text-2xl text-${color}-500`}>
                  {days}
                </h3>
              </div>
              <div className={`p-2 bg-${color}-100 rounded`}>
                <Icon className={`w-6 h-6 text-${color}-500`} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
