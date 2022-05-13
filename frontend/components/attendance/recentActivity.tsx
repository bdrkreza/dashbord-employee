import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";

type Props = {
  item: {
    title: string;
    name: string;
    time: string;
    color: string;
  };
};

export default function RecentActivity({ item }: Props) {
  const { title, color, name, time } = item;
  return (
    <>
      <li className="mb-10 ml-4  ">
        <div
          className={`absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5  border-2  border-${color}-500 cursor-pointer hover:bg-${color}-500 `}
        ></div>
        <div className="flex items-baseline  space-x-5">
          <time className="mb-1 flex items-center space-x-2">
            <h1
              className={`text-md bg-${color}-200 max-w-fit rounded-full px-2 py-1`}
            >
              {name}
            </h1>
          </time>
          <div>
            <h1 className="font-bold text-md">{title}</h1>
            <div className="flex items-center space-x-2">
              <AiOutlineFieldTime className="w-6 h-6 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {time}
              </h3>
            </div>
          </div>
        </div>
        <hr className=" border-gray-300 border-1" />
      </li>
    </>
  );
}
