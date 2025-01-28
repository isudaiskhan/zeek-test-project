import React from "react";
import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import Image from "next/image";

const DraftModal = ({ open, onClose, message, buttonText }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      className="backdrop-blur-sm"
      PaperProps={{
        className: "rounded-lg p-6",
      }}
    >
      <DialogContent className="flex flex-col items-center">
        <Image
          src="/images/draft.svg"
          alt="Status Icon"
          className="mb-4 w-[168px] h-[168px] object-cover"
          width={100}
          height={100}
          loader={() => "/images/draft.svg"}
        />
        <Typography
          variant="h6"
          className="!mb-12 text-center !text-xl !font-sans !mt-5"
        >
          {message}
        </Typography>
        <Button
          onClick={onClose}
          className={`!mt-3 !bg-[#F4F4F4] !text-[#787878] !py-2 !rounded-lg w-full`}
        >
          {buttonText}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DraftModal;
