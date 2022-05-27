import React from "react";
import GeneralSetting from "./generalSetting";
import ProfileSetting from "./profileSetting";
import TabsButtonSetting from "./tabsButton";

type Props = {};

export default function Setting({}: Props) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="col-start-1 ">
          <TabsButtonSetting setOpenTab={setOpenTab} openTab={openTab} />
        </div>
        <div className="col-span-4">
          <div
            className={`${openTab === 1 ? "block" : "hidden"} bg-gray-50 `}
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <GeneralSetting />
          </div>

          <div
            className={`${openTab === 2 ? "block" : "hidden"} bg-gray-50 `}
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <ProfileSetting />
          </div>
        </div>
      </div>
    </div>
  );
}
