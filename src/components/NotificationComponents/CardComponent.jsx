import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import dayjs from "dayjs";
import { NOTIFICATION_STATUS } from "@/enums/status";
import { BUSINESS_TIERS } from "@/enums/tiers";
import {
  updateNotification,
  useDeleteNotification,
} from "@/services/notifications";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { toast } from "sonner";
import ConfirmationDialog from "../Modals/ConfirmationDialog";

const CardComponent = ({ id, title, status, messages, releaseTimes, tier }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const [confirmDeactivate, setConfirmDeactivate] = useState(false);

  const { mutate: deleteNotification } = useDeleteNotification(id);
  const { invalidateQuery } = useInvalidateQuery();
  const { submitHandler } = useSubmitHandler();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDeactivateNotification = async (id) => {
    submitHandler({
      successMsg: "Notification deactivated successfully",
      onSubmit: async () => {
        updateNotification(id, { status: NOTIFICATION_STATUS.IN_ACTIVE });
        invalidateQuery(["get-notifications"]);
      },
      onFinally: () => {
        setAnchorEl(null);
      },
    });
  };

  const getTierStyle = (tier) => {
    switch (tier) {
      case BUSINESS_TIERS.PLATINUM:
        return { backgroundColor: "#0000004D", color: "#222222" };
      case BUSINESS_TIERS.GOLD:
        return { backgroundColor: "#FFD23340", color: "#FFC700" };
      case BUSINESS_TIERS.SILVER:
        return { backgroundColor: "#ECECEC", color: "#898989" };
      case BUSINESS_TIERS.BRONZE:
        return { backgroundColor: "#BE8E5E40", color: "#86684A" };
      default:
        return {};
    }
  };

  const borderColor =
    status === NOTIFICATION_STATUS.ACTIVE
      ? "border-[#28EA84]"
      : status === NOTIFICATION_STATUS.IN_ACTIVE
      ? "border-[#FF7171]"
      : "border-[#696969]";

  const handleConfirmationDialog = () => {
    setConfirmationDialog(true);
    setAnchorEl(null);
  };

  const handleConfirmDeactivate = () => {
    setConfirmDeactivate(true);
    setAnchorEl(null);
  };

  const handleDelete = async (id) => {
    deleteNotification(id, {
      onSuccess: () => {
        invalidateQuery(["get-notifications"]);
        toast.success(`Notification deleted successfully`);
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`);
      },
      onSettled: () => {
        setConfirmationDialog(false);
      },
    });
  };

  return (
    <>
      <Card
        key={id}
        className={`!w-[375px] !h-[309px] border-b-4 border-0 border-solid rounded-md shadow-md hover:shadow-lg transition-all ${borderColor}`}
      >
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <Typography
              variant="h5"
              className="text-[#696969] !text-xl !font-sans !font-bold"
            >
              {title}
            </Typography>
            <IconButton onClick={handleMenuOpen}>
              <MoreHorizIcon className="text-gray-600 cursor-pointer" />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                "& .MuiMenu-list": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}
            >
              <MenuItem
                sx={{ fontSize: "14px", fontWeight: 700, color: "#000000" }}
              >
                Move to Drafts
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "14px", fontWeight: 700, color: "#000000" }}
                onClick={() => handleConfirmDeactivate(id)}
              >
                Deactivate
              </MenuItem>
              <MenuItem
                sx={{ color: "#FF5B00" }}
                onClick={() => handleConfirmationDialog(id)}
              >
                Delete
              </MenuItem>
            </Menu>
          </div>

          <Typography
            variant="body2"
            className="!text-xs !text-[#696969] !px-2 !font-bold !font-sans"
          >
            Messages
          </Typography>
          <div className="space-y-2 mt-2">
            {/* {messages.map((message, idx) => ( */}
            <div
              // key={idx}
              className="!text-xs !text-[#696969] !font-bold !font-sans"
            >
              <ul className="flex">
                <li className="text-xl font-bold text-[#FFDAC5]">
                  <span className="text-[10px] text-[#696969]">{messages}</span>
                </li>
              </ul>
            </div>
            {/* ))} */}
          </div>

          {/* Message Release Times Section */}
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <Typography
                variant="subtitle2"
                className="!mt-4 !mb-1 !font-sans !font-bold !text-xs text-[#696969]"
              >
                Message release times
              </Typography>
            </div>

            <div className="flex flex-row justify-between items-end">
              <ol className="ps-2 text-xs font-sans font-bold text-[#696969] space-y-1">
                {releaseTimes.map((time, idx) => (
                  <li key={idx}>
                    {dayjs(time).format("ddd DD, YYYY hh:mm A")}
                  </li>
                ))}
              </ol>

              <div className="flex flex-col justify-end items-end mb-2">
                <Button
                  variant="outlined"
                  color="default"
                  className="!text-[#696969] !font-sans !font-bold !text-sm !rounded-md !py-1 !px-2 !border-none"
                >
                  Segment
                </Button>
                <div className="flex justify-start mt-2">
                  <Button
                    className="!py-0 !px-3 !font-bold !font-sans !rounded-md "
                    sx={{
                      ...getTierStyle(tier),
                      textTransform: "capitalize",
                    }}
                    variant="outline"
                  >
                    {tier}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {confirmationDialog && (
        <ConfirmationDialog
          setDialog={setConfirmationDialog}
          title={`Are you sure to delete ${title} notification ?`}
          onConfirm={() => handleDelete(id)}
          confirmationBtnText="Delete"
          confirmationBtnColor="error"
        />
      )}
      {confirmDeactivate && (
        <ConfirmationDialog
          setDialog={setConfirmDeactivate}
          title={`Are you sure to deactivate ${title} notification ?`}
          onConfirm={() => handleDeactivateNotification(id)}
          confirmationBtnText="Deactivate"
          confirmationBtnColor="error"
        />
      )}
    </>
  );
};

export default CardComponent;
