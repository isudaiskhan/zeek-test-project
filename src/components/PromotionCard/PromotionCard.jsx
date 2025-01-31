import { useDeletePromotion } from "@/services/promotions";
import { useInvalidateQuery } from "@/utils/hooks";
import { fileBaseURL } from "@/utils/urls";
import { LocationOnOutlined } from "@mui/icons-material";
import { AccessTimeOutlined } from "@mui/icons-material";
import { RepeatOutlined } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import {
  Card,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";
import ConfirmationDialog from "../Modals/ConfirmationDialog";

const PromotionCard = ({
  heading,
  image,
  points,
  coinType,
  expiry,
  branch,
  createdAt,
  maxLimitUse,
  promotionType,
  id,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [confirmationDialog, setConfirmationDialog] = useState(false);

  const { invalidateQuery } = useInvalidateQuery();
  const { mutate: deletePromotion } = useDeletePromotion(id);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleConfirmationDialog = () => {
    setConfirmationDialog(true);
    setAnchorEl(null);
  };

  const handleDelete = async (id) => {
    deletePromotion(id, {
      onSuccess: () => {
        invalidateQuery(["get-promotions"]);
        toast.success(`Promotion deleted successfully`);
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
        sx={{
          direction: "column",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "8px",
          padding: "24px",
          minHeight: "580px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="flex justify-end items-end mb-2">
          <IconButton onClick={handleMenuOpen}>
            <MoreHoriz />
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
              Deactivate
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "14px", fontWeight: 700, color: "#000000" }}
            >
              Download QR Code
            </MenuItem>
            <MenuItem
              sx={{ color: "#FF5B00" }}
              onClick={() => handleConfirmationDialog({ id, heading })}
            >
              Delete
            </MenuItem>
          </Menu>
        </div>
        <div className="flex justify-start items-start mb-2">
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            {heading}
          </Typography>
        </div>
        <div className="flex justify-center items-center mt-2 mb-2 w-full p-2">
          <Image
            src={`${fileBaseURL}${image}`}
            alt={heading}
            width={381}
            height={228}
            loader={() => `${fileBaseURL}${image}`}
            layout="responsive"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col flex-start items-start gap-2 mb-2">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#838383",
            }}
          >
            POINTS: {points ? points : "N/A"}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#838383",
              textTransform: "uppercase",
            }}
          >
            COIN TYPE: {coinType ? coinType : "N/A"}
          </Typography>
        </div>
        <Divider sx={{ my: 2 }} />
        <div className="flex flex-col justify-start items-start gap-2">
          <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
            Rules:
          </Typography>
          <div className="flex flex-row gap-2">
            <AccessTimeOutlined fontSize="small" sx={{ color: "#838383" }} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#838383",
              }}
            >
              Expiry: {dayjs(expiry).format("DD MMM YYYY")}
            </Typography>
          </div>
          <div className="flex flex-row gap-2">
            <LocationOnOutlined fontSize="small" sx={{ color: "#838383" }} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#838383",
              }}
            >
              Branch: <span className="text-[12px]">{branch}</span>
            </Typography>
          </div>
          <div className="flex flex-row gap-2">
            <RepeatOutlined fontSize="small" sx={{ color: "#838383" }} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#838383",
                textTransform: "capitalize",
              }}
            >
              Uses: {maxLimitUse}
            </Typography>
          </div>
        </div>
        <div className="flex justify-end items-end mt-2">
          <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
            Created {dayjs(createdAt).format("YYYY/MM/DD H:mm")}
          </Typography>
        </div>
      </Card>
      {confirmationDialog && (
        <ConfirmationDialog
          setDialog={setConfirmationDialog}
          title={`Are you sure to delete ${heading} ${promotionType} ?`}
          onConfirm={() => handleDelete(id)}
          confirmationBtnText="Delete"
          confirmationBtnColor="error"
        />
      )}
    </>
  );
};

export default PromotionCard;
