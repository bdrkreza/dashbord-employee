import React from "react";
import { IProgress } from "../../Types";
type Props = {
  progData: IProgress;
  key: string;
};
export default function StatisticsProgressBar({ progData }: Props) {
  const { title, percentage, hours, color } = progData;
  return (
    <div className="mb-6">
      <div className="flex justify-between">
        <span className="text-lg font-medium  text-gray-700 dark:text-white">
          {title}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {hours}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`${
            percentage < 30 ? "bg-red-600" : `bg-${color}-200`
          } text-xs font-medium text-gray-800 text-center  leading-none rounded-full`}
          style={{ width: `${percentage}%` }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}
