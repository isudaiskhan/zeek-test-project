"use client";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Box, Container, Divider, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { BARCODE_TYPES } from "@/enums/barcode";
import SideBar from "@/components/Studio/SideBar/SideBar";
import CustomPagination from "@/components/Studio/CustomPagination/CustomPagination";
import AppleStampCardDesign from "@/components/Studio/AppleStampCardDesign/AppleStampCardDesign";
import GoogleStampCardDesign from "@/components/Studio/GoogleStampCardDesign/GoogleStampCardDesign";
import ZeekStampCardDesign from "@/components/Studio/ZeekStampCardDesign/ZeekStampCardDesign";
import StampCardOverview from "@/components/Studio/StampCardOverview/StampCardOverview";
import { useRouter } from "next/navigation";
import { getImageBase64URL } from "@/utils/helper-functions";

const CreateStamp = () => {
  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstColor, setFirstColor] = useState("#77E2FC");
  const [secondColor, setSecondColor] = useState("#CEC1FB");
  const [thirdColor, setThirdColor] = useState("#768CEA");
  const [selectedCode, setSelectedCode] = useState({
    type: BARCODE_TYPES.QRCODE,
    value: "https://zeek.com",
  });
  const [imagePreview, setImagePreview] = useState(null);

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
            <CustomButton text="Done" textColor="#FF5B00" bgColor="#FFDAC5" />
          )}
        </div>
      </Container>
      <Box className="py-10">
        <Grid container spacing={2}>
          {currentPage !== 4 && (
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
                selectedCode={selectedCode}
                handleCodeSelect={handleCodeSelect}
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
                  <AppleStampCardDesign
                    firstColor={firstColor}
                    secondColor={secondColor}
                    thirdColor={thirdColor}
                    selectedCode={selectedCode}
                    imagePreview={imagePreview}
                  />
                )}
                {currentPage === 2 && (
                  <GoogleStampCardDesign
                    firstColor={firstColor}
                    secondColor={secondColor}
                    thirdColor={thirdColor}
                    selectedCode={selectedCode}
                    imagePreview={imagePreview}
                  />
                )}
                {currentPage === 3 && (
                  <ZeekStampCardDesign
                    firstColor={firstColor}
                    secondColor={secondColor}
                    thirdColor={thirdColor}
                    selectedCode={selectedCode}
                    imagePreview={imagePreview}
                  />
                )}
                {currentPage === 4 && (
                  <StampCardOverview
                    firstColor={firstColor}
                    secondColor={secondColor}
                    thirdColor={thirdColor}
                    selectedCode={selectedCode}
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
    </Box>
  );
};

export default CreateStamp;
