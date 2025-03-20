"use client";
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link, Share } from "@mui/icons-material";

const ReferralProgram = ({ total, active, converted }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <Link className="text-[#FF9A62]" style={{ fontSize: 32 }} />
          </div>
          <div>
            <Typography variant="h6" className="font-semibold">
              Referral Program
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Last 7 days
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-20 mt-16">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {total.toLocaleString()}
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Total
            </Typography>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {active.toLocaleString()}
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Active
            </Typography>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {converted.toLocaleString()}
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Converted
            </Typography>
          </div>
        </div>
        <Button
          fullWidth
          variant="contained"
          startIcon={<Share />}
          sx={{
            bgcolor: "#FF9A62",
            "&:hover": { bgcolor: "#FF8A4D" },
            textTransform: "none",
            py: 1.5,
            borderRadius: 2,
            mt: 5,
          }}
        >
          Generate Referral Link
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReferralProgram;
