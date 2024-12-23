import { TableCell } from "@mui/material";

const tableCellSX = {
  border: "24px",
  borderRadius: "10px",
  padding: "8px",
};

const CustomTableCell = ({ children }) => {
  return (
    <>
      <TableCell sx={{ ...tableCellSX }}>{children}</TableCell>
    </>
  );
};

export default CustomTableCell;
