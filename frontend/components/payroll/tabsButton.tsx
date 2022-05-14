import React from "react";

type Props = {
  openTab: any;
  setOpenTab: any;
};

export default function TabsButton({ setOpenTab, openTab }: Props) {
  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-xl  font-serif  border-y-2 font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="" role="presentation">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              className={
                "inline-block py-5 px-8 rounded border-1 border-transparent" +
                (openTab === 1
                  ? "text-white bg-blue-300"
                  : "text-blue-600 bg-white")
              }
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Employee
            </button>
          </li>
          <li className="" role="presentation">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              className={
                "inline-block py-5 px-8 rounded border-1 border-transparent" +
                (openTab === 2
                  ? "text-white bg-blue-300"
                  : "text-blue-600 bg-white")
              }
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Invoice List
            </button>
          </li>
          <li className="" role="presentation">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              className={
                "inline-block py-5 px-10 rounded border-1 border-transparent" +
                (openTab === 3
                  ? "text-white bg-blue-300"
                  : "text-blue-600 bg-white")
              }
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Salary slip
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
