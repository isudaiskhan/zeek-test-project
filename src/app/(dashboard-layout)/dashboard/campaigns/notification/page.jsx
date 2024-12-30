"use client";
import React, { useState } from "react";
import NotificationRow from "@/components/NotificationComponents/NotificationRow";
import NotificationModal from "@/components/Modals/Notifications/CreateNotification";
import { Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { notificationsData } from "@/utils/dummy-data";

const Notifications = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openPublishModal, setOpenPublishModal] = useState(false);
  const [openDraftModal, setOpenDraftModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenPublishModal = () => {
    setOpenPublishModal(true);
  };

  const handleClosePublishModal = () => {
    setOpenPublishModal(false);
  };

  const handleOpenDraftModal = () => {
    setOpenDraftModal(true);
  };

  const handleCloseDraftModal = () => {
    setOpenDraftModal(false);
  };

  return (
    <div className="flex flex-col justify-center py-8 items-center p-6">
      <Typography
        variant="h5"
        className="text-black !text-4xl !font-sans !self-start !font-bold"
      >
        Notifications
      </Typography>

      <div className="flex w-full justify-end">
        <IconButton
          className="!bg-[#FFECE1] !p-1 !me-10 !hover:bg-orange-200 !text-[#FF762A] !border !border-[#FFE0CE] !border-solid !rounded-xl"
          aria-label="add"
          onClick={handleOpenModal}
        >
          <AddIcon className="!text-4xl" />
        </IconButton>
      </div>

      <NotificationRow
        label="Active"
        count={3}
        cardData={notificationsData.slice(0, 3)}
        status="active"
      />
      <NotificationRow
        label="Inactive"
        count={3}
        cardData={notificationsData.slice(3, 6)}
        status="inactive"
      />
      <NotificationRow
        label="Draft"
        count={3}
        cardData={notificationsData.slice(6, 9)}
        status="draft"
      />

      <NotificationModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        openPublishModal={openPublishModal}
        handleOpenPublishModal={handleOpenPublishModal}
        handleClosePublishModal={handleClosePublishModal}
        openDraftModal={openDraftModal}
        handleOpenDraftModal={handleOpenDraftModal}
        handleCloseDraftModal={handleCloseDraftModal}
      />
    </div>
  );
};

export default Notifications;
