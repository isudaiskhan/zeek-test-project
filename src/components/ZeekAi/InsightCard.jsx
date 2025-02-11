import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const InsightCard = ({
  index,
  isInsightActive,
  toggleText,
  insight,
  suggestion,
}) => {
  return (
    <Card
      className="!shadow-md !shadow-gray-300 px-2 relative cursor-pointer"
      onClick={() => toggleText(index)}
    >
      <CardContent>
        <Typography
          variant="body2"
          className="text-[#000000] !font-sans !text-sm !mb-2 select-none"
        >
          {isInsightActive ? "Insight:" : "Suggestion:"}
        </Typography>
        <Typography
          variant="body2"
          className="text-[#000000] !font-sans !text-sm select-none !font-extralight"
        >
          {isInsightActive ? insight : suggestion}
        </Typography>

        {/* Indicator Dot */}
        <div
          className={`absolute bottom-10 right-2 w-3 h-3 rounded-full ${
            isInsightActive
              ? "bg-[#FF7B31]"
              : "border border-solid border-[#C1C1C1]"
          }`}
        />

        <div
          className={`absolute bottom-4 right-2 w-3 h-3 rounded-full ${
            !isInsightActive
              ? "bg-[#FF7B31]"
              : "border border-solid border-[#C1C1C1]"
          }`}
        />
      </CardContent>
    </Card>
  );
};

export default InsightCard;
