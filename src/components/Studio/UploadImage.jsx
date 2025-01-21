import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";

const UploadImage = ({ isHero, onImageChange, imagePreview }) => {
  const fileInputRef = useRef(null); // Reference to the hidden input

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically click the file input
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get selected file
    if (file) {
      onImageChange(file); // Pass file to parent handler
    }
  };

  return (
    <div
      className="flex h-[100px] mt-2 cursor-pointer justify-center items-center p-4"
      onClick={handleClick}
      // style={{
      //   backgroundImage: `url("/images/upload.png")`,
      //   width: isHero ? "200px" : "100px",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
      style={{
        backgroundImage: imagePreview
          ? `url(${imagePreview})`
          : `url("/images/upload.png")`,
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
          {imagePreview ? (
            <span className="text-red-600">Change Image</span>
          ) : (
            "Select Image"
          )}
        </Typography>
        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </Box>
    </div>
  );
};

export default UploadImage;
