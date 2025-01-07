import { Box } from "@mui/material";
import React from "react";
import GoogleCardFront from "./GoogleCardFront/GoogleCardFront";
import GoogleCardBack from "./GoogleCardBack/GoogleCardBack";

const GoogleCardDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
}) => {
  return (
    <>
      <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
        <GoogleCardFront
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}
          selectedCode={selectedCode}
        />
        <GoogleCardBack />
      </Box>
    </>
  );
};

export default GoogleCardDesign;
