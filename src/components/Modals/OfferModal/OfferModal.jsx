import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
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
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import React, { useState } from "react";

const subHeadingsSX = {
  fontSize: "14px",
  fontWeight: 400,
};

const paragraphSX = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#737373",
};

const branches = [
  { label: "Branch A", value: "Branch A" },
  { label: "Branch B", value: "Branch B" },
  { label: "Branch C", value: "Branch C" },
  { label: "All", value: "All" },
];

const tabs = [
  { label: "Repeating", value: "repeating" },
  { label: "Limited", value: "limited" },
];

const points = [
  { label: "Single", value: "single" },
  { label: "Double", value: "double" },
];

const days = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
  { label: "All", value: "All" },
];

const OfferModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("repeating");
  const [activePoints, setActivePoints] = useState("single");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePointsClick = (point) => {
    setActivePoints(point);
  };

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
      <Box className="p-4">
        <DialogTitle>
          <Typography sx={{ fontSize: "32px", fontWeight: 400 }}>
            Add New Offer
          </Typography>
          <Divider sx={{ my: 2 }} />
        </DialogTitle>
        <DialogContent>
          <Box className="flex flex-col gap-8 p-4">
            <div className="flex justify-start items-start mb-4">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Offer Details
              </Typography>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Offer Name</Typography>
              <CustomTextField placeholder="Name" />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Offer Description</Typography>
              <Typography sx={paragraphSX}>
                Add a description of the promotion for added detail if needed.
              </Typography>
              <CustomTextField placeholder="i.e. 20% off" />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Offer Image</Typography>
              <Typography sx={paragraphSX}>
                Upload an image or select an image from the active menu items.
              </Typography>
              <div
                className="flex justify-center items-center rounded-md p-4 cursor-pointer w-[325px] h-[297px]"
                style={{
                  border: "1px solid #D3D3D3",
                  backgroundImage: `url("/images/checkers.png")`,
                  backgroundSize: "cover",
                }}
                onClick={(e) =>
                  e.currentTarget.querySelector('input[type="file"]').click()
                }
              >
                <Box
                  className="flex justify-center items-center px-6 py-2 bg-[#FFFFFF] rounded-2xl"
                  sx={{ boxShadow: "0px 0px 10px 0px #0000004D" }}
                >
                  <Typography sx={subHeadingsSX}>Add Image</Typography>
                </Box>
                <input type="file" hidden accept="image/*" />
              </div>
            </div>
            <div className="flex justify-start items-start my-4">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Operational Details
              </Typography>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Valid Through</Typography>
              <Typography sx={paragraphSX}>
                Choose the expiry date for this offer
              </Typography>
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
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>
                Offer Availability Block (Optional)
              </Typography>
              <Typography sx={paragraphSX}>
                Choose a time frame in the day where the offer will be
                available.
              </Typography>
              <div className="flex flex-row gap-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker", "TimePicker"]}>
                    <TimePicker
                      label="00:00"
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
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Branch</Typography>
              <Typography sx={paragraphSX}>
                Choose whether offer is branch specific or applicable for all
                branches
              </Typography>
              <Autocomplete
                disablePortal
                options={branches}
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
                      width: "80%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "16px",
                      },
                    }}
                  />
                )}
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Offer Uses</Typography>
              <Typography sx={paragraphSX}>
                Choose whether this offer is repeating or limited use
              </Typography>
              <Box className="flex flex-col items-center justify-center gap-1 py-5 w-auto">
                <div
                  className={`w-auto flex flex-col md:flex-row gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-md`}
                  style={{
                    boxShadow: "-1px 2px 20px -5px #00000040",
                  }}
                >
                  {tabs.map((tab) => (
                    <Box
                      key={tab.value}
                      onClick={() => handleTabClick(tab.value)}
                      className={`w-auto h-8 justify-center items-center font-semibold px-16 py-2 rounded-xl transition duration-200 cursor-pointer ${
                        activeTab === tab.value
                          ? "bg-[#FFECE1] text-[#FF5B00] hover:bg-orange-200"
                          : "bg-white text-gray-600 hover:bg-gray-300"
                      }`}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#696969",
                          fontWeight: 700,
                          fontSize: "14px",
                        }}
                      >
                        {tab.label}
                      </Typography>
                    </Box>
                  ))}
                </div>
              </Box>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Limited use value</Typography>
              <Typography sx={paragraphSX}>
                Choose how many times a customer can redeem this offer. If
                &quot;Repeating&quot; was selected above, leave this section
                blank.
              </Typography>
              <CustomTextField placeholder="i.e, 1,2,3,4" />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <Typography sx={subHeadingsSX}>Repeated Weekly</Typography>
              <Typography sx={paragraphSX}>
                If “Repeating” was selected above, select which days the offer
                will be available. If the offer will be available every day of
                the week, select “all” below.
              </Typography>
              <Autocomplete
                disablePortal
                options={days}
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
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "16px",
                      },
                    }}
                  />
                )}
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Double Points</Typography>
              <Typography sx={paragraphSX}>
                Choose if you would like to apply double points for redeeming
                this offer.
              </Typography>
              <Box className="flex flex-col items-center justify-center gap-1 py-5 w-auto">
                <div
                  className={`w-auto flex flex-col md:flex-row gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-md`}
                  style={{
                    boxShadow: "-1px 2px 20px -5px #00000040",
                  }}
                >
                  {points.map((point) => (
                    <Box
                      key={point.value}
                      onClick={() => handlePointsClick(point.value)}
                      className={`w-auto h-8 justify-center items-center font-semibold px-16 py-2 rounded-xl transition duration-200 cursor-pointer ${
                        activePoints === point.value
                          ? "bg-[#FFECE1] text-[#FF5B00] hover:bg-orange-200"
                          : "bg-white text-gray-600 hover:bg-gray-300"
                      }`}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#696969",
                          fontWeight: 700,
                          fontSize: "14px",
                        }}
                      >
                        {point.label}
                      </Typography>
                    </Box>
                  ))}
                </div>
              </Box>
            </div>
            <Box className="p-4">
              <div className="flex flex-row gap-4 justify-center items-center">
                <CustomButton
                  text="Cancel"
                  bgColor="#F4F4F4"
                  textColor="#787878"
                  onClick={onClose}
                />

                <CustomButton
                  text="Add Offer"
                  bgColor="#FFECE1"
                  textColor="#FF5B00"
                />
              </div>
            </Box>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default OfferModal;
