import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomBarCode from "../../CustomBarCode/CustomBarCode";

const AppleCardFront = ({
  firstColor,
  secondColor,
  thirdColor,
  isOverview,
  selectedCode,
}) => {
  console.log(selectedCode, "selectedCode");
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "-1px 2px 20px 0px #00000040",
        width: isOverview ? "266px" : "451px",
        height: isOverview ? "291px" : "493px",
      }}
    >
      <Box>
        <div className="flex flex-row gap-4 justify-between items-center p-4">
          <Typography
            sx={{ fontWeight: 900, fontSize: isOverview ? "24px" : "40px" }}
          >
            Zeek.
          </Typography>
          <Image
            src="/images/sato.png"
            alt="sato"
            width={isOverview ? 68 : 100}
            height={isOverview ? 28 : 48}
            loader={() => "/images/sato.png"}
          />
        </div>
        <Box
          className="flex justify-center items-center w-full p-0"
          sx={{
            backgroundColor: firstColor, // This is optional when using gradient
            backgroundImage: `linear-gradient(to left bottom, ${firstColor},${secondColor}, ${thirdColor})`,
            width: isOverview ? "267px" : "451px",
            height: isOverview ? "80px" : "102px",
          }}
        ></Box>
        {isOverview !== true && (
          <div className="flex flex-row gap-4 justify-between items-center p-4">
            <div className="flex flex-col gap-1 justify-start items-start">
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                NAME
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                Huzefa Dico
              </Typography>
            </div>
            <div className="flex flex-col gap-1 justify-end items-end">
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                TIER
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                Platinum
              </Typography>
            </div>
          </div>
        )}
        <div className="flex justify-center items-center py-1">
          {selectedCode.type && (
            <CustomBarCode
              value={selectedCode.value}
              size={isOverview ? 96 : 150}
              width={isOverview ? 1 : 2}
              height={isOverview ? 50 : 100}
              type={selectedCode.type}
            />
          )}
        </div>
        <div className="flex flex-col justify-start items-start pb-4 px-4">
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

export default AppleCardFront;
