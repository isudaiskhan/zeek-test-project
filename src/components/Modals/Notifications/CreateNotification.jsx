import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SuccessModal from "../SuccessModal";
import DraftModal from "../DraftModal";

const NotificationModal = ({ openModal, handleCloseModal }) => {
  const [openDraftModal, setOpenDraftModal] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleCreateClick = () => {
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
    handleCloseModal();
  };

  const modalBoxStyle =
    "w-full md:w-1/2 bg-white rounded-md shadow-md p-8 mx-auto my-8";
  const buttonStyle = "!px-8 !py-2 !text-sm !font-sans !rounded-md";

  const renderDateSelector = (label, values) => (
    <FormControl className="!w-20 !bg-[#f5f5f5] rounded-full">
      <InputLabel className="!text-black">{label}</InputLabel>
      <Select defaultValue="" displayEmpty sx={{ borderRadius: "999px" }}>
        {values.map((value, index) => (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const handleOpenDraftModal = () => {
    setOpenDraftModal(true);
    handleCloseModal();
  };

  const handleCloseDraftModal = () => {
    setOpenDraftModal(false);
  };

  return (
    <>
      {/* Main Notification Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className="!backdrop-blur-sm"
      >
        <Box className={modalBoxStyle}>
          <Typography
            variant="h5"
            className="!text-3xl !font-sans !border-b !py-2 !mb-2"
          >
            Create Notification
          </Typography>
          <form>
            <Typography variant="subtitle1" className="!mt-10 !text-xl !mb-6">
              Which segments would you like to notify?
            </Typography>
            <Button
              variant="contained"
              className="!bg-[#F4F4F4] !text-black !rounded-full !px-6 !py-2 flex items-center"
            >
              <AddIcon />
              <span>Add Segment</span>
            </Button>

            <Typography variant="subtitle1" className="!mt-10 !text-xl !mb-2">
              Your Message
            </Typography>
            <TextField
              label="Type notification message here ..."
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              InputLabelProps={{ className: "!text-sm !text-[#A2A2A2]" }}
              className="!bg-[#F4F4F4] !rounded-md !shadow-sm !border-transparent"
            />

            <Typography variant="subtitle1" className="!mt-7 !text-xl !mb-3">
              Schedule notification timing
            </Typography>
            <Box className="flex items-center space-x-12">
              {renderDateSelector(
                "DD",
                Array.from({ length: 31 }, (_, i) =>
                  String(i + 1).padStart(2, "0")
                )
              )}
              {renderDateSelector("MM", [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ])}
            </Box>

            <div className="flex justify-end space-x-5 mt-8">
              <Button
                onClick={handleCloseModal}
                className={`${buttonStyle} !bg-[#F4F4F4] !text-black`}
              >
                Cancel
              </Button>
              <Button
                onClick={handleOpenDraftModal}
                className={`${buttonStyle} !bg-[#F4F4F4] !text-black`}
              >
                Draft
              </Button>
              <Button
                onClick={handleCreateClick}
                className={`${buttonStyle} !bg-[#FFECE1] !text-black`}
              >
                Publish
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      <DraftModal
        open={openDraftModal}
        onClose={handleCloseDraftModal}
        imageSrc="/images/draft.svg"
        message="Your notification has been put in your drafts."
        buttonText="Continue"
      />

      <SuccessModal
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        imageSrc="/images/approved.svg"
        message="Your notification has been sent out successfully!"
        buttonText="Continue"
      />
    </>
  );
};

export default NotificationModal;
