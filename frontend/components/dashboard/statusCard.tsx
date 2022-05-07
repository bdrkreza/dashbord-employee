import React from "react";

export default function StatusCard({ status }: any) {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="w-full grid sm:grid-cols-1 font-serif md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <>
          {status.map(
            (
              { title, count, persistence, color, icon: Icon }: any,
              index: number
            ) => {
              return (
                <div
                  key={index}
                  className="bg-gray-100  dark:bg-gray-800 rounded shadow px-0 py-6 flex flex-col items-center divide-y-[1px] space-y-5 "
                >
                  <div className="grid grid-cols-2 gap-24">
                    <div
                      className={`p-4 bg-${color}-500  shadow-xl -mt-12 rounded-xl flex justify-center items-center text-white`}
                    >
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="ml-6">
                      <p className="mb-1 text-gray-600 dark:text-gray-400 text-xl tracking-normal font-normal leading-5">
                        {title}
                      </p>
                      <h3 className=" leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
                        {count}
                      </h3>
                    </div>
                  </div>

                  <div className="py-3">
                    <div className="flex flex-col w-80">
                      <div className="w-full flex justify-end">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8 3.33334V12.6667"
                              stroke="#16A34A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 7.33334L8 3.33334"
                              stroke="#16A34A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4 7.33334L8 3.33334"
                              stroke="#16A34A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="text-xs leading-none text-green-600">
                            {persistence}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2.5">
                        <div className="w-full h-1 bg-gray-200 rounded-full">
                          <div className="w-1/2 h-1 bg-blue-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-1.5 text-sm leading-3 text-gray-400">
                      Since last month
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </>
      </div>
      {/* Card code block end */}
    </>
  );
}
