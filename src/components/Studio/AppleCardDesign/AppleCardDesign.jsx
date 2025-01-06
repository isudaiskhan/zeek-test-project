import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import AppleCardFront from "./AppleCardFront/AppleCardFront";
import AppleCardBack from "./AppleCardBack/AppleCardBack";

const AppleCardDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
}) => {
  return (
    <>
      <Box className="flex flex-col gap-1 items-center justify-center w-full">
        <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
          Apple Wallet Card Design
        </Typography>
        <Divider sx={{ width: "100%" }} />
      </Box>
      <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
        <AppleCardFront
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}
          selectedCode={selectedCode}
        />
        <AppleCardBack />
      </Box>
    </>
  );
};

export default AppleCardDesign;
