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
import Image from "next/image";
import React, { useState } from "react";

const PromotionCard = ({
  heading,
  image,
  points,
  coinType,
  expiry,
  branch,
  offerType,
  createdAt,
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
        // width: "444px",
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
        >
          <MenuItem sx={{ color: "#FF5B00" }}>Delete</MenuItem>
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
          src={image}
          alt="Promotion Image"
          width={381}
          height={228}
          loader={() => image}
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
          POINTS: {points}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#838383",
          }}
        >
          COIN TYPE: {coinType}
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
            Expiry: {expiry}
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
            Branch: {branch}
          </Typography>
        </div>
        <div className="flex flex-row gap-2">
          <RepeatOutlined fontSize="small" sx={{ color: "#838383" }} />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#838383",
            }}
          >
            {offerType}
          </Typography>
        </div>
      </div>
      <div className="flex justify-end items-end mt-2">
        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
          {createdAt}
        </Typography>
      </div>
    </Card>
  );
};

export default PromotionCard;
