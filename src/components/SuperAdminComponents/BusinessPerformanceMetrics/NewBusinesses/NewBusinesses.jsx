"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import BusinessCenter from "@mui/icons-material/BusinessCenter";

const NewBusinesses = ({ daily, weekly, monthly }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }} className="lg:col-span-2">
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <BusinessCenter className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            New Businesses
          </Typography>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {daily}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Daily
            </Typography>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {weekly}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Weekly
            </Typography>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {monthly}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Monthly
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewBusinesses;
