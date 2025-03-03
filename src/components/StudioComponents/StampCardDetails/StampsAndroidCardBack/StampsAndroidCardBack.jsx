import { Box, Card, CardContent, Typography } from "@mui/material";
import { BiWorld } from "react-icons/bi";
import React from "react";
import Link from "next/link";
import { LINK_TYPES } from "@/enums/loyalty-card-actions";
import { Star } from "@mui/icons-material";

const StampsAndroidCardBack = ({
  centerBackgroundColor,
  centralImagePreview,
  activeLinks,
  stampCounts,
}) => {
  return (
    <Card
      className="flex gap-2 h-[480px] overflow-y-auto p-1"
      sx={{ borderRadius: "18px" }}
    >
      <CardContent
        className="h-full overflow-y-auto w-full"
        sx={{
          "&::-webkit-scrollbar": { width: "2px", height: "2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#FFDAC5",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#555" },
          "&::-webkit-scrollbar-track": { backgroundColor: "#f4f4f4" },
        }}
      >
        <Box
          className="flex flex-col gap-4 w-full"
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#FFDAC5", // Thumb color
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555", // Thumb hover color
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f4f4f4", // Track color
            },
          }}
        >
          <Box className="flex flex-col justify-start items-start gap-4">
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Details
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Member ID <br />{" "}
              <span className="text-[10px] ">630120-813-610</span>
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
                        <Star
                          sx={{
                            color: "#1F1E1F",
                            fontSize: stampCounts > 12 ? "10px" : "20px",
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                ))}
            </Box>
          </Box>
          <Box className="flex flex-col justify-start items-start gap-4">
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Last Name <br /> <span className="text-[10px] ">Dico</span>
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              First Name <br /> <span className="text-[10px] ">Huzefa</span>
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Phone <br /> <span className="text-[10px] ">123456789125</span>
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Until receiving the Reward <br />{" "}
              <span className="text-[10px] ">10 Stamps</span>
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Accrued from the date of issue <br />{" "}
              <span className="text-[10px] ">0 Stamps</span>
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Accrued from the date of issue <br />{" "}
              <span className="text-[10px] ">0 Rewards</span>
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Not used <br /> <span className="text-[10px] ">0 Rewards</span>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StampsAndroidCardBack;
