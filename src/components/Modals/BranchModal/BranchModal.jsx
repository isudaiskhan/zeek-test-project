import {
  Autocomplete,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomTextField from "@/components/CustomTextField/CustomTextField";

const openingTimingOptions = [
  { label: "10:00 AM ", value: "10:00 AM" },
  { label: "11:00 AM ", value: "11:00 AM" },
  { label: "12:00 PM ", value: "12:00 PM" },
  { label: "01:00 PM ", value: "01:00 PM" },
  { label: "02:00 PM ", value: "02:00 PM" },
  { label: "Closed", value: "Closed" },
];

const closingTimingOptions = [
  { label: "10:00 PM ", value: "10:00 PM" },
  { label: "11:00 PM ", value: "11:00 PM" },
  { label: "12:00 AM ", value: "12:00 AM" },
  { label: "01:00 AM ", value: "01:00 AM" },
  { label: "02:00 AM ", value: "02:00 AM" },
  { label: "Closed", value: "Closed" },
];

const managers = [
  { label: "Manager 1", value: "Manager 1" },
  { label: "Manager 2", value: "Manager 2" },
];

const subHeadingSX = { fontWeight: 400, fontSize: "14px" };

const BranchModal = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          width: "60%",
          maxWidth: "60%",
        },
      }}
    >
      <div className="p-4">
        <DialogTitle>
          <Typography sx={{ fontSize: "32px", fontWeight: 400 }}>
            Add New Branch
          </Typography>
          <Divider sx={{ mt: 1 }} />
        </DialogTitle>
        <DialogContent>
          <Box className="p-4">
            <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
              Branch Details
            </Typography>
          </Box>
          <Box className="p-4">
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col gap-10 justify-start items-start w-full">
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>Branch Name</Typography>
                    <CustomTextField placeholder="Name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>
                      Branch Contact Number
                    </Typography>
                    <CustomTextField placeholder="+971..." />
                  </div>
                </div>
              </Grid>
              <Grid item size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col gap-2 justify-start items-start">
                  <Typography sx={subHeadingSX}>Address</Typography>
                  <CustomTextField placeholder="Street" />
                  <CustomTextField placeholder="City" />
                  <CustomTextField placeholder="Emirate" />
                </div>
              </Grid>
              <Grid item size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col justify-start items-start gap-2">
                  <Typography sx={subHeadingSX}>
                    Branch ID (Optional)
                  </Typography>
                  <CustomTextField placeholder="Branch ID" />
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box className="p-4">
            <div className="flex flex-col justify-start items-start gap-2 w-[40%]">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Operational Details
              </Typography>
              <Typography sx={subHeadingSX}>Operational Hours</Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#737373",
                }}
              >
                If your business is not operating, select “closed” for both
                opening and closing times.
              </Typography>
            </div>
            <div className="flex flex-col justify-start items-start gap-4 mt-6">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <div className="flex flex-col gap-1" key={day}>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#737373" }}
                  >
                    {day}
                  </Typography>
                  <div className="flex flex-col md:flex-row justify-between">
                    <Autocomplete
                      disablePortal
                      options={openingTimingOptions}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          size="small"
                          placeholder="Opening Time"
                          sx={{
                            borderRadius: "16px", // For rounded corners
                            backgroundColor: "#F4F4F4",
                            width: "80%",
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "16px",
                            },
                          }}
                        />
                      )}
                    />
                    <Autocomplete
                      disablePortal
                      options={closingTimingOptions}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          placeholder="Closing Time"
                          size="small"
                          sx={{
                            borderRadius: "16px", // For rounded corners
                            backgroundColor: "#F4F4F4",
                            width: "80%",
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "16px",
                            },
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Box>
          <Box className="p-4">
            <div className="flex flex-col justify-start items-start gap-6">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Manager Assignment
              </Typography>
              <div className="flex flex-col gap-2">
                <Typography sx={subHeadingSX}>Select Manager</Typography>
                <Autocomplete
                  disablePortal
                  options={managers}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Select..."
                      size="small"
                      sx={{
                        borderRadius: "16px", // For rounded corners
                        backgroundColor: "#F4F4F4",
                        width: "80%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "16px",
                        },
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </Box>
          <Box className="p-4">
            <div className="flex flex-row gap-4 justify-center items-center">
              <CustomButton
                text="Cancel"
                bgColor="#F4F4F4"
                textColor="#787878"
                onClick={onClose}
              />

              <CustomButton
                text="Add Branch"
                bgColor="#FFECE1"
                textColor="#FF5B00"
              />
            </div>
          </Box>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default BranchModal;
