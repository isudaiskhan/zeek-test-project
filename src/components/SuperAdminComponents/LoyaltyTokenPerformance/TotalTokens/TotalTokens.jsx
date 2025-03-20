"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Loyalty from "@mui/icons-material/Loyalty";

const TotalTokens = ({ issued, redeemed }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <Loyalty className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Total Tokens
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-14">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {issued.toLocaleString()}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Issued
            </Typography>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {redeemed.toLocaleString()}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Redeemed
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalTokens;
