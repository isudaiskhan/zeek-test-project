"use client";

import { Box, Chip, Container, IconButton, Typography } from "@mui/material";
import React, { useReducer } from "react";
import Grid from "@mui/material/Grid2";
import { PiCoin } from "react-icons/pi";
import { RiCoupon2Line } from "react-icons/ri";
import StudioHeader from "@/components/StudioComponents/StudioHeader/StudioHeader";
import CardTypes from "@/components/StudioComponents/CardTypes/CardTypes";
import Image from "next/image";
import { LiaAndroid } from "react-icons/lia";
import { LiaApple } from "react-icons/lia";
import { BiCertification } from "react-icons/bi";
import { PiNotification } from "react-icons/pi";
import { VscCircleFilled } from "react-icons/vsc";
import PointsCard from "@/components/StudioComponents/PointsCard/PointsCard";
import CouponCard from "@/components/StudioComponents/CouponCard/CouponCard";
import { getImageBase64URL, transformString } from "@/utils/helper-functions";
import {
  CARD_OPTIONS,
  CARD_TYPES_OPTIONS,
  ICON_TABS_OPTIONS,
} from "@/enums/cards";
import StudioCustomButton from "@/components/Custom/StudioCustomButton/StudioCustomButton";
import DesignPage from "@/components/StudioComponents/DesignPage/DesignPage";
import { LOYALTY_CARD_ACTIONS } from "@/enums/loyalty-card-actions";

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

const tabOrder = [
  CARD_OPTIONS.CARD_TYPES,
  CARD_OPTIONS.SETTINGS,
  CARD_OPTIONS.DESIGN,
  CARD_OPTIONS.INFORMATION,
];

