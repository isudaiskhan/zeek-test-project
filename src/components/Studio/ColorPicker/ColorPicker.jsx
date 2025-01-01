import { Box } from "@mui/material";
import React from "react";

const ColorPicker = ({
  firstColor,
  secondColor,
  thirdColor,
  handleFirstColorChange,
  handleSecondColorChange,
  handleThirdColorChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center gap-4 mt-2">
        <input
          type="text"
          value={firstColor}
          onChange={handleFirstColorChange}
          className="rounded px-2 py-1 w-32"
        />
        <Box
          className="w-[30px] h-[30px] rounded-md"
          sx={{ backgroundColor: firstColor }}
        ></Box>
      </div>
      <div className="flex flex-row justify-between items-center gap-4 mt-2">
        <input
          type="text"
          value={secondColor}
          onChange={handleSecondColorChange}
          className="rounded px-2 py-1 w-32"
        />
        <Box
          className="w-[30px] h-[30px] rounded-md"
          sx={{ backgroundColor: secondColor }}
        ></Box>
      </div>
      <div className="flex flex-row justify-between items-center gap-4 mt-2">
        <input
          type="text"
          value={thirdColor}
          onChange={handleThirdColorChange}
          className="rounded px-2 py-1 w-32"
        />
        <Box
          className="w-[30px] h-[30px] rounded-md"
          sx={{ backgroundColor: thirdColor }}
        ></Box>
      </div>
    </div>
  );
};

export default ColorPicker;
