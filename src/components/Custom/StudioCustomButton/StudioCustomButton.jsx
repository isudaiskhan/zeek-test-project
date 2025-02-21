import { Button } from "@mui/material";
import React from "react";

const StudioCustomButton = ({
  bgColor,
  textColor,
  text,
  onClick,
  startIcon,
  width = "auto",
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        "&:hover": {
          backgroundColor: `${bgColor}CC`, // Slightly transparent on hover
        },
        border: "1px solid #E1E1E1",
        width: width,
        height: "39px",
        fontSize: "14px",
        padding: "20px",
      }}
      startIcon={startIcon}
    >
      {text}
    </Button>
  );
};

export default StudioCustomButton;
