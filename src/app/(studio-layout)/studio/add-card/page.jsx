"use client";

import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useReducer, useState } from "react";
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
import {
  getImageBase64URL,
  transformString,
  uploadFileFunc,
} from "@/utils/helper-functions";
import {
  CARD_OPTIONS,
  CARD_TYPES_OPTIONS,
  ICON_TABS_OPTIONS,
} from "@/enums/cards";
import StudioCustomButton from "@/components/Custom/StudioCustomButton/StudioCustomButton";
import DesignPage from "@/components/StudioComponents/DesignPage/DesignPage";
import {
  BARCODE_TYPES,
  CARD_STATUS,
  DISCOUNT_VALUE,
  LOYALTY_CARD_ACTIONS,
} from "@/enums/loyalty-card-actions";
import Settings from "@/components/StudioComponents/Settings/Settings";
import InformationPage from "@/components/StudioComponents/InformationPage/InformationPage";
import PointsCardDetails from "@/components/StudioComponents/PointsCardDetails/PointsCardDetails";
import CouponCardDetails from "@/components/StudioComponents/CouponCardDetails/CouponCardDetails";
import StampCards from "@/components/StudioComponents/StampCards/StampCards";
import StampCardDetails from "@/components/StudioComponents/StampCardDetails/StampCardDetails";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { addCards } from "@/services/loyalty";
import SuccessDialog from "@/components/Modals/SuccessModal";

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

const initialFields = {
  firstName: {
    title: "First Name",
    type: "text",
    unique: false,
    required: true,
  },
  lastName: {
    title: "Last Name",
    type: "text",
    required: true,
    unique: false,
  },
  phoneNumber: {
    title: "Phone Number",
    type: "text",
    required: true,
    unique: true,
  },
  email: {
    title: "Email",
    type: "text",
    required: true,
    unique: false,
  },
  dob: {
    title: "Date of Birth",
    type: "date",
    required: true,
    unique: false,
  },
};

