"use client";
import React from "react";
import { Card, CardContent, Typography, Button, Badge } from "@mui/material";
import { Cloud, Notifications } from "@mui/icons-material";

const SystemStatus = ({ uptime, downtime }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
            <Cloud className="text-[#FF9A62]" fontSize="large" />
          </div>
          <Typography variant="h6" className="font-semibold">
            System Status
          </Typography>

          <div className="flex items-center ml-auto bg-green-100 text-green-700 px-3.5 py-1 rounded-full text-sm font-medium">
            <Badge color="success" variant="dot" sx={{ mr: 1.5 }} />
            <Typography variant="caption">Operational</Typography>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-20 mt-16">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {uptime}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Uptime
            </Typography>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Typography variant="h5" className="font-bold">
              {downtime}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Downtime
            </Typography>
          </div>
        </div>
        <Button
          fullWidth
          variant="contained"
          startIcon={<Notifications />}
          sx={{
            bgcolor: "#FF9A62",
            "&:hover": { bgcolor: "#FF8A4D" },
            textTransform: "none",
            py: 1.5,
            borderRadius: 2,
            mt: 5,
          }}
        >
          Notify Stakeholders
        </Button>
      </CardContent>
    </Card>
  );
};

export default SystemStatus;
