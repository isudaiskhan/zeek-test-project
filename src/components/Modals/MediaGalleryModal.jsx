import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const MediaGalleryModal = ({ open, onClose, message, buttonText }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      className="backdrop-blur-sm"
      PaperProps={{
        className:
          "rounded-lg p-20 !bg-[#00000033] !shadow-none !rounded-[20px]",
      }}
    >
      <IconButton
        onClick={onClose}
        className="!text-white !absolute !top-3 !left-5"
      >
        <CloseIcon className="!text-4xl" />
      </IconButton>
      <Typography className="!absolute !top-5 text-white !font-inter !text-2xl !left-24">
        Upload Media
      </Typography>
      <DialogContent className="relative flex flex-col items-center border-4 rounded-[20px] cursor-pointer border-solid border-[#FFFFFF66] bg-[#00000026] !p-20">
        <FileUploadOutlinedIcon className="!text-9xl text-[#FFFFFF66]" />

        <Typography
          variant="h6"
          className="!mb-12 text-center !text-xl !font-inter !mt-5 text-[#FFFFFF99]"
        >
          {message}
        </Typography>
      </DialogContent>

      <div className="mx-auto">
        <Button
          onClick={onClose}
          className="flex items-center !bg-[#FFFFFF80] !text-black !font-inter !py-2 !px-16 !rounded-lg !text-base !mt-12 justify-center"
        >
          {buttonText}
          <Image
            src="/images/upload.svg"
            className="!ml-5"
            alt="upload-icon"
            width={25}
            height={25}
          />
        </Button>
      </div>
    </Dialog>
  );
};

export default MediaGalleryModal;
