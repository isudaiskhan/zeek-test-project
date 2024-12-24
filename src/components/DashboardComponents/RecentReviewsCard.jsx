import { Button, Typography } from "@mui/material";
import React from "react";
import RatingCard from "../RatingCard/RatingCard";

const RecentReviewsCard = () => {
  return (
    <div className="rounded-2xl shadow-lg bg-white p-8 flex flex-col justify-start">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="text-black !font-sans !text-lg">
          Recent Reviews
        </Typography>
        <Button
          variant="outlined"
          size="small"
          className="!text-xs !text-[#5F5F5F] !font-thin !px-5 !font-maven !rounded-full !border-[#C1C1C1]"
        >
          See All
        </Button>
      </div>
      <div className="p-5">
        <RatingCard
          name="Ziyad Mahomed"
          rating={4}
          review="Cozy atmosphere and great coffee! Friendly staff, though it can get a bit crowded during peak hours."
          reviewerInitial="Z"
        />
      </div>
      <div className="flex justify-start mt-4 px-5">
        <Button
          variant="outlined"
          size="small"
          className="!text-xs !text-[#5F5F5F] !font-thin !px-6 !font-maven !rounded-full !border-[#C1C1C1]"
        >
          Reply
        </Button>
      </div>
    </div>
  );
};

export default RecentReviewsCard;
