"use client";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import React, { useState } from "react";
import { AccountCircleOutlined } from "@mui/icons-material";
import { MailOutlineOutlined } from "@mui/icons-material";
import { PiGitBranch } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa6";
import EmployeeTableRow from "@/components/TableRow/EmployeeTableRow/EmployeeTableRow";
import EmployeeFilters from "@/components/EmployeeFilters/EmployeeFilters";
import EmployeeModal from "@/components/Modals/EmployeeModal/EmployeeModal";

const data = [
  {
    id: 1,
    name: "Huzefa Dico",
    email: "huzefadico@thezeekcompany.com",
    branch: "Khalifa City A",
    role: "Manager",
    avatar: "/images/user.png",
  },
  {
    id: 2,
    name: "Ziyad Mahomed",
    email: "ziyadmahomed@thezeekcompany.com",
    branch: "Khalifa City A",
    role: "Employee",
    avatar: "/images/user.png",
  },
  {
    id: 3,
    name: "Rashed Al Zaabi",
    email: "rashedalzaabi@thezeekcompany.com",
    branch: "Khalifa City A",
    role: "Employee",
    avatar: "/images/user.png",
  },
  {
    id: 4,
    name: "Bob Joe",
    email: "bobjoe@thezeekcompany.com",
    branch: "Khalifa City A",
    role: "Employee",
    avatar: "/images/user.png",
  },
  {
    id: 5,
    name: "Sarah Thomas",
    email: "sarahthomas@thezeekcompany.com",
    branch: "Khalifa City A",
    role: "Employee",
    avatar: "/images/user.png",
  },
];

const roleFilters = [
  { id: 1, label: "Manager" },
  { id: 2, label: "Employee" },
];

const branchFilters = [
  { id: 1, label: "Khalifa City A" },
  { id: 2, label: "Jumeira Beach Road" },
  { id: 3, label: "Downtown" },
];

const TableHeadStyles = {
  fontSize: "12px",
  fontWeight: 500,
  color: "#ACACAC",
};

const Employees = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);

  const handleOpenEmployeeModal = () => {
    setOpenEmployeeModal(true);
  };

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
            Employees
          </Typography>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <CustomButton
            text="Create New Role"
            bgColor="#FFFFFF"
            textColor="#787878"
          />
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
          <EmployeeFilters
            anchorEl={anchorEl}
            isOpen={isOpen}
            handleMenuClose={handleMenuClose}
            roleFilters={roleFilters}
            branchFilters={branchFilters}
          />
          <CustomButton
            text="Add Employee"
            bgColor="#FFDAC5"
            textColor="#787878"
            onClick={handleOpenEmployeeModal}
          />
        </div>
      </Box>
      <TableContainer>
        <Table size="medium">
          <TableHead>
            <TableRow sx={{ "& td, & th": { border: 0 } }}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <AccountCircleOutlined
                    sx={{ marginRight: 1, color: "#ACACAC" }}
                    fontSize="small"
                    color="primary"
                  />
                  <Typography sx={TableHeadStyles}>Name</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <MailOutlineOutlined
                    sx={{ marginRight: 1, color: "#ACACAC" }}
                    fontSize="small"
                  />
                  <Typography sx={TableHeadStyles}>Email</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <PiGitBranch
                    style={{
                      marginRight: "8px",
                      color: "#ACACAC",
                      fontSize: "20px",
                    }}
                  />
                  <Typography sx={TableHeadStyles}>Branch</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <FaRegAddressCard
                    style={{
                      marginRight: "8px",
                      color: "#ACACAC",
                      fontSize: "20px",
                    }}
                  />
                  <Typography sx={TableHeadStyles}>Role</Typography>
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
            {data.map((item) => (
              <EmployeeTableRow
                key={item.id}
                name={item.name}
                email={item.email}
                branch={item.branch}
                role={item.role}
                id={item.id}
                onSelect={handleRowSelect}
                isSelected={selectedRows.includes(item.id)}
                avatar={item.avatar}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {openEmployeeModal && (
        <EmployeeModal
          open={openEmployeeModal}
          onClose={() => setOpenEmployeeModal(false)}
        />
      )}
    </div>
  );
};

export default Employees;
