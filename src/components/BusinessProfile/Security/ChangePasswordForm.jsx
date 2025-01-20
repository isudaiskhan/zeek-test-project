import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SuccessDialog from "@/components/Modals/SuccessModal";
import Image from "next/image";
const ChangePasswordForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChangePasswordClick = () => {
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
    onClose();
  };

  return (
    <Box className="flex flex-col !max-w-xl w-full p-6 bg-white me-auto">
      <Box className="mb-6">
        <Box className="!flex !items-center !mb-4">
          <IconButton onClick={onClose} className="!mr-5 !p-0">
            <Image
              src="/images/arrow-back.svg"
              width={20}
              height={20}
              alt="close"
            />
          </IconButton>
          <Typography variant="h6" className="!font-inter !text-2xl">
            Change Password
          </Typography>
        </Box>
        <Typography className="!mt-7 !mb-5 !text-lg !font-inter">
          Update your password to keep your account secure.
        </Typography>
      </Box>

      <label className="mb-4"> Current Password </label>

      <TextField
        fullWidth
        placeholder="Enter Password"
        type={showPassword.current ? "text" : "password"}
        variant="outlined"
        className="!mb-8"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => togglePasswordVisibility("current")}
                edge="end"
              >
                {showPassword.current ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <label className="mb-4"> New Password </label>
      <TextField
        fullWidth
        placeholder="Enter Password"
        type={showPassword.new ? "text" : "password"}
        variant="outlined"
        className="!mb-10"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => togglePasswordVisibility("new")}
                edge="end"
              >
                {showPassword.new ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <label className="mb-4"> Confirm New Password </label>
      <TextField
        fullWidth
        placeholder="Enter Password"
        type={showPassword.confirm ? "text" : "password"}
        variant="outlined"
        className="!mb-10"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => togglePasswordVisibility("confirm")}
                edge="end"
              >
                {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        className="!bg-[#ffe2d3] !text-[#ff6f00] py-2"
        onClick={handleChangePasswordClick}
      >
        Change Password
      </Button>

      {/* Success Modal */}
      <SuccessDialog
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        imageSrc="/images/approved.svg"
        message="Your password has been updated successfully!"
        buttonText="Continue"
      />
    </Box>
  );
};

export default ChangePasswordForm;
