import {
  Autocomplete,
  Box,
  Dialog,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { MdOutlineFileUpload } from "react-icons/md";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomDialogContent from "@/components/Custom/CustomDialogContent/CustomDialogContent";
import SuccessDialog from "../SuccessModal";

const role = [
  { label: "Manager", value: "Manager" },
  { label: "Admin", value: "Admin" },
  { label: "Employee", value: "Employee" },
  { label: "Cashier", value: "Cashier" },
];

const branch = [
  { label: "Branch 1", value: "Branch 1" },
  { label: "Branch 2", value: "Branch 2" },
  { label: "Branch 3", value: "Branch 3" },
  { label: "Branch 4", value: "Branch 4" },
];

const subHeadingSX = { fontWeight: 400, fontSize: "14px" };

const EmployeeModal = ({ open, onClose }) => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const handleOpenSuccessModal = () => {
    setOpenSuccessModal(true);
  };
  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };
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
      <DialogTitle>
        <Typography sx={{ fontSize: "32px", fontWeight: 400 }}>
          Add New Employee
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </DialogTitle>
      <CustomDialogContent>
        <Box className="p-4">
          <div className="flex justify-start items-start my-6">
            <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
              Personal Information
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col justify-start items-start gap-6">
                <div className="flex flex-col gap-2">
                  <Typography sx={subHeadingSX}>Full Name</Typography>
                  <CustomTextField placeholder="Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography sx={subHeadingSX}>Phone Number</Typography>
                  <CustomTextField placeholder="+971.." />
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col justify-start items-start gap-6">
                <div className="flex flex-col gap-2">
                  <Typography sx={subHeadingSX}>Email Address</Typography>
                  <CustomTextField placeholder="example@business.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography sx={subHeadingSX}>
                    Employee ID (Optional)
                  </Typography>
                  <CustomTextField placeholder="Employee ID" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box className="p-4">
          <div className="flex justify-start items-start my-6">
            <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
              Role And Branch Assignment
            </Typography>
          </div>
          <Grid container spacing={{ md: 4, lg: 6 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col gap-2">
                <Typography sx={subHeadingSX}>Role</Typography>
                <Autocomplete
                  disablePortal
                  options={role}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Select"
                      size="small"
                      sx={{
                        borderRadius: "16px", // For rounded corners
                        backgroundColor: "#F4F4F4",
                        width: "70%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "16px",
                        },
                      }}
                    />
                  )}
                />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col gap-2">
                <Typography sx={subHeadingSX}>Branch</Typography>
                <Autocomplete
                  disablePortal
                  options={branch}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Select"
                      size="small"
                      sx={{
                        borderRadius: "16px", // For rounded corners
                        backgroundColor: "#F4F4F4",
                        width: "70%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "16px",
                        },
                      }}
                    />
                  )}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box className="p-4">
          <div className="flex justify-start items-start my-6">
            <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
              Employment Details
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col justify-start items-start gap-6">
                <div className="flex flex-col gap-2">
                  <Typography sx={subHeadingSX}>Job Title</Typography>
                  <CustomTextField placeholder="i.e Cook, Cashier, Waiter" />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography sx={subHeadingSX}>Employment Type</Typography>
                  <CustomTextField placeholder="i.e Full Time, Part Time" />
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col justify-start items-start gap-2">
                <Typography sx={subHeadingSX}>Date of Hire</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="DD/MM/YYYY"
                      sx={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "8px",
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box className="p-4">
          <div className="flex justify-start items-start my-6">
            <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
              Login Details
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col justify-start items-start gap-2">
                <Typography sx={subHeadingSX}>Confirm Login Email</Typography>
                <CustomTextField placeholder="example@business.com" />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="flex flex-col justify-start items-start gap-2 w-full">
                <Typography sx={subHeadingSX}>Temporary Password</Typography>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#737373" }}
                >
                  Password is auto-generated and sent to the employee’s email.
                  If you would like to manually set a password, type it in the
                  field below
                </Typography>
                <div className="flex flex-row gap-4">
                  <CustomTextField placeholder="Temporary Password" />
                  <CustomTextField placeholder="Confirm Password" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box className="p-4">
          <div className="flex justify-start items-start my-6">
            <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
              Optional Additions
            </Typography>
          </div>
          <Grid container spacing={{ md: 4, lg: 6 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col justify-start items-start gap-3">
                <Typography sx={subHeadingSX}>Profile Picture</Typography>
                <div className="flex flex-col gap-2 justify-start items-start">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#737373",
                      textWrap: "wrap",
                    }}
                  >
                    Drag and drop a photo to upload or select one from files.
                  </Typography>
                  <Box
                    className="flex justify-center items-center rounded-md bg-[#F4F4F4] w-[230px] h-[180px] p-4 cursor-pointer"
                    onClick={(e) =>
                      e.currentTarget
                        .querySelector('input[type="file"]')
                        .click()
                    }
                  >
                    <MdOutlineFileUpload
                      style={{
                        fontSize: "64px",
                        color: "#737373",
                      }}
                    />
                    <input type="file" hidden accept="image/*" />
                  </Box>
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="flex flex-col justify-start items-start gap-8 w-full">
                <div className="flex flex-col gap-3">
                  <Typography sx={subHeadingSX}>
                    Emergency Contact Information
                  </Typography>
                  <CustomTextField placeholder="+971.." />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <Typography sx={subHeadingSX}>
                    Notes or Additional Information
                  </Typography>
                  <TextField
                    variant="outlined"
                    placeholder="Additional Info"
                    multiline
                    rows={4}
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
              </div>
            </Grid>
          </Grid>
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
              text="Add Employee"
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
          message="Your Employee has been added successfully!"
          buttonText="Continue"
        />
      )}
    </Dialog>
  );
};

export default EmployeeModal;
