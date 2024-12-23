import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import CustomTableCell from "@/components/Custom/CustomTableCell/CustomTableCell";

const getTierStyle = (tier) => {
  switch (tier) {
    case "Platinum":
      return { backgroundColor: "#b0b0b0", color: "#fff" };
    case "Gold":
      return { backgroundColor: "#ffd700", color: "#000" };
    case "Silver":
      return { backgroundColor: "#c0c0c0", color: "#000" };
    case "Bronze":
      return { backgroundColor: "#cd7f32", color: "#000" };
    default:
      return {};
  }
};

const CrmTableRow = ({ row, index }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <TableRow
        key={index}
        sx={{
          backgroundColor: selectedRows.includes(index) ? "#FFDAC5" : "#FFFFFF",
          marginBottom: "8px",
          "& td, & th": { border: 0, margin: 2 },
        }}
      >
        <CustomTableCell
          type="name"
          data={row}
          selected={selectedRows.includes(index)}
          onSelect={() => handleRowSelect(index)}
        />
        <CustomTableCell type="text" data={row.email} />
        <CustomTableCell type="text" data={row.lastVisited} />
        <CustomTableCell
          type="tier"
          data={row.tier}
          tierStyle={getTierStyle(row.tier)}
        />
        <CustomTableCell type="text" data={row.points} />
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

export default CrmTableRow;
