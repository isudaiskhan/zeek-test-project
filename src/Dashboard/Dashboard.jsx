import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import SuperAdmin from "../SuperAdmin/SuperAdmin";
import UserMetrics from "../UserMetrics/UserMetrics";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#f5f5f5] p-4 border-r border-gray-200">
        <Typography
          variant="h6"
          className="!font-semibold !mb-4 !text-gray-600"
        >
          Analytics Dashboard
        </Typography>
        <div className="space-y-2">
          <Button
            fullWidth
            onClick={() => setActiveTab("business")}
            className={`!justify-start !rounded-lg !px-4 !py-3 ${
              activeTab === "business"
                ? "!bg-orange-500 !text-white"
                : "!text-gray-600 hover:!bg-gray-200"
            }`}
          >
            Business Metrics
          </Button>
          <Button
            fullWidth
            onClick={() => setActiveTab("user")}
            className={`!justify-start !rounded-lg !px-4 !py-3 ${
              activeTab === "user"
                ? "!bg-orange-500 !text-white"
                : "!text-gray-600 hover:!bg-gray-200"
            }`}
          >
            User Metrics
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-[#fafafa]">
        {activeTab === "business" ? <SuperAdmin /> : <UserMetrics />}
      </div>
    </div>
  );
};

export default Dashboard;
