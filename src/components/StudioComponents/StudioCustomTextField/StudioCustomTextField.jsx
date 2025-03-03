import React from "react";
import { TextField } from "@mui/material";

const StudioCustomTextField = ({
  label,
  value,
  onChange,
  fullWidth,
  variant,
  className,
}) => {
  return (
    <TextField
      fullWidth={fullWidth}
      variant={variant}
      label={label}
      value={value}
      onChange={onChange}
      className={className}
      size="small"
    />
  );
};

export default StudioCustomTextField;
