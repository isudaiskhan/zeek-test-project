import { LINK_TYPES } from "@/enums/loyalty-card-actions";
import { DeleteOutline } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const linkOptions = Object.entries(LINK_TYPES).map(([key, value]) => ({
  label: key,
  value: value,
}));

const ActiveLinks = ({
  index,
  type,
  text,
  link,
  activeLinks,
  handleActiveLinkChange,
  handleRemoveLink,
}) => {
  return (
    <Box key={index} sx={{ display: "flex", gap: 2, mb: 1 }}>
      <Select
        value={type}
        onChange={(e) => handleActiveLinkChange(index, "type", e.target.value)}
        displayEmpty
        sx={{ width: "150px" }}
        size="small"
      >
        <MenuItem value="">Select type</MenuItem>
        {linkOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <TextField
        placeholder="Link"
        value={link}
        size="small"
        onChange={(e) => handleActiveLinkChange(index, "link", e.target.value)}
        sx={{ flex: 1 }}
      />
      <TextField
        placeholder="Text"
        size="small"
        value={text}
        onChange={(e) => handleActiveLinkChange(index, "text", e.target.value)}
        sx={{ flex: 1 }}
      />
      {activeLinks.length > 1 && (
        <IconButton onClick={() => handleRemoveLink(index)} color="error">
          <DeleteOutline />
        </IconButton>
      )}
    </Box>
  );
};

export default ActiveLinks;
