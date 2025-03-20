"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { DataUsage } from "@mui/icons-material";
import Chart from "react-apexcharts";

const UptimeTrends = ({ seriesData, categories }) => {
  const chartOptions = {
    chart: { type: "line", toolbar: { show: false } },
    colors: ["#FF9A62"],
    stroke: { curve: "smooth", width: 3 },
    markers: { size: 5 },
    xaxis: { categories },
    yaxis: {
      min: 99,
      max: 100,
      labels: { formatter: (val) => `${val}%` },
    },
    grid: { show: false },
    tooltip: { enabled: true },
  };

  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }} className="lg:col-span-2">
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <DataUsage className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Uptime Trends
          </Typography>
        </div>
        <Chart
          options={chartOptions}
          series={[{ name: "Uptime", data: seriesData }]}
          type="line"
          height={300}
        />
      </CardContent>
    </Card>
  );
};

export default UptimeTrends;
