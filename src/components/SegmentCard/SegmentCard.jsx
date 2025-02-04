import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { BUSINESS_TIERS } from "@/enums/tiers";
import dayjs from "dayjs";
import { useDeleteSegments } from "@/services/segments";
import { useInvalidateQuery } from "@/utils/hooks";
import { toast } from "sonner";
import ConfirmationDialog from "../Modals/ConfirmationDialog";

const SegmentCard = ({
  id,
  title,
  tier,
  timeLastVisit,
  visitFrequency,
  createdAt,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [confirmationDialog, setConfirmationDialog] = useState(false);

  const { invalidateQuery } = useInvalidateQuery();

  const { mutate: deleteSegment } = useDeleteSegments(id);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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

  const handleConfirmationDialog = () => {
    setConfirmationDialog(true);
    setAnchorEl(null);
  };

  const handleDelete = async (id) => {
    deleteSegment(id, {
      onSuccess: () => {
        invalidateQuery(["get-segments"]);
        toast.success(`Segment deleted successfully`);
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
    <div className="w-full">
      <Card className="!shadow-md !shadow-gray-400 !transition-shadow">
        <CardContent>
          <div className="flex justify-between items-center">
            <Typography
              variant="subtitle1"
              className="!font-bold !text-sm !font-sans !text-[#696969]"
            >
              tag:
              <span
                className="px-2 ms-4 py-1 rounded-md capitalize"
                style={{
                  ...getTierStyle(tier),
                }}
              >
                {tier}
              </span>
            </Typography>

            <IconButton
              className="!text-gray-500 hover:!text-black"
              aria-label="more options"
              onClick={handleMenuOpen}
            >
              <MoreHorizIcon />
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
                sx={{ color: "#FF5B00" }}
                onClick={() => handleConfirmationDialog(id)}
              >
                Delete
              </MenuItem>
            </Menu>
          </div>
          <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
            TBD: people
          </Typography>
          <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
            Created: {dayjs(createdAt).format("MMMM DD, YYYY")}
          </Typography>
          <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
            Campaigns done: TBD
          </Typography>
        </CardContent>
      </Card>
      {confirmationDialog && (
        <ConfirmationDialog
          setDialog={setConfirmationDialog}
          title={`Are you sure to delete ${title} segment ?`}
          onConfirm={() => handleDelete(id)}
          confirmationBtnText="Delete"
          confirmationBtnColor="error"
        />
      )}
    </div>
  );
};

export default SegmentCard;
