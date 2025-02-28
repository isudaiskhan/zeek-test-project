import { BARCODE_TYPES } from "@/enums/loyalty-card-actions";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import React from "react";
import Barcode from "react-barcode";

const CouponAppleCard = ({
  cardName,
  logoPreview,
  centralImagePreview,
  cardBgColor,
  cardTextColor,
  centerBackgroundColor,
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
      <Box className="flex flex-row justify-between items-center p-2">
        <div className="justify-start items-center">
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
        </div>
        <div className="flex flex-col justify-end items-end">
          <Typography
            sx={{ fontWeight: 400, fontSize: "12px", color: cardTextColor }}
          >
            Expiration
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "18px", color: cardTextColor }}
          >
            00.00.0000
          </Typography>
        </div>
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
            Discount for the first...
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "14px", color: cardTextColor }}
          >
            10
          </Typography>
        </div>
        {/* <div className="flex flex-col items-end gap-[2px]">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "8px",
              textTransform: "uppercase",
            }}
          >
            Till the next Reward
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
            500
          </Typography>
        </div> */}
      </Box>
      <Box className="flex flex-col gap-1 justify-center items-center p-4 mt-4">
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
        <Typography
          sx={{ fontWeight: 500, fontSize: "12px", color: cardTextColor }}
        >
          Tap ... for details
        </Typography>
      </Box>
    </Card>
  );
};

export default CouponAppleCard;
