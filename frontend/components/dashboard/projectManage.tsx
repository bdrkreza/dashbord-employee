import React from "react";
export default function ProjectManage() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full bg-gray-100 h-full dark:bg-gray-800 shadow rounded px-8 py-6">
          <div className="flex items-center justify-between w-full px-8 p-3 bg-orange-300 rounded-xl shadow-xl -mt-14">
            <div>
              <p className="sm:text-2xl text-xl font-semibold leading-6 text-gray-800 dark:text-gray-100">
                12d 23hrs
              </p>
              <p className="text-xs leading-3 text-gray-500 mt-1">
                To complete
              </p>
            </div>
            <div className="sm:ml-28">
              <svg
                className="text-white dark:text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width={55}
                height={55}
                viewBox="0 0 55 55"
                fill="none"
              >
                <circle cx="27.5" cy="27.5" r="27.5" fill="#E2E8F0" />
                <path
                  d="M55 27.5C55 32.939 53.3872 38.2558 50.3654 42.7782C47.3437 47.3005 43.0488 50.8253 38.0238 52.9067C32.9988 54.9881 27.4695 55.5327 22.135 54.4716C16.8005 53.4105 11.9005 50.7914 8.05456 46.9454C4.20862 43.0995 1.5895 38.1995 0.528405 32.865C-0.532689 27.5305 0.011903 22.0012 2.09331 16.9762C4.17472 11.9512 7.69947 7.65632 12.2218 4.63459C16.7442 1.61285 22.061 -6.48593e-08 27.5 0V27.5H55Z"
                  fill="#f472b6"
                />
                <circle cx={27} cy={28} r={20} fill="currentColor" />
                <path
                  d="M37 36H17V34H18V27.031C18 22.043 22.03 18 27 18C31.97 18 36 22.043 36 27.031V34H37V36ZM20 34H34V27.031C34 23.148 30.866 20 27 20C23.134 20 20 23.148 20 27.031V34ZM24.5 37H29.5C29.5 37.663 29.2366 38.2989 28.7678 38.7678C28.2989 39.2366 27.663 39.5 27 39.5C26.337 39.5 25.7011 39.2366 25.2322 38.7678C24.7634 38.2989 24.5 37.663 24.5 37Z"
                  fill="#4338CA"
                />
              </svg>
            </div>
          </div>
          <div className="mt-6">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm leading-3 text-gray-500 dark:text-gray-400">
                  Tasks
                </p>
                <p className="text-base leading-3 text-right text-gray-800 dark:text-gray-100">
                  60%
                </p>
              </div>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-4">
                <div className="w-1/2 h-1 bg-green-500 rounded-full" />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm leading-3 text-gray-500 dark:text-gray-400">
                  Budget
                </p>
                <p className="text-base leading-3 text-right text-gray-800 dark:text-gray-100">
                  $5600
                </p>
              </div>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-4">
                <div className="w-1/6 h-1 bg-pink-500 rounded-full" />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm leading-3 text-gray-500 dark:text-gray-400">
                  Hours
                </p>
                <p className="text-base leading-3 text-right text-gray-800 dark:text-gray-100">
                  320
                </p>
              </div>
              <div className="w-full h-1 bg-gray-200 rounded-full mt-4">
                <div className="w-2/5 h-1 bg-yellow-500 rounded-full" />
              </div>
            </div>
          </div>
          <p className="text-xs font-semibold leading-3 text-indigo-700 mt-6">
            Manage project
          </p>
        </div>
      </div>
    </>
  );
}
