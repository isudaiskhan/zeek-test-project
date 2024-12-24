import {
  Box,
  Modal,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";

const segments = [
  { tag: "All", people: 152, created: "October 2, 2024", campaigns: 7 },
  { tag: "Platinum", people: 12, created: "October 2, 2024", campaigns: 3 },
  { tag: "Gold", people: 23, created: "October 2, 2024", campaigns: 4 },
  { tag: "Silver", people: 47, created: "October 2, 2024", campaigns: 1 },
  { tag: "Bronze", people: 70, created: "October 2, 2024", campaigns: 2 },
  { tag: "Frequency x3", people: 24, created: "October 2, 2024", campaigns: 7 },
  { tag: "Frequency x5", people: 11, created: "October 2, 2024", campaigns: 7 },
];

const Dialog = () => {
  const [modalState, setModalState] = useState({
    create: false,
    publish: false,
    draft: false,
  });

  const handleOpenModal = (modalType) => {
    setModalState({
      create: modalType === "create",
      publish: modalType === "publish",
      draft: modalType === "draft",
    });
  };

  const handleCloseModal = () => {
    setModalState({
      create: false,
      publish: false,
      draft: false,
    });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <Typography variant="h4" className="!font-bold !text-4xl">
          Segments
          <span className="text-[#B3B3B3] text-4xl ml-3 font-bold">
            {segments.length}
          </span>
        </Typography>
        <IconButton
          className="!bg-[#FFECE1] !me-7 !p-1 !hover:bg-orange-200 !text-[#FF762A] !border !border-[#FFE0CE] !border-solid !rounded-xl"
          aria-label="add"
          onClick={() => handleOpenModal("create")}
        >
          <AddIcon className="!text-4xl" />
        </IconButton>
      </div>

      {/* Modal Component */}
      <Modal
        open={modalState.create}
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
                onClick={() => handleOpenModal("publish")}
                className="!bg-[#FFECE1] !px-8 !py-2 !text-black !text-sm !font-sans !rounded-md"
              >
                Create
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      {/* Publish Modal */}
      <Modal
        open={modalState.publish}
        onClose={handleCloseModal}
        className="flex items-center justify-center !backdrop-blur-sm"
      >
        <motion.div
          className="w-full md:w-1/4 bg-white !rounded-xl !shadow-lg mx-auto !my-8 !p-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <Image
              src="/images/approved.svg"
              alt="Placeholder"
              className="mb-4 w-[120px] h-[120px] object-cover"
              width={120}
              height={120}
            />
            <Typography
              variant="h6"
              className="!mb-12 text-center !text-xl !font-sans !mt-5"
            >
              Your segment has been created successfully!
            </Typography>
            <Button
              onClick={handleCloseModal}
              className="!mt-3 !bg-[#F4F4F4] !text-[#787878] !py-2 !rounded-lg w-full"
            >
              Continue
            </Button>
          </div>
        </motion.div>
      </Modal>
    </>
  );
};

export default Dialog;
