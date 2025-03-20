"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Autorenew from "@mui/icons-material/Autorenew";
import Chart from "react-apexcharts";

const EngagementScore = ({ score }) => {
  const chartOptions = {
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        hollow: { size: "60%" },
        track: { background: "#f0f0f0" },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: "24px",
            fontWeight: 700,
            color: "#000",
            formatter: (val) => `${val}%`,
            offsetY: 8,
          },
        },
        stroke: { lineCap: "round" },
      },
    },
    colors: ["#ffbe99"],
    labels: ["Engagement Score"],
  };

  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <Autorenew className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Engagement Score
          </Typography>
        </div>
        <Chart
          options={chartOptions}
          series={[score]}
          type="radialBar"
          height={200}
        />
      </CardContent>
    </Card>
  );
};

export default EngagementScore;
