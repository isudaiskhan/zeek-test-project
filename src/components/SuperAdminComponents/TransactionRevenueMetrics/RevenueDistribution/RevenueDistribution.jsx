"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import BarChart from "@mui/icons-material/BarChart";
import Chart from "react-apexcharts";

const RevenueDistribution = ({ labels, colors, series }) => {
  const chartOptions = {
    labels,
    colors,
    legend: { position: "bottom" },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: "bottom" },
        },
      },
    ],
  };

  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <BarChart className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Revenue Distribution
          </Typography>
        </div>
        <Chart options={chartOptions} series={series} type="pie" height={250} />
      </CardContent>
    </Card>
  );
};

export default RevenueDistribution;
