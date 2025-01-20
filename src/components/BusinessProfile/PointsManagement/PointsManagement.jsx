"use client";
import React, { useState } from "react";
import Rules from "./Rules";
import Tiers from "./Tiers";
import { Box, Tabs, Tab, Typography } from "@mui/material";

const PointsManagement = () => {
  const [activeTab, setActiveTab] = useState("rules");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box className="w-full p-6">
      <Typography variant="h6" className="!font-inter !text-2xl">
        Points Management
      </Typography>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="![#FF5B00]"
        className="border-b-2 !mt-10 border-b-[#E7E7E7] border-solid border-0"
        indicatorColor="![#FF5B00]"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#FF5B00",
          },
          "& .MuiTab-root": {
            color: "#000",
          },
          "& .Mui-selected": {
            color: "#FF5B00",
          },
        }}
      >
        <Tab label="Rules" value="rules" />
        <Tab label="Tiers" value="tiers" />
      </Tabs>

      <Box className="mt-4">
        {activeTab === "rules" ? <Rules /> : <Tiers />}
      </Box>
    </Box>
  );
};

export default PointsManagement;
