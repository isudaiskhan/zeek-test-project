import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import React from "react";

const PointsAppleCard = ({
  cardName,
  logoPreview,
  centralImagePreview,
  cardBgColor,
  cardTextColor,
  centerBackgroundColor,
}) => {
  return (
    <Card
      className={`flex flex-col gap-2 rounded-md"`}
      sx={{
        boxShadow: "-1px 2px 20px 0px #00000040",
        backgroundColor: cardBgColor,
      }}
    >
      <Box className="flex flex-row justify-between items-center p-2">
        {logoPreview ? (
          <Image
            src={logoPreview}
            width={50}
            height={50}
            alt="logo"
            className="w-[100px] h-[50px] object-cover"
          />
        ) : (
          <Typography
            sx={{ fontWeight: 500, fontSize: "12px", color: cardTextColor }}
          >
            {cardName}
          </Typography>
        )}
        <Typography
          sx={{ fontWeight: 400, fontSize: "12px", color: cardTextColor }}
        >
          Balance <br /> <span className="text-sm justify-end">500</span>
        </Typography>
      </Box>
      <Box
        className="flex justify-center items-center"
        sx={{
          height: "100px",
          width: "100%",
          backgroundColor: centerBackgroundColor,
          backgroundImage: `${
            centralImagePreview ? `url(${centralImagePreview})` : ""
          }`,
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        {!centralImagePreview && (
          <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
            Background Image
          </Typography>
        )}
      </Box>
      <Box className="flex flex-row justify-between p-2">
        <div className="flex flex-col items-start gap-[2px]">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "8px",
              textTransform: "uppercase",
              color: cardTextColor,
            }}
          >
            Reward
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "14px", color: cardTextColor }}
          >
            No Data
          </Typography>
        </div>
        <div className="flex flex-col items-end gap-[2px]">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "8px",
              textTransform: "uppercase",
              color: cardTextColor,
            }}
          >
            Till the next Reward
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "14px", color: cardTextColor }}
          >
            500
          </Typography>
        </div>
      </Box>
      <Box className="flex flex-col gap-1 justify-center items-center p-4 mt-4">
        <QRCodeSVG value="https://example.com" size={60} />
        <Typography
          sx={{ fontWeight: 500, fontSize: "12px", color: cardTextColor }}
        >
          Tap ... for details
        </Typography>
      </Box>
    </Card>
  );
};

export default PointsAppleCard;
