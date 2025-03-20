"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Schedule } from "@mui/icons-material";
import Chart from "react-apexcharts";

const ResolutionPerformance = ({ averageResolution, series }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <Schedule className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Resolution Time
          </Typography>
        </div>
        <div className="text-center mb-4">
          <Typography variant="h4" className="font-bold">
            {averageResolution}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            Average Resolution
          </Typography>
        </div>
        <Chart
          options={{
            chart: { type: "donut" },
            colors: ["#FF9A62", "#F44336", "#4CAF50"],
            labels: ["<2h", "2-6h", ">6h"],
            dataLabels: { enabled: false },
            legend: { position: "bottom" },
          }}
          series={series}
          type="donut"
          height={200}
        />
      </CardContent>
    </Card>
  );
};

export default ResolutionPerformance;
