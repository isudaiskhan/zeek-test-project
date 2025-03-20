"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const TotalTransactions = ({ total }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <ShoppingCart className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            Total Transactions
          </Typography>
        </div>
        <Typography variant="h4" className="font-bold px-2">
          {total.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TotalTransactions;
