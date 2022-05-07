import React from "react";
import { AppFooter, AppHeader, AppSidebar } from "../components";

const DefaultLayout = ({ children }: any) => {
  const [open, setOpen] = React.useState(false);

  const nav = {
    navMl: {
      marginLeft: "80px",
    },
    navM: {
      marginLeft: "280px",
    },
  };
  return (
    <>
      <div className="flex">
        <div className="fixed">
          <AppSidebar open={open} setOpen={setOpen} />
        </div>
        {/* app content */}

        <div
          className="flex-1  duration-500"
          style={open ? nav.navM : nav.navMl}
        >
          <AppHeader open={open} setOpen={setOpen} />
          <div style={{ minHeight: "80%" }} className="p-10 mt-20">
            {children}
          </div>
          <AppFooter />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
