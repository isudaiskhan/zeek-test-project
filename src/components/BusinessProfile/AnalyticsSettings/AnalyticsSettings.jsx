"use client";
import React, { useState } from "react";
import { Box, Typography, TextField, Autocomplete } from "@mui/material";
import CustomTextField from "@/components/CustomTextField/CustomTextField";

const AnalyticsSettings = () => {
  const [inputs, setInputs] = useState({
    branch: "",
    dailySalesTarget: "",
    averageVisitFrequency: "",
    alertThreshold: "",
  });

  const handleInputChange = (e, value) => {
    const { name } = e.target || {};
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const branches = ["Branch A", "Branch B", "Branch C", "Branch D"];

  const validatePositiveNumber = (value) => {
    return /^\d+$/.test(value);
  };

  return (
    <Box className="w-full p-6">
      <Typography variant="h6" className="!font-inter !text-2xl">
        Analytics Settings
      </Typography>

      <div className="mt-10 px-5">
        <Typography
          variant="h6"
          className="!font-bold !mb-10 !text-xl text-[#838383] !font-inter"
        >
          Branch Specific Sales & Revenue Goals
        </Typography>
        <div className="px-6">
          <Typography
            variant="body1"
            className="!mb-1 text-black !text-lg !font-inter"
          >
            Choose Branch
          </Typography>
          <Typography
            variant="body2"
            className="!text-[#838383] !text-sm !font-inter"
          >
            Select branch to set targets for.
          </Typography>

          <Autocomplete
            value={inputs.branch}
            onChange={(event, newValue) =>
              setInputs({ ...inputs, branch: newValue })
            }
            options={branches}
            renderInput={(params) => (
              <TextField
                {...params}
                name="branch"
                variant="outlined"
                size="small"
                placeholder="Select Branch"
                className="!mt-4 !border-[#E7E7E7] max-w-52 !border-solid"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#F9F9F9",
                  },
                }}
              />
            )}
          />

          <div className="mt-10">
            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Daily Sales Target
            </Typography>
            <Typography
              variant="body2"
              className="!text-[#838383] !mb-5 !text-sm !font-inter"
            >
              Targeted sales number per day, values in AED.
            </Typography>

            <CustomTextField
              fullWidth
              name="dailySalesTarget"
              value={inputs.dailySalesTarget}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              placeholder="ie. 500, 1000, 1500"
              className="!mt-4 !rounded-full !border-[#E7E7E7] !border-solid"
              type="number"
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
            />

            <div className="mt-5">
              <Typography className="!font-inter !text-[#838383] !text-sm !mb-1 !mt-5">
                Weekly Sales Target: 5000
              </Typography>
              <Typography className="!font-inter !text-[#838383] !text-sm !mb-1 !mt-5">
                Monthly Sales Target: 15000
              </Typography>
              <Typography className="!font-inter !text-[#838383] !text-sm !mb-1 !mt-5">
                Yearly Sales Target: 50000
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Typography
            variant="h6"
            className="!font-bold !mb-5 !text-xl text-[#838383] !font-inter"
          >
            Customer Engagement Goals
          </Typography>
          <div className="px-6">
            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Average Visit Frequency
            </Typography>
            <Typography
              variant="body2"
              className="!text-[#838383] !mb-5  !text-sm !font-inter"
            >
              Goal for how often customers should visit per month.
            </Typography>
            <CustomTextField
              fullWidth
              name="averageVisitFrequency"
              value={inputs.averageVisitFrequency}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              placeholder="ie. 2, 5, 7"
              className="!mt-4 !rounded-full !border-[#E7E7E7] !border-solid"
              type="number"
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="mt-10">
          <Typography
            variant="h6"
            className="!font-bold !mb-5 !text-xl text-[#838383] !font-inter"
          >
            Benchmarks
          </Typography>
          <div className="px-6">
            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Alert for Underperformance
            </Typography>
            <Typography
              variant="body2"
              className="!text-[#838383] !mb-5  !text-sm !font-inter"
            >
              Set alerts for when sales fall below a certain number, Values in
              AED.
            </Typography>
            <CustomTextField
              fullWidth
              name="alertThreshold"
              value={inputs.alertThreshold}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              placeholder="ie. 250, 500, 750"
              className="!mt-4 !rounded-full !border-[#E7E7E7] !border-solid"
              type="number"
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AnalyticsSettings;
