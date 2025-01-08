import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({ placeholder }) => {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      size="small"
      sx={{
        borderRadius: "16px", // For rounded corners
        backgroundColor: "#F4F4F4",
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px",
        },
      }}
    />
  );
};

export default CustomTextField;
