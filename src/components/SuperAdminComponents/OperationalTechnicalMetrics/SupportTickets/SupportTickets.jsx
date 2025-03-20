"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SupportAgent } from "@mui/icons-material";
import Chart from "react-apexcharts";

const SupportTickets = ({ open, resolved, chartSeries, categories }) => {
  const chartOptions = {
    chart: { type: "bar" },
    colors: ["#FF9A62", "#F44336", "#4CAF50"],
    plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
    xaxis: { categories },
    dataLabels: { enabled: false },
    grid: { show: false },
  };

  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }} className="lg:col-span-2">
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <SupportAgent className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Support Tickets
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {open}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Open
            </Typography>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {resolved}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Resolved
            </Typography>
          </div>
        </div>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={200}
        />
      </CardContent>
    </Card>
  );
};

export default SupportTickets;
