import { Box } from "@mui/material";
import React from "react";
import GoogleCardCouponFront from "./GoogleCardCouponFront/GoogleCardCouponFront";
import GoogleCardCouponBack from "./GoogleCardCouponBack/GoogleCardCouponBack";

const GoogleCardCouponDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
}) => {
  return (
    <>
      <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
        <GoogleCardCouponFront
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}
          selectedCode={selectedCode}
        />
        <GoogleCardCouponBack />
      </Box>
    </>
  );
};

export default GoogleCardCouponDesign;
