"use client";
import React, { useState } from "react";
import { Card, Typography, IconButton } from "@mui/material";
import InsightCard from "./InsightCard";
import Image from "next/image";
import { BiExpandAlt } from "react-icons/bi";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

const ZeekAIAnalysis = () => {
  const [isInsightActive, setIsInsightActive] = useState([true, true]);

  const insights = [
    "SATO cafe has experienced a 12% churn rate over the last month. A significant portion are customers who haven't visited in over 3 months.",
    "Loyal customers tend to have a higher-than-average spending on pastries with coffee orders and pastries.",
  ];

  const suggestions = [
    "Customer retention strategies are being improved to reduce churn. Customer retention strategies are being improved to reduce churn.",
    "Promotions on pastries and coffee bundles have been introduced to boost sales. Promotions on pastries.",
  ];

  const handleToggleText = (index) => {
    setIsInsightActive((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <Card className="!w-full !shadow-lg !rounded-xl !p-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/zeek-ai.svg"
            alt="Zeek Logo"
            width={30}
            height={30}
          />
          <Typography variant="h6" className="!font-sans !font-bold text-xl">
            Zeek AI Analysis
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

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <Typography
            variant="body2"
            className="!text-[#000000] !font-sans !text-sm !font-extralight !mb-2"
          >
            Churn Rate:
          </Typography>
          <Typography
            variant="h4"
            className="!text-[#000000] !font-sans !font-bold !text-5xl"
          >
            12%
            <span className="!text-[#000000] !font-extralight !font-sans !text-sm">
              / month
            </span>
          </Typography>
        </div>
        <div>
          <Typography
            variant="body2"
            className="!text-[#000000] !font-sans !font-extralight !text-sm !mb-2"
          >
            Average CLV:
          </Typography>
          <Typography
            variant="h4"
            className="!text-[#000000] !font-sans !font-bold !text-5xl"
          >
            $75
            <span className="!text-[#000000] !font-extralight !font-sans !text-sm">
              / customer
            </span>
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-2">
        {[0, 1].map((index) => (
          <InsightCard
            key={index}
            index={index}
            isInsightActive={isInsightActive[index]}
            toggleText={handleToggleText}
            insight={insights[index]}
            suggestion={suggestions[index]}
          />
        ))}
      </div>
    </Card>
  );
};

export default ZeekAIAnalysis;
