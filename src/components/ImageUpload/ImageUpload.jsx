import React, { useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Box, Typography, FormHelperText } from "@mui/material";
import { getImageBase64URL } from "@/utils/helper-functions";

const ImageUpload = ({
  onFileChange,
  onFileDelete,
  imageFile,
  error,
  errorMessage,
}) => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("/images/checkers.png");

  useEffect(() => {
    if (imageFile) {
      setPreview(imageFile);
    } else {
      setImagePreview("/images/checkers.png");
    }
  }, [imageFile]);

  const handleChange = async (file) => {
    if (file) {
      onFileChange(file);
    }
  };

  const setPreview = async (file) => {
    setImagePreview(await getImageBase64URL(file));
  };

  const handleRemove = () => {
    setImagePreview("/images/checkers.png");
    onFileDelete();
  };

  return (
    <>
      <div className="relative w-[230px] h-[210px]">
        <div
          className="flex justify-center items-center rounded-md p-4 cursor-pointer w-full h-full"
          style={{
            border: "1px solid #D3D3D3",
            backgroundImage: `url(${imagePreview})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => fileInputRef.current.click()}
        >
          {!imageFile ? (
            <Box
              className="flex justify-center items-center px-6 py-2 bg-[#FFFFFF] rounded-2xl"
              sx={{ boxShadow: "0px 0px 10px 0px #0000004D" }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                Upload Image
              </Typography>
            </Box>
          ) : (
            <Box
              className="flex justify-center items-center px-6 py-2 bg-[#FFFFFF] rounded-2xl"
              sx={{ boxShadow: "0px 0px 10px 0px #0000004D" }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                Change Image
              </Typography>
            </Box>
          )}
        </div>
        {imageFile && (
          <IconButton
            aria-label="delete"
            onClick={handleRemove}
            className="absolute -top-32 left-64 bottom-48 !text-red-500 shadow"
          >
            <DeleteIcon />
          </IconButton>
        )}
      </div>
      {error && <FormHelperText error>{errorMessage}</FormHelperText>}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => handleChange(e.target.files[0])}
      />
    </>
  );
};

export default ImageUpload;
