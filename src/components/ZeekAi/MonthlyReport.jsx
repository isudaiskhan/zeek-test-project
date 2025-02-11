"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { BiExpandAlt } from "react-icons/bi";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import Image from "next/image";

const MonthlyReport = () => (
  <Card className="w-full !shadow-lg !rounded-xl !h-full">
    <CardContent>
      <CardContent>
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Image
              src="/images/file.svg"
              alt="Zeek Logo"
              width={40}
              height={40}
            />
            <Typography variant="h6" className="!font-sans !font-bold text-xl">
              Monthly Report
            </Typography>
          </div>
          <div>
            <IconButton>
              <BiExpandAlt className="text-black" />
            </IconButton>

            <IconButton>
              <MoreHorizSharpIcon className="text-black" />
            </IconButton>
          </div>
        </div>

        <Typography
          variant="body2"
          className="!font-sans !text-[#000000] !text-sm !mb-7"
        >
          Report Summary:
        </Typography>

        <Typography
          variant="body2"
          className="!font-sans list-item list-disc list-inside !text-[#000000] !text-sm !mb-6"
        >
          Customer Traffic
        </Typography>

        <div className="space-y-2 text-gray-700 pl-6">
          <Typography className="!font-sans !text-[#000000] !text-sm">
            - SATO cafe saw a 15% increase in new visitors and a 10% rise in
            returning customers this month.
          </Typography>
          <Typography className="!font-sans !text-[#000000] !text-sm">
            - SATO cafe saw a 15% increase in new visitors and a 10% rise in
            returning customers this month.
          </Typography>
        </div>

        <Typography
          variant="body2"
          className="!font-sans list-item list-disc list-inside !text-[#000000] !text-sm !mb-6 !mt-9"
        >
          Sales Performance
        </Typography>

        <div className="space-y-2 text-gray-700 pl-6">
          <Typography className="!font-sans !text-[#000000] !text-sm">
            - SATO cafe saw a 15% increase in new visitors and a 10% rise in
            returning customers this month.
          </Typography>
          <Typography className="!font-sans !text-[#000000] !text-sm">
            - SATO cafe saw a 15% increase in new visitors and a 10% rise in
            returning customers this month.
          </Typography>
        </div>

        <Typography
          variant="body2"
          className="!font-sans list-item list-disc list-inside !text-[#000000] !text-sm !mb-6 !mt-9"
        >
          Customer Feedback:
        </Typography>

        <div className="space-y-2 text-gray-700 pl-6">
          <Typography className="!font-sans !text-[#000000] !text-sm">
            - SATO cafe saw a 15% increase in new visitors and a 10% rise in
            returning customers this month.
          </Typography>
          <Typography className="!font-sans !text-[#000000] !text-sm">
            - SATO cafe saw a 15% increase in new visitors and a 10% rise in
            returning customers this month.
          </Typography>
        </div>
        <div className="flex justify-between items-center mt-16">
          <Typography
            variant="body2"
            className="text-[#838383] !font-sans !text-xs"
          >
            Nov 7 - Nov 13, 2024
          </Typography>
          <Button
            variant="contained"
            color="warning"
            className="!bg-[#FFDAC5] !text-[#FF5B00] whitespace-nowrap"
          >
            Download Full Report
          </Button>
        </div>
      </CardContent>
    </CardContent>
  </Card>
);

export default MonthlyReport;
