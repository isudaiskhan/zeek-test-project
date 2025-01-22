"use client";
import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RenderRoles = ({ role }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center py-1 px-3 text-sm justify-between border-solid border border-[#EAEAEA] bg-[#F9F9F9] rounded-lg w-full md:w-1/5">
      <span className="font-medium">{role}</span>
      <IconButton
        aria-label="more"
        onClick={handleMenuClick}
        className="text-gray-600"
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit {role}</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete {role}</MenuItem>
      </Menu>
    </div>
  );
};

export default RenderRoles;
