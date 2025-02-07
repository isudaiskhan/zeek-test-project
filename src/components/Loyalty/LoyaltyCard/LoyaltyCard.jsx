/* eslint-disable @next/next/no-img-element */
import { CARD_STATUSES } from "@/enums/cards";
import { fileBaseURL } from "@/utils/urls";
import { MoreHoriz } from "@mui/icons-material";
import {
  Box,
  Card,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";

const LoyaltyCard = ({
  onClick,
  expiry,
  status,
  logoImage,
  createdAt,
  cardNumber,
  colors,
  type,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      sx={{
        direction: "column",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        padding: "24px",
        cursor: "pointer",
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
            onClick={onClick}
          >
            Update
          </MenuItem>
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
          <MenuItem sx={{ color: "#FF5B00" }}>Delete</MenuItem>
        </Menu>
      </div>
      <div
        className="flex flex-col p-4 py-2 justify-center rounded-xl shadow-lg h-[200px]"
        style={{
          backgroundColor: colors?.[0],
          backgroundImage: `linear-gradient(to left bottom, ${colors?.[0]},${colors?.[1]}, ${colors?.[2]})`,
        }}
      >
        <div className="flex justify-start items-start">
          <Typography
            sx={{
              color: "#000000",
              fontSize: "28px",
              fontWeight: 900,
              textAlign: "start",
            }}
          >
            ZEEK.
          </Typography>
        </div>
        <div className="flex justify-end items-end">
          <img
            src={`${fileBaseURL}${logoImage}`}
            alt="logo"
            width="128px"
            height="58px"
          />
        </div>
        <div className="flex flex-col justify-start items-start py-1">
          <Typography
            sx={{
              color: "#000000",
              fontSize: "11px",
              fontWeight: 400,
            }}
          >
            CARD NO.
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {cardNumber}
          </Typography>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center py-6">
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
      <div className="flex justify-start items-start py-2">
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
    </Card>
  );
};

export default LoyaltyCard;
