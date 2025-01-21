import { Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomBarCode from "../../CustomBarCode/CustomBarCode";

const ZeekCardFront = ({
  firstColor,
  secondColor,
  thirdColor,
  isOverview,
  selectedCode,
  imagePreview,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "-1px 2px 20px 0px #00000040",
        width: isOverview ? "266px" : "451px",
        // height: isOverview ? "291px" : "493px",
        backgroundColor: firstColor,
        backgroundImage: `linear-gradient(to left bottom, ${firstColor},${secondColor}, ${thirdColor})`,
      }}
    >
      {/* <Box className="p-4"> */}
      <div className="flex flex-row gap-4 justify-between items-center p-4">
        <Typography
          sx={{ fontWeight: 900, fontSize: isOverview ? "24px" : "40px" }}
        >
          Zeek.
        </Typography>
        <Image
          src="/images/sato.png"
          alt="sato"
          width={isOverview ? 66 : 100}
          height={isOverview ? 28 : 48}
          loader={() => "/images/sato.png"}
        />
      </div>
      <div
        className={`flex justify-center items-center p-4 ${
          isOverview ? "mt-10" : "mt-14"
        } `}
      >
        {selectedCode.type && (
          <CustomBarCode
            value={selectedCode.value}
            size={isOverview ? 96 : 192}
            width={isOverview ? 1 : 2}
            height={isOverview ? 50 : 100}
            type={selectedCode.type}
          />
        )}
      </div>
      <div
        className={`flex flex-col justify-start p-4 items-start ${
          isOverview ? "mt-8" : "mt-14"
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
      <div className="flex justify-center items-center w-full !p-0">
        {imagePreview && (
          <Image
            src={imagePreview}
            alt="card"
            width={isOverview ? 267 : 451}
            height={isOverview ? 100 : 150}
            loader={() => imagePreview}
            className="object-cover"
          />
        )}
      </div>
      {/* </Box> */}
    </Card>
  );
};

export default ZeekCardFront;
