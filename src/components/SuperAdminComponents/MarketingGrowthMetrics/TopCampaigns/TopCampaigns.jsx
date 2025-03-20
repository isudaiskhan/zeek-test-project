"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Campaign } from "@mui/icons-material";

const TopCampaigns = ({ campaigns }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }} className="lg:col-span-3">
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <Campaign className="text-[#FF9A62]" style={{ fontSize: 32 }} />
          </div>
          <Typography variant="h6" className="font-semibold">
            Top Performing Campaigns
          </Typography>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
            >
              <div className="mb-2">
                <Typography variant="subtitle1" className="font-semibold">
                  {campaign.name}
                </Typography>
              </div>
              <div className="flex justify-center gap-2">
                <Typography
                  variant="body2"
                  className="text-[#FF9A62] font-bold"
                >
                  {`${campaign.conversion}%`}
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  Conversion
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCampaigns;
