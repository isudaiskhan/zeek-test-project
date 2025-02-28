import { FIELD_TYPES } from "@/enums/loyalty-card-actions";
import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";

const fieldOptions = Object.entries(FIELD_TYPES).map(([key, value]) => ({
  label: key,
  value: value,
}));

const CardFields = ({ index, field, fieldName, handleCardFieldChange }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 1, mt: 2 }} key={index}>
      <Box className="flex flex-col gap-2 w-full">
        <Typography
          sx={{ fontSize: "13px", fontWeight: 400, color: "#888888" }}
        >
          Field
        </Typography>
        <Select
          value={field}
          onChange={(e) =>
            handleCardFieldChange(index, "field", e.target.value)
          }
          displayEmpty
          sx={{ width: "100%" }}
          size="small"
        >
          <MenuItem value="">Select Type</MenuItem>
          {fieldOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box className="flex flex-col gap-2 w-full">
        <Typography
          sx={{ fontSize: "13px", fontWeight: 400, color: "#888888" }}
        >
          Field Name
        </Typography>
        <TextField
          placeholder="Field Name"
          fullWidth
          value={fieldName}
          size="small"
          onChange={(e) =>
            handleCardFieldChange(index, "fieldName", e.target.value)
          }
        />
      </Box>
    </Box>
  );
};

export default CardFields;
