import React from "react";
import PointsAppleCard from "./PointsAppleCard/PointsAppleCard";
import PointsAndroidCard from "./PointsAndroidCard/PointsAndroidCard";
import PointsNotificationCard from "./PointsNotificationCard/PointsNotificationCard";
import { ICON_TABS_OPTIONS } from "@/enums/cards";

const PointsCard = ({ iconTabs }) => {
  return (
    <>
      {iconTabs === ICON_TABS_OPTIONS.APPLE && <PointsAppleCard />}
      {iconTabs === ICON_TABS_OPTIONS.ANDROID && <PointsAndroidCard />}
      {iconTabs === ICON_TABS_OPTIONS.ZEEK && <PointsAppleCard />}
      {iconTabs === ICON_TABS_OPTIONS.NOTIFICATION && (
        <PointsNotificationCard />
      )}
    </>
  );
};

export default PointsCard;
