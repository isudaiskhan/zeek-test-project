import CustomTableCell from "@/components/Custom/CustomTableCell/CustomTableCell";
import ViewCustomerModal from "@/components/Modals/ViewCustomerModal/ViewCustomerModal";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import {
  Avatar,
  Box,
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const getTierStyle = (tier) => {
  switch (tier) {
    case "Platinum":
      return { backgroundColor: "#0000004D", color: "#222222" };
    case "Gold":
      return { backgroundColor: "#FFD23340", color: "#FFC700" };
    case "Silver":
      return { backgroundColor: "#ECECEC", color: "#898989" };
    case "Bronze":
      return { backgroundColor: "#BE8E5E40", color: "#86684A" };
    default:
      return {};
  }
};

const TextStyles = {
  fontSize: "13px",
  fontWeight: 500,
  color: "#777777",
};

const CrmTableRow = ({
  index,
  onSelect,
  isSelected,
  name,
  email,
  lastVisited,
  tier,
  points,
  avatar,
}) => {
  const [openViewCustomer, setOpenViewCustomer] = useState(false);

  const handleViewCustomer = () => {
    setOpenViewCustomer(true);
  };

  const handleCloseViewCustomer = () => {
    setOpenViewCustomer(false);
  };

  return (
    <>
      <TableRow
        sx={{
          backgroundColor: isSelected ? "#FFDAC5" : "#FFFFFF",
          marginBottom: "8px",
          "& td, & th": { border: 0, margin: 2 },
        }}
      >
        <CustomTableCell selected={isSelected}>
          <Box display="flex" alignItems="center">
            <IconButton
              onClick={() =>
                handleViewCustomer({
                  index,
                  name,
                  email,
                  avatar,
                  tier,
                  points,
                  lastVisited,
                })
              }
            >
              <InfoIcon sx={{ marginRight: 1, color: "#b0b0b0" }} />
            </IconButton>
            <Checkbox
              checked={isSelected}
              onChange={() => onSelect(index)}
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
              sx={{
                width: 32,
                height: 32,
                marginRight: 1,
              }}
            />
            <Typography sx={TextStyles}>{name}</Typography>
          </Box>
        </CustomTableCell>
        <CustomTableCell>
          <Typography sx={TextStyles}>{email}</Typography>
        </CustomTableCell>
        <CustomTableCell>
          <Typography sx={TextStyles}>{lastVisited}</Typography>
        </CustomTableCell>
        <CustomTableCell>
          <Box
            sx={{
              padding: "4px 2px",
              borderRadius: "4px",
              justifyItems: "center",
              textAlign: "center",
              fontSize: "13px",
              fontWeight: 500,
              ...getTierStyle(tier),
            }}
          >
            {tier}
          </Box>
        </CustomTableCell>
        <CustomTableCell>
          <Typography sx={TextStyles}>{points} Points</Typography>
        </CustomTableCell>
      </TableRow>
      <TableRow sx={{ "& td, & th": { border: 0 } }}>
        <TableCell
          colSpan={5}
          sx={{ padding: "2px 0" }}
          className="bg-gray-100"
        />
      </TableRow>

      {openViewCustomer && (
        <ViewCustomerModal
          open={openViewCustomer}
          onClose={handleCloseViewCustomer}
          index={index}
          name={name}
          email={email}
          avatar={avatar}
          tier={tier}
          points={points}
          lastVisited={lastVisited}
        />
      )}
    </>
  );
};

export default CrmTableRow;
