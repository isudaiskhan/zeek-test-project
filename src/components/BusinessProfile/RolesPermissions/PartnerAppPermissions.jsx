import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import SuccessDialog from "@/components/Modals/SuccessModal";

const PartnerAppPermissions = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    dashboard: "",
    rewards: "",
    cards: "",
    currentPlan: "",
    subscriptions: "",
  });
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleSelectChange = (field) => (event) => {
    setSelectedOptions({
      ...selectedOptions,
      [field]: event.target.value,
    });
  };

  const handleChangePasswordClick = () => {
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <Box className="space-y-6 mt-6">
      {/* Partner App Permissions */}
      <Box>
        {/* Dashboard */}
        <div className="mt-8">
          <Typography
            variant="subtitle1"
            className="!mb-2 !text-lg !font-inter"
          >
            Dashboard
          </Typography>
          <Typography variant="body2" className="text-[#838383] !mb-6 !text-sm">
            Allow full access or no access to the dashboard tab.
          </Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Select...</InputLabel>
            <Select
              labelId="dashboard-select-label"
              label="Select role..."
              value={selectedOptions.dashboard}
              onChange={handleSelectChange("dashboard")}
              className="!font-inter max-w-80"
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Rewards */}
        <div className="mt-8">
          <Typography
            variant="subtitle1"
            className="!mb-2 !text-lg !font-inter"
          >
            Rewards
          </Typography>
          <Typography variant="body2" className="text-[#838383] !mb-6 !text-sm">
            Allow full access or no access to the rewards tab.
          </Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Select...</InputLabel>
            <Select
              labelId="rewards-select-label"
              label="Select role..."
              value={selectedOptions.rewards}
              onChange={handleSelectChange("rewards")}
              className="!font-inter max-w-80"
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Cards */}
        <div className="mt-8">
          <Typography
            variant="subtitle1"
            className="!mb-2 !text-lg !font-inter"
          >
            Cards
          </Typography>
          <Typography variant="body2" className="text-[#838383] !mb-6 !text-sm">
            Allow full access or no access to the cards tab.
          </Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Select...</InputLabel>
            <Select
              labelId="cards-select-label"
              label="Select role..."
              value={selectedOptions.cards}
              onChange={handleSelectChange("cards")}
              className="!font-inter max-w-80"
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Current Plan */}
        <div className="mt-8">
          <Typography
            variant="subtitle1"
            className="!mb-2 !text-lg !font-inter"
          >
            Current Plan
          </Typography>
          <Typography variant="body2" className="text-[#838383] !mb-6 !text-sm">
            Choose whether your current plan is visible or not.
          </Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Select...</InputLabel>
            <Select
              labelId="current-plan-select-label"
              label="Select role..."
              value={selectedOptions.currentPlan}
              onChange={handleSelectChange("currentPlan")}
              className="!font-inter max-w-80"
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Subscriptions */}
        <div className="mt-8">
          <Typography
            variant="subtitle1"
            className="!mb-2 !text-lg !font-inter"
          >
            Subscriptions and Payment History
          </Typography>
          <Typography variant="body2" className="text-[#838383] !mb-6 !text-sm">
            Allow access to subscriptions and payment history. tab.
          </Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Select...</InputLabel>
            <Select
              labelId="subscriptions-select-label"
              label="Select role..."
              value={selectedOptions.subscriptions}
              onChange={handleSelectChange("subscriptions")}
              className="!font-inter max-w-80"
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex justify-center">
          <Button
            className="!bg-[#ffe2d3] !text-[#ff6f00] !py-2 !px-8 !mt-10 !textlg"
            onClick={handleChangePasswordClick}
          >
            Update Permissions
          </Button>

          {/* Success Modal */}
          <SuccessDialog
            open={successModalOpen}
            onClose={handleCloseSuccessModal}
            imageSrc="/images/approved.svg"
            message="Your permissions have been updated successfully!"
            buttonText="Continue"
          />
        </div>
      </Box>
    </Box>
  );
};

export default PartnerAppPermissions;
