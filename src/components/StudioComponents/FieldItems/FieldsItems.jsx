import React from "react";
import {
  Autocomplete,
  TextField,
  FormControlLabel,
  Switch,
} from "@mui/material";
import StudioCustomTextField from "../StudioCustomTextField/StudioCustomTextField";

const fieldTypes = [
  { label: "First Name", value: "firstName" },
  { label: "Last Name", value: "lastName" },
  { label: "Phone Number", value: "phoneNumber" },
  { label: "Email", value: "email" },
  { label: "Date of Birth", value: "dob" },
  { label: "Text", value: "text" },
  { label: "Number", value: "number" },
  { label: "Date", value: "date" },
];

const FieldItems = ({ fieldKey, field, onChange }) => {
  return (
    <div className="flex justify-between gap-8 items-center my-5">
      {/* Field Type */}
      <div className="flex flex-col justify-between w-full">
        <label className="text-[#000000] text-lg mb-3">Field Type</label>
        <Autocomplete
          options={fieldTypes}
          fullWidth
          // value={field.type || ""}
          value={fieldTypes.find((type) => type.value === field.type) || null}
          onChange={(event, newValue) =>
            onChange(fieldKey, "type", newValue?.value || null)
          }
          renderInput={(params) => <TextField {...params} />}
          size="small"
        />
      </div>

      {/* Field Name */}
      <div className="flex flex-col w-full">
        <label className="text-[#000000] text-lg mb-3">Field Name</label>
        <StudioCustomTextField
          value={field.title}
          onChange={(e) => onChange(fieldKey, "title", e.target.value)}
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
              onChange={(e) => onChange(fieldKey, "required", e.target.checked)}
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
              onChange={(e) => onChange(fieldKey, "unique", e.target.checked)}
            />
          }
          label=""
        />
      </div>
    </div>
  );
};

export default FieldItems;
