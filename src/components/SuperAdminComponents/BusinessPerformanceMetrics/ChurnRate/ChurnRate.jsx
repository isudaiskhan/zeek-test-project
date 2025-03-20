"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Assessment from "@mui/icons-material/Assessment";
import Chart from "react-apexcharts";

const ChurnRate = ({ series, labels, colors }) => {
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
            <Assessment className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Business Churn Rate
          </Typography>
        </div>
        <Chart options={chartOptions} series={series} type="pie" height={250} />
      </CardContent>
    </Card>
  );
};

export default ChurnRate;
