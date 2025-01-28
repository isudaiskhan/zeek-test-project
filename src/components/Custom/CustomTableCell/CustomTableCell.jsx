import { TableCell } from "@mui/material";

const tableCellSX = {
  border: "24px",
  borderRadius: "10px",
  padding: "8px",
};

const CustomTableCell = ({ children, justifyItems }) => {
  return (
    <>
      <TableCell
        sx={{
          ...tableCellSX,
          justifyItems: justifyItems,
        }}
      >
        {children}
      </TableCell>
    </>
  );
};

export default CustomTableCell;
