import CustomTableCell from "@/components/Custom/CustomTableCell/CustomTableCell";
import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import React from "react";

const TextStyles = {
  fontSize: "13px",
  fontWeight: 500,
  color: "#777777",
};

const BranchesTableRow = ({
  id,
  location,
  name,
  email,
  phoneNumber,
  isSelected,
  onSelect,
}) => {
  return (
    <>
      <TableRow
        key={id}
        sx={{
          backgroundColor: isSelected ? "#FFDAC5" : "#FFFFFF",
          marginBottom: "8px",
          "& td, & th": { border: 0, margin: 2 },
        }}
      >
        <CustomTableCell selected={isSelected}>
          <Box display="flex" alignItems="center">
            <InfoIcon sx={{ marginRight: 1, color: "#b0b0b0" }} />
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

            <Typography sx={TextStyles}>{location}</Typography>
          </Box>
        </CustomTableCell>
        <CustomTableCell>
          <Typography sx={TextStyles}>{name}</Typography>
        </CustomTableCell>
        <CustomTableCell>
          <Typography sx={TextStyles}>{email}</Typography>
        </CustomTableCell>
        <CustomTableCell>
          {" "}
          <Typography sx={TextStyles}>{phoneNumber}</Typography>
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

export default BranchesTableRow;
