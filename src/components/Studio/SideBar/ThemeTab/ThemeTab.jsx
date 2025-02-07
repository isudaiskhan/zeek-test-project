import { Box, Divider, IconButton, Typography } from "@mui/material";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import React from "react";
import UploadImage from "@/components/Studio/UploadImage";
import ColorPicker from "@/components/Studio/ColorPicker/ColorPicker";
import LandingPageColorPicker from "../../LandingPageColorPicker/LandingPageColorPicker";
import { Delete } from "@mui/icons-material";

const ThemeTab = ({
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
  imagePreview,
  handleImageChange,
  handleRemoveImage,
  handleLogoImageChange,
  logoImagePreview,
  handleLockScreenIconChange,
  lockScreenIconPreview,
}) => {
  return (
    <>
      {currentPage === 4 ? (
        <div>
          <Box className="flex flex-col justify-start items-start px-5 pt-10 text-wrap">
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "19px",
              }}
            >
              Colors
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "11px",
                lineHeight: "19px",
              }}
            >
              Select Color for your passes here
            </Typography>
            <LandingPageColorPicker
              bannerColor={bannerColor}
              backgroundColor={backgroundColor}
              handleBannerColorChange={handleBannerColorChange}
              handleBackgroundColorChange={handleBackgroundColorChange}
            />
          </Box>
        </div>
      ) : (
        <div className="">
          <Box className="flex justify-start items-center px-5 py-2">
            <PaletteOutlinedIcon
              sx={{ fontSize: "20px", color: "black", mr: 1 }}
            />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "20px",
                color: "black",
                textAlign: "left",
              }}
            >
              Theme
            </Typography>
          </Box>
          <Divider sx={{ width: "100%" }} />
          <Box className="flex flex-col justify-start items-start px-5 pt-10">
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "19px",
              }}
            >
              Lock-screen Icon
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "11px",
              }}
            >
              The lock-screen icon is mandatory and must be 1:1 ratio (square).
              The minimum required size is 114 x 114 pixels. Your lock-screen
              icon is shared across all tiers in this Program.
              <br />
              <br />
              <span className="font-bold">
                Your lock-screen icon is shared across all Offers in this
                Campaign.
              </span>
            </Typography>

            <UploadImage
              onImageChange={handleLockScreenIconChange}
              imagePreview={lockScreenIconPreview}
            />
          </Box>
          <Divider sx={{ width: "100%", mt: 4 }} />
          <Box className="flex flex-col justify-start items-start px-5 pt-10 text-wrap">
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "19px",
              }}
            >
              Logo
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "11px",
              }}
            >
              Logos are a strict requirement for a wallet pass. You can upload a
              square or rectangular logo. Dimensions for a rectangular logo
              are 480W x 150H. A square logo should be 150W x 150H.
            </Typography>

            <UploadImage
              onImageChange={handleLogoImageChange}
              imagePreview={logoImagePreview}
            />
          </Box>
          <Divider sx={{ width: "100%", mt: 4 }} />
          <Box className="flex flex-col justify-start items-start px-5 pt-10 text-wrap">
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "19px",
              }}
            >
              Colors
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "11px",
                lineHeight: "19px",
              }}
            >
              Select Color for your passes here
            </Typography>
            <ColorPicker
              firstColor={firstColor}
              secondColor={secondColor}
              thirdColor={thirdColor}
              handleFirstColorChange={handleFirstColorChange}
              handleSecondColorChange={handleSecondColorChange}
              handleThirdColorChange={handleThirdColorChange}
            />
          </Box>
          <Divider sx={{ width: "100%", mt: 4 }} />
          {/* {Image Preview} */}
          <Box className="flex flex-col justify-start items-start px-5 pt-10 text-wrap">
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "19px",
              }}
            >
              Hero Image
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "11px",
              }}
            >
              Add Hero Image to give customers an idea of what they&apos;d be
              purchasing. This recommended dimensions of{" "}
              <strong> 1125 x 432 pixels.</strong>
            </Typography>
            <div className="flex flex-row gap-4">
              <UploadImage
                isHero
                onImageChange={handleImageChange}
                imagePreview={imagePreview}
              />
              <IconButton onClick={handleRemoveImage} disableRipple>
                <Delete fontSize="large" sx={{ color: "red" }} />
              </IconButton>
            </div>
          </Box>
        </div>
      )}
    </>
  );
};

export default ThemeTab;
