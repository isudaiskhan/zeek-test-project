import React from "react";
import { Typography } from "@mui/material";
import CardComponent from "@/components/NotificationComponents/CardComponent";
import CustomButton from "../Custom/CustomButton/CustomButton";

const NotificationRow = ({
  label,
  cardData,
  isActive,
  fetchNextActive,
  hasNextActive,
  isInactive,
  fetchNextInactive,
  hasNextInactive,
  isDraft,
  fetchNextDraft,
  hasNextDraft,
}) => {
  return (
    <div>
      <Typography
        className={`!text-3xl !font-bold !font-sans !mb-6 !self-start ${
          label === "Inactive" || label === "Draft" ? "!mt-14" : ""
        }`}
      >
        {label}
        <span className="text-[#B3B3B3] ml-3">{cardData?.length}</span>
      </Typography>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6 w-full">
        {cardData?.map((item) => (
          <CardComponent
            key={item?._id}
            id={item?._id}
            title={item?.title}
            messages={item?.message}
            releaseTimes={item?.time}
            status={item?.status}
            tier={item?.segment?.tier}
          />
        ))}
      </div>
      <div className="flex justify-center items-center py-2">
        {isActive && hasNextActive && (
          <CustomButton
            text="Load More"
            bgColor="#FFECE1"
            textColor="#FF5B00"
            onClick={fetchNextActive}
          />
        )}
        {isInactive && hasNextInactive && (
          <CustomButton
            text="Load More"
            bgColor="#FFECE1"
            textColor="#FF5B00"
            onClick={fetchNextInactive}
          />
        )}
        {isDraft && hasNextDraft && (
          <CustomButton
            text="Load More"
            bgColor="#FFECE1"
            textColor="#FF5B00"
            onClick={fetchNextDraft}
          />
        )}
      </div>
    </div>
  );
};

export default NotificationRow;
