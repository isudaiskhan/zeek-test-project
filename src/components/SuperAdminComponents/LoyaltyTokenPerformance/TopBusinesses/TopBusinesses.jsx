"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";

const TopBusinesses = ({ businesses }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }} className="lg:col-span-2">
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <TrendingUp className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Top Businesses by Token Usage
          </Typography>
        </div>
        <div className="space-y-4">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#F8F8F8] text-[#FF9A62] rounded-full text-sm">
                  #{index + 1}
                </span>
                <Typography variant="body1">{business}</Typography>
              </div>
              <Typography variant="body2" className="text-gray-500">
                {((1 - index * 0.2) * 10000).toLocaleString()} tokens
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopBusinesses;
