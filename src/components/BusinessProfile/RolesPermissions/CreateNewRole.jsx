import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import SuccessDialog from "@/components/Modals/SuccessModal";
import CustomTextField from "@/components/CustomTextField/CustomTextField";

const CreateNewRole = ({ onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    customerRelationshipManager: "",
    campaigns: "",
    analytics: "",
    reviews: "",
    branches: "",
    employees: "",
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
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      <Box>
        <Typography
          variant="subtitle1"
          className="!font-inter !mb-10 !text-2xl"
        >
          Create New Role
        </Typography>
        <Typography variant="subtitle1" className="!font-inter !mb-2 !text-lg">
          Role Name
        </Typography>
        <Typography className="!font-inter text-[#838383] !mb-6 !text-sm">
          Name the new role
        </Typography>
        <CustomTextField
          haveBorderRadius
          borderRadius="10px"
          placeholder="ie. marketer"
        />

        <div className="flex items-center mt-8 justify-between">
          <Typography variant="h6" className="!text-lg !mb-3">
            Loyalty Program Management
          </Typography>
          <Switch color="primary" />
        </div>
        <List
          className="mt-2"
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": {
              display: "list-item",
              padding: 0,
              color: "#838383",
            },
            "& .MuiListItemText-root": {
              margin: 0,
            },
          }}
        >
          <ListItem disablePadding>
            <ListItemText
              className="!text-[#838383] !mb-2 !font-inter !text-sm"
              primary="Ability to design and launch new loyalty programs"
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              className="!text-[#838383] !mb-2 !font-inter !text-sm"
              primary="Modify loyalty card settings, such as rewards or point structures"
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              className="!text-[#838383] !mb-2 !font-inter !text-sm"
              primary="Access analytics and details of existing loyalty cards"
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              className="!text-[#838383] !mb-2 !font-inter !text-sm"
              primary="Add, edit, or remove stamps from customer profiles"
            />
          </ListItem>
        </List>
      </Box>

      <Box className="space-y-6 mt-6">
        {/* Partner App Permissions */}
        <Box>
          {/* Dashboard */}
          <div className="mt-8">
            <Typography
              variant="subtitle1"
              className="!mb-2 !text-lg !font-inter"
            >
              Customer Relationship Manager
            </Typography>
            <Typography
              variant="body2"
              className="text-[#838383] !mb-6 !text-sm"
            >
              Allow full access, branch specific access, or no access to the CRM
            </Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select...</InputLabel>
              <Select
                labelId="customerRelationshipManager-select-label"
                label="Select role..."
                value={selectedOptions.customerRelationshipManager}
                onChange={handleSelectChange("customerRelationshipManager")}
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
              Campaigns
            </Typography>
            <Typography
              variant="body2"
              className="text-[#838383] !mb-6 !text-sm"
            >
              Allow full access, branch specific access, or no access to the
              campaigns
            </Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select...</InputLabel>
              <Select
                labelId="campaigns-select-label"
                label="Select role..."
                value={selectedOptions.campaigns}
                onChange={handleSelectChange("campaigns")}
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
              Analytics
            </Typography>
            <Typography
              variant="body2"
              className="text-[#838383] !mb-6 !text-sm"
            >
              Allow full access, branch specific access, or no access to the
              analytics
            </Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select...</InputLabel>
              <Select
                labelId="analytics-select-label"
                label="Select role..."
                value={selectedOptions.analytics}
                onChange={handleSelectChange("analytics")}
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
              Reviews
            </Typography>
            <Typography
              variant="body2"
              className="text-[#838383] !mb-6 !text-sm"
            >
              Allow full access, branch specific access, or no access to the
              reviews
            </Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select...</InputLabel>
              <Select
                labelId="reviews-select-label"
                label="Select role..."
                value={selectedOptions.reviews}
                onChange={handleSelectChange("reviews")}
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
              Branches
            </Typography>
            <Typography
              variant="body2"
              className="text-[#838383] !mb-6 !text-sm"
            >
              Allow full access or no access to the branches
            </Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select...</InputLabel>
              <Select
                labelId="branches-select-label"
                label="Select role..."
                value={selectedOptions.branches}
                onChange={handleSelectChange("branches")}
                className="!font-inter max-w-80"
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Employees */}
          <div className="mt-8">
            <Typography
              variant="subtitle1"
              className="!mb-2 !text-lg !font-inter"
            >
              Employees
            </Typography>
            <Typography
              variant="body2"
              className="text-[#838383] !mb-6 !text-sm"
            >
              Allow full access, branch specific access, or no access to the
              employees
            </Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select...</InputLabel>
              <Select
                labelId="employees-select-label"
                label="Select role..."
                value={selectedOptions.employees}
                onChange={handleSelectChange("employees")}
                className="!font-inter max-w-80"
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex justify-center flex-wrap gap-6">
            <Button
              onClick={onClose}
              className="!bg-[#F4F4F4] !text-[#000000] !py-2 !px-8 !mt-10 !textlg"
            >
              Cancel
            </Button>

            <Button
              className="!bg-[#ffe2d3] !text-[#ff6f00] !py-2 !px-10 !mt-10 !textlg"
              onClick={handleChangePasswordClick}
            >
              Create Role
            </Button>

            {/* Success Modal */}
            <SuccessDialog
              open={successModalOpen}
              onClose={handleCloseSuccessModal}
              imageSrc="/images/approved.svg"
              message="Your new role has been added successfully!"
              buttonText="Continue"
            />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default CreateNewRole;
