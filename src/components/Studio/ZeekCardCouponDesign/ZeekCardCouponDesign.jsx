import { Box } from "@mui/material";
import React from "react";
import ZeekCardCouponFront from "./ZeekCardCouponFront/ZeekCardCouponFront";
import ZeekCardCouponBack from "./ZeekCardCouponBack/ZeekCardCouponBack";

const ZeekCardCouponDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
  imagePreview,
}) => {
  return (
    <>
      <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
        <ZeekCardCouponFront
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}
          selectedCode={selectedCode}
          imagePreview={imagePreview}
        />
        <ZeekCardCouponBack />
      </Box>
    </>
  );
};

export default ZeekCardCouponDesign;
