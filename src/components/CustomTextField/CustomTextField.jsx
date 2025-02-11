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
  disabled,
  errorMessage,
  InputProps,
  size = "small",
}) => {
  return (
    <div className="flex flex-col">
      <TextField
        variant="outlined"
        placeholder={placeholder}
        size={size}
        multiline={multiline}
        type={type}
        rows={multiline ? rows : undefined}
        value={value}
        name={name}
        onChange={onChange}
        error={error}
        disabled={disabled}
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
