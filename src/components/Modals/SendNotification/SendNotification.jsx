import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
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

const SendNotification = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          width: "50%",
          maxWidth: "50%",
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
      <DialogContent>
        <Box display="flex" alignItems="start" className="p-4">
          <div className="flex flex-col space-y-4">
            <Typography
              variant="h5"
              fontSize="24px"
              sx={{ fontWeight: 400, marginBottom: 1 }}
            >
              Which Segment would you like to notify?
            </Typography>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#F4F4F4",
                color: "black",
                borderRadius: "8px",
                width: "50%",
              }}
            >
              <Add fontSize="small" sx={{ marginRight: 1, color: "black" }} />
              Add Segment
            </Button>
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
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#F4F4F4",
                  color: "black",
                  borderRadius: "8px",
                }}
              >
                <Add fontSize="small" sx={{ color: "black" }} />
              </Button>
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
        <Box display="flex" alignItems="start" className="p-4"></Box>
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
              text="Send Notification"
              bgColor="#FFDAC5"
              textColor="#787878"
            />
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SendNotification;
