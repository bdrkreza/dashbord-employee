import React from "react";
import { IDepartment } from "../../Types";

type Props = {
  data: IDepartment[] | null;
};

export default function DepartmentTopBar({ data }: Props) {
  return (
    <div>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
        {data?.map(
          ({ name, person, color, icon: Icon }: IDepartment, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-md dark:bg-gray-800 rounded-xl border-x-2  px-8 py-6 flex justify-between items-center"
              >
                <div className="space-y-3 font-bold text-xl font-serif">
                  <p className="text-gray-600 dark:text-gray-400 tracking-normal leading-5">
                    {name}
                  </p>
                  <h3 className={`leading-5 text-2xl text-${color}-500`}>
                    {person}
                  </h3>
                </div>
                <div className={`p-4 bg-${color}-100 rounded`}>
                  <Icon className={`w-6 h-6 text-${color}-500`} />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
