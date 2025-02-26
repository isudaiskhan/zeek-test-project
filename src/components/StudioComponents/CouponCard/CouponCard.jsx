import React from "react";
import CouponAppleCard from "./CouponAppleCard/CouponAppleCard";
import CouponAndroidCard from "./CouponAndroidCard/CouponAndroidCard";
import PointsNotificationCard from "../PointsCard/PointsNotificationCard/PointsNotificationCard";
import { ICON_TABS_OPTIONS } from "@/enums/cards";

const CouponCard = ({
  iconTabs,
  cardName,
  iconPreview,
  logoPreview,
  centralImagePreview,
  cardBgColor,
  cardTextColor,
  centerBackgroundColor,
  companyName,
}) => {
  return (
    <>
      {iconTabs === ICON_TABS_OPTIONS.APPLE && (
        <CouponAppleCard
          cardName={cardName}
          logoPreview={logoPreview}
          centralImagePreview={centralImagePreview}
          cardBgColor={cardBgColor}
          cardTextColor={cardTextColor}
          centerBackgroundColor={centerBackgroundColor}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ANDROID && (
        <CouponAndroidCard
          cardName={cardName}
          iconPreview={iconPreview}
          centralImagePreview={centralImagePreview}
          cardBgColor={cardBgColor}
          cardTextColor={cardTextColor}
          centerBackgroundColor={centerBackgroundColor}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ZEEK && (
        <CouponAppleCard
          cardName={cardName}
          logoPreview={logoPreview}
          centralImagePreview={centralImagePreview}
          cardBgColor={cardBgColor}
          cardTextColor={cardTextColor}
          centerBackgroundColor={centerBackgroundColor}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.NOTIFICATION && (
        <PointsNotificationCard
          iconPreview={iconPreview}
          companyName={companyName}
        />
      )}
    </>
  );
};

export default CouponCard;
