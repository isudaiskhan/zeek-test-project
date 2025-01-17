import { Box } from "@mui/material";
import React from "react";
import ZeekCardStampFront from "./ZeekCardStampFront/ZeekCardStampFront";
import ZeekCardStampBack from "./ZeekCardStampBack/ZeekCardStampBack";

const ZeekStampCardDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
}) => {
  return (
    <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
      <ZeekCardStampFront
        firstColor={firstColor}
        secondColor={secondColor}
        thirdColor={thirdColor}
        selectedCode={selectedCode}
      />
      <ZeekCardStampBack />
    </Box>
  );
};

export default ZeekStampCardDesign;
