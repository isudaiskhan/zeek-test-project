"use client";
import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dialog from "@/components/Dialog/Dialog";

const segments = [
  { tag: "All", people: 152, created: "October 2, 2024", campaigns: 7 },
  { tag: "Platinum", people: 12, created: "October 2, 2024", campaigns: 3 },
  { tag: "Gold", people: 23, created: "October 2, 2024", campaigns: 4 },
  { tag: "Silver", people: 47, created: "October 2, 2024", campaigns: 1 },
  { tag: "Bronze", people: 70, created: "October 2, 2024", campaigns: 2 },
  { tag: "Frequency x3", people: 24, created: "October 2, 2024", campaigns: 7 },
  { tag: "Frequency x5", people: 11, created: "October 2, 2024", campaigns: 7 },
];

const tagStyles = {
  All: "bg-[#F0EFEF] text-[#696969]",
  Platinum: "bg-[#B3B3B3] text-[#222222]",
  Gold: "bg-[#FFF9E3] text-[#FFC700]",
  Silver: "bg-[#ECECEC] text-[#898989]",
  Bronze: "bg-[#EFE3D7] text-[#86684A]",
  "Frequency x3": "bg-[#FFDAC5] text-[#696969]",
  "Frequency x5": "bg-[#FFDAC5] text-[#696969]",
};

const Segments = () => {
  return (
    <div className="p-4">
      <Dialog />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {segments.map((segment, index) => (
          <div key={index} className={index >= 4 ? " w-full" : ""}>
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
                        tagStyles[segment.tag] || "bg-red-100 text-gray-700"
                      }`}
                    >
                      {segment.tag}
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
                  {segment.people} people
                </Typography>
                <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
                  Created: {segment.created}
                </Typography>
                <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
                  Campaigns done: {segment.campaigns}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Segments;
