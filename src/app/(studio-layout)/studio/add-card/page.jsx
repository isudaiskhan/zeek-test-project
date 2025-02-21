"use client";

import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { PiCoin } from "react-icons/pi";
import { RiCoupon2Line } from "react-icons/ri";
import StudioHeader from "@/components/StudioComponents/StudioHeader/StudioHeader";
import CardTypes from "@/components/StudioComponents/CardTypes/CardTypes";
import Image from "next/image";
import { LiaAndroid } from "react-icons/lia";
import { LiaApple } from "react-icons/lia";
import { PiNotification } from "react-icons/pi";
import PointsCard from "@/components/StudioComponents/PointsCard/PointsCard";
import CouponCard from "@/components/StudioComponents/CouponCard/CouponCard";
import { transformString } from "@/utils/helper-functions";
import {
  CARD_OPTIONS,
  CARD_TYPES_OPTIONS,
  ICON_TABS_OPTIONS,
} from "@/enums/cards";

const tabs = [
  {
    label: "Card Type",
    value: "cardType",
  },
  {
    label: "Settings",
    value: "settings",
  },
  {
    label: "Design",
    value: "design",
  },
  {
    label: "Information",
    value: "information",
  },
];

const tabsOptions = Object.entries(CARD_OPTIONS).map(([key, value]) => ({
  label: transformString(key),
  value: value,
}));

const icons = [
  {
    icon: (props) => <LiaApple {...props} />,
    value: ICON_TABS_OPTIONS.APPLE,
  },
  {
    icon: (props) => <LiaAndroid {...props} />,
    value: ICON_TABS_OPTIONS.ANDROID,
  },
  {
    icon: (props) => <Typography sx={{ ...props }}>Z.</Typography>,
    value: ICON_TABS_OPTIONS.ZEEK,
  },
  {
    icon: (props) => <PiNotification {...props} />,
    value: ICON_TABS_OPTIONS.NOTIFICATION,
  },
];

const AddCard = () => {
  const [activeTab, setActiveTab] = useState(CARD_OPTIONS.CARD_TYPES);
  const [activeCardType, setActiveCardType] = useState(
    CARD_TYPES_OPTIONS.POINTS
  );
  const [iconTabs, setIconTabs] = useState(ICON_TABS_OPTIONS.APPLE);

  const cardTypes = [
    {
      label: CARD_TYPES_OPTIONS.POINTS,
      value: CARD_TYPES_OPTIONS.POINTS,
      icon: (props) => <PiCoin {...props} />,
      buttonText: "High Retention",
      bgColor:
        activeCardType === CARD_TYPES_OPTIONS.POINTS ? "#FF5B00" : "#FFEBDF",
      textColor:
        activeCardType === CARD_TYPES_OPTIONS.POINTS ? "#FFFFFF" : "#FF5B00",
    },
    {
      label: CARD_TYPES_OPTIONS.STAMPS,
      value: CARD_TYPES_OPTIONS.STAMPS,
      icon: (props) => <PiCoin {...props} />,
      buttonText: "High Retention",
      bgColor:
        activeCardType === CARD_TYPES_OPTIONS.STAMPS ? "#FF5B00" : "#FFEBDF",
      textColor:
        activeCardType === CARD_TYPES_OPTIONS.STAMPS ? "#FFFFFF" : "#FF5B00",
    },
    {
      label: CARD_TYPES_OPTIONS.COUPONS,
      value: CARD_TYPES_OPTIONS.COUPONS,
      icon: (props) => <RiCoupon2Line {...props} />,
      buttonText: "Best for acquisition",
      bgColor:
        activeCardType === CARD_TYPES_OPTIONS.COUPONS ? "#768CEA" : "#F0F3FF",
      textColor:
        activeCardType === CARD_TYPES_OPTIONS.COUPONS ? "#FFFFFF" : "#768CEA",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCardTypeClick = (cardType) => {
    setActiveCardType(cardType);
  };

  const handleIconTabClick = (iconTab) => {
    setIconTabs(iconTab);
  };

  return (
    <Box>
      <StudioHeader
        tabs={tabsOptions}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />

      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 7 }}>
            {activeTab === CARD_OPTIONS.CARD_TYPES && (
              <CardTypes
                activeCardType={activeCardType}
                handleCardTypeClick={handleCardTypeClick}
                cardTypes={cardTypes}
              />
            )}
            {activeTab === CARD_OPTIONS.SETTINGS && <div>Settings</div>}
            {activeTab === CARD_OPTIONS.DESIGN && <div>Design</div>}
            {activeTab === CARD_OPTIONS.INFORMATION && <div>Information</div>}
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className="flex flex-row gap-10 mt-28 justify-center items-center relative">
              <Image
                src={
                  iconTabs === ICON_TABS_OPTIONS.ANDROID
                    ? "/images/android-frame.png"
                    : "/images/iphone-frame.png"
                }
                alt="card-frame"
                height={100}
                width={100}
                layout="responsive"
                className="!h-[550px] !w-[290px] object-contain"
              />
              <div className="absolute top-[15%] left-[42.5%] -translate-x-1/2 w-[230px]">
                {activeCardType === CARD_TYPES_OPTIONS.POINTS && (
                  <PointsCard iconTabs={iconTabs} />
                )}
                {activeCardType === CARD_TYPES_OPTIONS.COUPONS && (
                  <CouponCard iconTabs={iconTabs} />
                )}
              </div>
              <Box className="flex flex-col gap-4 justify-center items-center">
                {icons.map((item, index) => (
                  <Box
                    key={index}
                    className={`flex justify-center items-center w-full rounded-md p-1 ${
                      iconTabs === item.value ? "bg-[#FFECE1]" : "bg-[#EEEEEE]"
                    } `}
                  >
                    <IconButton onClick={() => handleIconTabClick(item.value)}>
                      {item.icon({
                        size: 30,
                        color: iconTabs === item.value ? "#FF5B00" : "#000000",
                        fontSize: "20px",
                        fontWeight: 900,
                      })}
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddCard;
