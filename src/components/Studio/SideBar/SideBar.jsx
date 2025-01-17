import { Box, Divider, Tab, Tabs } from "@mui/material";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import QrCodeIcon from "@mui/icons-material/QrCode";
import React from "react";
import ThemeTab from "./ThemeTab/ThemeTab";
import ItemsTab from "./ItemsTab/ItemsTab";
import BarCodeTab from "./BarCodeTab/BarCodeTab";

const SideBar = ({
  value,
  handleChange,
  firstColor,
  secondColor,
  thirdColor,
  handleFirstColorChange,
  handleSecondColorChange,
  handleThirdColorChange,
  currentPage,
  bannerColor,
  backgroundColor,
  handleBannerColorChange,
  handleBackgroundColorChange,
  handleQRCodeSelect,
  selectedCode,
  handleBarcodeValueChange,
  barcodeValue,
  QRCODEDATA,
  handleCodeSelect,
}) => {
  return (
    <Box
      className="flex flex-col justify-start items-start p-3 w-[20%] "
      sx={{
        boxShadow: "-1px 2px 20px 0px #00000040",
        border: "1px light #000000",
        position: "absolute",
        height: "100vh",
        left: 0,
        overflow: "hidden",
        overflowY: "scroll",
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": {
          display: "none", // For Chrome, Safari, and Edge
        },
      }}
    >
      <Box
        sx={{
          position: "sticky",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon tabs example"
          sx={{
            position: "sticky",
          }}
        >
          <Tab icon={<PaletteOutlinedIcon />} aria-label="theme" />
          <Tab icon={<MenuOutlinedIcon />} aria-label="item" />
          <Tab icon={<QrCodeIcon />} aria-label="barcode" />
        </Tabs>
      </Box>
      <Divider sx={{ width: "100%" }} />
      {value === 0 && (
        <ThemeTab
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
        />
      )}
      {value === 1 && <ItemsTab />}
      {value === 2 && (
        <BarCodeTab
          handleQRCodeSelect={handleQRCodeSelect}
          selectedCode={selectedCode}
          handleBarcodeValueChange={handleBarcodeValueChange}
          barcodeValue={barcodeValue}
          QRCODEDATA={QRCODEDATA}
          handleCodeSelect={handleCodeSelect}
        />
      )}
    </Box>
  );
};

export default SideBar;
