"use client";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import BranchesTableRow from "@/components/TableRow/BranchesTableRow/BranchesTableRow";
import { AccountCircleOutlined } from "@mui/icons-material";
import { MailOutlineOutlined } from "@mui/icons-material";
import { FilterAlt } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
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
import React, { useState } from "react";

const TableHeadStyles = {
  fontSize: "12px",
  fontWeight: 500,
  color: "#ACACAC",
};

const data = [
  {
    id: 1,
    location: "Palestine",
    name: "Huzefa Dico",
    email: "huzefadico@thezeekcompany.com",
    phoneNumber: "+971 50 123 4567",
  },
  {
    id: 2,
    location: "Palestine",
    name: "Ziyad Mahomed",
    email: "ziyadmahomed@thezeekcompany.com",
    phoneNumber: "+971 50 123 4567",
  },
  {
    id: 3,
    location: "Palestine",
    name: "Rashed Al Zaabi",
    email: "rashedalzaabi@thezeekcompany.com",
    phoneNumber: "+971 50 123 4567",
  },
  {
    id: 4,
    location: "Palestine",
    name: "Bob Joe",
    email: "bobjoe@thezeekcompany.com",
    phoneNumber: "+971 50 123 4567",
  },
];

const Branches = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div className="p-4">
      <Box className="flex flex-wrap justify-between items-center p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h5" fontWeight="bold" fontSize="40px">
            Branches
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
          />
          <CustomButton
            text="Send Notification"
            bgColor="#FFDAC5"
            textColor="#787878"
          />
        </div>
      </Box>

      <TableContainer>
        <Table size="medium">
          <TableHead>
            <TableRow sx={{ "& td, & th": { border: 0 } }}>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnOutlinedIcon
                    sx={{ color: "#ACACAC", marginRight: 1 }}
                    fontSize="small"
                    color="primary"
                  />
                  <Typography sx={TableHeadStyles}>Location</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccountCircleOutlined
                    sx={{ color: "#ACACAC", marginRight: 1 }}
                    fontSize="small"
                  />
                  <Typography sx={TableHeadStyles}>Manager</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MailOutlineOutlined
                    sx={{ color: "#ACACAC", marginRight: 1 }}
                    fontSize="small"
                  />
                  <Typography sx={TableHeadStyles}>Email</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MailOutlineOutlined
                    sx={{ color: "#ACACAC", marginRight: 1 }}
                    fontSize="small"
                  />
                  <Typography sx={TableHeadStyles}>Phone Number</Typography>
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
              <BranchesTableRow
                key={item.id}
                id={item.id}
                location={item.location}
                name={item.name}
                email={item.email}
                phoneNumber={item.phoneNumber}
                onSelect={handleRowSelect}
                isSelected={selectedRows.includes(item.id)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Branches;
