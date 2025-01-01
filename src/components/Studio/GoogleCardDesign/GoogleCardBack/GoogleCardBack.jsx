import { Box, Card, Typography } from "@mui/material";
import React from "react";

const GoogleCardBack = ({ isOverview }) => {
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
        <Box className="flex flex-col justify-start items-start gap-2 p-4">
          <div className="flex mb-5">
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: isOverview ? "11px" : "20px",
                lineHeight: "20px",
              }}
            >
              Card Details
            </Typography>
          </div>
          {isOverview !== true && (
            <div className="flex flex-col gap-2">
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "15px",
                }}
              >
                <strong>Name:</strong> Huzefa Dico
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "15px",
                }}
              >
                <strong>Tier:</strong> Platinum
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                }}
              >
                <strong>Company:</strong> SATO Ltd.
              </Typography>
            </div>
          )}
          <div
            className={`flex flex-col gap-2 ${isOverview ? "mt-0" : "mt-5"} `}
          >
            <Typography sx={TypoSX}>
              <strong>Added:</strong> 11/10/24 2:15 PM
            </Typography>
            <Typography sx={TypoSX}>
              <strong>Card Type:</strong> Loyalty
            </Typography>
            <Typography sx={TypoSX}>
              <strong>Card Metric:</strong> Points
            </Typography>
            <Typography sx={TypoSX}>
              <strong>Company:</strong> SATO Ltd.
            </Typography>
          </div>
        </Box>
        <div
          className={`flex flex-col justify-start items-start ${
            isOverview ? "mt-16" : "mt-20"
          }`}
        >
          <Typography
            sx={{ fontWeight: 400, fontSize: isOverview ? "10px" : "15px" }}
          >
            CARD NO.
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: isOverview ? "13px" : "24px" }}
          >
            HL28GR098K2
          </Typography>
        </div>
      </Box>
    </Card>
  );
};

export default GoogleCardBack;
