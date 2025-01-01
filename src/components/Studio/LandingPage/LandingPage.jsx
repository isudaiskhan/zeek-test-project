import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const LandingPage = ({ bannerColor, backgroundColor }) => {
  return (
    <>
      <Box className="flex flex-col gap-1 items-center justify-center w-full">
        <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
          Landing Page Design
        </Typography>
        <Divider sx={{ width: "100%" }} />
      </Box>
      <Box
        className="flex flex-col my-14 h-[550px] w-[725px] overflow-hidden"
        sx={{
          boxShadow: "-1px 2px 20px -5px #00000040",
          backgroundColor: backgroundColor,
          overflow: "hidden",
          overflowY: "scroll",
          scrollbarWidth: "none", // For Firefox
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, and Edge
          },
        }}
      >
        <Box
          className="flex justify-center items-center p-4"
          sx={{
            width: "725px",
            height: "92px",
            backgroundColor: bannerColor,
          }}
        >
          <Image
            src="/images/sato.png"
            alt="sato"
            width={110}
            height={48}
            loader={() => "/images/sato.png"}
          />
        </Box>
        <Box className="flex flex-col justify-center items-center gap-4 py-4 px-8 my-4 ">
          <div className="flex flex-col justify-center items-center gap-4 ">
            <Typography
              sx={{ fontWeight: 400, fontSize: "20px", textAlign: "center" }}
            >
              SATO Reward Program
            </Typography>
            <Typography
              sx={{ fontWeight: 400, fontSize: "16px", textAlign: "center" }}
            >
              Enter your information to enroll in this exclusive rewards
              program.
            </Typography>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="ml-4 font-normal text-sm">First Name*</label>
              <TextField
                variant="outlined"
                rows={2}
                multiline
                fullWidth
                sx={{
                  backgroundColor: "#D9D9D900",
                  borderRadius: "5px",
                  border: "1px solid #888888",
                }}
              />
              <p className="ml-4 font-normal text-[14px] text-[#797979]">
                Please Enter your first name (or preferred name)
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-6 w-full">
              <label className="ml-4 font-normal text-sm">Last Name*</label>
              <TextField
                variant="outlined"
                rows={2}
                multiline
                fullWidth
                sx={{
                  backgroundColor: "#D9D9D900",
                  borderRadius: "5px",
                  border: "1px solid #888888",
                }}
              />
              <p className="ml-4 font-normal text-[14px] text-[#797979]">
                Please Enter your last name (surname)
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-6 w-full">
              <label className="ml-4 font-normal text-sm">Email*</label>
              <TextField
                variant="outlined"
                rows={2}
                multiline
                fullWidth
                sx={{
                  backgroundColor: "#D9D9D900",
                  borderRadius: "5px",
                  border: "1px solid #888888",
                }}
              />
              <p className="ml-4 font-normal text-[14px] text-[#797979]">
                Type carefully, your pass will be delivered to this email
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-6 w-full">
              <label className="ml-4 font-normal text-sm">Phone Number*</label>
              <TextField
                variant="outlined"
                rows={2}
                multiline
                fullWidth
                sx={{
                  backgroundColor: "#D9D9D900",
                  borderRadius: "5px",
                  border: "1px solid #888888",
                }}
              />
              <p className="ml-4 font-normal text-[14px] text-[#797979]">
                Please include your country code (ie, +971 for UAE)
              </p>
            </div>
            <div className="flex flex-row gap-2 mt-6 w-full">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Allow lock screen notifications"
                />
              </FormGroup>
            </div>
            <div className="flex justify-center items-center mt-6 w-full">
              <CustomButton
                text="Register"
                textColor="black"
                bgColor={bannerColor}
                isLandingPage
              />
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
