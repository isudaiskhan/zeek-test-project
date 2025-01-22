"use client";
import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateNewRole from "./CreateNewRole";
import PartnerAppPermissions from "./PartnerAppPermissions";
import AdminPanelPermissions from "./AdminPanelPermissions";
import RenderRoles from "./RenderRoles";
import { ROLES } from "@/enums/business-profile";

const RolesAndPermissions = () => {
  const [activeTab, setActiveTab] = useState("adminpanel");
  const [adminPanelRole, setAdminPanelRole] = useState("");
  const [partnerAppRole, setPartnerAppRole] = useState("");
  const [showCreateNewRole, setShowCreateNewRole] = useState(false);

  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  const handleAdminPanelRoleChange = (event) => {
    setAdminPanelRole(event.target.value);
  };

  const handlePartnerAppRoleChange = (event) => {
    setPartnerAppRole(event.target.value);
  };

  const toggleCreateNewRole = () => {
    setShowCreateNewRole(!showCreateNewRole);
  };

  return (
    <div className="p-8 mx-auto">
      {!showCreateNewRole && (
        <div className="flex justify-between items-center">
          <Typography variant="h6" className="!text-2xl !font-inter">
            Roles and Permissions
          </Typography>
          <IconButton
            onClick={toggleCreateNewRole}
            className="!bg-[#FFECE1] !p-1 !hover:bg-orange-200 !text-[#FF762A] !border !border-[#FFE0CE] !border-solid !rounded-xl"
          >
            <AddIcon className="!text-4xl" />
          </IconButton>
        </div>
      )}

      {showCreateNewRole && (
        <CreateNewRole onClose={() => setShowCreateNewRole(false)} />
      )}

      {!showCreateNewRole && (
        <>
          <div>
            <Typography
              variant="subtitle1"
              className="!py-6 !mt-8 font-inter !text-lg"
            >
              All Created Roles
            </Typography>
            <div className="flex flex-wrap gap-6">
              {Object.values(ROLES).map((role, index) => (
                <RenderRoles key={index} role={role} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Typography
              variant="subtitle1"
              className="!mb-2 font-inter !text-lg"
            >
              Choose Permission Area
            </Typography>
            <Typography
              variant="body2"
              className="text-[#838383] !text-sm !font-inter"
            >
              Choose where you would like to make permission changes.
            </Typography>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="none"
              className="!mt-5"
              sx={{
                "& .MuiTab-root": {
                  border: "1px solid #E7E7E7",
                  backgroundColor: "#F9F9F9",
                },
                "& .Mui-selected": {
                  color: "#E65300",
                  backgroundColor: "#FFECE1",
                },
              }}
            >
              <Tab
                className="!capitalize !font-inter"
                label="Admin Panel"
                value="adminpanel"
              />
              <Tab
                className="!capitalize !font-inter"
                label="Partner App"
                value="partnerapp"
              />
            </Tabs>

            {activeTab === "adminpanel" && (
              <div className="mt-12">
                <Typography variant="subtitle1" className="!mb-2 !text-lg">
                  Edit role permissions
                </Typography>
                <Typography
                  variant="body2"
                  className="text-[#838383] !mb-4 !text-sm !font-inter"
                >
                  Select role to edit permissions:
                </Typography>
                <FormControl fullWidth variant="outlined" className="mt-4">
                  <InputLabel>Select...</InputLabel>
                  <Select
                    value={adminPanelRole}
                    onChange={handleAdminPanelRoleChange}
                    label="Select role..."
                    className="max-w-80"
                  >
                    <MenuItem value="Manager">Manager</MenuItem>
                  </Select>
                </FormControl>
                {adminPanelRole === "Manager" && <AdminPanelPermissions />}
              </div>
            )}

            {activeTab === "partnerapp" && (
              <div className="mt-8">
                <Typography variant="subtitle1" className="!mb-2 !text-lg">
                  Edit role permissions
                </Typography>
                <Typography
                  variant="body2"
                  className="text-[#838383] !mb-4 !text-sm !font-inter"
                >
                  Select role to edit permissions:
                </Typography>
                <FormControl fullWidth variant="outlined" className="mt-4">
                  <InputLabel>Select...</InputLabel>
                  <Select
                    value={partnerAppRole}
                    onChange={handlePartnerAppRoleChange}
                    label="Select role..."
                    className="max-w-80"
                  >
                    <MenuItem value="Manager">Manager</MenuItem>
                  </Select>
                </FormControl>
                {partnerAppRole === "Manager" && <PartnerAppPermissions />}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RolesAndPermissions;
