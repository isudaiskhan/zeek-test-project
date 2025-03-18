"use client";
import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const UserMetrics = () => {
  const [engagementChartData] = useState({
    chart: { type: "line", toolbar: { show: false } },
    xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    stroke: { curve: "smooth" },
    colors: ["#FF7325"],
  });

  const engagementSeries = [
    { name: "Users", data: [400, 600, 800, 700, 900, 1150, 1000] },
  ];

  const [churnChartData] = useState({
    labels: ["Active Users", "Churned Users"],
    colors: ["#FFDAC5", "#F44336"],
    legend: { position: "bottom" },
  });

  const churnSeries = [95, 5];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Total Users */}
      <Card className="!shadow-md">
        <CardContent>
          <Typography
            variant="h6"
            className="text-black !font-sans !mb-3 !text-2xl !font-semibold
          "
          >
            Total Users
          </Typography>
          <Typography variant="h4" className="text-[#838383] !font-bold">
            25,000
          </Typography>
        </CardContent>
      </Card>

      {/* New Users (Daily, Weekly, Monthly) */}
      <Card className="!shadow-md">
        <CardContent>
          <Typography
            variant="h6"
            className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
          >
            New Users
          </Typography>
          <Typography variant="body1" className="text-[#838383]">
            Daily: 1,200
          </Typography>
          <Typography variant="body1" className="text-[#838383]">
            Weekly: 8,400
          </Typography>
          <Typography variant="body1" className="text-[#838383]">
            Monthly: 36,000
          </Typography>
        </CardContent>
      </Card>

      {/* Retention Rate */}
      <Card className="!shadow-md">
        <CardContent>
          <Typography
            variant="h6"
            className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
          >
            User Retention Rate
          </Typography>
          <Typography variant="h4" className="text-[#838383] !font-bold">
            85%
          </Typography>
        </CardContent>
      </Card>

      {/* Churn Rate with Pie Chart */}
      <Card className="!shadow-md col-span-1">
        <CardContent>
          <Typography
            variant="h6"
            className="text-black !font-sans !mb-4 !text-2xl !font-semibold"
          >
            Churn Rate
          </Typography>
          <Chart
            options={churnChartData}
            series={churnSeries}
            type="pie"
            height={250}
          />
        </CardContent>
      </Card>

      {/* User Engagement Chart */}
      <Card className="col-span-1 md:col-span-2 !shadow-md">
        <CardContent>
          <Typography
            variant="h6"
            className="text-black !font-sans !mb-4 !text-2xl !font-semibold"
          >
            User Engagement
          </Typography>
          <Chart
            options={engagementChartData}
            series={engagementSeries}
            type="line"
            height={250}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserMetrics;
