import React from "react";
import { TableCell, Box, Typography, Avatar, Checkbox } from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoOutlined";

const CustomTableCell = ({
  type,
  data,
  selected,
  onSelect,
  tierStyle,
  extraStyles,
}) => {
  switch (type) {
    case "name":
      return (
        <TableCell sx={{ ...tableCellSX, ...extraStyles }}>
          <Box display="flex" alignItems="center">
            <InfoIcon sx={{ marginRight: 1, color: "#b0b0b0" }} />
            <Checkbox
              checked={selected}
              onChange={onSelect}
              sx={{
                color: "#ff9a68",
                "&.Mui-checked": {
                  color: "#ff9a68",
                },
              }}
            />
            <Avatar
              src={data.avatar}
              alt={data.name}
              sx={{ width: 32, height: 32, marginRight: 1 }}
            />
            <Typography>{data.name}</Typography>
          </Box>
        </TableCell>
      );
    case "tier":
      return (
        <TableCell sx={{ ...tableCellSX, ...extraStyles }}>
          <Box
            sx={{
              padding: "4px",
              borderRadius: "4px",
              justifyItems: "center",
              textAlign: "center",
              ...tierStyle,
            }}
          >
            {data}
          </Box>
        </TableCell>
      );
    default:
      return (
        <TableCell sx={{ ...tableCellSX, ...extraStyles }}>{data}</TableCell>
      );
  }
};

export default CustomTableCell;

const tableCellSX = {
  border: "24px",
  borderRadius: "10px",
  padding: "8px",
};
