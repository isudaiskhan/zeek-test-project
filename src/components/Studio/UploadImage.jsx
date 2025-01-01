import { Box, Typography } from "@mui/material";
import React from "react";

const UploadImage = ({ onClick, isHero }) => {
  return (
    <div
      className="flex h-[100px] mt-2 cursor-pointer justify-center items-center p-4"
      onClick={onClick}
      style={{
        backgroundImage: `url("/images/upload.png")`,
        width: isHero ? "200px" : "100px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        className="flex justify-center items-center rounded-2xl w-[60px] h-[60px] p-4"
        sx={{
          border: "1px solid #EAEAEA",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          Select Image
        </Typography>
        <input type="file" hidden accept="image/*" />
      </Box>
    </div>
  );
};

export default UploadImage;
