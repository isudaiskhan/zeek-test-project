"use client";

import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomPagination from "@/components/Studio/CustomPagination/CustomPagination";
import Grid from "@mui/material/Grid2";
import SideBar from "@/components/Studio/SideBar/SideBar";
import AppleCardCouponDesign from "@/components/Studio/AppleCardCouponDesign/AppleCardCouponDesign";
import GoogleCardCouponDesign from "@/components/Studio/GoogleCardCouponDesign/GoogleCardCouponDesign";
import ZeekCardCouponDesign from "@/components/Studio/ZeekCardCouponDesign/ZeekCardCouponDesign";
import CouponOverview from "@/components/Studio/CouponOverview/CouponOverview";
import { BARCODE_TYPES } from "@/enums/barcode";
import { getImageBase64URL, uploadFileFunc } from "@/utils/helper-functions";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { CARD_ACTION_CASES } from "@/enums/loyalty-actions";

const initialState = {
  firstColor: "#48617D",
  secondColor: "#48617D",
  thirdColor: "#48617D",
  selectedCode: { type: BARCODE_TYPES.QRCODE, value: "https://zeek.com" },
  imagePreview: null,
  barcodeContent: "",
  securityAnimationSwitch: false,
  rotatingBarcodeSwitch: false,
  automaticUpdateSwitch: false,
  allowNotificationsSwitch: false,
  showBarCodeSwitch: true,
  logoImagePreview: "",
  selectedLogoImage: null,
  selectedHeroImage: null,
  lockScreenIconPreview: "",
  selectedLockScreenIcon: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CARD_ACTION_CASES.SET_FIRST_COLOR:
      return { ...state, firstColor: action.payload };
    case CARD_ACTION_CASES.SET_SECOND_COLOR:
      return { ...state, secondColor: action.payload };
    case CARD_ACTION_CASES.SET_THIRD_COLOR:
      return { ...state, thirdColor: action.payload };
    case CARD_ACTION_CASES.SET_SELECTED_CODE:
      return { ...state, selectedCode: action.payload };
    case CARD_ACTION_CASES.SET_IMAGE_PREVIEW:
      return { ...state, imagePreview: action.payload };
    case CARD_ACTION_CASES.SET_BARCODE_CONTENT:
      return { ...state, barcodeContent: action.payload };
    case CARD_ACTION_CASES.SET_SECURITY_ANIMATION_SWITCH:
      return { ...state, securityAnimationSwitch: action.payload };
    case CARD_ACTION_CASES.SET_ROTATING_BARCODE_SWITCH:
      return { ...state, rotatingBarcodeSwitch: action.payload };
    case CARD_ACTION_CASES.SET_AUTOMATIC_UPDATE_SWITCH:
      return { ...state, automaticUpdateSwitch: action.payload };
    case CARD_ACTION_CASES.SET_ALLOW_NOTIFICATIONS_SWITCH:
      return { ...state, allowNotificationsSwitch: action.payload };
    case CARD_ACTION_CASES.SET_SHOW_BAR_CODE_SWITCH:
      return { ...state, showBarCodeSwitch: action.payload };
    case CARD_ACTION_CASES.SET_LOGO_IMAGE_PREVIEW:
      return { ...state, logoImagePreview: action.payload };
    case CARD_ACTION_CASES.SET_SELECTED_LOGO_IMAGE:
      return { ...state, selectedLogoImage: action.payload };
    case CARD_ACTION_CASES.SET_SELECTED_HERO_IMAGE:
      return { ...state, selectedHeroImage: action.payload };
    case CARD_ACTION_CASES.SET_LOCK_SCREEN_ICON_PREVIEW:
      return { ...state, lockScreenIconPreview: action.payload };
    case CARD_ACTION_CASES.SET_SELECTED_LOCK_SCREEN_ICON:
      return { ...state, selectedLockScreenIcon: action.payload };
    default:
      return state;
  }
};

