import React from "react";
import { Typography } from "@mui/material";
import CardComponent from "@/components/NotificationComponents/CardComponent";

const NotificationRow = ({ label, count, cardData }) => {
  return (
    <div>
      <Typography
        className={`!text-3xl !font-bold !font-sans !mb-6 !self-start ${
          label === "Inactive" || label === "Draft" ? "!mt-14" : ""
        }`}
      >
        {label}
        <span className="text-[#B3B3B3] ml-3">{count}</span>
      </Typography>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10 w-full">
        {cardData.map((card, idx) => (
          <CardComponent
            key={idx}
            card={card}
            messages={card.messages}
            releaseTimes={card.releaseTimes}
            index={idx}
            status={card.status}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationRow;
