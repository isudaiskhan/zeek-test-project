"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Timeline from "@mui/icons-material/Timeline";
import Chart from "react-apexcharts";

const TokenHoldingTrends = ({ trends, categories }) => {
  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    colors: ["#FF9A62"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        borderRadius: 4,
      },
    },
    dataLabels: { enabled: false },
    xaxis: { categories },
    grid: { show: false },
    yaxis: { show: false },
    tooltip: { enabled: true, theme: "light" },
  };

  const chartSeries = [{ name: "Token Holdings", data: trends }];

  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }} className="lg:col-span-2">
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <Timeline className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Token Holding Trends
          </Typography>
        </div>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={250}
        />
      </CardContent>
    </Card>
  );
};

export default TokenHoldingTrends;
