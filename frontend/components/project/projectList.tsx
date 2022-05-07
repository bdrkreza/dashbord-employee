import React from "react";
import { totalProject } from "../../pages/api/projectTeam";
export default function ProjectList() {
  return (
    <>
      {/* Card code block start */}
      <div className="w-full grid mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {totalProject.map(({ name, color, count }: any, index) => {
          return (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded shadow px-2 py-6 flex flex-col  items-center justify-center space-y-2"
            >
              <div
                className={`border-1 -ml-2 bg-${color}-100  text-${color}-500 rounded-xl px-4 py-1 max-w-fit`}
              >
                <h3 className="mb-1 leading-5  font-bold text-2xl">{count}</h3>
              </div>
              <div className="ml-6">
                <p className="text-gray-600 dark:text-gray-400 text-xl tracking-normal font-bold leading-5">
                  {name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Card code block end */}
    </>
  );
}
