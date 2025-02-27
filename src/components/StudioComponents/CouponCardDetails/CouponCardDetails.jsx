import React from "react";
import CouponAppleCard from "../CouponCard/CouponAppleCard/CouponAppleCard";
import { ICON_TABS_OPTIONS } from "@/enums/cards";
import CouponAndroidCardBack from "./CouponAndroidCardBack/CouponAndroidCardBack";
import PointsNotificationCard from "../PointsCard/PointsNotificationCard/PointsNotificationCard";

const CouponCardDetails = ({
  activeLinks,
  iconTabs,
  centerBackgroundColor,
  centralImagePreview,
  companyName,
  iconPreview,
  cardName,
  logoPreview,
  cardBgColor,
  cardTextColor,
}) => {
  return (
    <>
      {iconTabs === ICON_TABS_OPTIONS.APPLE && (
        <div className="flex justify-center items-center">
          <div className="mt-4 w-[230px]">
            <CouponAppleCard
              cardName={cardName}
              logoPreview={logoPreview}
              centralImagePreview={centralImagePreview}
              cardBgColor={cardBgColor}
              cardTextColor={cardTextColor}
              centerBackgroundColor={centerBackgroundColor}
            />
          </div>
        </div>
      )}
      {iconTabs === ICON_TABS_OPTIONS.ANDROID && (
        <CouponAndroidCardBack
          centerBackgroundColor={centerBackgroundColor}
          centralImagePreview={centralImagePreview}
          activeLinks={activeLinks}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ZEEK && (
        <div className="flex justify-center items-center">
          <div className="mt-4 w-[230px]">
            <CouponAppleCard
              cardName={cardName}
              logoPreview={logoPreview}
              centralImagePreview={centralImagePreview}
              cardBgColor={cardBgColor}
              cardTextColor={cardTextColor}
              centerBackgroundColor={centerBackgroundColor}
            />
          </div>
        </div>
      )}
      {iconTabs === ICON_TABS_OPTIONS.NOTIFICATION && (
        <div className="flex justify-center items-center">
          <div className="mt-5 w-[230px]">
            <PointsNotificationCard
              iconPreview={iconPreview}
              companyName={companyName}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CouponCardDetails;
