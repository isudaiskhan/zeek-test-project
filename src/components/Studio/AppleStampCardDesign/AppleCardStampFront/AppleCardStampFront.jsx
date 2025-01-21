import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomBarCode from "../../CustomBarCode/CustomBarCode";

const AppleCardStampFront = ({
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
          className="flex flex-col gap-4 justify-center items-center w-full p-0"
          sx={{
            backgroundColor: firstColor, // This is optional when using gradient
            backgroundImage: `linear-gradient(to left bottom, ${firstColor},${secondColor}, ${thirdColor})`,
            width: isOverview ? "267px" : "451px",
            height: isOverview ? "80px" : "155px",
          }}
        >
          {/* First Row */}
          <div
            className={`flex justify-center ${
              isOverview ? "gap-4" : "gap-8"
            } mb-1`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={`row1-${index}`}
                src="/images/raphael_coffee.png"
                alt="sato"
                height={isOverview ? 23 : 46}
                width={isOverview ? 23 : 46}
                loader={() => "/images/raphael_coffee.png"}
              />
            ))}
          </div>
          {/* Second Row */}
          <div
            className={`flex justify-center ${
              isOverview ? "gap-4" : "gap-8"
            } mb-1`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={`row1-${index}`}
                src="/images/raphael_coffee.png"
                alt="sato"
                height={isOverview ? 23 : 46}
                width={isOverview ? 23 : 46}
                loader={() => "/images/raphael_coffee.png"}
              />
            ))}
          </div>
        </Box>

        <div className="flex flex-col gap-1 justify-start items-start px-4 py-1">
          <Typography
            sx={{ fontWeight: 400, fontSize: isOverview ? "10px" : "14px" }}
          >
            NAME
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: isOverview ? "10px" : "14px" }}
          >
            Huzefa Dico
          </Typography>
        </div>

        <div
          className={`flex justify-center items-center ${
            isOverview ? "py-0" : "py-2"
          }`}
        >
          {selectedCode.type && (
            <CustomBarCode
              value={selectedCode.value}
              size={isOverview ? 66 : 100}
              width={isOverview ? 1 : 2}
              height={isOverview ? 50 : 60}
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
        <div className="flex justify-center items-center w-full p-0">
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
      </Box>
    </Card>
  );
};

export default AppleCardStampFront;
