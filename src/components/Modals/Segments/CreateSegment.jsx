"use client";
import { Box, Modal, Typography, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import SuccessModal from "../SuccessModal";

const CreateSegment = ({ open, onClose }) => {
  const [modalState, setModalState] = useState({
    create: false,
    publish: false,
    draft: false,
  });
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalState({
      create: false,
      publish: false,
      draft: false,
    });
    onClose();
  };

  const handleCreateClick = () => {
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
    handleCloseModal();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        className="!backdrop-blur-sm"
      >
        <Box className="w-full md:w-1/2 bg-white rounded-md shadow-md p-8 mx-auto my-20">
          <Typography
            variant="h5"
            className="!font-bold !text-3xl !border-b !border-solid !border-0 !border-[#BABABA] !py-2 !mb-2"
          >
            Create Segment
          </Typography>
          <form>
            <Typography
              variant="subtitle1"
              className="!font-bold !font-sans !mt-10 !text-2xl !text-black !mb-2"
            >
              Title
            </Typography>
            <TextField
              label="Name"
              id="outlined-size-small"
              size="small"
              className="!mb-4  !bg-[#F4F4F4]"
            />
            <Typography
              variant="subtitle1"
              className="!font-bold !font-sans !mt-10 !text-2xl !text-black !mb-1"
            >
              Groups
            </Typography>
            <Typography className="!font-sans !text-sm !text-[#A1A1A1] !mb-3">
              Tiers
            </Typography>
            <div className="mb-4 flex gap-2 flex-wrap">
              {["Bronze", "Silver", "Gold", "Platinum"].map((tier) => (
                <Button
                  key={tier}
                  variant="outlined"
                  className="capitalize !border !rounded-lg !px-6 !py-2 !shadow !shadow-[#00000040] !font-sans !text-sm !text-[#5B5B5B] !border-solid !bg-[#FFFFFF] !border-[#EDEDED]"
                >
                  {tier}
                </Button>
              ))}
            </div>
            <Typography className="!font-sans !text-sm !text-[#A1A1A1] !mb-3 !mt-7">
              Time since last visit
            </Typography>
            <div className="mb-4 flex gap-2 flex-wrap">
              {["7 days", "14 days", "30 days", "60 days", "90 days"].map(
                (time) => (
                  <Button
                    key={time}
                    variant="outlined"
                    className="capitalize !border !rounded-lg !px-6 !py-2 !shadow !shadow-[#00000040] !font-sans !text-sm !text-[#5B5B5B] !border-solid !bg-[#FFFFFF] !border-[#EDEDED]"
                  >
                    {time}
                  </Button>
                )
              )}
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={handleCloseModal}
                className="!mr-4 !bg-[#F4F4F4] !px-8 !py-2 !text-black !text-sm !font-sans !rounded-md"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateClick}
                className="!bg-[#FFECE1] !px-8 !py-2 !text-black !text-sm !font-sans !rounded-md"
              >
                Create
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      <SuccessModal
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        imageSrc="/images/approved.svg"
        message="Your segment has been created successfully!"
        buttonText="Continue"
      />
    </>
  );
};

export default CreateSegment;
