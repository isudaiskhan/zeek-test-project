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

const CouponCard = () => {
  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [firstColor, setFirstColor] = React.useState("#48617D");
  const [secondColor, setSecondColor] = React.useState("#48617D");
  const [thirdColor, setThirdColor] = React.useState("#48617D");
  const [selectedCode, setSelectedCode] = React.useState({
    type: BARCODE_TYPES.QRCODE,
    value: "https://zeek.com",
  });
  const [imagePreview, setImagePreview] = React.useState(null);
  const [barcodeContent, setBarcodeContent] = React.useState("");
  const [securityAnimationSwitch, setSecurityAnimationSwitch] =
    React.useState(false);
  const [rotatingBarcodeSwitch, setRotatingBarcodeSwitch] =
    React.useState(false);
  const [automaticUpdateSwitch, setAutomaticUpdateSwitch] =
    React.useState(false);
  const [allowNotificationsSwitch, setAllowNotificationsSwitch] =
    React.useState(false);
  const [showBarCodeSwitch, setShowBarCodeSwitch] = React.useState(true);
  const [logoImagePreview, setLogoImagePreview] = React.useState("");
  const [selectedLogoImage, setSelectedLogoImage] = React.useState(null);
  const [selectedHeroImage, setSelectedHeroImage] = React.useState(null);
  const [lockScreenIconPreview, setLockScreenIconPreview] = React.useState("");
  const [selectedLockScreenIcon, setSelectedLockScreenIcon] =
    React.useState(null);

  const router = useRouter();

  const handleImageChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      setImagePreview(base64URL);
      setSelectedHeroImage(file);
    }
  };

  const handleLogoImageChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      setLogoImagePreview(base64URL);
      setSelectedLogoImage(file);
    }
  };

  const handleLockScreenIconChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      setLockScreenIconPreview(base64URL);
      setSelectedLockScreenIcon(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  const handleCodeSelect = (codeType, codeValue) => {
    setSelectedCode({ type: codeType, value: codeValue });
  };

  const handleFirstColorChange = (event, value) => {
    setFirstColor(event.target.value, value);
  };

  const handleSecondColorChange = (event, value) => {
    setSecondColor(event.target.value, value);
  };

  const handleThirdColorChange = (event, value) => {
    setThirdColor(event.target.value, value);
  };

  const handleBarcodeContentChange = (event, value) => {
    setBarcodeContent(event.target.value, value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSecurityAnimationChange = (event) => {
    setSecurityAnimationSwitch(event.target.checked);
  };

  const handleRotatingBarcodeChange = (event) => {
    setRotatingBarcodeSwitch(event.target.checked);
  };

  const handleAutomaticUpdateChange = (event) => {
    setAutomaticUpdateSwitch(event.target.checked);
  };
  const handleAllowNotificationsChange = (event) => {
    setAllowNotificationsSwitch(event.target.checked);
  };

  const handleShowBarCodeChange = (event) => {
    setShowBarCodeSwitch(event.target.checked);
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
      if (selectedLogoImage) {
        const response = await uploadFileFunc(selectedLogoImage);
        logoImageKey = response?.key;
      }

      let heroImageKey = "";
      if (selectedHeroImage) {
        const response = await uploadFileFunc(selectedHeroImage);
        heroImageKey = response?.key;
      }

      let lockScreenIconKey = "";
      if (selectedLockScreenIcon) {
        const response = await uploadFileFunc(selectedLockScreenIcon);
        lockScreenIconKey = response?.key;
      }

      const formattedValues = {
        ...values,
        colors: [firstColor, secondColor, thirdColor],
        barcodeContent: selectedCode.value,
        securityAnimation: securityAnimationSwitch,
        rotatingBarcode: rotatingBarcodeSwitch,
        automaticUpdates: automaticUpdateSwitch,
        allowNotifications: allowNotificationsSwitch,
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
                  firstColor={firstColor}
                  secondColor={secondColor}
                  thirdColor={thirdColor}
                  handleFirstColorChange={handleFirstColorChange}
                  handleSecondColorChange={handleSecondColorChange}
                  handleThirdColorChange={handleThirdColorChange}
                  currentPage={currentPage}
                  selectedCode={selectedCode}
                  handleCodeSelect={handleCodeSelect}
                  imagePreview={imagePreview}
                  handleImageChange={handleImageChange}
                  handleRemoveImage={handleRemoveImage}
                  handleBarcodeContentChange={handleBarcodeContentChange}
                  barcodeContent={barcodeContent}
                  handleSecurityAnimationChange={handleSecurityAnimationChange}
                  securityAnimationSwitch={securityAnimationSwitch}
                  handleRotatingBarcodeChange={handleRotatingBarcodeChange}
                  rotatingBarcodeSwitch={rotatingBarcodeSwitch}
                  handleLogoImageChange={handleLogoImageChange}
                  logoImagePreview={logoImagePreview}
                  handleLockScreenIconChange={handleLockScreenIconChange}
                  lockScreenIconPreview={lockScreenIconPreview}
                  handleShowBarCodeChange={handleShowBarCodeChange}
                  showBarCodeSwitch={showBarCodeSwitch}
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
                      firstColor={firstColor}
                      secondColor={secondColor}
                      thirdColor={thirdColor}
                      selectedCode={selectedCode}
                      imagePreview={imagePreview}
                      handleAutomaticUpdateChange={handleAutomaticUpdateChange}
                      automaticUpdateSwitch={automaticUpdateSwitch}
                      handleAllowNotificationsChange={
                        handleAllowNotificationsChange
                      }
                      allowNotificationsSwitch={allowNotificationsSwitch}
                    />
                  )}
                  {currentPage === 2 && (
                    <GoogleCardCouponDesign
                      firstColor={firstColor}
                      secondColor={secondColor}
                      thirdColor={thirdColor}
                      selectedCode={selectedCode}
                      imagePreview={imagePreview}
                    />
                  )}
                  {currentPage === 3 && (
                    <ZeekCardCouponDesign
                      firstColor={firstColor}
                      secondColor={secondColor}
                      thirdColor={thirdColor}
                      selectedCode={selectedCode}
                      imagePreview={imagePreview}
                    />
                  )}
                  {currentPage === 4 && (
                    <CouponOverview
                      firstColor={firstColor}
                      secondColor={secondColor}
                      thirdColor={thirdColor}
                      selectedCode={selectedCode}
                      handleAutomaticUpdateChange={handleAutomaticUpdateChange}
                      automaticUpdateSwitch={automaticUpdateSwitch}
                      handleAllowNotificationsChange={
                        handleAllowNotificationsChange
                      }
                      allowNotificationsSwitch={allowNotificationsSwitch}
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
