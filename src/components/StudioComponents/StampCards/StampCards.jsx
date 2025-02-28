import { ICON_TABS_OPTIONS } from "@/enums/cards";
import React from "react";
import ZeekAppleCard from "./ZeekAppleCard/ZeekAppleCard";
import ZeekAndroidCard from "./ZeekAndroidCard/ZeekAndroidCard";
import PointsNotificationCard from "../PointsCard/PointsNotificationCard/PointsNotificationCard";

const StampCards = ({
  iconTabs,
  cardName,
  iconPreview,
  logoPreview,
  centralImagePreview,
  cardBgColor,
  cardTextColor,
  centerBackgroundColor,
  companyName,
  stampCounts,
  barcode,
}) => {
  return (
    <>
      {iconTabs === ICON_TABS_OPTIONS.APPLE && (
        <ZeekAppleCard
          cardName={cardName}
          logoPreview={logoPreview}
          centralImagePreview={centralImagePreview}
          cardBgColor={cardBgColor}
          cardTextColor={cardTextColor}
          centerBackgroundColor={centerBackgroundColor}
          stampCounts={stampCounts}
          barcode={barcode}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ANDROID && (
        <ZeekAndroidCard
          cardName={cardName}
          iconPreview={iconPreview}
          centralImagePreview={centralImagePreview}
          cardBgColor={cardBgColor}
          centerBackgroundColor={centerBackgroundColor}
          cardTextColor={cardTextColor}
          stampCounts={stampCounts}
          barcode={barcode}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ZEEK && (
        <ZeekAppleCard
          cardName={cardName}
          logoPreview={logoPreview}
          centralImagePreview={centralImagePreview}
          cardBgColor={cardBgColor}
          cardTextColor={cardTextColor}
          centerBackgroundColor={centerBackgroundColor}
          stampCounts={stampCounts}
          barcode={barcode}
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

export default StampCards;
