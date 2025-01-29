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
  TablePagination,
  TableFooter,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import MailIcon from "@mui/icons-material/MailOutlineOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { FilterAlt } from "@mui/icons-material";
import SendNotification from "@/components/Modals/SendNotification/SendNotification";
import CrmTableRow from "@/components/TableRow/CrmTableRow/CrmTableRow";
import { Add } from "@mui/icons-material";
import { GoDatabase } from "react-icons/go";
import { RiMedalLine } from "react-icons/ri";
import { useGetCRMData } from "@/services/crm";
import Spinner from "@/components/Spinner/Spinner";

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data, isLoading, isError } = useGetCRMData(
    page + 1,
    rowsPerPage > 0 ? rowsPerPage : 0
  );

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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

  if (isError) {
    return <div>Error Loading Data....</div>;
  }

  return (
    <div className="p-4">
      <Box className="flex flex-wrap items-center justify-between p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h4" className="!font-bold !text-4xl">
            Customers
            <span className="text-[#B3B3B3] text-4xl ml-3 font-bold">
              {data?.totalCount ? data?.totalCount : 0}
            </span>
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
      {isLoading ? (
        <Spinner />
      ) : (
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
              {data?.data?.map((item, index) => (
                <CrmTableRow
                  key={item?._id}
                  index={index}
                  onSelect={handleRowSelect}
                  isSelected={selectedRows.includes(index)}
                  name={item?.user?.name}
                  email={item?.user?.email}
                  lastVisited={item?.lastVisit}
                  tier={item?.userTier}
                  points={item?.points}
                  avatar={item?.user?.image}
                />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  count={data?.totalCount ? data?.totalCount : 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={(event, newPage) => handleChangePage(newPage)}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  showFirstButton
                  showLastButton
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}

      {open && <SendNotification open={open} onClose={handleClose} />}
    </div>
  );
};

export default Crm;
