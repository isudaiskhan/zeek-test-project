"use client";
import Sidebar from "@/components/HelpCenter/Sidebar/Sidebar";
import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";

const Layout = ({ children, onMenuChange }) => {
  const [activeMenu, setActiveMenu] = useState("faq");

  const handleSelect = (menu) => {
    setActiveMenu(menu);
    if (onMenuChange) {
      onMenuChange(menu);
    }
  };
  return (
    <>
      <Typography className="!text-[#000000] !mb-5 !mt-5 !mx-5 !font-inter !text-[40px] !font-bold">
        Help Center
      </Typography>
      <Paper className="!rounded-2xl !shadow-lg !shadow-gray-300">
        <div className="links-box flex flex-col md:flex-row gap-10 p-4 ">
          <Sidebar activeMenu={activeMenu} handleSelect={handleSelect} />
          <div className="flex-1 overflow-y-auto max-h-screen !border-0 !border-solid !border-[#E7E7E7] !border-l-2">
            {children}
          </div>
        </div>
      </Paper>
    </>
  );
};

export default Layout;
