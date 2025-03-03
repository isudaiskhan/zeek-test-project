import { ICON_TABS_OPTIONS } from "@/enums/cards";
import React from "react";
import StampsAppleCardBack from "./StampsAppleCardBack/StampsAppleCardBack";
import StampsAndroidCardBack from "./StampsAndroidCardBack/StampsAndroidCardBack";
import PointsNotificationCard from "../PointsCard/PointsNotificationCard/PointsNotificationCard";

const StampCardDetails = ({
  activeLinks,
  iconTabs,
  centerBackgroundColor,
  centralImagePreview,
  companyName,
  issuerInformation,
  iconPreview,
  stampCounts,
}) => {
  return (
    <>
      {iconTabs === ICON_TABS_OPTIONS.APPLE && (
        <StampsAppleCardBack
          companyName={companyName}
          activeLinks={activeLinks}
          issuerInformation={issuerInformation}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ANDROID && (
        <StampsAndroidCardBack
          activeLinks={activeLinks}
          centerBackgroundColor={centerBackgroundColor}
          centralImagePreview={centralImagePreview}
          stampCounts={stampCounts}
        />
      )}
      {iconTabs === ICON_TABS_OPTIONS.ZEEK && (
        <StampsAppleCardBack
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

export default StampCardDetails;
