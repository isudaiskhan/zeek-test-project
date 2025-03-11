import { Box, Typography } from "@mui/material";
import React from "react";

const CustomTab = ({ tabs, activeTab, handleTabClick, isUpdateLoyalty }) => {
  return (
    <Box className="flex flex-col items-center justify-center gap-1 py-5 w-full">
      <div
        className={`${
          isUpdateLoyalty ? "w-full" : "w-[80%]"
        } flex flex-col md:flex-row gap-2 items-center justify-center bg-white p-2 rounded-md shadow-md`}
        style={{
          boxShadow: "-1px 2px 20px -5px #00000040",
        }}
      >
        {tabs.map((tab) => (
          <Box
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={`w-full h-auto justify-center items-center font-semibold px-16 py-2 rounded-md transition duration-200 cursor-pointer ${
              activeTab === tab.value
                ? "bg-orange-100 text-gray-800 hover:bg-orange-200"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#696969",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              {tab.label}
            </Typography>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default CustomTab;
