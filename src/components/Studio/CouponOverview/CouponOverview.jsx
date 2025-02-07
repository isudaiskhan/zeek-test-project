import { Box, Typography } from "@mui/material";
import React from "react";
import AppleCardCouponBack from "../AppleCardCouponDesign/AppleCardCouponBack/AppleCardCouponBack";
import AppleCardCouponFront from "../AppleCardCouponDesign/AppleCardCouponFront/AppleCardCouponFront";
import GoogleCardCouponFront from "../GoogleCardCouponDesign/GoogleCardCouponFront/GoogleCardCouponFront";
import GoogleCardCouponBack from "../GoogleCardCouponDesign/GoogleCardCouponBack/GoogleCardCouponBack";
import ZeekCardCouponFront from "../ZeekCardCouponDesign/ZeekCardCouponFront/ZeekCardCouponFront";
import ZeekCardCouponBack from "../ZeekCardCouponDesign/ZeekCardCouponBack/ZeekCardCouponBack";

const CouponOverview = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
  handleAutomaticUpdateChange,
  automaticUpdateSwitch,
  handleAllowNotificationsChange,
  allowNotificationsSwitch,
}) => {
  return (
    <Box className="px-4 py-8" sx={{ width: "80vw" }}>
      <div className="flex flex-row justify-evenly items-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Apple Wallet
          </Typography>
          <AppleCardCouponFront
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
            isOverview
            selectedCode={selectedCode}
          />
          <AppleCardCouponBack
            isOverview
            handleAutomaticUpdateChange={handleAutomaticUpdateChange}
            automaticUpdateSwitch={automaticUpdateSwitch}
            handleAllowNotificationsChange={handleAllowNotificationsChange}
            allowNotificationsSwitch={allowNotificationsSwitch}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Google Wallet
          </Typography>
          <GoogleCardCouponFront
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
            isOverview
            selectedCode={selectedCode}
          />
          <GoogleCardCouponBack isOverview />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Google Wallet
          </Typography>
          <ZeekCardCouponFront
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
            isOverview
            selectedCode={selectedCode}
          />
          <ZeekCardCouponBack isOverview />
        </div>
      </div>
    </Box>
  );
};

export default CouponOverview;
