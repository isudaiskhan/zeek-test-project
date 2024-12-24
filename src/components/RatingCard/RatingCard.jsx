import React from "react";
import { StarRounded as StarRoundedIcon } from "@mui/icons-material";
import { Avatar, Rating, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

const RatingCard = ({ name, rating, review, reviewerInitial }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md shadow-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <Avatar className="!w-12 !h-12 !bg-[#63CEBA]">
            {reviewerInitial}
          </Avatar>
          <Typography className="text-black !font-maven">{name}</Typography>
        </div>
        <Avatar className="!w-8 !h-8 !text-white !bg-[#AF855A] !font-medium !text-sm">
          {reviewerInitial}
        </Avatar>
      </div>

      <div className="flex flex-wrap space-x-1 px-14 mb-3">
        <Rating
          value={rating}
          precision={0.5}
          readOnly
          icon={<StarRoundedIcon className="text-[#FFD233]" />}
          emptyIcon={<StarBorderRoundedIcon className="text-[#888888]" />}
        />
      </div>

      <Typography className="text-black !text-sm !mt-5 !font-maven leading-relaxed">
        {review}
      </Typography>
    </div>
  );
};

export default RatingCard;
