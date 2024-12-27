import React from "react";
import { Add } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Chip,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

const menuItemStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4px 10px",
};

const chipStyles = {
  backgroundColor: "#ECECEC",
  color: "#898989",
  borderRadius: "4px",
};

const sectionTitleStyles = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#000000",
  textAlign: "center",
};

const centeredMenuItemStyles = {
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#FFDAC5",
  },
};

const EmployeeFilters = ({
  anchorEl,
  isOpen,
  handleMenuClose,
  roleFilters,
  branchFilters,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleMenuClose}
      slotProps={{
        paper: { sx: { width: 300, padding: 1, borderRadius: 2 } },
      }}
    >
      <Box>
        <Box textAlign="center" sx={{ padding: 1 }}>
          <Typography sx={sectionTitleStyles}>Roles</Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        {roleFilters.map((role) => (
          <React.Fragment key={role.id}>
            <MenuItem sx={menuItemStyles}>
              <Checkbox />
              <Chip label={role.label} sx={chipStyles} />
            </MenuItem>
            <Divider sx={{ my: 1 }} />
          </React.Fragment>
        ))}

        {/* Branches Section */}
        <Box textAlign="center" sx={{ padding: 1 }}>
          <Typography sx={sectionTitleStyles}>Branches</Typography>
        </Box>
        <Divider />
        {branchFilters.map((branch) => (
          <React.Fragment key={branch.id}>
            <MenuItem sx={menuItemStyles}>
              <Checkbox />
              <Chip label={branch.label} sx={chipStyles} />
            </MenuItem>
            <Divider sx={{ my: 1 }} />
          </React.Fragment>
        ))}

        {/* Add Segment and Apply Filter */}
        <MenuItem sx={centeredMenuItemStyles}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
            Add segment
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem sx={centeredMenuItemStyles}>
          <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
            Apply Filter
          </Typography>
        </MenuItem>
      </Box>
    </Menu>
  );
};

export default EmployeeFilters;
