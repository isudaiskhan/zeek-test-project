import { Box, Card, Divider, Switch, Typography } from "@mui/material";
import React from "react";

const AppleCardStampBack = ({ isOverview }) => {
  const TypoSX = {
    fontWeight: 400,
    fontSize: isOverview ? "10px" : "16px",
  };
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "-1px 2px 20px 0px #00000040",
        width: isOverview ? "266px" : "451px",
        height: isOverview ? "291px" : "493px",
      }}
    >
      <Box className="p-4">
        <Box
          className={`rounded-xl bg-[#F6F6F6] ${isOverview ? "p-2" : "p-4"}`}
        >
          <div className="flex flex-row gap-4 justify-between items-center">
            <Typography sx={TypoSX}>Automatic Updates</Typography>
            <Switch size={isOverview ? "small" : "medium"} />
          </div>
          <Divider sx={{ width: "100%", my: 1 }} />
          <div className="flex flex-row gap-4 justify-between items-center">
            <Typography sx={TypoSX}>Allow Notifications</Typography>
            <Switch size={isOverview ? "small" : "medium"} />
          </div>
        </Box>
        <Box
          className={`rounded-xl bg-[#F6F6F6] ${isOverview ? "p-2" : "p-4"}  ${
            isOverview ? "mt-1" : "mt-5"
          }`}
        >
          <Typography
            sx={{
              fontWeight: 400,
              color: "#D20000",
              fontSize: isOverview ? "10px" : "16px",
              textAlign: "start",
            }}
          >
            Remove Pass
          </Typography>
        </Box>
        <Box
          className={`flex flex-col justify-start items-start gap-2 rounded-xl bg-[#F6F6F6] ${
            isOverview ? "p-2" : "p-4"
          } ${isOverview ? "mt-1" : "mt-5"} `}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: isOverview ? "11px" : "16px",
              lineHeight: "20px",
            }}
          >
            Card Details
          </Typography>
          <Typography sx={TypoSX}>
            <strong>Added:</strong> 11/10/24 2:15 PM
          </Typography>
          <Typography sx={TypoSX}>
            <strong>Card Type:</strong> Loyalty
          </Typography>
          <Typography sx={TypoSX}>
            <strong>Company:</strong> SATO Ltd.
          </Typography>
        </Box>
        <div
          className={`flex flex-col justify-start items-start ${
            isOverview ? "mt-2" : "mt-10"
          }`}
        >
          <Typography
            sx={{ fontWeight: 400, fontSize: isOverview ? "10px" : "15px" }}
          >
            CARD NO.
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: isOverview ? "11px" : "24px" }}
          >
            HL28GR098K2
          </Typography>
        </div>
      </Box>
    </Card>
  );
};

export default AppleCardStampBack;
