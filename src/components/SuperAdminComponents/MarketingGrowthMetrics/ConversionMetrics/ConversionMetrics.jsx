"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { BubbleChart } from "@mui/icons-material";

const ConversionMetrics = ({ conversionRate, totalCampaigns }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }} className="lg:col-span-2">
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <BubbleChart className="text-[#FF9A62]" style={{ fontSize: 32 }} />
          </div>
          <div>
            <Typography variant="h6" className="font-semibold">
              Conversion Performance
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Campaign Breakdown
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-16">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <Typography variant="h4" className="font-bold text-[#FF9A62]">
              {conversionRate}%
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Conversion Rate
            </Typography>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <Typography variant="h4" className="font-bold">
              {totalCampaigns}
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Active Campaigns
            </Typography>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <Typography variant="h4" className="font-bold">
              12.4K
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Total Clicks
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionMetrics;
