import React, { useState } from "react";
import {
  Box,
  Card,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { MoreHoriz } from "@mui/icons-material";
import LoyaltyCards from "./LoyaltyCards";
import { CARD_STATUSES } from "@/enums/cards";
import { useDeleteCard } from "@/services/loyalty";
import { useInvalidateQuery } from "@/utils/hooks";
import { toast } from "sonner";
import ConfirmationDialog from "../Modals/ConfirmationDialog";

const LoyaltyCardsMain = ({
  id,
  type,
  status,
  createdAt,
  cardBackground,
  logo,
  textColor,
  backgroundCenterColor,
  centralImage,
  stampCount,
  activeStampImage,
  activeStampColor,
  bardCodeType,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [confirmationDialog, setConfirmationDialog] = useState(false);

  const { mutate: deleteCard } = useDeleteCard(id);

  const { invalidateQuery } = useInvalidateQuery();

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
    deleteCard(id, {
      onSuccess: () => {
        invalidateQuery(["get-cards"]);
        toast.success(`Card deleted successfully`);
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
    <Card
      sx={{
        direction: "column",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        padding: "10px",
        cursor: "pointer",
        position: "relative",
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
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#000000",
            }}
            // onClick={router.push("/studio/update-card-loyalty")}
          >
            Update
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#000000",
            }}
          >
            Deactivate
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#000000",
            }}
          >
            Download QR Code
          </MenuItem>
          <MenuItem
            sx={{ color: "#FF5B00" }}
            onClick={() => handleConfirmationDialog(id)}
          >
            Delete
          </MenuItem>
        </Menu>
      </div>
      <LoyaltyCards
        cardBackground={cardBackground}
        logo={logo}
        textColor={textColor}
        backgroundCenterColor={backgroundCenterColor}
        centralImage={centralImage}
        type={type}
        stampCount={stampCount}
        activeStampImage={activeStampImage}
        activeStampColor={activeStampColor}
        bardCodeType={bardCodeType}
      />
      <div className="flex flex-row justify-between items-center mt-4">
        <Typography
          sx={{
            color: "#000000",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          SATO Loyalty Card
        </Typography>
        <Box className="w-[93px] h-[20px] bg-[#C4E5FF] items-center justify-center rounded-md">
          <Typography
            sx={{
              color: "#005B8C",
              fontSize: "12px",
              fontWeight: 700,
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            {type}
          </Typography>
        </Box>
      </div>
      <div className="flex justify-start items-start pb-2">
        <Typography
          sx={{
            color: "#000000",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          204 Customers
        </Typography>
      </div>
      <div className="flex flex-row justify-between items-center py-2">
        <Typography
          sx={{
            color: "#73D3A1",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          <span className="bg-[#73D3A1] rounded-full w-2 h-2 inline-block mr-2"></span>{" "}
          {status === CARD_STATUSES.ACTIVE ? "Live" : "Inactive"}
        </Typography>
        <Typography
          sx={{
            color: "#A4A4A4",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          Created {dayjs(createdAt).format("DD/MM/YYYY hh:mm")}
        </Typography>
      </div>
      {confirmationDialog && (
        <ConfirmationDialog
          setDialog={setConfirmationDialog}
          title={`Are you sure to delete this Card?`}
          onConfirm={() => handleDelete(id)}
          confirmationBtnText="Delete"
          confirmationBtnColor="error"
        />
      )}
    </Card>
  );
};

export default LoyaltyCardsMain;
