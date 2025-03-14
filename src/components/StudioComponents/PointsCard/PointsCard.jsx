import React from "react";
import PointsAppleCard from "./PointsAppleCard/PointsAppleCard";
import PointsAndroidCard from "./PointsAndroidCard/PointsAndroidCard";
import PointsNotificationCard from "./PointsNotificationCard/PointsNotificationCard";
import { ICON_TABS_OPTIONS } from "@/enums/cards";
import PointsZeekCard from "./PointsZeekCard/PointsZeekCard";

const PointsCard = ({
  iconTabs,
  cardName,
  iconPreview,
  logoPreview,
  centralImagePreview,
  cardBgColor,
  cardTextColor,
  centerBackgroundColor,
  companyName,
  barcode,
}) => {
  return (
    <>
      {iconTabs === ICON_TABS_OPTIONS.APPLE && (
        <PointsAppleCard
          cardName={cardName}
          logoPreview={logoPreview}
          centralImagePreview={centralImagePreview}
          cardBgColor={cardBgColor}
          cardTextColor={cardTextColor}
          centerBackgroundColor={centerBackgroundColor}
          barcode={barcode}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ANDROID && (
        <PointsAndroidCard
          cardName={cardName}
          iconPreview={iconPreview}
          centralImagePreview={centralImagePreview}
          cardBgColor={cardBgColor}
          centerBackgroundColor={centerBackgroundColor}
          cardTextColor={cardTextColor}
          barcode={barcode}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ZEEK && (
        <PointsZeekCard
          cardName={cardName}
          logoPreview={logoPreview}
          centralImagePreview={centralImagePreview}
          cardBgColor={cardBgColor}
          cardTextColor={cardTextColor}
          centerBackgroundColor={centerBackgroundColor}
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

export default PointsCard;
