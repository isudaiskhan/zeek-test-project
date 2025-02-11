import { Tab, Tabs, Typography } from "@mui/material";
import React from "react";

const ChoosePermissionsArea = ({ activeTab, handleTabChange }) => {
  return (
    <div>
      <Typography variant="subtitle1" className="!mb-2 font-inter !text-lg">
        Choose Permission Area
      </Typography>
      <Typography
        variant="body2"
        className="text-[#838383] !text-sm !font-inter"
      >
        Choose where you would like to make permission changes.
      </Typography>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="none"
        className="!mt-5"
        sx={{
          "& .MuiTab-root": {
            border: "1px solid #E7E7E7",
            backgroundColor: "#F9F9F9",
          },
          "& .Mui-selected": {
            color: "#E65300",
            backgroundColor: "#FFECE1",
          },
        }}
      >
        <Tab
          className="!capitalize !font-inter"
          label="Admin Panel"
          value="admin_panel"
        />
        <Tab
          className="!capitalize !font-inter"
          label="Partner App"
          value="partner_app"
        />
      </Tabs>
    </div>
  );
};

export default ChoosePermissionsArea;
