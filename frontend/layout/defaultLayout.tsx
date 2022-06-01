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
      <div className="fixed">
        <AppSidebar open={open} setOpen={setOpen} />
      </div>
      {/* app content */}
      <AppHeader open={open} setOpen={setOpen} />
      <div className="duration-500" style={open ? nav.navM : nav.navMl}>
        <div style={{ minHeight: "80%" }} className="p-10 mt-20">
          {children}
        </div>
        <AppFooter />
      </div>
    </>
  );
};

export default DefaultLayout;
