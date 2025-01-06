import { Box, Divider, Typography } from "@mui/material";
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
      <Box className="flex flex-col gap-1 items-center justify-center w-full">
        <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
          Google Wallet Card Design
        </Typography>
        <Divider sx={{ width: "100%" }} />
      </Box>
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
