import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const SegmentCard = ({ tag, people, created, campaigns, index, tagStyles }) => {
  return (
    <div className={index >= 4 ? "w-full" : ""}>
      <Card className="!shadow-md !shadow-gray-400 !transition-shadow">
        <CardContent>
          <div className="flex justify-between items-center">
            <Typography
              variant="subtitle1"
              className="!font-bold !text-sm !font-sans !text-[#696969]"
            >
              tag:
              <span
                className={`px-2 ms-4 py-1 rounded-md ${
                  tagStyles[tag] || "bg-red-100 text-gray-700"
                }`}
              >
                {tag}
              </span>
            </Typography>

            <IconButton
              className="!text-gray-500 hover:!text-black"
              aria-label="more options"
            >
              <MoreHorizIcon />
            </IconButton>
          </div>
          <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
            {people} people
          </Typography>
          <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
            Created: {created}
          </Typography>
          <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
            Campaigns done: {campaigns}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SegmentCard;
