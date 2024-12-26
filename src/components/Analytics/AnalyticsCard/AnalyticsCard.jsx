import { Box, Card, Typography } from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const boxSX = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #D9D9D9",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  padding: "8px 16px",
};
const AnalyticsCard = ({ title, subtitle, amount, chart }) => {
  return (
    <Card
      sx={{
        direction: "column",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        padding: "16px",
      }}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",
              color: "#333333",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "13px",
              color: "#909090",
            }}
          >
            {subtitle}
          </Typography>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <Box sx={boxSX}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#333333",
              }}
            >
              Monthly
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: "#333333" }} fontSize="small" />
          </Box>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-6">
        <div className="flex items-start w-full sm:w-auto">
          <Typography
            sx={{
              fontWeight: 590,
              fontSize: "32px",
              color: "#333333",
            }}
          >
            {amount}
          </Typography>
        </div>
        <div className="flex flex-row gap-1 items-start w-full sm:w-auto ">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "15px",
              color: "#00AF07",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowDropUpIcon fontSize="small" />
            5%
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              color: "#909090",
            }}
          >
            vs last month
          </Typography>
        </div>
      </div>
      <div className="w-full sm:w-auto items-center justify-centers">
        {chart}
      </div>
    </Card>
  );
};

export default AnalyticsCard;
