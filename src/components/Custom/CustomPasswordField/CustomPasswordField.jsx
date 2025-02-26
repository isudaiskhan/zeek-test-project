import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";

const CustomPasswordField = ({
  name,
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
  showPassword,
  togglePasswordVisibility,
}) => {
  return (
    <div className="pb-5">
      <TextField
        fullWidth
        placeholder="Enter Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => togglePasswordVisibility(name)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      {error && <FormHelperText error>{errorMessage}</FormHelperText>}
    </div>
  );
};

export default CustomPasswordField;
