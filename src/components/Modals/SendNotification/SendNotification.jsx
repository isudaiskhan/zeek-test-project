import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Add } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import CustomDialogContent from "@/components/Custom/CustomDialogContent/CustomDialogContent";
import SuccessDialog from "../SuccessModal";
import DraftModal from "../DraftModal";

const SendNotification = ({ open, onClose }) => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const [openDraftModal, setOpenDraftModal] = React.useState(false);

  const handleOpenSuccessModal = () => {
    setOpenSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const handleOpenDraftModal = () => {
    setOpenDraftModal(true);
  };

  const handleCloseDraftModal = () => {
    setOpenDraftModal(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          width: "55%",
          maxWidth: "55%",
        },
      }}
    >
      <DialogTitle>
        <Box className="p-4">
          <Typography variant="h5" fontSize="32px" sx={{ fontWeight: 400 }}>
            Create Notification
          </Typography>
        </Box>
        <Divider />
      </DialogTitle>
      <CustomDialogContent>
        <Box className="flex flex-col justify-start items-start p-4">
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            Notification Title
          </Typography>
          <TextField
            variant="outlined"
            placeholder="ie. BOGO on pastries"
            sx={{
              borderRadius: "16px", // For rounded corners
              backgroundColor: "#F4F4F4",
              width: "50%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
              },
            }}
          />
        </Box>
        <Box display="flex" alignItems="start" className="p-4">
          <div className="flex flex-col space-y-4">
            <Typography
              variant="h5"
              fontSize="24px"
              sx={{ fontWeight: 400, marginBottom: 1 }}
            >
              Which Segment would you like to notify?
            </Typography>
            <div className="flex md:flex-row flex-col gap-4">
              {[
                "Bronze",
                "Silver",
                "Gold",
                "Platinum",
                "2x Frequency",
                "5x Frequency",
              ].map((item, index) => (
                <Box
                  className="bg-white rounded-xl py-2 px-5 cursor-pointer"
                  sx={{ boxShadow: "0px 0px 6px 0px #00000040" }}
                  key={index}
                >
                  <Typography
                    sx={{
                      color: "#5B5B5B",
                      textAlign: "center",
                      fontSize: "15px",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </div>
          </div>
        </Box>
        <Box display="flex" alignItems="start" className="p-4">
          <div className="flex flex-col space-y-4 w-full">
            <Typography
              variant="h5"
              fontSize="24px"
              sx={{ fontWeight: 400, marginBottom: 1 }}
            >
              Your Message
            </Typography>
            <TextField
              label="Type Notification Message Here..."
              multiline
              color="secondary"
              rows={6}
              variant="outlined"
              sx={{
                borderRadius: "16px", // For rounded corners
                backgroundColor: "#F4F4F4",
                width: "80%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                },
              }}
            />
          </div>
        </Box>
        <Box display="flex" alignItems="start" className="p-4">
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex flex-row gap-4">
              <Typography
                variant="h5"
                fontSize="24px"
                sx={{ fontWeight: 400, marginBottom: 1 }}
              >
                Schedule Notification Timing
              </Typography>
            </div>
            <div className="flex flex-row gap-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "TimePicker"]}>
                  <DatePicker
                    label="DD/MM/YYYY"
                    sx={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "8px",
                    }}
                  />
                  <TimePicker
                    label="00:00"
                    sx={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "8px",
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
        </Box>
        <Box display="flex" alignItems="start" className="p-4">
          <CustomButton
            text="Add follow-up Notification"
            textColor="#000000"
            bgColor="#FFFFFF"
            startIcon={<Add />}
          />
        </Box>
        <Box
          display="flex"
          alignItems="end"
          className="p-4 mt-4 items-end justify-end"
        >
          <div className="flex flex-row gap-4 justify-center items-end">
            <CustomButton
              text="Cancel"
              bgColor="#F4F4F4"
              textColor="#787878"
              onClick={onClose}
            />
            <CustomButton
              text="Draft"
              bgColor="#F4F4F4"
              textColor="#787878"
              onClick={handleOpenDraftModal}
            />
            <CustomButton
              text="Publish"
              bgColor="#FFECE1"
              textColor="#FF5B00"
              onClick={handleOpenSuccessModal}
            />
          </div>
        </Box>
      </CustomDialogContent>
      {openSuccessModal && (
        <SuccessDialog
          open={openSuccessModal}
          onClose={handleCloseSuccessModal}
          message="Your Notification has been sent out successfully!"
          buttonText="Continue"
        />
      )}
      {openDraftModal && (
        <DraftModal
          open={openDraftModal}
          onClose={handleCloseDraftModal}
          message="Your Notification has been put in your draft!"
          buttonText="Continue"
        />
      )}
    </Dialog>
  );
};

export default SendNotification;
