import { Box, Typography } from "@mui/material";
import React from "react";
import AppleCardStampFront from "../AppleStampCardDesign/AppleCardStampFront/AppleCardStampFront";
import AppleCardStampBack from "../AppleStampCardDesign/AppleCardStampBack/AppleCardStampBack";
import GoogleCardStampFront from "../GoogleStampCardDesign/GoogleCardStampFront/GoogleCardStampFront";
import GoogleCardStampBack from "../GoogleStampCardDesign/GoogleCardStampBack/GoogleCardStampBack";
import ZeekCardStampFront from "../ZeekStampCardDesign/ZeekCardStampFront/ZeekCardStampFront";
import ZeekCardStampBack from "../ZeekStampCardDesign/ZeekCardStampBack/ZeekCardStampBack";

const StampCardOverview = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
}) => {
  return (
    <Box className="px-4 py-8" sx={{ width: "80vw" }}>
      <div className="flex flex-row justify-evenly items-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Apple Wallet
          </Typography>
          <AppleCardStampFront
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
            isOverview
            selectedCode={selectedCode}
          />
          <AppleCardStampBack isOverview />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Google Wallet
          </Typography>
          <GoogleCardStampFront
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
            isOverview
            selectedCode={selectedCode}
          />
          <GoogleCardStampBack isOverview />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Zeek Wallet
          </Typography>
          <ZeekCardStampFront
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
            isOverview
            selectedCode={selectedCode}
          />
          <ZeekCardStampBack isOverview />
        </div>
      </div>
    </Box>
  );
};

export default StampCardOverview;
