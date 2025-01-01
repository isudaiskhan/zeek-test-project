import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import GoogleCardCouponFront from "./GoogleCardCouponFront/GoogleCardCouponFront";
import GoogleCardCouponBack from "./GoogleCardCouponBack/GoogleCardCouponBack";

const GoogleCardCouponDesign = ({ firstColor, secondColor, thirdColor }) => {
  return (
    <>
      <Box className="flex flex-col gap-1 items-center justify-center w-full">
        <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
          Google Wallet Card Design
        </Typography>
        <Divider sx={{ width: "100%" }} />
      </Box>
      <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
        <GoogleCardCouponFront
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}
        />
        <GoogleCardCouponBack />
      </Box>
    </>
  );
};

export default GoogleCardCouponDesign;
