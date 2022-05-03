import React from "react";
import { AppFooter, AppHeader, AppSidebar } from "../components";

const DefaultLayout = ({ children }: any) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="flex">
        <div className="fixed">
          <AppSidebar open={open} setOpen={setOpen} />
        </div>
        {/* app content */}

        <div className="flex-1 h-screen" style={{ marginLeft: "80px" }}>
          <AppHeader />
          <div style={{ minHeight: "80%" }} className="p-10">
            {children}
          </div>
          <AppFooter />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
