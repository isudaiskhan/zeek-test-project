import React from "react";
import PointsAndroidCardBack from "./PointsAndroidCardBack/PointsAndroidCardBack";
import { ICON_TABS_OPTIONS } from "@/enums/cards";
import PointsAppleCardBack from "./PointsAppleCardBack/PointsAppleCardBack";
import PointsNotificationCard from "../PointsCard/PointsNotificationCard/PointsNotificationCard";

const PointsCardDetails = ({
  activeLinks,
  iconTabs,
  centerBackgroundColor,
  centralImagePreview,
  companyName,
  issuerInformation,
  iconPreview,
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
        <PointsAppleCardBack
          companyName={companyName}
          activeLinks={activeLinks}
          issuerInformation={issuerInformation}
        />
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
