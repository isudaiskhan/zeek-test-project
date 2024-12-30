"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Menu,
  MenuItem,
  Checkbox,
  Divider,
  ListItemIcon,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import MailIcon from "@mui/icons-material/MailOutlineOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { FilterAlt } from "@mui/icons-material";
import SendNotification from "@/components/Modal/Notifications/SendNotification";
import CrmTableRow from "@/components/TableRow/CrmTableRow/CrmTableRow";
import { Add } from "@mui/icons-material";
import { GoDatabase } from "react-icons/go";
import { RiMedalLine } from "react-icons/ri";

const data = [
  {
    name: "Huzefa Dico",
    email: "huzefadico@thezeekcompany.com",
    lastVisited: "October 14, 2024",
    tier: "Platinum",
    points: "921 points",
    avatar: "/images/user.png",
  },
  {
    name: "Ziyad Mahomed",
    email: "ziyadmahomed@thezeekcompany.com",
    lastVisited: "October 27, 2024",
    tier: "Gold",
    points: "602 points",
    avatar: "/images/user.png",
  },
  {
    name: "Rashed Al Zaabi",
    email: "rashedalzaabi@thezeekcompany.com",
    lastVisited: "October 19, 2024",
    tier: "Silver",
    points: "345 points",
    avatar: "/images/user.png",
  },
  {
    name: "Bob Joe",
    email: "bobjoe@thezeekcompany.com",
    lastVisited: "October 14, 2024",
    tier: "Bronze",
    points: "90 points",
    avatar: "/images/user.png",
  },
  {
    name: "Sarah Thomas",
    email: "sarahthomas@thezeekcompany.com",
    lastVisited: "October 14, 2024",
    tier: "Platinum",
    points: "800 points",
    avatar: "/images/user.png",
  },
];

const TableHeadStyles = {
  fontSize: "12px",
  fontWeight: 500,
  color: "#ACACAC",
};

const menuItemStyles = {
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#FFDAC5",
  },
};

const badgeStyles = (color, bgColor) => ({
  fontWeight: "bold",
  color,
  backgroundColor: bgColor,
  padding: "4px 8px",
  borderRadius: 1,
  fontSize: "14px",
  textAlign: "center",
  width: "40%",
});

const filters = [
  { label: "Platinum", color: "#000", bgColor: "#ECECEC" },
  { label: "Gold", color: "#FFC107", bgColor: "#FFF8E1" },
  { label: "Silver", color: "#B0BEC5", bgColor: "#ECEFF1" },
  { label: "Bronze", color: "#6D4C41", bgColor: "#EFEBE9" },
];

const Crm = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <div className="p-4">
      <Box className="flex flex-wrap items-center justify-between p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h5" fontWeight="bold" fontSize="40px">
            Customers
          </Typography>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <CustomButton
            text="Clear Filters"
            bgColor="#FFFFFF"
            textColor="#787878"
          />
          <CustomButton
            icon={<FilterAlt />}
            bgColor="#FFFFFF"
            textColor="#787878"
            onClick={handleMenuOpen}
          />
          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleMenuClose}
            slotProps={{
              paper: { sx: { width: 300, padding: 1, borderRadius: 2 } },
            }}
          >
            <Box>
              {filters.map((item) => (
                <React.Fragment key={item.label}>
                  <MenuItem
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox />
                    <Typography sx={badgeStyles(item.color, item.bgColor)}>
                      {item.label}
                    </Typography>
                  </MenuItem>
                  {item.label === "Platinum" && <Divider />}
                </React.Fragment>
              ))}
              <MenuItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Checkbox />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#FF5722",
                    backgroundColor: "#FFDAC5",
                    padding: "4px 8px",
                    borderRadius: 1,
                    textAlign: "center",
                    width: "80%",
                    fontSize: "14px",
                  }}
                >
                  30 days since last visit
                </Typography>
              </MenuItem>
              <MenuItem sx={menuItemStyles}>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  Add segment
                </Typography>
              </MenuItem>
              <Divider sx={{ my: 1 }} />
              <MenuItem sx={menuItemStyles}>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  Apply Filter
                </Typography>
              </MenuItem>
            </Box>
          </Menu>
          <CustomButton
            text="Send Notification"
            bgColor="#FFDAC5"
            textColor="#787878"
            onClick={handleOpen}
          />
        </div>
      </Box>
      <TableContainer>
        <Table size="medium">
          <TableHead>
            <TableRow sx={{ "& td, & th": { border: 0 } }}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <AccountCircleIcon
                    sx={{ marginRight: 1, color: "#ACACAC" }}
                    fontSize="small"
                    color="primary"
                  />
                  <Typography sx={TableHeadStyles}>Name</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <MailIcon
                    sx={{ marginRight: 1, color: "#ACACAC" }}
                    fontSize="small"
                  />
                  <Typography sx={TableHeadStyles}>Email</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <AccessTimeIcon
                    sx={{ marginRight: 1, color: "#ACACAC" }}
                    fontSize="small"
                  />
                  <Typography sx={TableHeadStyles}>Last Visited</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <RiMedalLine
                    style={{
                      marginRight: "8px",
                      color: "#ACACAC",
                      fontSize: "20px",
                    }}
                  />
                  <Typography sx={TableHeadStyles}>Tier</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <GoDatabase
                    style={{
                      marginRight: "8px",
                      color: "#ACACAC",
                      fontSize: "20px",
                    }}
                  />
                  <Typography sx={TableHeadStyles}>Points</Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow sx={{ "& td, & th": { border: 0 } }}>
              <TableCell
                colSpan={5}
                sx={{ padding: "4px 0" }}
                className="bg-gray-100"
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <CrmTableRow
                key={index}
                index={index}
                onSelect={handleRowSelect}
                isSelected={selectedRows.includes(index)}
                name={row.name}
                email={row.email}
                lastVisited={row.lastVisited}
                tier={row.tier}
                points={row.points}
                avatar={row.avatar}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && <SendNotification open={open} onClose={handleClose} />}
    </div>
  );
};

export default Crm;
