"use client";
import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { BiExpandAlt } from "react-icons/bi";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import Image from "next/image";
import { promotionData } from "@/utils/dummy-data";
import Promotion from "./Promotion";

const PromotionRecommendations = () => (
  <Card className="!w-full !shadow-lg !rounded-xl !p-5 h-[27rem]">
    <CardContent
      className="h-full overflow-y-auto"
      sx={{
        "&::-webkit-scrollbar": { width: "8px", height: "8px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#FFDAC5",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#555" },
        "&::-webkit-scrollbar-track": { backgroundColor: "#f4f4f4" },
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Image
            src="/images/promotions.svg"
            alt="Promotions"
            width={40}
            height={40}
          />
          <Typography variant="h6" className="!font-sans !font-bold text-xl">
            Promotion Recommendations
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

      {promotionData.map(
        ({ id, chipLabel, chipColor, chipBgColor, promotions }) => (
          <Promotion
            key={id}
            id={id}
            chipLabel={chipLabel}
            chipColor={chipColor}
            chipBgColor={chipBgColor}
            promotions={promotions}
          />
        )
      )}
    </CardContent>
  </Card>
);

export default PromotionRecommendations;
