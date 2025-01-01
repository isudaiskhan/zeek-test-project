import { Box } from "@mui/material";
import React from "react";

const LandingPageColorPicker = ({
  bannerColor,
  handleBannerColorChange,
  backgroundColor,
  handleBackgroundColorChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 mt-2">
        <label htmlFor="bannerColor" className="font-bold text-xs">
          Banner Color:
        </label>
        <div className="flex flex-row justify-between items-center gap-2">
          <input
            type="text"
            value={bannerColor}
            onChange={handleBannerColorChange}
            className="rounded px-2 py-1 w-32"
          />
          <Box
            className="w-[30px] h-[30px] rounded-md"
            sx={{ backgroundColor: bannerColor }}
          ></Box>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <label htmlFor="backgroundColor" className="font-bold text-xs">
          Background Color:
        </label>
        <div className="flex flex-row justify-between items-center gap-2">
          <input
            type="text"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            className="rounded px-2 py-1 w-32"
          />
          <Box
            className="w-[30px] h-[30px] rounded-md"
            sx={{
              backgroundColor: backgroundColor,
              border: "1px solid #C3C3C3",
            }}
          ></Box>
        </div>
      </div>
    </div>
  );
};

export default LandingPageColorPicker;
