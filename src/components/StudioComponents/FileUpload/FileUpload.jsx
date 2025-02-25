/* eslint-disable @next/next/no-img-element */
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { DeleteOutline } from "@mui/icons-material";
import { Upload } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useRef } from "react";

const FileUpload = ({ imagePreview, handleRemoveImage, onImageChange }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageChange(file);
    }
  };

  return (
    <Box className="flex flex-row justify-between items-center p-2 rounded-md border-dashed border-[2px] border-[#333333] w-full">
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="logo"
          className="w-[50px] h-[50px] object-cover"
        />
      ) : (
        <Upload />
      )}
      <div className="flex flex-row gap-2">
        <CustomButton
          text="Select File"
          textColor="#FFFFFF"
          bgColor="#000000"
          onClick={handleClick}
        />
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        {imagePreview && (
          <IconButton onClick={handleRemoveImage}>
            <DeleteOutline fontSize="medium" />
          </IconButton>
        )}
      </div>
    </Box>
  );
};

export default FileUpload;
