import { Typography } from "@mui/material";
import React from "react";

const PerformanceList = ({ businesses, title, titleColor }) => (
  <div className="space-y-4">
    <Typography variant="subtitle1" className={`font-bold ${titleColor}`}>
      {title}
    </Typography>
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
      </div>
    ))}
  </div>
);

export default PerformanceList;
