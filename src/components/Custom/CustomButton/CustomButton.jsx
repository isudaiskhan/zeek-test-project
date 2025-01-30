import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  bgColor,
  textColor,
  text,
  onClick,
  icon,
  startIcon,
  isLandingPage,
  type,
}) => {
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
        width: isLandingPage ? "100%" : "auto",
      }}
      startIcon={startIcon}
      type={type}
    >
      {text || icon}
    </Button>
  );
};

export default CustomButton;