const initialState = {
  activeTab: CARD_OPTIONS.CARD_TYPES,
  activeCardType: CARD_TYPES_OPTIONS.LOYALTY,
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
  barcode: BARCODE_TYPES.PDF_417,
  rewardProgram: "",
  expirationOption: "unlimited",
  pointsLifetime: "unlimited",
  source: "",
  country: null,
  cardIssueForm: initialFields,
  spendAmount: 1,
  pointsPerSpend: 1,
  visitsRequired: 1,
  pointsPerVisit: 1,
  dailyVisitLimit: false,
  expirationDate: null,
  expirationPeriod: { value: 1, unit: "days" },
  pointsPeriod: { value: 1, unit: "days" },
  cardDescription: "",
  companyName: "COMPANY NAME",
  activeLinks: [{ type: "url", link: "", text: "" }],
  issuerInformation: { companyName: "", email: "", phone: "", country: "" },
  cardFields: [
    { type: "text", fieldName: "tier" },
    { type: "text", fieldName: "tier" },
  ],
  activeStampColor: "#1F1E1F",
  inActiveStampColor: "#AAAAAA",
  activeStampIcon: null,
  inActiveStampIcon: null,
  activeStampIconPreview: "",
  inActiveStampIconPreview: "",
  stampCounts: 12,
  earnStamps: "",
  rewardDetails: "",
  earnedStampMessage: "",
  earnedRewardMessage: "",
  status: "",
  stampPerVisit: 1,
  stampPerSpent: 1,
  discountValue: "",
  fixedValueAmount: 1,
  variablePercentage: 20,
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
    case LOYALTY_CARD_ACTIONS.SET_BARCODE:
      return { ...state, barcode: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_REWARD_PROGRAM:
      return { ...state, rewardProgram: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_EXPIRATION_OPTION:
      return { ...state, expirationOption: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_POINTS_LIFETIME:
      return { ...state, pointsLifetime: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_SOURCE:
      return { ...state, source: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_COUNTRY:
      return { ...state, country: action.payload };
    // case LOYALTY_CARD_ACTIONS.SET_CARD_ISSUE_FORM: {
    //   const updatedFields = state.cardIssueForm.map((field, index) =>
    //     index === action.payload.index
    //       ? { ...field, [action.payload.key]: action.payload.value }
    //       : field
    //   );
    //   return { ...state, cardIssueForm: updatedFields };
    // }
    case LOYALTY_CARD_ACTIONS.SET_CARD_ISSUE_FORM: {
      return {
        ...state,
        cardIssueForm: {
          ...state.cardIssueForm,
          [action.payload.key]: {
            ...state.cardIssueForm[action.payload.key],
            [action.payload.field]: action.payload.value,
          },
        },
      };
    }
    case LOYALTY_CARD_ACTIONS.SET_SPEND_VALUES:
      return {
        ...state,
        spendAmount: action.payload.spend,
        pointsPerSpend: action.payload.points,
      };
    case LOYALTY_CARD_ACTIONS.SET_VISIT_VALUES:
      return {
        ...state,
        visitsRequired: action.payload.visits,
        pointsPerVisit: action.payload.points,
      };
    case LOYALTY_CARD_ACTIONS.TOGGLE_DAILY_VISIT_LIMIT:
      return { ...state, dailyVisitLimit: !state.dailyVisitLimit };
    case LOYALTY_CARD_ACTIONS.SET_EXPIRATION_DATE:
      return { ...state, expirationDate: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_EXPIRATION_PERIOD:
      return {
        ...state,
        expirationPeriod: { ...state.expirationPeriod, ...action.payload },
      };
    case LOYALTY_CARD_ACTIONS.SET_POINTS_PERIOD:
      return {
        ...state,
        pointsPeriod: { ...state.pointsPeriod, ...action.payload },
      };
    case LOYALTY_CARD_ACTIONS.SET_CARD_DESCRIPTION:
      return { ...state, cardDescription: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_COMPANY_NAME:
      return { ...state, companyName: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_ACTIVE_LINKS:
      return { ...state, activeLinks: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_ISSUER_INFORMATION:
      return {
        ...state,
        issuerInformation: { ...state.issuerInformation, ...action.payload },
      };
    case LOYALTY_CARD_ACTIONS.SET_CARD_FIELDS:
      const updatedFields = state.cardFields.map((cardField, index) =>
        index === action.payload.index
          ? { ...cardField, [action.payload.field]: action.payload.value }
          : cardField
      );
      return { ...state, cardFields: updatedFields };
    case LOYALTY_CARD_ACTIONS.SET_ACTIVE_STAMP_COLOR:
      return { ...state, activeStampColor: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_INACTIVE_STAMP_COLOR:
      return { ...state, inActiveStampColor: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_SELECTED_ACTIVE_STAMP_ICON:
      return { ...state, activeStampIcon: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_SELECTED_INACTIVE_STAMP_ICON:
      return { ...state, inActiveStampIcon: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_ACTIVE_STAMP_ICON_PREVIEW:
      return { ...state, activeStampIconPreview: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_INACTIVE_STAMP_ICON_PREVIEW:
      return { ...state, inActiveStampIconPreview: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_STAMP_COUNTS:
      return { ...state, stampCounts: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_EARN_STAMP:
      return { ...state, earnStamps: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_REWARD_DETAILS:
      return { ...state, rewardDetails: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_EARNED_STAMP_MESSAGE:
      return { ...state, earnedStampMessage: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_EARNED_REWARD_MESSAGE:
      return { ...state, earnedRewardMessage: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_CARD_STATUS:
      return { ...state, status: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_STAMP_PER_SPENT:
      return { ...state, stampPerSpent: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_STAMP_PER_VISIT:
      return { ...state, stampPerVisit: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_DISCOUNT_VALUE:
      return { ...state, discountValue: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_FIXED_VALUE_AMOUNT:
      return { ...state, fixedValueAmount: action.payload };
    case LOYALTY_CARD_ACTIONS.SET_VARIABLE_PERCENTAGE:
      return { ...state, variablePercentage: action.payload };
    default:
      return state;
  }
};

const AddCard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const { invalidateQuery } = useInvalidateQuery();
  const { submitHandler } = useSubmitHandler();

  const cardTypes = [
    {
      label: CARD_TYPES_OPTIONS.LOYALTY,
      value: CARD_TYPES_OPTIONS.LOYALTY,
      icon: (props) => <PiCoin {...props} />,
      buttonText: "High Retention",
      bgColor:
        state.activeCardType === CARD_TYPES_OPTIONS.LOYALTY
          ? "#FF5B00"
          : "#FFEBDF",
      textColor:
        state.activeCardType === CARD_TYPES_OPTIONS.LOYALTY
          ? "#FFFFFF"
          : "#FF5B00",
    },
    {
      label: CARD_TYPES_OPTIONS.STAMP,
      value: CARD_TYPES_OPTIONS.STAMP,
      icon: (props) => <BiCertification {...props} />,
      buttonText: "High Retention",
      bgColor:
        state.activeCardType === CARD_TYPES_OPTIONS.STAMP
          ? "#FF5B00"
          : "#FFEBDF",
      textColor:
        state.activeCardType === CARD_TYPES_OPTIONS.STAMP
          ? "#FFFFFF"
          : "#FF5B00",
    },
    {
      label: CARD_TYPES_OPTIONS.COUPON,
      value: CARD_TYPES_OPTIONS.COUPON,
      icon: (props) => <RiCoupon2Line {...props} />,
      buttonText: "Best for acquisition",
      bgColor:
        state.activeCardType === CARD_TYPES_OPTIONS.COUPON
          ? "#768CEA"
          : "#F0F3FF",
      textColor:
        state.activeCardType === CARD_TYPES_OPTIONS.COUPON
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

  // Barcode Type
  const handleBarcodeChange = (event) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_BARCODE,
      payload: event.target.value,
    });
  };

  // Reward Program
  const handleRewardProgramChange = (value) => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_REWARD_PROGRAM, payload: value });
  };

  // Spend Values
  const handleSpendChange = (spend) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_SPEND_VALUES,
      payload: { spend, points: state.pointsPerSpend },
    });
  };

  const handlePointsPerSpendChange = (points) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_SPEND_VALUES,
      payload: { spend: state.spendAmount, points },
    });
  };

  // Visit Values
  const handleVisitsRequiredChange = (visits) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_VISIT_VALUES,
      payload: { visits, points: state.pointsPerVisit },
    });
  };

  const handlePointsPerVisitChange = (points) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_VISIT_VALUES,
      payload: { visits: state.visitsRequired, points },
    });
  };

  // Daily Visit Limit
  const handleDailyVisitLimitToggle = () => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.TOGGLE_DAILY_VISIT_LIMIT });
  };

  // Expiration Options
  const handleExpirationOptionChange = (event) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_EXPIRATION_OPTION,
      payload: event.target.value,
    });
  };

  const handleExpirationDateChange = (date) => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_EXPIRATION_DATE, payload: date });
  };

  const handleExpirationPeriodChange = (field, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_EXPIRATION_PERIOD,
      payload: { [field]: value },
    });
  };

  const handleCardDescriptionChange = (event, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_CARD_DESCRIPTION,
      payload: event.target.value,
      value,
    });
  };

  const handleCompanyNameChange = (event, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_COMPANY_NAME,
      payload: event.target.value,
      value,
    });
  };

  const handleActiveLinkChange = (index, field, value) => {
    const updatedLinks = state.activeLinks.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_ACTIVE_LINKS,
      payload: updatedLinks,
    });
  };

  const addNewLink = () => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_ACTIVE_LINKS,
      payload: [...state.activeLinks, { type: "", link: "", text: "" }],
    });
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = state.activeLinks.filter((_, i) => i !== index);
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_ACTIVE_LINKS,
      payload: updatedLinks,
    });
  };

  const handleIssuerInformationChange = (field, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_ISSUER_INFORMATION,
      payload: { [field]: value },
    });
  };

  const handleCardFieldChange = (index, field, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_CARD_FIELDS,
      payload: { index, field, value },
    });
  };

  // Points Lifetime
  const handlePointsLifetimeChange = (value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_POINTS_LIFETIME,
      payload: value,
    });
  };

  const handlePointsPeriodChange = (field, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_POINTS_PERIOD,
      payload: { [field]: value },
    });
  };

  const handleFieldChange = (fieldKey, field, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_CARD_ISSUE_FORM,
      payload: { key: fieldKey, field, value },
    });
  };

  // UTM Source
  const handleSourceChange = (value) => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_SOURCE, payload: value });
  };

  // Country Selection
  const handleCountryChange = (value) => {
    dispatch({ type: LOYALTY_CARD_ACTIONS.SET_COUNTRY, payload: value });
  };

  const handleActiveStampColor = (event, color) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_ACTIVE_STAMP_COLOR,
      payload: event.target.value,
      color,
    });
  };

  const handleInactiveStampColor = (event, color) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_INACTIVE_STAMP_COLOR,
      payload: event.target.value,
      color,
    });
  };

  const handleActiveStampIconChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      dispatch({
        type: LOYALTY_CARD_ACTIONS.SET_ACTIVE_STAMP_ICON_PREVIEW,
        payload: base64URL,
      });
      dispatch({
        type: LOYALTY_CARD_ACTIONS.SET_SELECTED_ACTIVE_STAMP_ICON,
        payload: file,
      });
    }
  };

  const handleRemoveActiveStampIcon = () => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_SELECTED_ACTIVE_STAMP_ICON,
      payload: null,
    });
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_ACTIVE_STAMP_ICON_PREVIEW,
      payload: null,
    });
  };

  const handleInactiveStampIconChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      dispatch({
        type: LOYALTY_CARD_ACTIONS.SET_INACTIVE_STAMP_ICON_PREVIEW,
        payload: base64URL,
      });
      dispatch({
        type: LOYALTY_CARD_ACTIONS.SET_SELECTED_INACTIVE_STAMP_ICON,
        payload: file,
      });
    }
  };

  const handleRemoveInactiveStampIcon = () => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_SELECTED_INACTIVE_STAMP_ICON,
      payload: null,
    });
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_INACTIVE_STAMP_ICON_PREVIEW,
      payload: null,
    });
  };

  const handleStampCounts = (value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_STAMP_COUNTS,
      payload: value,
    });
  };

  const handleEarnStamps = (event, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_EARN_STAMP,
      payload: event.target.value,
      value,
    });
  };

  const handleRewardDetails = (e, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_REWARD_DETAILS,
      payload: e.target.value,
      value,
    });
  };

  const handleEarnedStampMessage = (e, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_EARNED_STAMP_MESSAGE,
      payload: e.target.value,
      value,
    });
  };

  const handleEarnedRewardMessage = (e, value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_EARNED_REWARD_MESSAGE,
      payload: e.target.value,
      value,
    });
  };

  const handleStatusUpdate = (value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_CARD_STATUS,
      payload: value,
    });
  };

  const handleStampPerSpend = (value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_STAMP_PER_SPENT,
      payload: value,
    });
  };

  const handleStampPerVisit = (value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_STAMP_PER_VISIT,
      payload: value,
    });
  };

  const handleDiscountValueChange = (value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_DISCOUNT_VALUE,
      payload: value,
    });
  };

  const handleSetFixedAmountValue = (value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_FIXED_VALUE_AMOUNT,
      payload: value,
    });
  };

  const handleVariablePercentageChange = (value) => {
    dispatch({
      type: LOYALTY_CARD_ACTIONS.SET_VARIABLE_PERCENTAGE,
      payload: value,
    });
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const formik = useFormik({
    initialValues: {
      type: "",
      status: "",
      cardSettings: {
        bardCodeType: "",
        rewardProgram: {
          type: "", // visit or spend
          pointPerVisit: 0, // when type is visit
          pointPerSpent: 0, // when type is spend
          stampPerVisit: 0, // when type is visit
          stampPerSpent: 0, // when type is spend
        },
        cardExpiration: {
          type: "",
          expirationDate: "",
          fixedPeriod: {
            unit: "",
            value: "",
          },
        },
        pointsLifeTime: {
          type: "",
          fixedPeriod: {
            unit: "",
            value: "",
          },
        },
        cardIssueForm: initialFields,
        utmLink: "",
        phoneMask: "",
        couponDiscount: {
          type: "",
          value: 0,
        },
      },
      cardDesign: {
        logo: "",
        icon: "",
        centralImage: "",
        cardBackground: "",
        textColor: "",
        backgroundCenterColor: "",
        cardFields: [
          {
            type: "",
            fieldName: "",
          },
        ],
        stampCount: 0,
        activeStampImage: "",
        inactiveStampImage: "",
      },
      cardInformation: {
        description: "",
        companyName: "",
        howToEarnStamp: "",
        rewardDetails: "",
        earnedRewardMessage: "",
        earnedStampMessage: "",
        activeLinks: [],
        issuerInformation: {
          companyName: "",
          email: "",
          phone: "",
        },
      },
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      let logoKey = "";
      if (state.selectedLogo) {
        const response = await uploadFileFunc(state.selectedLogo);
        logoKey = response?.key;
      }

      let iconKey = "";
      if (state.selectedIcon) {
        const response = await uploadFileFunc(state.selectedIcon);
        iconKey = response?.key;
      }

      let centralImageKey = "";
      if (state.centralImage) {
        const response = await uploadFileFunc(state.centralImage);
        centralImageKey = response?.key;
      }

      let activeStampIconKey = "";
      if (state.activeStampIcon) {
        const response = await uploadFileFunc(state.activeStampIcon);
        activeStampIconKey = response?.key;
      }

      let inActiveStampIconKey = "";
      if (state.inActiveStampIcon) {
        const response = await uploadFileFunc(state.inActiveStampIcon);
        inActiveStampIconKey = response?.key;
      }

      const formattedValues = {
        ...values,
        type: state.activeCardType,
        status: state.status.toLowerCase(),
        cardSettings: {
          bardCodeType: state.barcode.toLowerCase(),
          rewardProgram: {
            type: state.rewardProgram.toLowerCase(),
            pointPerVisit: Number(state.pointsPerVisit) || 0,
            pointPerSpent: Number(state.pointsPerSpend) || 0,
            stampPerVisit: Number(state.stampPerVisit) || 0,
            stampPerSpent: Number(state.stampPerSpend) || 0,
          },
          cardExpiration: {
            type: state.expirationOption.toLowerCase(),
            expirationDate: state.expirationDate
              ? dayjs(state.expirationDate).format("YYYY-MM-DD")
              : null,
            fixedPeriod: state.expirationPeriod,
          },
          pointsLifeTime: {
            type: state.pointsLifetime.toLowerCase(),
            fixedPeriod: state.pointsPeriod,
          },
          cardIssueForm: state.cardIssueForm,
          utmLink: state.source,
          phoneMask: state.country,
          couponDiscount: {
            type: state.discountValue.toLowerCase(),
            value:
              state.discountValue === DISCOUNT_VALUE.FIXED
                ? Number(state.fixedValueAmount)
                : Number(state.variablePercentage),
          },
        },
        cardDesign: {
          logo: logoKey,
          icon: iconKey,
          centralImage: centralImageKey,
          cardBackground: state.cardBgColor,
          textColor: state.cardTextColor,
          backgroundCenterColor: state.centerBackgroundColor,
          cardFields: state.cardFields,
          stampCount: state.stampCounts,
          activeStampImage: activeStampIconKey,
          inactiveStampImage: inActiveStampIconKey,
        },
        cardInformation: {
          description: state.cardDescription,
          companyName: state.companyName,
          activeLinks: state.activeLinks,
          issuerInformation: state.issuerInformation,
          howToEarnStamp: state.earnStamps,
          rewardDetails: state.rewardDetails,
          earnedRewardMessage: state.earnedRewardMessage,
          earnedStampMessage: state.earnedStampMessage,
        },
      };

      console.log(formattedValues);

      submitHandler({
        successMsg: "Card has been added successfully",
        onSubmit: async () => {
          await addCards(formattedValues);
          invalidateQuery(["get-cards"]);
          setOpenSuccessModal(true);
          resetForm();
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
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
              {state.activeTab === CARD_OPTIONS.SETTINGS && (
                <Settings
                  state={state}
                  onBarcodeChange={handleBarcodeChange}
                  onRewardProgramChange={handleRewardProgramChange}
                  onSpendChange={handleSpendChange}
                  onPointsPerSpendChange={handlePointsPerSpendChange}
                  onVisitsRequiredChange={handleVisitsRequiredChange}
                  onPointsPerVisitChange={handlePointsPerVisitChange}
                  onDailyVisitLimitToggle={handleDailyVisitLimitToggle}
                  onExpirationOptionChange={handleExpirationOptionChange}
                  onExpirationDateChange={handleExpirationDateChange}
                  onExpirationPeriodChange={handleExpirationPeriodChange}
                  onPointsLifetimeChange={handlePointsLifetimeChange}
                  onPointsPeriodChange={handlePointsPeriodChange}
                  onFieldChange={handleFieldChange}
                  onSourceChange={handleSourceChange}
                  onCountryChange={handleCountryChange}
                  handleStampPerSpend={handleStampPerSpend}
                  handleStampPerVisit={handleStampPerVisit}
                  handleDiscountValueChange={handleDiscountValueChange}
                  handleSetFixedAmountValue={handleSetFixedAmountValue}
                  handleVariablePercentageChange={
                    handleVariablePercentageChange
                  }
                />
              )}
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
                  handleCardFieldChange={handleCardFieldChange}
                  cardFields={state.cardFields}
                  activeCardType={state.activeCardType}
                  handleActiveStampColor={handleActiveStampColor}
                  activeStampColor={state.activeStampColor}
                  handleInactiveStampColor={handleInactiveStampColor}
                  inActiveStampColor={state.inActiveStampColor}
                  activeStampIconPreview={state.activeStampIconPreview}
                  handleActiveStampIconChange={handleActiveStampIconChange}
                  inActiveStampIconPreview={state.inActiveStampIconPreview}
                  handleInactiveStampIconChange={handleInactiveStampIconChange}
                  handleRemoveActiveStampIcon={handleRemoveActiveStampIcon}
                  handleRemoveInactiveStampIcon={handleRemoveInactiveStampIcon}
                  handleStampCounts={handleStampCounts}
                  stampCounts={state.stampCounts}
                />
              )}
              {state.activeTab === CARD_OPTIONS.INFORMATION && (
                <InformationPage
                  handleCardDescriptionChange={handleCardDescriptionChange}
                  handleCompanyNameChange={handleCompanyNameChange}
                  activeLinks={state.activeLinks}
                  handleRemoveLink={handleRemoveLink}
                  handleActiveLinkChange={handleActiveLinkChange}
                  addNewLink={addNewLink}
                  handleIssuerInformationChange={handleIssuerInformationChange}
                  issuerInformation={state.issuerInformation}
                  handleEarnStamps={handleEarnStamps}
                  handleRewardDetails={handleRewardDetails}
                  handleEarnedStampMessage={handleEarnedStampMessage}
                  handleEarnedRewardMessage={handleEarnedRewardMessage}
                  activeCardType={state.activeCardType}
                />
              )}
              {state.activeTab === CARD_OPTIONS.INFORMATION ? (
                <Box className="flex mt-20 md:mt-32 justify-center items-center w-full">
                  {/* <StudioCustomButton
                    text="Activate"
                    textColor="#FFFFFF"
                    bgColor="#333333"
                    width="100%"
                    type="submit"
                    onClick={() => handleStatusUpdate(CARD_STATUS.ACTIVE)}
                  /> */}
                  <Button
                    variant="outlined"
                    type="submit"
                    onClick={() => handleStatusUpdate(CARD_STATUS.ACTIVE)}
                    sx={{
                      backgroundColor: "#333333",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  >
                    Activate
                  </Button>
                </Box>
              ) : (
                <Box className="flex mt-20 md:mt-52 justify-center items-center w-full">
                  <StudioCustomButton
                    text="Continue"
                    textColor="#FFFFFF"
                    bgColor="#333333"
                    width="100%"
                    onClick={handleNextStep}
                  />
                </Box>
              )}
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
                {state.activeTab === CARD_OPTIONS.INFORMATION ? (
                  <div className="absolute top-[17%] left-[42.5%] -translate-x-1/2 w-[242px]">
                    {state.activeCardType === CARD_TYPES_OPTIONS.LOYALTY && (
                      <PointsCardDetails
                        activeLinks={state.activeLinks}
                        iconTabs={state.iconTabs}
                        centralImagePreview={state.centralImagePreview}
                        centerBackgroundColor={state.centerBackgroundColor}
                        companyName={state.companyName}
                        issuerInformation={state.issuerInformation}
                        iconPreview={state.iconPreview}
                      />
                    )}
                    {state.activeCardType === CARD_TYPES_OPTIONS.COUPON && (
                      <CouponCardDetails
                        activeLinks={state.activeLinks}
                        iconTabs={state.iconTabs}
                        centralImagePreview={state.centralImagePreview}
                        centerBackgroundColor={state.centerBackgroundColor}
                        companyName={state.companyName}
                        iconPreview={state.iconPreview}
                        cardName={state.cardName}
                        logoPreview={state.logoPreview}
                        cardBgColor={state.cardBgColor}
                        cardTextColor={state.cardTextColor}
                      />
                    )}
                    {state.activeCardType === CARD_TYPES_OPTIONS.STAMP && (
                      <StampCardDetails
                        activeLinks={state.activeLinks}
                        iconTabs={state.iconTabs}
                        centralImagePreview={state.centralImagePreview}
                        centerBackgroundColor={state.centerBackgroundColor}
                        companyName={state.companyName}
                        issuerInformation={state.issuerInformation}
                        iconPreview={state.iconPreview}
                        stampCounts={state.stampCounts}
                      />
                    )}
                  </div>
                ) : (
                  <div className="absolute top-[20%] left-[42.5%] -translate-x-1/2 w-[230px]">
                    {state.activeCardType === CARD_TYPES_OPTIONS.LOYALTY && (
                      <PointsCard
                        iconTabs={state.iconTabs}
                        cardName={state.cardName}
                        iconPreview={state.iconPreview}
                        logoPreview={state.logoPreview}
                        centralImagePreview={state.centralImagePreview}
                        cardBgColor={state.cardBgColor}
                        cardTextColor={state.cardTextColor}
                        centerBackgroundColor={state.centerBackgroundColor}
                        companyName={state.companyName}
                        barcode={state.barcode}
                      />
                    )}
                    {state.activeCardType === CARD_TYPES_OPTIONS.COUPON && (
                      <CouponCard
                        iconTabs={state.iconTabs}
                        cardName={state.cardName}
                        iconPreview={state.iconPreview}
                        logoPreview={state.logoPreview}
                        centralImagePreview={state.centralImagePreview}
                        cardBgColor={state.cardBgColor}
                        cardTextColor={state.cardTextColor}
                        centerBackgroundColor={state.centerBackgroundColor}
                        companyName={state.companyName}
                        barcode={state.barcode}
                      />
                    )}
                    {state.activeCardType === CARD_TYPES_OPTIONS.STAMP && (
                      <StampCards
                        iconTabs={state.iconTabs}
                        cardName={state.cardName}
                        iconPreview={state.iconPreview}
                        logoPreview={state.logoPreview}
                        centralImagePreview={state.centralImagePreview}
                        cardBgColor={state.cardBgColor}
                        cardTextColor={state.cardTextColor}
                        centerBackgroundColor={state.centerBackgroundColor}
                        companyName={state.companyName}
                        stampCounts={state.stampCounts}
                        barcode={state.barcode}
                        activeStampIconPreview={state.activeStampIconPreview}
                        activeStampColor={state.activeStampColor}
                      />
                    )}
                  </div>
                )}
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
                      <IconButton
                        onClick={() => handleIconTabClick(item.value)}
                      >
                        {item.icon({
                          size: 30,
                          color:
                            state.iconTabs === item.value
                              ? "#FF5B00"
                              : "#000000",
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
      </form>

      {openSuccessModal && (
        <SuccessDialog
          open={openSuccessModal}
          onClose={handleCloseSuccessModal}
          message="Your Card has been added successfully!"
          buttonText="Continue"
        />
      )}
    </Box>
  );
};

export default AddCard;
