import { BARCODE_TYPES } from "@/enums/loyalty-card-actions";
import { Star } from "@mui/icons-material";
import { Avatar, Box, Card, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import React from "react";
import Barcode from "react-barcode";

const ZeekAndroidCard = ({
  cardName,
  iconPreview,
  centralImagePreview,
  cardBgColor,
  centerBackgroundColor,
  cardTextColor,
  stampCounts,
  barcode,
  activeStampIconPreview,
  activeStampColor,
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
            Collect Stamps to get rewards
          </Typography>
        </div>
        <Box className="flex flex-row justify-between items-center">
          <div className="flex flex-col items-start gap-[2px]">
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "8px",
                textTransform: "uppercase",
                color: cardTextColor,
              }}
            >
              Stamps until the reward
            </Typography>
            <Typography
              sx={{ fontWeight: 400, fontSize: "14px", color: cardTextColor }}
            >
              8 Stamps
            </Typography>
          </div>
          <div className="flex flex-col items-end gap-[2px]">
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "8px",
                textTransform: "uppercase",
                color: cardTextColor,
              }}
            >
              Available Rewards
            </Typography>
            <Typography
              sx={{ fontWeight: 400, fontSize: "14px", color: cardTextColor }}
            >
              2 Rewards
            </Typography>
          </div>
        </Box>
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
        <Box className="flex flex-col gap-4 justify-center items-center">
          {Array.from(
            { length: stampCounts ? stampCounts : 8 },
            (_, i) => i + 1
          )
            .reduce((acc, curr, index) => {
              const condition =
                stampCounts > 12 ? index % 10 === 0 : index % 6 === 0;
              if (condition) acc.push([]);
              acc[acc.length - 1].push(curr);
              return acc;
            }, [])
            .map((row, rowIndex) => (
              <Box
                key={rowIndex}
                className={`flex flex-row justify-between gap-1 ${
                  stampCounts > 12 ? "gap-1" : "gap-2"
                }`}
              >
                {row.map((item) => (
                  <Box
                    key={item}
                    className={`flex justify-center items-center bg-[#EAEAED] border-solid border-[1px] border-[#AAAAAA] ${
                      stampCounts > 12 ? "h-[18px]" : "h-[30px]"
                    } ${
                      stampCounts > 12 ? "w-[18px]" : "w-[30px]"
                    } rounded-full cursor-pointer`}
                  >
                    {activeStampIconPreview ? (
                      <Image
                        src={activeStampIconPreview}
                        alt="stamp icon"
                        height={100}
                        width={100}
                        className={`${
                          stampCounts > 12 ? "!w-[12px]" : "!w-[20px]"
                        } ${
                          stampCounts > 12 ? "!h-[12px]" : "!h-[20px]"
                        } object-cover`}
                        layout="responsive"
                      />
                    ) : (
                      <Star
                        sx={{
                          color: activeStampColor,
                          fontSize: stampCounts > 12 ? "10px" : "20px",
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            ))}
        </Box>
      </Box>
    </Card>
  );
};

export default ZeekAndroidCard;
