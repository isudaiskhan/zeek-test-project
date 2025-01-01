import { Box, Card, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const GoogleCardFront = ({
  firstColor,
  secondColor,
  thirdColor,
  isOverview,
}) => {
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
        <div className="flex flex-row gap-4 justify-start items-start p-4">
          <Typography
            sx={{ fontWeight: 900, fontSize: isOverview ? "15px" : "20px" }}
          >
            Zeek.
          </Typography>
          <Image
            src="/images/sato.png"
            alt="sato"
            width={isOverview ? 42 : 56}
            height={isOverview ? 18 : 24}
            loader={() => "/images/sato.png"}
          />
        </div>
        <Divider sx={{ width: "100%" }} />
        <div className="flex justify-center items-center py-4 mt-5">
          <Image
            src="/images/barcode.png"
            alt="sato"
            width={isOverview ? 96 : 192}
            height={isOverview ? 96 : 192}
          />
        </div>
        {isOverview !== true && (
          <div className="flex flex-col justify-start items-start p-4">
            <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
              TIER
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
              Platinum
            </Typography>
          </div>
        )}
        <Box
          className="flex w-full p-4 mt-3"
          sx={{
            backgroundColor: firstColor,
            backgroundImage: `linear-gradient(to left bottom, ${firstColor},${secondColor}, ${thirdColor})`,
            width: isOverview ? "267px" : "451px",
            height: isOverview ? "90px" : "102px",
          }}
        >
          <div
            className={`flex flex-col justify-start items-start py-2 ${
              isOverview ? "px-2" : "px-4"
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
      </Box>
    </Card>
  );
};

export default GoogleCardFront;
