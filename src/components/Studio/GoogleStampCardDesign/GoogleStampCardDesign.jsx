import { Box } from "@mui/material";
import React from "react";
import GoogleCardStampFront from "./GoogleCardStampFront/GoogleCardStampFront";
import GoogleCardStampBack from "./GoogleCardStampBack/GoogleCardStampBack";

const GoogleStampCardDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
  imagePreview,
}) => {
  return (
    <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
      <GoogleCardStampFront
        firstColor={firstColor}
        secondColor={secondColor}
        thirdColor={thirdColor}
        selectedCode={selectedCode}
        imagePreview={imagePreview}
      />
      <GoogleCardStampBack />
    </Box>
  );
};

export default GoogleStampCardDesign;
