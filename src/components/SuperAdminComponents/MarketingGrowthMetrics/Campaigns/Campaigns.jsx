"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { MonetizationOn } from "@mui/icons-material";
import Chart from "react-apexcharts";

const Campaigns = ({ roi, bestCampaign }) => {
  const chartOptions = {
    chart: { type: "radialBar", fontFamily: "inherit" },
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
            formatter: (val) => `${val}x`,
            offsetY: 8,
          },
        },
      },
    },
    colors: ["#FF9A62"],
    labels: ["ROI"],
  };

  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <MonetizationOn
              className="text-[#FF9A62]"
              style={{ fontSize: 32 }}
            />
          </div>
          <div>
            <Typography variant="h6" className="font-semibold">
              Campaign ROI
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Average Return
            </Typography>
          </div>
        </div>
        <Chart
          options={chartOptions}
          series={[parseFloat(roi)]}
          type="radialBar"
          height={200}
        />
        <div className="text-center mt-4">
          <Typography variant="body2" className="text-gray-600">
            Best Performer:
          </Typography>
          <Typography variant="subtitle1" className="font-semibold">
            {bestCampaign}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Campaigns;
