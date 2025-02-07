import { Box } from "@mui/material";
import React from "react";
import AppleCardCouponFront from "./AppleCardCouponFront/AppleCardCouponFront";
import AppleCardCouponBack from "./AppleCardCouponBack/AppleCardCouponBack";

const AppleCardCouponDesign = ({
  firstColor,
  secondColor,
  thirdColor,
  selectedCode,
  imagePreview,
  handleAutomaticUpdateChange,
  automaticUpdateSwitch,
  handleAllowNotificationsChange,
  allowNotificationsSwitch,
}) => {
  return (
    <>
      <Box className="flex flex-row gap-2 items-center justify-evenly w-full py-14">
        <AppleCardCouponFront
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}
          selectedCode={selectedCode}
          imagePreview={imagePreview}
        />
        <AppleCardCouponBack
          handleAutomaticUpdateChange={handleAutomaticUpdateChange}
          automaticUpdateSwitch={automaticUpdateSwitch}
          handleAllowNotificationsChange={handleAllowNotificationsChange}
          allowNotificationsSwitch={allowNotificationsSwitch}
        />
      </Box>
    </>
  );
};

export default AppleCardCouponDesign;
