import { Box } from "@mui/material";
import React from "react";
import ZeekCardFront from "./ZeekCardFront/ZeekCardFront";
import ZeekCardBack from "./ZeekCardBack/ZeekCardBack";

const ZeekCardDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
  imagePreview,
}) => {
  return (
    <>
      <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
        <ZeekCardFront
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}
          selectedCode={selectedCode}
          imagePreview={imagePreview}
        />
        <ZeekCardBack />
      </Box>
    </>
  );
};

export default ZeekCardDesign;
