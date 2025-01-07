/* eslint-disable @next/next/no-img-element */
"use client";

import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CouponCard from "@/components/Loyalty/CouponCard/CouponCard";
import CouponPastryCard from "@/components/Loyalty/CouponPastryCard/CouponPastryCard";
import LoyaltyCard from "@/components/Loyalty/LoyaltyCard/LoyaltyCard";
import CustomTab from "@/components/Studio/CustomTab/CustomTab";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";

const tabs = [
  { label: "Live Cards", value: "live" },
  { label: "Inactive Cards", value: "inactive" },
  { label: "Draft Cards", value: "draft" },
];

const Loyalty = () => {
  const [activeTab, setActiveTab] = useState("live");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      <Box className="flex flex-wrap items-center justify-between p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h5" fontWeight="bold" fontSize="40px">
            My Cards
          </Typography>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <CustomButton
            icon={<Add fontSize="large" sx={{ color: "#FF762A" }} />}
            bgColor="#FFDAC5"
            textColor="#787878"
            onClick={() => (window.location.href = "/studio/add-card")}
          />
        </div>
      </Box>
      {/* <Box className="flex flex-col items-center justify-center gap-1 py-5">
        <div className="w-[80%] flex flex-row gap-2 items-center justify-center bg-white p-2 rounded-md shadow-md">
          <Box
            onClick={() => handleTabClick("live")}
            className={`w-1/3 h-8 justify-center items-center font-semibold px-16 py-2 rounded-md transition duration-200 cursor-pointer ${
              activeTab === "live"
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
              Live Cards
            </Typography>
          </Box>
          <Box
            onClick={() => handleTabClick("inactive")}
            className={`w-1/3 h-8 justify-center items-center font-semibold px-6 py-2 rounded-md mx-2 transition duration-200 cursor-pointer ${
              activeTab === "inactive"
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
              Inactive Cards
            </Typography>
          </Box>
          <Box
            onClick={() => handleTabClick("draft")}
            className={`w-1/3 h-8 justify-center items-center font-semibold px-6 py-2 rounded-md transition duration-200 cursor-pointer ${
              activeTab === "draft"
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
              Draft Cards
            </Typography>
          </Box>
        </div>
      </Box> */}
      <CustomTab
        tabs={tabs}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <Box className="flex flex-col items-center justify-center gap-1 py-5">
        <div className="w-[80%]">
          {activeTab === "live" && (
            <div>
              <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 4 }}>
                  <LoyaltyCard
                    background="/images/loyaltyCard.png"
                    onClick={() =>
                      (window.location.href = "/studio/update-card-loyalty")
                    }
                  />
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }}>
                  <CouponCard background="#48617D" />
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }}>
                  <CouponPastryCard background="#99C8FF" />
                </Grid>
              </Grid>
            </div>
          )}
          {activeTab === "inactive" && (
            <div>
              <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 4 }}>
                  <LoyaltyCard
                    background="/images/inactiveLoyalty.png"
                    isInActive
                  />
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }}>
                  <CouponCard background="#A36B9D" isInActive />
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }}>
                  <CouponPastryCard background="#FED7FF" isInActive />
                </Grid>
              </Grid>
            </div>
          )}
          {activeTab === "draft" && (
            <div>
              <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 4 }}>
                  <CouponPastryCard background="#B49783" isInActive />
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
};

export default Loyalty;
