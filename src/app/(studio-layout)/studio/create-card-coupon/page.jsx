"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomPagination from "@/components/Studio/CustomPagination/CustomPagination";
import Grid from "@mui/material/Grid2";
import SideBar from "@/components/Studio/SideBar/SideBar";
import AppleCardCouponDesign from "@/components/Studio/AppleCardCouponDesign/AppleCardCouponDesign";
import GoogleCardCouponDesign from "@/components/Studio/GoogleCardCouponDesign/GoogleCardCouponDesign";
import ZeekCardCouponDesign from "@/components/Studio/ZeekCardCouponDesign/ZeekCardCouponDesign";
import CouponOverview from "@/components/Studio/CouponOverview/CouponOverview";

const CouponCard = () => {
  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [firstColor, setFirstColor] = React.useState("#48617D");
  const [secondColor, setSecondColor] = React.useState("#48617D");
  const [thirdColor, setThirdColor] = React.useState("#48617D");

  const handleFirstColorChange = (event) => {
    setFirstColor(event.target.value);
  };

  const handleSecondColorChange = (event) => {
    setSecondColor(event.target.value);
  };

  const handleThirdColorChange = (event) => {
    setThirdColor(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="p-4 relative">
      <div
        className={`flex flex-row ${
          currentPage === 4 ? "justify-between" : "gap-96"
        } items-center`}
      >
        <CustomButton
          text="All Cards"
          textColor="black"
          bgColor="#EAEAEA"
          startIcon={<ArrowBackIosIcon fontSize="small" />}
          onClick={() => (window.location.href = "/dashboard/loyalty")}
        />

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "40px",
            color: "black",
            textAlign: "center",
          }}
        >
          {currentPage === 4 ? "Overview" : "Zeek Card Studio Design"}
        </Typography>
        {currentPage === 4 && (
          <CustomButton text="Done" textColor="#FF5B00" bgColor="#FFDAC5" />
        )}
      </div>
      <Box className="py-10">
        <Grid container spacing={2}>
          {currentPage !== 4 && (
            <Grid item size={{ xs: 12, md: 2 }}>
              <SideBar
                value={value}
                handleChange={handleChange}
                firstColor={firstColor}
                secondColor={secondColor}
                thirdColor={thirdColor}
                handleFirstColorChange={handleFirstColorChange}
                handleSecondColorChange={handleSecondColorChange}
                handleThirdColorChange={handleThirdColorChange}
                currentPage={currentPage}
              />
            </Grid>
          )}
          <Grid
            item
            size={{
              xs: 12,
              md: currentPage === 4 ? 12 : 10,
            }}
          >
            <Box className="flex flex-col gap-2 items-center justify-center w-full">
              {currentPage === 1 && (
                <AppleCardCouponDesign
                  firstColor={firstColor}
                  secondColor={secondColor}
                  thirdColor={thirdColor}
                />
              )}
              {currentPage === 2 && (
                <GoogleCardCouponDesign
                  firstColor={firstColor}
                  secondColor={secondColor}
                  thirdColor={thirdColor}
                />
              )}
              {currentPage === 3 && (
                <ZeekCardCouponDesign
                  firstColor={firstColor}
                  secondColor={secondColor}
                  thirdColor={thirdColor}
                />
              )}
              {currentPage === 4 && (
                <CouponOverview
                  firstColor={firstColor}
                  secondColor={secondColor}
                  thirdColor={thirdColor}
                />
              )}

              <CustomPagination
                totalPages={4}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CouponCard;
