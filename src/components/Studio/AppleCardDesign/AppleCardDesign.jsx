import { Box } from "@mui/material";
import React from "react";
import AppleCardFront from "./AppleCardFront/AppleCardFront";
import AppleCardBack from "./AppleCardBack/AppleCardBack";

const AppleCardDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
  imagePreview,
}) => {
  return (
    <>
      <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
        <AppleCardFront
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}
          selectedCode={selectedCode}
          imagePreview={imagePreview}
        />
        <AppleCardBack />
      </Box>
    </>
  );
};

export default AppleCardDesign;
