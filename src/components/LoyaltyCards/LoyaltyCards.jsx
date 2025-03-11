import { CARD_TYPES } from "@/enums/cards";
import { BARCODE_TYPES } from "@/enums/loyalty-card-actions";
import { fileBaseURL } from "@/utils/urls";
import { Star } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import React from "react";
import Barcode from "react-barcode";

const LoyaltyCards = ({
  cardBackground,
  logo,
  textColor,
  backgroundCenterColor,
  centralImage,
  type,
  stampCount,
  activeStampImage,
  activeStampColor,
  bardCodeType,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Image
          src="/images/iphone-frame.png"
          alt="card-frame"
          height={100}
          width={100}
          layout="responsive"
          className="!h-[550px] !w-[290px] object-cover"
        />
      </div>
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[230px]">
        <Card
          className={`flex flex-col gap-2 rounded-md"`}
          sx={{
            boxShadow: "-1px 2px 20px 0px #00000040",
            backgroundColor: cardBackground,
          }}
        >
          <Box className="flex flex-row justify-between items-center p-2">
            {logo ? (
              <Image
                src={`${fileBaseURL}${logo}`}
                width={50}
                height={50}
                alt="logo"
                className="w-[80px] h-[40px] object-contain"
              />
            ) : (
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  color: textColor,
                }}
              >
                Custom Card #1
              </Typography>
            )}
            {type === CARD_TYPES.LOYALTY && (
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "12px",
                  color: textColor,
                }}
              >
                Balance <br /> <span className="text-sm justify-end">500</span>
              </Typography>
            )}
            {type === CARD_TYPES.COUPON && (
              <div className="flex flex-col justify-end items-end">
                <Typography
                  sx={{ fontWeight: 400, fontSize: "12px", color: textColor }}
                >
                  Expiration
                </Typography>
                <Typography
                  sx={{ fontWeight: 400, fontSize: "18px", color: textColor }}
                >
                  00.00.0000
                </Typography>
              </div>
            )}
          </Box>
          <Box
            className="flex justify-center items-center"
            sx={{
              height: "100px",
              width: "100%",
              backgroundColor: backgroundCenterColor,
              backgroundImage: `${
                centralImage ? `url(${fileBaseURL}${centralImage})` : ""
              }`,
              objectFit: "cover",
              backgroundSize: "cover",
            }}
          >
            {!centralImage && (
              <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
                Background Image
              </Typography>
            )}
            {type === CARD_TYPES.STAMP && (
              <Box className="flex flex-col gap-4 justify-center items-center">
                {Array.from(
                  {
                    length: stampCount ? stampCount : 8,
                  },
                  (_, i) => i + 1
                )
                  .reduce((acc, curr, index) => {
                    const condition =
                      stampCount > 12 ? index % 10 === 0 : index % 6 === 0;
                    if (condition) acc.push([]);
                    acc[acc.length - 1].push(curr);
                    return acc;
                  }, [])
                  .map((row, rowIndex) => (
                    <Box
                      key={rowIndex}
                      className={`flex flex-row justify-between gap-1 ${
                        stampCount > 12 ? "gap-1" : "gap-2"
                      }`}
                    >
                      {row.map((item) => (
                        <Box
                          key={item}
                          className={`flex justify-center items-center bg-[#EAEAED] border-solid border-[1px] border-[#AAAAAA] ${
                            stampCount > 12 ? "h-[18px]" : "h-[30px]"
                          } ${
                            stampCount > 12 ? "w-[18px]" : "w-[30px]"
                          } rounded-full cursor-pointer`}
                        >
                          {activeStampImage ? (
                            <Image
                              src={`${fileBaseURL}${activeStampImage}`}
                              alt="stamp icon"
                              height={100}
                              width={100}
                              className={`${
                                stampCount > 12 ? "!w-[12px]" : "!w-[20px]"
                              } ${
                                stampCount > 12 ? "!h-[12px]" : "!h-[20px]"
                              } object-cover`}
                              layout="responsive"
                            />
                          ) : (
                            <Star
                              sx={{
                                color: activeStampColor,
                                fontSize: stampCount > 12 ? "10px" : "20px",
                              }}
                            />
                          )}
                        </Box>
                      ))}
                    </Box>
                  ))}
              </Box>
            )}
          </Box>
          {type === CARD_TYPES.LOYALTY && (
            <Box className="flex flex-row justify-between p-2">
              <div className="flex flex-col items-start gap-[2px]">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "8px",
                    textTransform: "uppercase",
                    color: textColor,
                  }}
                >
                  Reward
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: textColor,
                  }}
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
                    color: textColor,
                  }}
                >
                  Till the next Reward
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: textColor,
                  }}
                >
                  500
                </Typography>
              </div>
            </Box>
          )}
          {type === CARD_TYPES.COUPON && (
            <Box className="flex flex-row justify-between p-2">
              <div className="flex flex-col items-start gap-[2px]">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "8px",
                    textTransform: "uppercase",
                    color: textColor,
                  }}
                >
                  Discount for the first...
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: textColor,
                  }}
                >
                  10
                </Typography>
              </div>
            </Box>
          )}
          {type === CARD_TYPES.STAMP && (
            <Box className="flex flex-row justify-between p-2">
              <div className="flex flex-col items-start gap-[2px]">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "8px",
                    textTransform: "uppercase",
                    color: textColor,
                  }}
                >
                  Stamps until the Reward
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: textColor,
                  }}
                >
                  8 Stamps
                </Typography>
              </div>
              <div className="flex flex-col items-end gap-[2px]">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "8px",
                    textTransform: "uppercase",
                    color: textColor,
                  }}
                >
                  Available Rewards
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: textColor,
                  }}
                >
                  2 Rewards
                </Typography>
              </div>
            </Box>
          )}
          <Box className="flex flex-col gap-1 justify-center items-center p-4 mt-4">
            {bardCodeType === BARCODE_TYPES.QR_CODE ? (
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
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: textColor,
              }}
            >
              Tap ... for details
            </Typography>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default LoyaltyCards;
