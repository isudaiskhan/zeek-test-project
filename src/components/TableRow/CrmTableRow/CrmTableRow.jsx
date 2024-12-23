import CustomTableCell from "@/components/Custom/CustomTableCell/CustomTableCell";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import {
  Avatar,
  Box,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

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
            <InfoIcon sx={{ marginRight: 1, color: "#b0b0b0" }} />
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
              sx={{ width: 32, height: 32, marginRight: 1 }}
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
          <Typography sx={TextStyles}>{points}</Typography>
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

export default CrmTableRow;
