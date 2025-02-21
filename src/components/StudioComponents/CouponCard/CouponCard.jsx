import React from "react";
import CouponAppleCard from "./CouponAppleCard/CouponAppleCard";
import CouponAndroidCard from "./CouponAndroidCard/CouponAndroidCard";
import PointsNotificationCard from "../PointsCard/PointsNotificationCard/PointsNotificationCard";
import { ICON_TABS_OPTIONS } from "@/enums/cards";

const CouponCard = ({ iconTabs }) => {
  return (
    <>
      {iconTabs === ICON_TABS_OPTIONS.APPLE && <CouponAppleCard />}
      {iconTabs === ICON_TABS_OPTIONS.ANDROID && <CouponAndroidCard />}
      {iconTabs === ICON_TABS_OPTIONS.ZEEK && <CouponAppleCard />}
      {iconTabs === ICON_TABS_OPTIONS.NOTIFICATION && (
        <PointsNotificationCard />
      )}
    </>
  );
};

export default CouponCard;
