"use client";
import React, { useState } from "react";
import CardComponent from "@/components/NotificationComponents/CardComponent";
import NotificationModal from "@/components/NotificationComponents/NotificationModal";
import { Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Notifications = () => {
  const [modalState, setModalState] = useState({
    openModal: false,
    openPublishModal: false,
    openDraftModal: false,
  });

  const [cardData] = useState([
    {
      title: "BOGO on pastries",
      messages: [
        " Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
        "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
        "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
      ],
      releaseTimes: [
        "Nov 5, 2024 12:00 PM",
        "Nov 8, 2024 12:00 PM",
        "Nov 11, 2024 12:00 PM",
      ],
    },

    {
      title: "BOGO on pastries",
      messages: [
        " Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
        "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
        "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
      ],
      releaseTimes: [
        "Nov 5, 2024 12:00 PM",
        "Nov 8, 2024 12:00 PM",
        "Nov 11, 2024 12:00 PM",
      ],
    },

    {
      title: "BOGO on pastries",
      messages: [
        " Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
        "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
        "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
      ],
      releaseTimes: [
        "Nov 5, 2024 12:00 PM",
        "Nov 8, 2024 12:00 PM",
        "Nov 11, 2024 12:00 PM",
      ],
    },

    {
      title: "BOGO on pastries",
      messages: [
        " Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
        "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
        "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
      ],
      releaseTimes: [
        "Nov 5, 2024 12:00 PM",
        "Nov 8, 2024 12:00 PM",
        "Nov 11, 2024 12:00 PM",
      ],
    },

    {
      title: "BOGO on pastries",
      messages: [
        " Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
        "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
        "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
      ],
      releaseTimes: [
        "Nov 5, 2024 12:00 PM",
        "Nov 8, 2024 12:00 PM",
        "Nov 11, 2024 12:00 PM",
      ],
    },

    {
      title: "BOGO on pastries",
      messages: [
        " Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
        "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
        "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
      ],
      releaseTimes: [
        "Nov 5, 2024 12:00 PM",
        "Nov 8, 2024 12:00 PM",
        "Nov 11, 2024 12:00 PM",
      ],
    },

    {
      title: "BOGO on pastries",
      messages: [
        " Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
        "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
        "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
      ],
      releaseTimes: [
        "Nov 5, 2024 12:00 PM",
        "Nov 8, 2024 12:00 PM",
        "Nov 11, 2024 12:00 PM",
      ],
    },

    {
      title: "BOGO on pastries",
      messages: [
        " Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
        "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
        "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
      ],
      releaseTimes: [
        "Nov 5, 2024 12:00 PM",
        "Nov 8, 2024 12:00 PM",
        "Nov 11, 2024 12:00 PM",
      ],
    },

    {
      title: "BOGO on pastries",
      messages: [
        " Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
        "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
        "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
      ],
      releaseTimes: [
        "Nov 5, 2024 12:00 PM",
        "Nov 8, 2024 12:00 PM",
        "Nov 11, 2024 12:00 PM",
      ],
    },
  ]);

  // Modal open/close handlers
  const handleOpenModal = (modalType) => {
    setModalState((prevState) => ({
      openModal: modalType === "main",
      openPublishModal: modalType === "publish",
      openDraftModal: modalType === "draft",
    }));
  };

  const handleCloseModal = () =>
    setModalState({
      openModal: false,
      openPublishModal: false,
      openDraftModal: false,
    });

  const renderCardRow = (startIdx, endIdx, label, count) => (
    <div>
      <Typography
        className={`!text-3xl !font-bold !font-sans !mb-6 !self-start ${
          label === "Inactive" || label === "Draft" ? "!mt-14" : ""
        }`}
      >
        {label}
        <span className="text-[#B3B3B3] ml-3">{count}</span>
      </Typography>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10 w-full">
        {cardData.slice(startIdx, endIdx).map((card, idx) => (
          <CardComponent
            key={idx + startIdx}
            card={card}
            index={idx + startIdx}
            messages={card.messages}
            releaseTimes={card.releaseTimes}
          />
        ))}
      </div>
    </div>
  );

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
          onClick={() => handleOpenModal("main")}
        >
          <AddIcon className="!text-4xl" />
        </IconButton>
      </div>

      {renderCardRow(0, 3, "Active", 3)}
      {renderCardRow(3, 6, "Inactive", 3)}
      {renderCardRow(6, 9, "Draft", 3)}

      <NotificationModal
        openModal={modalState.openModal}
        handleCloseModal={handleCloseModal}
        handleOpenDraftModal={() => handleOpenModal("draft")}
        handleOpenPublishModal={() => handleOpenModal("publish")}
        openPublishModal={modalState.openPublishModal}
        handleClosePublishModal={() => handleOpenModal("")}
        openDraftModal={modalState.openDraftModal}
        handleCloseDraftModal={() => handleOpenModal("")}
      />
    </div>
  );
};

export default Notifications;