const initialState = {
  activeTab: CARD_OPTIONS.CARD_TYPES,
  activeCardType: CARD_TYPES_OPTIONS.POINTS,
  iconTabs: ICON_TABS_OPTIONS.APPLE,
  cardName: "Custom Card #1",
  selectedLogo: null,
  logoPreview: "",
  selectedIcon: null,
  iconPreview: "",
  centralImage: null,
  centralImagePreview: "",
  cardBgColor: "#FFFFFF",
  cardTextColor: "#000000",
  centerBackgroundColor: "#F6F6F6",
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOYALTY_CARD_ACTIONS.SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_ACTIVE_CARD_TYPE:
      return { ...state, activeCardType: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_ICON_TABS:
      return { ...state, iconTabs: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_CARD_NAME:
      return { ...state, cardName: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_SELECTED_LOGO:
      return { ...state, selectedLogo: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_LOGO_PREVIEW:
      return { ...state, logoPreview: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_SELECTED_ICON:
      return { ...state, selectedIcon: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_ICON_PREVIEW:
      return { ...state, iconPreview: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_CENTRAL_IMAGE:
      return { ...state, centralImage: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_CENTRAL_IMAGE_PREVIEW:
      return { ...state, centralImagePreview: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_CARD_BG_COLOR:
      return { ...state, cardBgColor: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_CARD_TEXT_COLOR:
      return { ...state, cardTextColor: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_CENTER_BG_COLOR:
      return { ...state, centerBackgroundColor: action.payload };
    default:
      return state;
  }
};

const AddCard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const cardTypes = [
    {
      label: CARD_TYPES_OPTIONS.POINTS,
      value: CARD_TYPES_OPTIONS.POINTS,
      icon: (props) => <PiCoin {...props} />,
      buttonText: "High Retention",
      bgColor:
        state.activeCardType === CARD_TYPES_OPTIONS.POINTS
          ? "#FF5B00"
          : "#FFEBDF",
      textColor:
        state.activeCardType === CARD_TYPES_OPTIONS.POINTS
          ? "#FFFFFF"
          : "#FF5B00",
    },
    {
      label: CARD_TYPES_OPTIONS.STAMPS,
      value: CARD_TYPES_OPTIONS.STAMPS,
      icon: (props) => <BiCertification {...props} />,
      buttonText: "High Retention",
      bgColor:
        state.activeCardType === CARD_TYPES_OPTIONS.STAMPS
          ? "#FF5B00"
          : "#FFEBDF",
      textColor:
        state.activeCardType === CARD_TYPES_OPTIONS.STAMPS
          ? "#FFFFFF"
          : "#FF5B00",
    },
    {
      label: CARD_TYPES_OPTIONS.COUPONS,
      value: CARD_TYPES_OPTIONS.COUPONS,
      icon: (props) => <RiCoupon2Line {...props} />,
      buttonText: "Best for acquisition",
      bgColor:
        state.activeCardType === CARD_TYPES_OPTIONS.COUPONS
          ? "#768CEA"
          : "#F0F3FF",
      textColor:
        state.activeCardType === CARD_TYPES_OPTIONS.COUPONS
          ? "#FFFFFF"
          : "#768CEA",
    },
  ];

  const handleTabClick = (tab) => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_ACTIVE_TAB, payload: tab });
  };

  const handleCardTypeClick = (cardType) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_ACTIVE_CARD_TYPE,
      payload: cardType,
    });
  };

  const handleIconTabClick = (iconTab) => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_ICON_TABS, payload: iconTab });
  };

  const cardNameHandleChange = (e, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_CARD_NAME,
      payload: e.target.value,
      value,
    });
  };

  const handleNextStep = () => {
    const currentIndex = tabOrder.indexOf(state.activeTab);
    if (currentIndex < tabOrder.length - 1) {
      dispatch({
        type: LOYALTY_CARD_ACTIONS.SET_ACTIVE_TAB,
        payload: tabOrder[currentIndex + 1],
      });
    }
  };

  const handleLogoChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      dispatch({
        type: LOYALTY_CARD_ACTIONS.SET_LOGO_PREVIEW,
        payload: base64URL,
      });
      dispatch({ type: LOYALTY_CARD_ACTIONS.SET_SELECTED_LOGO, payload: file });
    }
  };

  const handleRemoveLogo = () => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_SELECTED_LOGO, payload: null });
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_LOGO_PREVIEW, payload: "" });
  };

  const handleIconChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      dispatch({
        type: LOYALTY_CARD_ACTIONS.SET_ICON_PREVIEW,
        payload: base64URL,
      });
      dispatch({ type: LOYALTY_CARD_ACTIONS.SET_SELECTED_ICON, payload: file });
    }
  };

  const handleRemoveIcon = () => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_SELECTED_ICON, payload: null });
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_ICON_PREVIEW, payload: "" });
  };

  const handleCentralImageChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      dispatch({
        type: LOYALTY_CARD_ACTIONS.SET_CENTRAL_IMAGE_PREVIEW,
        payload: base64URL,
      });
      dispatch({ type: LOYALTY_CARD_ACTIONS.SET_CENTRAL_IMAGE, payload: file });
    }
  };

  const handleRemoveCentralImage = () => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_CENTRAL_IMAGE, payload: null });
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_CENTRAL_IMAGE_PREVIEW,
      payload: "",
    });
  };

  const handleCardBgColorChange = (event, color) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_CARD_BG_COLOR,
      payload: event.target.value,
      color,
    });
  };

  const handleCardTextColorChange = (event, color) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_CARD_TEXT_COLOR,
      payload: event.target.value,
      color,
    });
  };

  const handleCenterBackgroundColorChange = (event, color) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_CENTER_BG_COLOR,
      payload: event.target.value,
      color,
    });
  };

  return (
    <Box>
      <StudioHeader
        tabs={tabsOptions}
        activeTab={state.activeTab}
        handleTabClick={handleTabClick}
        cardNameHandleChange={cardNameHandleChange}
        cardName={state.cardName}
      />

      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 7 }}>
            {state.activeTab === CARD_OPTIONS.CARD_TYPES && (
              <CardTypes
                activeCardType={state.activeCardType}
                handleCardTypeClick={handleCardTypeClick}
                cardTypes={cardTypes}
              />
            )}
            {state.activeTab === CARD_OPTIONS.SETTINGS && <div>Settings</div>}
            {state.activeTab === CARD_OPTIONS.DESIGN && (
              <DesignPage
                handleLogoChange={handleLogoChange}
                logoPreview={state.logoPreview}
                handleRemoveLogo={handleRemoveLogo}
                handleIconChange={handleIconChange}
                iconPreview={state.iconPreview}
                handleRemoveIcon={handleRemoveIcon}
                handleCentralImageChange={handleCentralImageChange}
                centralImagePreview={state.centralImagePreview}
                handleRemoveCentralImage={handleRemoveCentralImage}
                handleCardBgColorChange={handleCardBgColorChange}
                cardBgColor={state.cardBgColor}
                handleCardTextColorChange={handleCardTextColorChange}
                cardTextColor={state.cardTextColor}
                handleCenterBackgroundColorChange={
                  handleCenterBackgroundColorChange
                }
                centerBackgroundColor={state.centerBackgroundColor}
              />
            )}
            {state.activeTab === CARD_OPTIONS.INFORMATION && (
              <div>Information</div>
            )}
            <Box className="flex mt-20 md:mt-52 justify-center items-center w-full">
              <StudioCustomButton
                text="Continue"
                textColor="#FFFFFF"
                bgColor="#333333"
                width="100%"
                onClick={handleNextStep}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className="flex flex-row gap-10 mt-20 justify-center items-center relative">
              <div className="flex flex-col gap-4 justify-center items-center">
                <Chip
                  icon={<VscCircleFilled color="#FF3C3C" />}
                  label="Inactive"
                  className="w-1/2"
                />
                <Image
                  src={
                    state.iconTabs === ICON_TABS_OPTIONS.ANDROID
                      ? "/images/android-frame.png"
                      : "/images/iphone-frame.png"
                  }
                  alt="card-frame"
                  height={100}
                  width={100}
                  layout="responsive"
                  className="!h-[550px] !w-[290px] object-contain"
                />
              </div>
              <div className="absolute top-[20%] left-[42.5%] -translate-x-1/2 w-[230px]">
                {state.activeCardType === CARD_TYPES_OPTIONS.POINTS && (
                  <PointsCard
                    iconTabs={state.iconTabs}
                    cardName={state.cardName}
                    iconPreview={state.iconPreview}
                    logoPreview={state.logoPreview}
                    centralImagePreview={state.centralImagePreview}
                    cardBgColor={state.cardBgColor}
                    cardTextColor={state.cardTextColor}
                    centerBackgroundColor={state.centerBackgroundColor}
                  />
                )}
                {state.activeCardType === CARD_TYPES_OPTIONS.COUPONS && (
                  <CouponCard
                    iconTabs={state.iconTabs}
                    cardName={state.cardName}
                    iconPreview={state.iconPreview}
                    logoPreview={state.logoPreview}
                    centralImagePreview={state.centralImagePreview}
                    cardBgColor={state.cardBgColor}
                    cardTextColor={state.cardTextColor}
                    centerBackgroundColor={state.centerBackgroundColor}
                  />
                )}
              </div>
              <Box className="flex flex-col gap-4 justify-center items-center">
                {icons.map((item, index) => (
                  <Box
                    key={index}
                    className={`flex justify-center items-center w-full rounded-md p-1 ${
                      state.iconTabs === item.value
                        ? "bg-[#FFECE1]"
                        : "bg-[#EEEEEE]"
                    } `}
                  >
                    <IconButton onClick={() => handleIconTabClick(item.value)}>
                      {item.icon({
                        size: 30,
                        color:
                          state.iconTabs === item.value ? "#FF5B00" : "#000000",
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
