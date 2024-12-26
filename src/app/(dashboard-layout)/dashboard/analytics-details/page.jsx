"use client";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { RiArrowGoBackLine } from "react-icons/ri";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import BarChart from "@/components/Analytics/BarChart/BarChart";
import { FaCoins } from "react-icons/fa6";
import clsx from "clsx";
import Grid from "@mui/material/Grid2";

const boxSX = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #D9D9D9",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  padding: "8px 16px",
};

const typographySX = {
  color: "#000000",
  fontWeight: 700,
  fontSize: "14px",
};

const tabSX = {
  border: "1px solid #D9D9D9",
  borderRadius: "10px",
  backgroundColor: "#E5E5E5",
  padding: "4px 8px",
};

const totalSalesSeries = [
  {
    name: "Actual",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Target",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
];
const daysData = [
  { day: 1, sales: 398 },
  { day: 2, sales: 398 },
  { day: 3, sales: 398 },
  { day: 4, sales: 398 },
  { day: 5, sales: 398 },
  { day: 6, sales: 398 },
  { day: 7, sales: 398 },
  { day: 8, sales: 398 },
  { day: 9, sales: 398 },
  { day: 10, sales: 398 },
  { day: 11, sales: 398 },
  { day: 12, sales: 398 },
  { day: 13, sales: 398 },
  { day: 14, sales: 398 },
  { day: 15, sales: 398 },
  { day: 16, sales: 200 },
  { day: 17, sales: 398 },
  { day: 18, sales: 398 },
  { day: 19, sales: 398 },
  { day: 20, sales: 398 },
  { day: 21, sales: 398 },
  { day: 22, sales: 398 },
  { day: 23, sales: 398 },
  { day: 24, sales: 398 },
  { day: 25, sales: 398 },
  { day: 26, sales: 398 },
  { day: 27, sales: 398 },
  { day: 28, sales: 398 },
  { day: 29, sales: 398 },
  { day: 30, sales: 398 },
  { day: 31, sales: 398 },
];

const TARGET_SALES = 275;

const AnalyticsDetails = () => {
  const [selected, setSelected] = useState("Monthly");

  const handleSelect = (value) => {
    setSelected(value);
  };
  return (
    <div className="p-4">
      <Box className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-8 justify-start items-center">
          <RiArrowGoBackLine
            style={{
              color: "#000000",
              fontSize: "30px",
            }}
          />
          <Typography variant="h5" fontWeight="bold" fontSize="40px">
            Analytics Details
          </Typography>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <Box sx={boxSX}>
            <Typography sx={typographySX}>All Segments</Typography>
            <KeyboardArrowDownIcon
              sx={{ color: "#000000" }}
              fontSize="medium"
            />
          </Box>
        </div>
      </Box>

      <div className="py-10 ">
        <Box
          sx={{
            padding: "16px",
            border: "1px solid #D9D9D9",
            borderRadius: "16px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div className="flex flex-row justify-between items-center px-20 py-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 justify-center items-center">
                <FaCoins style={{ fontSize: "26px", color: "#C2C2C2" }} />
                <Typography variant="h5" fontWeight="normal" fontSize="26px">
                  AED 123,456
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="normal"
                  fontSize="26px"
                  color="#BABABA"
                >
                  AED 123,456
                </Typography>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 w-full sm:w-auto justify-end">
              <Typography variant="h5" fontWeight="normal" fontSize="26px">
                Jan ‘24 - Dec ‘24
              </Typography>
              <Box sx={tabSX}>
                <ButtonGroup variant="outlined">
                  {["Monthly", "Quarterly", "Yearly"].map((option) => (
                    <Button
                      key={option}
                      onClick={() => handleSelect(option)}
                      sx={{
                        backgroundColor:
                          selected === option ? "white" : "transparent",
                        color: selected === option ? "black" : "#777",
                        borderColor: selected === option ? "white" : "#ddd",
                        "&:hover": {
                          backgroundColor:
                            selected === option ? "white" : "#f0f0f0",
                        },
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </ButtonGroup>
              </Box>
            </div>
          </div>
          <div className="py-5">
            <BarChart chartSeries={totalSalesSeries} size={450} haveSize />
          </div>
        </Box>
      </div>
      <div className="py-10">
        <Box
          sx={{
            padding: "16px",
            border: "1px solid #D9D9D9",
            borderRadius: "16px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Typography variant="h5" fontWeight="normal" fontSize="26px">
            October 1 - 31
          </Typography>
          <Typography variant="body1" className="mb-4">
            Targeted Daily Sales:{" "}
            <span className="font-bold">AED {TARGET_SALES}</span>
          </Typography>

          <Grid container spacing={2} className="mt-4">
            {daysData.map((day) => (
              <Grid item size={{ md: 1.2, xs: 6 }} key={day.day}>
                <Box
                  className={clsx(
                    "rounded-md p-2 text-center h-[99px] w-[94px]",
                    day.sales >= TARGET_SALES ? "bg-[#F0B0B0]" : "bg-[#AEDDC5]"
                  )}
                >
                  <Typography
                    className={clsx(
                      "font-semibold text-start",
                      day.sales >= TARGET_SALES
                        ? "text-green-800"
                        : "text-red-800"
                    )}
                  >
                    {day.day}
                  </Typography>
                  <Typography
                    className={clsx(
                      day.sales >= TARGET_SALES
                        ? "text-green-800"
                        : "text-red-800"
                    )}
                  >
                    AED {day.sales}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default AnalyticsDetails;
