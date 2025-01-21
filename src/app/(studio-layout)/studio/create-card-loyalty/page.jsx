"use client";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Box, Container, Divider, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Grid from "@mui/material/Grid2";
import React from "react";
import SideBar from "@/components/Studio/SideBar/SideBar";
import CustomPagination from "@/components/Studio/CustomPagination/CustomPagination";
import AppleCardDesign from "@/components/Studio/AppleCardDesign/AppleCardDesign";
import GoogleCardDesign from "@/components/Studio/GoogleCardDesign/GoogleCardDesign";
import ZeekCardDesign from "@/components/Studio/ZeekCardDesign/ZeekCardDesign";
import LandingPage from "@/components/Studio/LandingPage/LandingPage";
import RightSideBar from "@/components/Studio/RightSideBar/RightSideBar";
import OverViewPage from "@/components/Studio/OverViewPage/OverViewPage";
import { BARCODE_TYPES } from "@/enums/barcode";
import { useRouter } from "next/navigation";
import { getImageBase64URL } from "@/utils/helper-functions";

const CreateCardLoyalty = () => {
  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [firstColor, setFirstColor] = React.useState("#77E2FC");
  const [secondColor, setSecondColor] = React.useState("#CEC1FB");
  const [thirdColor, setThirdColor] = React.useState("#768CEA");
  const [bannerColor, setBannerColor] = React.useState("#77E2FC");
  const [backgroundColor, setBackgroundColor] = React.useState("#FFFFFF");
  const [selectedCode, setSelectedCode] = React.useState({
    type: BARCODE_TYPES.QRCODE,
    value: "https://zeek.com",
  });
  const [imagePreview, setImagePreview] = React.useState(null);

  const handleImageChange = async (file) => {
    if (file) {
      const base64URL = await getImageBase64URL(file);
      setImagePreview(base64URL);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  const router = useRouter();

  const handleCodeSelect = (codeType, codeValue) => {
    setSelectedCode({ type: codeType, value: codeValue });
  };

  const handleBannerColorChange = (event) => {
    setBannerColor(event.target.value);
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleFirstColorChange = (event) => {
    setFirstColor(event.target.value);
  };

  const handleSecondColorChange = (event) => {
    setSecondColor(event.target.value);
  };

  const handleThirdColorChange = (event) => {
    setThirdColor(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="p-4 relative">
      <Container maxWidth="xl">
        <div
          className={`flex flex-row ml-28 ${
            currentPage === 5 ? "justify-between" : "gap-96"
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
            {currentPage === 5 ? "Overview" : "Zeek Card Studio Design"}
          </Typography>
          {currentPage === 5 && (
            <CustomButton text="Done" textColor="#FF5B00" bgColor="#FFDAC5" />
          )}
        </div>
      </Container>
      <Box className="py-10">
        <Grid container spacing={0}>
          {currentPage !== 5 && (
            <Grid item size={{ xs: 12, md: 2 }}>
              <SideBar
                value={value}
                handleChange={handleChange}
                firstColor={firstColor}
                secondColor={secondColor}
                thirdColor={thirdColor}
                handleFirstColorChange={handleFirstColorChange}
                handleSecondColorChange={handleSecondColorChange}
                handleThirdColorChange={handleThirdColorChange}
                currentPage={currentPage}
                bannerColor={bannerColor}
                backgroundColor={backgroundColor}
                handleBannerColorChange={handleBannerColorChange}
                handleBackgroundColorChange={handleBackgroundColorChange}
                handleCodeSelect={handleCodeSelect}
                selectedCode={selectedCode}
                imagePreview={imagePreview}
                handleImageChange={handleImageChange}
                handleRemoveImage={handleRemoveImage}
              />
            </Grid>
          )}
          <Grid
            item
            size={{
              xs: 12,
              md: currentPage === 4 ? 8 : currentPage === 5 ? 12 : 10,
            }}
          >
            <Container maxWidth="xl">
              <Box className="flex flex-col gap-2 items-center justify-center w-full">
                <Box className="flex flex-col gap-1 items-center justify-center w-full">
                  <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
                    {currentPage === 1 && "Apple Wallet Card Design"}
                    {currentPage === 2 && "Google Wallet Card Design"}
                    {currentPage === 3 && "Zeek Wallet Card Design"}
                    {currentPage === 4 && "Landing Page Design"}
                  </Typography>
                  {currentPage !== 5 && <Divider sx={{ width: "80%" }} />}
                </Box>
                {currentPage === 1 && (
                  <AppleCardDesign
                    firstColor={firstColor}
                    secondColor={secondColor}
                    thirdColor={thirdColor}
                    selectedCode={selectedCode}
                    imagePreview={imagePreview}
                  />
                )}
                {currentPage === 2 && (
                  <GoogleCardDesign
                    firstColor={firstColor}
                    secondColor={secondColor}
                    thirdColor={thirdColor}
                    selectedCode={selectedCode}
                    imagePreview={imagePreview}
                  />
                )}
                {currentPage === 3 && (
                  <ZeekCardDesign
                    firstColor={firstColor}
                    secondColor={secondColor}
                    thirdColor={thirdColor}
                    selectedCode={selectedCode}
                    imagePreview={imagePreview}
                  />
                )}
                {currentPage === 4 && (
                  <LandingPage
                    bannerColor={bannerColor}
                    backgroundColor={backgroundColor}
                  />
                )}
                {currentPage === 5 && (
                  <OverViewPage
                    firstColor={firstColor}
                    secondColor={secondColor}
                    thirdColor={thirdColor}
                    selectedCode={selectedCode}
                  />
                )}
                <CustomPagination
                  totalPages={5}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </Box>
            </Container>
          </Grid>
          {currentPage === 4 && (
            <Grid item size={{ xs: 12, md: 2 }}>
              <RightSideBar />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateCardLoyalty;
