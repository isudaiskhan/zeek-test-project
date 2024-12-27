import CustomTableCell from "@/components/Custom/CustomTableCell/CustomTableCell";
import { InfoOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Checkbox,
  Chip,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const TextStyles = {
  fontSize: "13px",
  fontWeight: 500,
  color: "#777777",
};

const EmployeeTableRow = ({
  name,
  email,
  branch,
  role,
  id,
  onSelect,
  isSelected,
  avatar,
}) => {
  return (
    <>
      <TableRow
        sx={{
          backgroundColor: isSelected ? "#FFDAC5" : "#FFFFFF",
          marginBottom: "8px",
          "& td, & th": { border: 0, margin: 2 },
        }}
        key={id}
      >
        <CustomTableCell selected={isSelected}>
          <Box display="flex" alignItems="center">
            <InfoOutlined sx={{ marginRight: 1, color: "#b0b0b0" }} />
            <Checkbox
              checked={isSelected}
              onChange={() => onSelect(id)}
              sx={{
                color: "#ff9a68",
                "&.Mui-checked": {
                  color: "#ff9a68",
                },
              }}
            />
            <Avatar
              src={avatar}
              alt={name}
              sx={{ width: 32, height: 32, marginRight: 1 }}
            />
            <Typography sx={TextStyles}>{name}</Typography>
          </Box>
        </CustomTableCell>
        <CustomTableCell>
          <Typography sx={TextStyles}>{email}</Typography>
        </CustomTableCell>
        <CustomTableCell>
          <Typography sx={TextStyles}>{branch}</Typography>
        </CustomTableCell>
        <CustomTableCell>
          <Chip
            label={role}
            sx={{
              backgroundColor: role === "Manager" ? "#B3B3B3" : "#ECECEC",
              color: role === "Manager" ? "#222222" : "#898989",
              borderRadius: "4px",
              padding: "2px 8px",
              fontSize: "13px",
              fontWeight: 500,
            }}
          />
        </CustomTableCell>
      </TableRow>
      <TableRow sx={{ "& td, & th": { border: 0 } }}>
        <TableCell
          colSpan={5}
          sx={{ padding: "2px 0" }}
          className="bg-gray-100"
        />
      </TableRow>
    </>
  );
};

export default EmployeeTableRow;
