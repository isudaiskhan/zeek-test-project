import React, { useState } from "react";
import { TextField, FormHelperText } from "@mui/material";

const CustomTextField = ({
  placeholder,
  borderRadius,
  haveBorderRadius,
  multiline,
  rows,
  width,
  type,
  name,
  value,
  onChange,
  validate,
  errorMessage,
}) => {
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (validate && !validate(value)) {
      setError(true);
    } else {
      setError(false);
    }

    if (value === "") {
      setError(false);
    }

    onChange(e);
  };

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
        onChange={handleInputChange}
        error={error}
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
