import { BARCODE_TYPES } from "@/enums/loyalty-card-actions";
import { Avatar, Box, Card, Divider, Typography } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import React from "react";
import Barcode from "react-barcode";

const PointsAndroidCard = ({
  cardName,
  iconPreview,
  centralImagePreview,
  cardBgColor,
  centerBackgroundColor,
  cardTextColor,
  barcode,
}) => {
  return (
    <Card
      className="flex flex-col gap-2 rounded-md"
      sx={{
        boxShadow: "-1px 2px 20px 0px #00000040",
        backgroundColor: cardBgColor,
      }}
    >
      <Box className="flex flex-row gap-2 p-3 justify-start items-center">
        <Avatar
          src={iconPreview ? iconPreview : "/images/avatar.png"}
          alt="icon"
          sx={{ width: 24, height: 24 }}
        />
        <Typography
          sx={{ fontSize: "12px", fontWeight: 500, color: cardTextColor }}
        >
          {cardName}
        </Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box className="flex flex-col gap-2 px-3 py-1">
        <div className="flex justify-start items-start">
          <Typography
            sx={{ fontSize: "16px", fontWeight: 400, color: cardTextColor }}
          >
            Promotion Name
          </Typography>
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 400,
              textTransform: "uppercase",
              color: cardTextColor,
            }}
          >
            Discount on the FIRST...
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: 400, color: cardTextColor }}
          >
            10
          </Typography>
        </div>
        <Box
          className="flex justify-center items-center rounded-md p-2 mt-2"
          sx={{ boxShadow: "-1px 2px 20px 0px #00000040" }}
        >
          {barcode === BARCODE_TYPES.QR_CODE ? (
            <QRCodeSVG value="https://example.com" size={60} />
          ) : (
            <Barcode
              value="63012-816-306"
              displayValue={false}
              height={30}
              width={1}
              background="transparent"
            />
          )}
        </Box>
        <Box className="flex justify-center items-center">
          <Typography
            sx={{ fontSize: "12px", fontWeight: 400, color: cardTextColor }}
          >
            63012-816-306
          </Typography>
        </Box>
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
    </Card>
  );
};

export default PointsAndroidCard;
