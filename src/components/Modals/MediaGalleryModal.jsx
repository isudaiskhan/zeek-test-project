/* eslint-disable no-undef */
import React, { useState, useCallback } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import Image from "next/image";
import { getImageBase64URL } from "@/utils/helper-functions";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { addMediaGallery } from "@/services/business-profile/media";

const MediaGalleryModal = ({ open, onClose, message, buttonText }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const { submitHandler, submitLoading } = useSubmitHandler();
  const { invalidateQuery } = useInvalidateQuery();

  const handleFileSelection = async (e) => {
    const files = Array.from(e.target.files);

    const base64Promises = files.map((file) => getImageBase64URL(file));
    const newPreviews = await Promise.all(base64Promises);

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    const base64Promises = files.map((file) => getImageBase64URL(file));
    const newPreviews = await Promise.all(base64Promises);

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemove = (index) => {
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);

    setImagePreviews(updatedPreviews);
    setSelectedFiles(updatedFiles);
  };

  const handleCloseModal = () => {
    onClose();
    setSelectedFiles([]);
    setImagePreviews([]);
  };

  const handleUploadMedia = () => {
    submitHandler({
      successMsg: "Media uploaded successfully",
      onSubmit: async () => {
        const uploadPromises = selectedFiles.map(async (file) => {
          const formData = new FormData();
          formData.append("image", file); // Only one key per request
          return await addMediaGallery(formData);
        });
        // Wait for all uploads to complete
        await Promise.all(uploadPromises);
        invalidateQuery(["get-media"]);
        handleCloseModal();
      },
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      fullWidth
      maxWidth="md"
      className="backdrop-blur-sm"
      PaperProps={{
        className:
          "rounded-lg !bg-[#00000033] !px-20 !shadow-none !rounded-[20px] !max-h-[90vh]",
        sx: {
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": { background: "#555" },
          scrollbarWidth: "thin",
        },
      }}
    >
      <IconButton
        onClick={handleCloseModal}
        className="!text-white !absolute !top-3 !left-5"
      >
        <CloseIcon className="!text-4xl" />
      </IconButton>
      <Typography className="!absolute !top-5 text-white !font-inter !text-2xl !left-24">
        Upload Media
      </Typography>
      <div className="py-20">
        <DialogContent
          className="relative flex flex-col items-center !overflow-hidden border-4 rounded-[20px] cursor-pointer border-solid border-[#FFFFFF66] bg-[#00000026] !p-8"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <FileUploadOutlinedIcon className="!text-9xl text-[#FFFFFF66]" />

          <Typography
            variant="h6"
            className="!mb-12 text-center !text-xl !font-inter !mt-5 text-[#FFFFFF99]"
          >
            {message}
          </Typography>
        </DialogContent>

        {imagePreviews.length > 0 && (
          <div className="flex flex-col items-center mt-6">
            <Box
              className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-y-auto max-h-[300px]"
              sx={{
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-track": { background: "transparent" },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": { background: "#555" },
                scrollbarWidth: "thin",
              }}
            >
              {imagePreviews.map((base64, index) => (
                <div key={index} className="relative w-20 h-20 aspect-square">
                  <Image
                    src={base64}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  <IconButton
                    onClick={() => handleRemove(index)}
                    className="absolute -top-[10px] left-12 right-0 bg-white rounded-full"
                  >
                    <ClearSharpIcon className="!text-red-500" />
                  </IconButton>
                </div>
              ))}
            </Box>
          </div>
        )}
        <div className="flex justify-center">
          {selectedFiles.length > 0 ? (
            <Button
              component="label"
              className="!mt-6 !bg-[#FFFFFF80] !text-black !font-inter !py-2 !px-16 !rounded-lg !text-base"
              onClick={handleUploadMedia}
              endIcon={<FileUploadOutlinedIcon />}
              disabled={submitLoading}
            >
              {submitLoading ? "Uploading..." : "Upload Media"}
            </Button>
          ) : (
            <Button
              component="label"
              className="!mt-6 !bg-[#FFFFFF80] !text-black !font-inter !py-2 !px-16 !rounded-lg !text-base"
            >
              {buttonText}
              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={handleFileSelection}
              />
              <Image
                src="/images/upload.svg"
                className="!ml-5"
                alt="upload-icon"
                width={25}
                height={25}
              />
            </Button>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default MediaGalleryModal;
