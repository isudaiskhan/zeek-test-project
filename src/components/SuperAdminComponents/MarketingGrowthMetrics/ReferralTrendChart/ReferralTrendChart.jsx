"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";
import Chart from "react-apexcharts";

const ReferralTrendChart = ({ seriesData, categories }) => {
  const chartOptions = {
    chart: { type: "area", toolbar: { show: false } },
    colors: ["#FF9A62"],
    stroke: { curve: "smooth", width: 3 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 100],
      },
    },
    xaxis: { categories },
    yaxis: { labels: { formatter: (val) => `${val} users` } },
    grid: { show: false },
    tooltip: { enabled: true },
  };

  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }} className="lg:col-span-2">
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <TrendingUp className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Referral Growth Trends
          </Typography>
        </div>
        <Chart
          options={chartOptions}
          series={[{ name: "Referrals", data: seriesData }]}
          type="area"
          height={250}
        />
      </CardContent>
    </Card>
  );
};

export default ReferralTrendChart;
