import React from "react";
import { TextField, FormHelperText } from "@mui/material";

const CustomTextField = ({
  placeholder,
  borderRadius = "16px",
  haveBorderRadius = true,
  multiline = false,
  rows,
  width,
  type = "text",
  name,
  value,
  onChange,
  error,
  errorMessage,
  InputProps,
}) => {
  return (
    <div>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        size="small"
        multiline={multiline}
        type={type}
        rows={multiline ? rows : undefined}
        value={value}
        name={name}
        onChange={onChange}
        error={error}
        InputProps={InputProps}
        sx={{
          borderRadius: haveBorderRadius ? borderRadius : "16px",
          width: width,
          backgroundColor: "#F9F9F9",
          "& .MuiOutlinedInput-root": {
            borderRadius: haveBorderRadius ? borderRadius : "16px",
          },
        }}
      />
      {error && <FormHelperText error>{errorMessage}</FormHelperText>}
    </div>
  );
};

export default CustomTextField;
