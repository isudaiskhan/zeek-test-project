"use client";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MediaGalleryModal from "@/components/Modals/MediaGalleryModal";

const MediaGalleryModalWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <IconButton
        onClick={handleOpenModal}
        className="!bg-[#FFECE1] !p-1 !hover:bg-orange-200 !text-[#FF762A] !border !border-[#FFE0CE] !border-solid !rounded-xl"
        aria-label="add"
      >
        <AddIcon className="!text-4xl" />
      </IconButton>
      <MediaGalleryModal
        open={isModalOpen}
        onClose={handleCloseModal}
        message="Drag and drop photos to upload or select from files."
        buttonText="Select from files"
      />
    </>
  );
};

export default MediaGalleryModalWrapper;
