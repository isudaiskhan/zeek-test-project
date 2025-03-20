"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import BarChart from "@mui/icons-material/BarChart";
import Chart from "react-apexcharts";

const EngagementChart = ({ series, categories }) => {
  const chartOptions = {
    chart: { type: "line", toolbar: { show: false } },
    xaxis: { categories },
    stroke: { curve: "smooth" },
    colors: ["#FF7325"],
  };

  return (
    <Card
      sx={{ borderRadius: "16px", boxShadow: 3 }}
      className="col-span-1 md:col-span-3"
    >
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <BarChart className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            User Engagement
          </Typography>
        </div>
        <Chart
          options={chartOptions}
          series={series}
          type="line"
          height={250}
        />
      </CardContent>
    </Card>
  );
};

export default EngagementChart;
