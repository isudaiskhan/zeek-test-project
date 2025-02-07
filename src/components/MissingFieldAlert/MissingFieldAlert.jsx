import { Alert, AlertTitle, Chip } from "@mui/material";
import React from "react";

const MissingFieldAlert = ({ missingFields, handleNavigate }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-4 mb-4">
      <Alert severity="warning" className="bg-amber-50 border border-amber-200">
        <AlertTitle className="font-semibold text-amber-800">
          Complete Your Business Profile
        </AlertTitle>
        <p className="mb-2 text-amber-700">
          Please complete the following fields to fully set up your business
          profile:
        </p>
        <div className="flex flex-wrap gap-2">
          {missingFields?.map((field) => (
            <Chip
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              color="warning"
              variant="outlined"
              size="small"
              className="bg-amber-100 text-amber-800 border-amber-300"
              onClick={() => handleNavigate(field)}
            />
          ))}
        </div>
      </Alert>
    </div>
  );
};

export default MissingFieldAlert;
