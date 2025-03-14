import React from "react";
import PointsAndroidCardBack from "./PointsAndroidCardBack/PointsAndroidCardBack";
import { ICON_TABS_OPTIONS } from "@/enums/cards";
import PointsAppleCardBack from "./PointsAppleCardBack/PointsAppleCardBack";
import PointsNotificationCard from "../PointsCard/PointsNotificationCard/PointsNotificationCard";
import PointsZeekCard from "../PointsCard/PointsZeekCard/PointsZeekCard";

const PointsCardDetails = ({
  activeLinks,
  iconTabs,
  centerBackgroundColor,
  centralImagePreview,
  companyName,
  issuerInformation,
  iconPreview,
  cardName,
  logoPreview,
  cardBgColor,
  cardTextColor,
  barcode,
}) => {
  return (
    <>
      {iconTabs === ICON_TABS_OPTIONS.APPLE && (
        <PointsAppleCardBack
          companyName={companyName}
          activeLinks={activeLinks}
          issuerInformation={issuerInformation}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ANDROID && (
        <PointsAndroidCardBack
          activeLinks={activeLinks}
          centerBackgroundColor={centerBackgroundColor}
          centralImagePreview={centralImagePreview}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ZEEK && (
        <div className="flex justify-center items-center">
          <div className="mt-5 w-[230px]">
            <PointsZeekCard
              cardName={cardName}
              logoPreview={logoPreview}
              centralImagePreview={centralImagePreview}
              cardBgColor={cardBgColor}
              cardTextColor={cardTextColor}
              centerBackgroundColor={centerBackgroundColor}
              barcode={barcode}
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

export default PointsCardDetails;
