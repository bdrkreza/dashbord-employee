import React from "react";
export default function StatusCard() {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="w-full grid sm:grid-cols-1 font-serif md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <>
          {[1, 2, 3, 4].map((status) => {
            return (
              <div
                key={status}
                className="bg-gray-100  dark:bg-gray-800 rounded shadow px-0 py-6 flex flex-col items-center divide-y-[1px] space-y-5 "
              >
                <div className="grid grid-cols-2 gap-36">
                  <div className="p-4 bg-pink-700 z-10 shadow-xl -mt-12 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-discount"
                      width={32}
                      height={32}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={9} y1={15} x2={15} y2={9} />
                      <circle cx="9.5" cy="9.5" r=".5" />
                      <circle cx="14.5" cy="14.5" r=".5" />
                      <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <p className="mb-1 text-gray-600 dark:text-gray-400 text-md tracking-normal font-normal leading-5">
                      Traffic
                    </p>
                    <h3 className=" leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
                      2,330
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
                          4.3%
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
          })}
        </>
      </div>
      {/* Card code block end */}
    </>
  );
}
