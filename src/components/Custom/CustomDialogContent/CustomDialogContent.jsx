import { DialogContent } from "@mui/material";
import React from "react";

const dialogSX = {
  "&::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#FFDAC5", // Thumb color
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555", // Thumb hover color
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f4f4f4", // Track color
  },
};

const CustomDialogContent = ({ children }) => {
  return (
    <DialogContent
      sx={{
        ...dialogSX,
      }}
    >
      {children}
    </DialogContent>
  );
};

export default CustomDialogContent;
