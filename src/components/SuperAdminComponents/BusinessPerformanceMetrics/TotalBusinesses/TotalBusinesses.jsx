"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Business from "@mui/icons-material/Business";

const TotalBusinesses = ({ total }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <Business className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Active Businesses
          </Typography>
        </div>
        <Typography variant="h4" className="font-bold px-2">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TotalBusinesses;
