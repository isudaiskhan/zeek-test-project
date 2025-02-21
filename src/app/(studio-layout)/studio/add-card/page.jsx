"use client";

import {
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";
import StudioCustomButton from "@/components/Custom/StudioCustomButton/StudioCustomButton";
import Grid from "@mui/material/Grid2";
import { PiCoin } from "react-icons/pi";
import { RiCoupon2Line } from "react-icons/ri";
import StudioHeader from "@/components/StudioComponents/StudioHeader/StudioHeader";
import CardTypes from "@/components/StudioComponents/CardTypes/CardTypes";
import Image from "next/image";
import { LiaAndroid } from "react-icons/lia";
import { LiaApple } from "react-icons/lia";
import { PiNotification } from "react-icons/pi";

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

const icons = [
  {
    icon: (props) => <LiaApple {...props} />,
    value: "apple",
  },
  {
    icon: (props) => <LiaAndroid {...props} />,
    value: "android",
  },
  {
    icon: (props) => <PiNotification {...props} />,
    value: "notification",
  },
];

const AddCard = () => {
  const [activeTab, setActiveTab] = useState("cardType");
  const [activeCardType, setActiveCardType] = useState("points");
  const [iconTabs, setIconTabs] = useState("apple");

  const cardTypes = [
    {
      label: "Points",
      value: "points",
      icon: (props) => <PiCoin {...props} />,
      buttonText: "High Retention",
      bgColor: activeCardType === "points" ? "#FF5B00" : "#FFEBDF",
      textColor: activeCardType === "points" ? "#FFFFFF" : "#FF5B00",
    },
    {
      label: "Stamps",
      value: "stamps",
      icon: (props) => <PiCoin {...props} />,
      buttonText: "High Retention",
      bgColor: activeCardType === "stamps" ? "#FF5B00" : "#FFEBDF",
      textColor: activeCardType === "stamps" ? "#FFFFFF" : "#FF5B00",
    },
    {
      label: "Coupons",
      value: "coupons",
      icon: (props) => <RiCoupon2Line {...props} />,
      buttonText: "Best for acquisition",
      bgColor: activeCardType === "coupons" ? "#768CEA" : "#F0F3FF",
      textColor: activeCardType === "coupons" ? "#FFFFFF" : "#768CEA",
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
        tabs={tabs}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />

      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 7 }}>
            {activeTab === "cardType" && (
              <CardTypes
                activeCardType={activeCardType}
                handleCardTypeClick={handleCardTypeClick}
                cardTypes={cardTypes}
              />
            )}
            {activeTab === "settings" && <div>Settings</div>}
            {activeTab === "design" && <div>Design</div>}
            {activeTab === "information" && <div>Information</div>}
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className="flex flex-row gap-10 mt-28 justify-center items-center">
              <Image
                src={
                  iconTabs === "android"
                    ? "/images/android-frame.png"
                    : "/images/iphone-frame.png"
                }
                alt="card-frame"
                height={100}
                width={100}
                layout="responsive"
                className="!h-[550px] !w-[290px] object-contain"
              />
              <Box className="flex flex-col gap-4 justify-center items-center">
                {icons.map((item, index) => (
                  <Box
                    key={index}
                    className={`flex justify-center items-center rounded-md p-1 ${
                      iconTabs === item.value ? "bg-[#FFECE1]" : "bg-[#EEEEEE]"
                    } `}
                  >
                    <IconButton onClick={() => handleIconTabClick(item.value)}>
                      {item.icon({
                        size: 30,
                        color: iconTabs === item.value ? "#FF5B00" : "#000000",
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
