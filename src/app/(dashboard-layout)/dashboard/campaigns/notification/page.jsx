"use client";
import React, { useState } from "react";
import NotificationRow from "@/components/NotificationComponents/NotificationRow";
import { Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SendNotification from "@/components/Modals/SendNotification/SendNotification";
import { useGetAllNotifications } from "@/services/notifications";
import Spinner from "@/components/Spinner/Spinner";
import { NOTIFICATION_STATUS } from "@/enums/status";

const Notifications = () => {
  const [openModal, setOpenModal] = useState(false);

  // Active Notifications
  const {
    data: activeData,
    isLoading: activeLoading,
    isError: activeError,
    fetchNextPage: fetchNextActive,
    hasNextPage: hasNextActive,
  } = useGetAllNotifications(3, NOTIFICATION_STATUS.ACTIVE);
  const activeNotifications =
    activeData?.pages?.flatMap((page) => page.data) || [];

  // Inactive Notifications
  const {
    data: inActiveData,
    isLoading: inActiveLoading,
    isError: inActiveError,
    fetchNextPage: fetchNextInactive,
    hasNextPage: hasNextInactive,
  } = useGetAllNotifications(3, NOTIFICATION_STATUS.IN_ACTIVE);
  const inActiveNotifications =
    inActiveData?.pages?.flatMap((page) => page.data) || [];

  // Draft Notifications
  const {
    data: draftData,
    isLoading: draftLoading,
    isError: draftError,
    fetchNextPage: fetchNextDraft,
    hasNextPage: hasNextDraft,
  } = useGetAllNotifications(3, NOTIFICATION_STATUS.DRAFT);
  const draftNotifications =
    draftData?.pages?.flatMap((page) => page.data) || [];

  const isError = activeError || draftError || inActiveError;
  const isLoading = activeLoading || draftLoading || inActiveLoading;

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (isError) {
    return (
      <div className="flex flex-col justify-center py-8 items-center p-6">
        <Typography
          variant="h5"
          className="text-black !text-4xl !font-sans !self-start !font-bold"
        >
          Something went wrong
        </Typography>
      </div>
    );
  }

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

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <NotificationRow
            label="Active"
            cardData={activeNotifications}
            isActive
            fetchNextActive={fetchNextActive}
            hasNextActive={hasNextActive}
          />
          <NotificationRow
            label="Inactive"
            cardData={inActiveNotifications}
            isInactive
            fetchNextInactive={fetchNextInactive}
            hasNextInactive={hasNextInactive}
          />
          <NotificationRow
            label="Draft"
            cardData={draftNotifications}
            isDraft
            fetchNextDraft={fetchNextDraft}
            hasNextDraft={hasNextDraft}
          />
        </>
      )}

      {openModal && (
        <SendNotification open={openModal} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Notifications;
