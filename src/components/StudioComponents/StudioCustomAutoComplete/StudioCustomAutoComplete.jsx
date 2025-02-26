import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StudioCustomAutoComplete = ({
  label,
  options,
  value,
  placeholder,
  hideLabel = false,
}) => {
  return (
    <Box>
      {!hideLabel && (
        <Typography variant="body1" fontWeight="bold" mb={0.5}>
          {label}
        </Typography>
      )}
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option?.label || ""}
        value={value}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              sx: {
                borderRadius: "4px",
                height: "55px",
                minWidth: "300px",
              },
            }}
          />
        )}
        fullWidth
      />
    </Box>
  );
};

export default StudioCustomAutoComplete;
