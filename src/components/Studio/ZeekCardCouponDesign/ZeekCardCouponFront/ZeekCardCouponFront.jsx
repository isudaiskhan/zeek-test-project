import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomBarCode from "../../CustomBarCode/CustomBarCode";

const ZeekCardCouponFront = ({
  firstColor,
  secondColor,
  thirdColor,
  isOverview,
  selectedCode,
}) => {
  const headingSX = {
    fontSize: isOverview ? "8px" : "14px",
    fontWeight: 500,
    color: "#B9DAFF",
  };
  const subTextSX = {
    fontSize: isOverview ? "7px" : "14px",
    fontWeight: 500,
    color: "white",
  };
  return (
    <Card
      sx={{
        boxShadow: "-1px 2px 20px 0px #00000040",
        width: isOverview ? "266px" : "451px",
        height: isOverview ? "291px" : "493px",
        backgroundColor: firstColor,
        backgroundImage: `linear-gradient(to left bottom, ${firstColor},${secondColor}, ${thirdColor})`,
      }}
    >
      <Box className="relative">
        <Box
          className="absolute"
          sx={{
            top: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: isOverview ? "60px" : "100px",
            height: isOverview ? "60px" : "100px",
            backgroundColor: "white",
            borderRadius: "100%",
            boxShadow: "inset 0 -8px 10px rgba(0, 0, 0, 0.2)",
          }}
        ></Box>
        <Box
          className="absolute"
          sx={{
            bottom: isOverview ? 0 : -20,
            right: 0,
            padding: isOverview ? "2px" : "4px",
            borderRadius: "4px",
            zIndex: 10,
          }}
        >
          <Image
            src="/images/coffee-coupon.png"
            alt="coupon"
            width={isOverview ? 120 : 220}
            height={isOverview ? 150 : 320}
          />
        </Box>
        <div className="flex flex-row gap-4 justify-between items-center p-4">
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: isOverview ? "24px" : "40px",
              color: "white",
            }}
          >
            Zeek.
          </Typography>
          <Image
            src="/images/sato-white.png"
            alt="sato"
            width={isOverview ? 68 : 100}
            height={isOverview ? 28 : 48}
            loader={() => "/images/sato-white.png"}
          />
        </div>
        <div
          className={`flex flex-row justify-between ${
            isOverview ? "py-2" : "py-4"
          } px-4`}
        >
          <div className="flex flex-col gap-2 justify-start items-start p-2">
            <Typography sx={headingSX}>LOCATION(S)</Typography>
            <Typography sx={subTextSX}>All location</Typography>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center p-2 !z-50">
            <Typography sx={headingSX}>VALID UNTIL</Typography>
            <Typography sx={subTextSX}>November 30, 2024</Typography>
          </div>
          <div className="flex flex-col gap-2 justify-end items-end p-2 !z-50">
            <Typography sx={headingSX}>TYPE</Typography>
            <Typography sx={subTextSX}>One-time use</Typography>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 justify-start items-start px-6 ${
            isOverview ? "py-2" : "py-4"
          } ${isOverview ? "mt-0" : "mt-4"}`}
        >
          <Typography sx={headingSX}>DETAILS</Typography>
          <Typography sx={subTextSX}>BOGO on all available pastries</Typography>
        </div>
        <div
          className={`flex justify-center items-center ${
            isOverview ? "py-2" : "py-4"
          }`}
        >
          {selectedCode.type && (
            <div className="!z-50">
              <CustomBarCode
                value={selectedCode.value}
                size={isOverview ? 96 : 162}
                width={isOverview ? 1 : 2}
                height={isOverview ? 50 : 100}
                type={selectedCode.type}
              />
            </div>
          )}
        </div>
      </Box>
    </Card>
  );
};

export default ZeekCardCouponFront;
