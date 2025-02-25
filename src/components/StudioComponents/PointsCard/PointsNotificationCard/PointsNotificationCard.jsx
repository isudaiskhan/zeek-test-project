import { Avatar, Card, Typography } from "@mui/material";
import React from "react";

const PointsNotificationCard = ({ iconPreview }) => {
  return (
    <Card className="flex flex-col gap-2 !bg-[#848484] !bg-opacity-90 !rounded-xl p-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center gap-2">
          <Avatar
            src={iconPreview ? iconPreview : "/images/avatar.png"}
            alt="icon"
            sx={{ width: 24, height: 24 }}
          />
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 300,
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            COMPANY NAME
          </Typography>
        </div>
        <Typography
          sx={{ fontSize: "10px", fontWeight: 300, color: "#FFFFFF" }}
        >
          now
        </Typography>
      </div>
      <div className="flex justify-start items-start">
        <Typography
          sx={{ fontSize: "10px", fontWeight: 300, color: "#FFFFFF" }}
        >
          Push text in a side preview of the service with emojis 👋 🎉 😊 🎈
        </Typography>
      </div>
    </Card>
  );
};

export default PointsNotificationCard;