const CouponCard = () => {
  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const router = useRouter();

  const handleImageChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      dispatch({ type: "SET_IMAGE_PREVIEW", payload: base64URL });
      dispatch({ type: "SET_SELECTED_HERO_IMAGE", payload: file });
    }
  };

  const handleLogoImageChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      dispatch({ type: "SET_LOGO_IMAGE_PREVIEW", payload: base64URL });
      dispatch({ type: "SET_SELECTED_LOGO_IMAGE", payload: file });
    }
  };

  const handleLockScreenIconChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      dispatch({ type: "SET_LOCK_SCREEN_ICON_PREVIEW", payload: base64URL });
      dispatch({ type: "SET_SELECTED_LOCK_SCREEN_ICON", payload: file });
    }
  };

  const handleRemoveImage = () => {
    dispatch({ type: "SET_IMAGE_PREVIEW", payload: null });
  };

  const handleCodeSelect = (codeType, codeValue) => {
    dispatch({
      type: "SET_SELECTED_CODE",
      payload: { type: codeType, value: codeValue },
    });
  };

  const handleFirstColorChange = (event, value) => {
    dispatch({ type: "SET_FIRST_COLOR", payload: event.target.value, value });
  };

  const handleSecondColorChange = (event, value) => {
    dispatch({ type: "SET_SECOND_COLOR", payload: event.target.value, value });
  };

  const handleThirdColorChange = (event, value) => {
    dispatch({ type: "SET_THIRD_COLOR", payload: event.target.value, value });
  };

  const handleBarcodeContentChange = (event, value) => {
    dispatch({
      type: "SET_BARCODE_CONTENT",
      payload: event.target.value,
      value,
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSecurityAnimationChange = (event) => {
    dispatch({
      type: "SET_SECURITY_ANIMATION_SWITCH",
      payload: event.target.checked,
    });
  };

  const handleRotatingBarcodeChange = (event) => {
    dispatch({
      type: "SET_ROTATING_BARCODE_SWITCH",
      payload: event.target.checked,
    });
  };

  const handleAutomaticUpdateChange = (event) => {
    dispatch({
      type: "SET_AUTOMATIC_UPDATE_SWITCH",
      payload: event.target.checked,
    });
  };
  const handleAllowNotificationsChange = (event) => {
    dispatch({
      type: "SET_ALLOW_NOTIFICATIONS_SWITCH",
      payload: event.target.checked,
    });
  };

  const handleShowBarCodeChange = (event) => {
    dispatch({
      type: "SET_SHOW_BAR_CODE_SWITCH",
      payload: event.target.checked,
    });
  };

  const formik = useFormik({
    initialValues: {
      allowNotifications: false,
      automaticUpdates: false,
      companyName: "",
      type: "coupon",
      validUntil: "",
      status: "",
      showBarCode: true,
      barcodeContent: "",
      barcodeText: "",
      heroImage: "",
      logoImage: "",
      lockScreenIcon: "",
      securityAnimation: false,
      rotatingBarcode: false,
      colors: [],
      dynamicFields: {
        // can be any key, pair value
        expiry: "",
        field1: "",
      },
    },
    onSubmit: async (values) => {
      let logoImageKey = "";
      if (state.selectedLogoImage) {
        const response = await uploadFileFunc(state.selectedLogoImage);
        logoImageKey = response?.key;
      }

      let heroImageKey = "";
      if (state.selectedHeroImage) {
        const response = await uploadFileFunc(state.selectedHeroImage);
        heroImageKey = response?.key;
      }

      let lockScreenIconKey = "";
      if (state.selectedLockScreenIcon) {
        const response = await uploadFileFunc(state.selectedLockScreenIcon);
        lockScreenIconKey = response?.key;
      }

      const formattedValues = {
        ...values,
        colors: [state.firstColor, state.secondColor, state.thirdColor],
        barcodeContent: state.selectedCode.value,
        securityAnimation: state.securityAnimationSwitch,
        rotatingBarcode: state.rotatingBarcodeSwitch,
        automaticUpdates: state.automaticUpdateSwitch,
        allowNotifications: state.allowNotificationsSwitch,
        logoImage: logoImageKey,
        heroImage: heroImageKey,
        lockScreenIcon: lockScreenIconKey,
      };
      console.log(formattedValues);
    },
  });

  return (
    <Box className="p-4 relative">
      <form onSubmit={formik.handleSubmit}>
        <Container maxWidth="xl">
          <div
            className={`flex flex-row ${
              currentPage === 4 ? "justify-between" : "gap-96"
            } items-center`}
          >
            <CustomButton
              text="All Cards"
              textColor="black"
              bgColor="#EAEAEA"
              startIcon={<ArrowBackIosIcon fontSize="small" />}
              onClick={() => router.push("/dashboard/loyalty")}
            />

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "40px",
                color: "black",
                textAlign: "center",
              }}
            >
              {currentPage === 4 ? "Overview" : "Zeek Card Studio Design"}
            </Typography>
            {currentPage === 4 && (
              <CustomButton
                text="Done"
                textColor="#FF5B00"
                bgColor="#FFDAC5"
                type="submit"
              />
            )}
          </div>
        </Container>
        <Box className="py-10">
          <Grid container spacing={2}>
            {currentPage !== 4 && (
              <Grid size={{ xs: 12, md: 2 }}>
                <SideBar
                  formValues={formik.values}
                  value={value}
                  handleChange={handleChange}
                  firstColor={state.firstColor}
                  secondColor={state.secondColor}
                  thirdColor={state.thirdColor}
                  handleFirstColorChange={handleFirstColorChange}
                  handleSecondColorChange={handleSecondColorChange}
                  handleThirdColorChange={handleThirdColorChange}
                  currentPage={currentPage}
                  selectedCode={state.selectedCode}
                  handleCodeSelect={handleCodeSelect}
                  imagePreview={state.imagePreview}
                  handleImageChange={handleImageChange}
                  handleRemoveImage={handleRemoveImage}
                  handleBarcodeContentChange={handleBarcodeContentChange}
                  barcodeContent={state.barcodeContent}
                  handleSecurityAnimationChange={handleSecurityAnimationChange}
                  securityAnimationSwitch={state.securityAnimationSwitch}
                  handleRotatingBarcodeChange={handleRotatingBarcodeChange}
                  rotatingBarcodeSwitch={state.rotatingBarcodeSwitch}
                  handleLogoImageChange={handleLogoImageChange}
                  logoImagePreview={state.logoImagePreview}
                  handleLockScreenIconChange={handleLockScreenIconChange}
                  lockScreenIconPreview={state.lockScreenIconPreview}
                  handleShowBarCodeChange={handleShowBarCodeChange}
                  showBarCodeSwitch={state.showBarCodeSwitch}
                />
              </Grid>
            )}
            <Grid
              size={{
                xs: 12,
                md: currentPage === 4 ? 12 : 10,
              }}
            >
              <Container maxWidth="xl">
                <Box className="flex flex-col gap-2 items-center justify-center w-full">
                  <Box className="flex flex-col gap-1 items-center justify-center w-full">
                    <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
                      {currentPage === 1 && "Apple Wallet Card Design"}
                      {currentPage === 2 && "Google Wallet Card Design"}
                      {currentPage === 3 && "Zeek Wallet Card Design"}
                    </Typography>
                    {currentPage !== 4 && <Divider sx={{ width: "80%" }} />}
                  </Box>
                  {currentPage === 1 && (
                    <AppleCardCouponDesign
                      firstColor={state.firstColor}
                      secondColor={state.secondColor}
                      thirdColor={state.thirdColor}
                      selectedCode={state.selectedCode}
                      imagePreview={state.imagePreview}
                      handleAutomaticUpdateChange={handleAutomaticUpdateChange}
                      automaticUpdateSwitch={state.automaticUpdateSwitch}
                      handleAllowNotificationsChange={
                        handleAllowNotificationsChange
                      }
                      allowNotificationsSwitch={state.allowNotificationsSwitch}
                    />
                  )}
                  {currentPage === 2 && (
                    <GoogleCardCouponDesign
                      firstColor={state.firstColor}
                      secondColor={state.secondColor}
                      thirdColor={state.thirdColor}
                      selectedCode={state.selectedCode}
                      imagePreview={state.imagePreview}
                    />
                  )}
                  {currentPage === 3 && (
                    <ZeekCardCouponDesign
                      firstColor={state.firstColor}
                      secondColor={state.secondColor}
                      thirdColor={state.thirdColor}
                      selectedCode={state.selectedCode}
                      imagePreview={state.imagePreview}
                    />
                  )}
                  {currentPage === 4 && (
                    <CouponOverview
                      firstColor={state.firstColor}
                      secondColor={state.secondColor}
                      thirdColor={state.thirdColor}
                      selectedCode={state.selectedCode}
                      handleAutomaticUpdateChange={handleAutomaticUpdateChange}
                      automaticUpdateSwitch={state.automaticUpdateSwitch}
                      handleAllowNotificationsChange={
                        handleAllowNotificationsChange
                      }
                      allowNotificationsSwitch={state.allowNotificationsSwitch}
                    />
                  )}

                  <CustomPagination
                    totalPages={4}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default CouponCard;
