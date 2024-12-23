import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ bgColor, textColor, text, onClick, icon }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        backgroundColor: bgColor,
        color: textColor || "#787878",
        "&:hover": {
          backgroundColor: `${bgColor}CC`, // Slightly transparent on hover
        },
        borderRadius: "8px",
      }}
    >
      {text || icon}
    </Button>
  );
};

export default CustomButton;
