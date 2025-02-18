"use client";
import ProfileSidebar from "@/components/BusinessProfile/ProfileSidebar";
import { Paper, Typography } from "@mui/material";
import { useState } from "react";

const BusinessProfileLayout = ({ children, onMenuChange }) => {
  const [activeMenu, setActiveMenu] = useState("Profile");

  const handleSelect = (menu) => {
    setActiveMenu(menu);
    if (onMenuChange) {
      onMenuChange(menu);
    }
  };

  return (
    <>
      <Typography className="!text-[#000000] !mb-5 !mt-5 !font-inter !text-[40px] !font-bold">
        Business Profile
      </Typography>
      <Paper className="!rounded-2xl !shadow-lg !shadow-gray-300">
        <div className="links-box flex flex-col md:flex-row gap-4 p-4">
          <ProfileSidebar activeMenu={activeMenu} handleSelect={handleSelect} />
          <div
            className="flex-1 overflow-y-auto max-h-screen"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#FFDAC5 #f4f4f4",
            }}
          >
            {children}
          </div>
        </div>
      </Paper>
    </>
  );
};

export default BusinessProfileLayout;
