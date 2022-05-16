import React from "react";
import TabsButtonSetting from "./tabsButton";

type Props = {};

export default function Setting({}: Props) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-start-1">
          <TabsButtonSetting setOpenTab={setOpenTab} openTab={openTab} />
        </div>
        <div>
          <h1>home</h1>
        </div>
      </div>
    </div>
  );
}
