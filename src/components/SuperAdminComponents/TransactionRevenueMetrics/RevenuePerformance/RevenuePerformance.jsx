"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";
import PerformanceList from "./PerformanceList";

const RevenuePerformance = ({ topEarners, lowPerformers }) => {
  return (
    <Card className="lg:col-span-2" sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <TrendingUp className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Revenue Performance
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <PerformanceList
            businesses={topEarners}
            title="Top Earners"
            titleColor="text-green-600"
          />
          <PerformanceList
            businesses={lowPerformers}
            title="Low Performers"
            titleColor="text-red-600"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenuePerformance;
