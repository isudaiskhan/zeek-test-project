import React from "react";
import { Box, Typography } from "@mui/material";
import AppleCardFront from "../AppleCardDesign/AppleCardFront/AppleCardFront";
import AppleCardBack from "../AppleCardDesign/AppleCardBack/AppleCardBack";
import GoogleCardFront from "../GoogleCardDesign/GoogleCardFront/GoogleCardFront";
import GoogleCardBack from "../GoogleCardDesign/GoogleCardBack/GoogleCardBack";
import ZeekCardFront from "../ZeekCardDesign/ZeekCardFront/ZeekCardFront";
import ZeekCardBack from "../ZeekCardDesign/ZeekCardBack/ZeekCardBack";
import OverViewLandingPage from "../OverViewLandingPage/OverViewLandingPage";

const OverViewPage = ({
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
          <AppleCardFront
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
            selectedCode={selectedCode}
            isOverview
          />
          <AppleCardBack isOverview />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Google Wallet
          </Typography>
          <GoogleCardFront
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
            selectedCode={selectedCode}
            isOverview
          />
          <GoogleCardBack isOverview />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Zeek Wallet
          </Typography>
          <ZeekCardFront
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
            selectedCode={selectedCode}
            isOverview
          />
          <ZeekCardBack isOverview />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Landing Page
          </Typography>
          <OverViewLandingPage />
        </div>
      </div>
    </Box>
  );
};

export default OverViewPage;
