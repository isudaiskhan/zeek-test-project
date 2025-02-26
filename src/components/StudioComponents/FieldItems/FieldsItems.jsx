import React from "react";
import {
  Autocomplete,
  TextField,
  FormControlLabel,
  Switch,
} from "@mui/material";
import StudioCustomTextField from "../StudioCustomTextField/StudioCustomTextField";

const fieldTypes = ["Text", "Number", "Date"];

const FieldItems = ({ field, index, handleChange }) => {
  return (
    <div key={index} className="flex justify-between gap-8 items-center my-5">
      {/* Field Type */}
      <div className="flex flex-col justify-between w-full">
        <label className="text-[#000000] text-lg mb-3">Field Type</label>
        <Autocomplete
          options={fieldTypes}
          fullWidth
          value={field.type}
          onChange={(event, newValue) => handleChange(index, "type", newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>

      {/* Field Name */}
      <div className="flex flex-col w-full">
        <label className="text-[#000000] text-lg mb-3">Field Name</label>
        <StudioCustomTextField
          value={field.name}
          onChange={(e) => handleChange(index, "name", e.target.value)}
          fullWidth
          variant="outlined"
        />
      </div>

      {/* Required */}
      <div className="flex flex-col items-center">
        <label className="text-[#000000] text-lg mb-3">Required</label>
        <FormControlLabel
          control={
            <Switch
              checked={field.required}
              onChange={(e) =>
                handleChange(index, "required", e.target.checked)
              }
            />
          }
          label=""
        />
      </div>

      {/* Unique */}
      <div className="flex flex-col items-center">
        <label className="text-[#000000] text-lg mb-3">Unique</label>
        <FormControlLabel
          control={
            <Switch
              checked={field.unique}
              onChange={(e) => handleChange(index, "unique", e.target.checked)}
            />
          }
          label=""
        />
      </div>
    </div>
  );
};

export default FieldItems;
