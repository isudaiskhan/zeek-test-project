"use client";
import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ConfirmationDialog from "@/components/Modals/ConfirmationDialog";
import { deleteRole } from "@/services/business-profile/roles-permissions";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";

const RenderRoles = ({ role, id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [confirmationDialog, setConfirmationDialog] = useState(false);

  const { submitHandler } = useSubmitHandler();

  const { invalidateQuery } = useInvalidateQuery();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const openConfirmationDialog = () => {
    setConfirmationDialog(true);
    handleMenuClose();
  };

  const handleDelete = async (id) => {
    submitHandler({
      successMsg: "Your role has been deleted successfully!",
      onSubmit: async () => {
        await deleteRole(id);
        invalidateQuery(["get-roles"]);
        handleMenuClose();
      },
      onFinally: () => {
        setConfirmationDialog(false);
      },
    });
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
        <MenuItem onClick={openConfirmationDialog}>Delete {role}</MenuItem>
      </Menu>
      {confirmationDialog && (
        <ConfirmationDialog
          setDialog={setConfirmationDialog}
          title={`Are you sure to delete ${role} ?`}
          onConfirm={() => handleDelete(id)}
          confirmationBtnText="Delete"
          confirmationBtnColor="error"
        />
      )}
    </div>
  );
};

export default RenderRoles;
