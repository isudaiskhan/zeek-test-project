import { Box } from "@mui/material";
import React from "react";
import AppleCardStampFront from "./AppleCardStampFront/AppleCardStampFront";
import AppleCardStampBack from "./AppleCardStampBack/AppleCardStampBack";

const AppleStampCardDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
  imagePreview,
}) => {
  return (
    <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
      <AppleCardStampFront
        firstColor={firstColor}
        secondColor={secondColor}
        thirdColor={thirdColor}
        selectedCode={selectedCode}
        imagePreview={imagePreview}
      />
      <AppleCardStampBack />
    </Box>
  );
};

export default AppleStampCardDesign;
