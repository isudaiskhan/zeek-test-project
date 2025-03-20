"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Assignment from "@mui/icons-material/Assignment";

const TokenActivity = ({ avgHoldings, avgSpending, activeUsers }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <Assignment className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Token Activity
          </Typography>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <Typography>Avg. Holdings</Typography>
            <Typography className="font-bold">{avgHoldings}</Typography>
          </div>
          <div className="flex justify-between">
            <Typography>Avg. Spending</Typography>
            <Typography className="font-bold">{avgSpending}</Typography>
          </div>
          <div className="flex justify-between">
            <Typography>Active Users</Typography>
            <Typography className="font-bold">{activeUsers}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenActivity;
