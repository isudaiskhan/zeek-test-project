import React from "react";
import {
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Radio,
  Divider,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import StudioCustomTextField from "../StudioCustomTextField/StudioCustomTextField";
import FieldItems from "../FieldItems/FieldsItems";
import StudioCustomAutoComplete from "../StudioCustomAutoComplete/StudioCustomAutoComplete";
import StudioCustomButton from "@/components/Custom/StudioCustomButton/StudioCustomButton";

const Settings = ({
  state,
  onBarcodeChange,
  onRewardProgramChange,
  onSpendChange,
  onPointsPerSpendChange,
  onVisitsRequiredChange,
  onPointsPerVisitChange,
  onDailyVisitLimitToggle,
  onExpirationOptionChange,
  onExpirationDateChange,
  onExpirationPeriodChange,
  onPointsLifetimeChange,
  onPointsPeriodChange,
  onFieldChange,
  onSourceChange,
  onCountryChange,
}) => {
  const countries = [
    { label: "United States" },
    { label: "Canada" },
    { label: "United Kingdom" },
  ];

  const daysOptions = [
    { label: "Monday" },
    { label: "Tuesday" },
    { label: "Wednesday" },
  ];

  const dateOptions = [{ label: "1" }, { label: "2" }, { label: "3" }];

  return (
    <div className="p-6">
      {/* Barcode Section */}
      <RadioGroup
        value={state.barcode}
        onChange={(e) => onBarcodeChange(e.target.value)}
      >
        <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
          Barcode Type
        </Typography>
        <FormControlLabel
          value="PDF 417"
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="PDF 417"
        />
        <FormControlLabel
          value="QRCode"
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="QR Code"
        />
      </RadioGroup>
      <Divider className="!my-8 bg-[#B8B8B8]" />
      {/* Reward Program Section */}
      <RadioGroup
        value={state.rewardProgram}
        onChange={(e) => onRewardProgramChange(e.target.value)}
      >
        <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
          Reward Program
        </Typography>
        <FormControlLabel
          value="Spend"
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Spend (Give points based on customer spend)"
        />
        <FormControlLabel
          value="Visit"
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Visit (Give points based on customer visits)"
        />
      </RadioGroup>

      {state.rewardProgram === "Spend" && (
        <Box>
          <Typography className="!text-xl !font-inter !font-semibold !text-[#000000] !mb-4 !mt-10">
            How do your customers earn points?
          </Typography>
          <Typography className="!text-base !font-inter !text-[#989898] !mb-5">
            Eg: 1 point for every 1 AED spent
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Box display="flex" border="1px solid #CCCCCC" borderRadius="4px">
              <Box bgcolor="#E8E8E8" px={2} display="flex" alignItems="center">
                AED
              </Box>
              <TextField
                value={state.spendAmount}
                onChange={(e) => onSpendChange(e.target.value)}
                sx={{ "& fieldset": { border: "none" } }}
              />
            </Box>
            <Typography>=</Typography>
            <Box display="flex" border="1px solid #CCCCCC" borderRadius="4px">
              <TextField
                value={state.pointsPerSpend}
                onChange={(e) => onPointsPerSpendChange(e.target.value)}
                sx={{ "& fieldset": { border: "none" } }}
              />
              <Box bgcolor="#E8E8E8" px={2} display="flex" alignItems="center">
                Points
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {state.rewardProgram === "Visit" && (
        <Box>
          <Typography className="!text-xl !font-inter !font-semibold !text-[#000000] !mb-4 !mt-10">
            How do your customers earn points?
          </Typography>
          <Typography className="!text-base !font-inter !text-[#989898] !mb-5">
            Eg: 1 point for every 1 visit
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Box display="flex" border="1px solid #CCCCCC" borderRadius="4px">
              <Box bgcolor="#E8E8E8" px={2} display="flex" alignItems="center">
                Visit
              </Box>
              <TextField
                value={state.visitsRequired}
                onChange={(e) => onVisitsRequiredChange(e.target.value)}
                sx={{ "& fieldset": { border: "none" } }}
              />
            </Box>
            <Typography>=</Typography>
            <Box display="flex" border="1px solid #CCCCCC" borderRadius="4px">
              <TextField
                value={state.pointsPerVisit}
                onChange={(e) => onPointsPerVisitChange(e.target.value)}
                sx={{ "& fieldset": { border: "none" } }}
              />
              <Box bgcolor="#E8E8E8" px={2} display="flex" alignItems="center">
                Points
              </Box>
            </Box>
          </Box>
          <FormControlLabel
            className="mt-7"
            control={
              <Checkbox
                checked={state.dailyVisitLimit}
                onChange={onDailyVisitLimitToggle}
                sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
              />
            }
            label="Restrict to one visit per day"
          />
        </Box>
      )}
      <Divider className="!my-8 bg-[#B8B8B8]" />

      {/* Card Expiration Section */}
      <RadioGroup
        value={state.expirationOption}
        onChange={(e) => onExpirationOptionChange(e.target.value)}
      >
        <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
          Card Expiration Date
        </Typography>
        <FormControlLabel
          value="ExpirationDate"
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Unlimited"
        />
        <FormControlLabel
          value="fixedPeriod"
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Fixed period"
        />
        <FormControlLabel
          value="fixedAfterIssue"
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Fixed period after card issue"
        />
      </RadioGroup>

      {state.expirationOption === "fixedPeriod" && (
        <Box mt={3}>
          <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
            Expiration Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={state.expirationDate}
              onChange={onExpirationDateChange}
            />
          </LocalizationProvider>
        </Box>
      )}

      {state.expirationOption === "fixedAfterIssue" && (
        <Box mt={3}>
          <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
            Period
          </Typography>
          <Box display="flex" gap={2}>
            <StudioCustomAutoComplete
              onChange={(value) => onExpirationPeriodChange("value", value)}
              options={dateOptions}
              placeholder="1"
              hideLabel
            />
            <StudioCustomAutoComplete
              onChange={(unit) => onExpirationPeriodChange("unit", unit)}
              options={daysOptions}
              placeholder="Days"
              hideLabel
            />
          </Box>
        </Box>
      )}
      <Divider className="!my-8 bg-[#B8B8B8]" />

      {/* Points Lifetime Section */}
      <RadioGroup
        value={state.pointsLifetime}
        onChange={(e) => onPointsLifetimeChange(e.target.value)}
      >
        <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
          Points Lifetime
        </Typography>
        <FormControlLabel
          value="unlimitedPoints"
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Unlimited"
        />
        <FormControlLabel
          value="fixedAfterEarned"
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Fixed period after points earned"
        />
      </RadioGroup>

      {state.pointsLifetime === "fixedAfterEarned" && (
        <Box mt={3}>
          <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
            Period
          </Typography>
          <Box display="flex" gap={2}>
            <StudioCustomAutoComplete
              onChange={(value) => onPointsPeriodChange("value", value)}
              placeholder="1"
              hideLabel
              options={dateOptions}
            />
            <StudioCustomAutoComplete
              onChange={(unit) => onPointsPeriodChange("unit", unit)}
              placeholder="Days"
              hideLabel
              options={daysOptions}
            />
          </Box>
        </Box>
      )}
      <Divider className="!my-8 bg-[#B8B8B8]" />

      {/* Form Fields */}
      {state.fields.map((field, index) => (
        <FieldItems
          key={index}
          field={field}
          index={index}
          onChange={onFieldChange}
        />
      ))}
      <Divider className="!my-14 bg-[#B8B8B8]" />

      {/* UTM Section */}
      <Box className="mt-10">
        <Typography className="!text-2xl !text-[#000000] !font-semibold !font-inter">
          UTM (Urchin Tracking Module)
        </Typography>
        <Typography className="!text-[#989898] !text-lg !mt-7 !mb-8 !font-inter">
          Enter the name of the source users will get the link from. Use the
          link generated on said source so you can keep track of where users
          come from.
        </Typography>
        <Box>
          <StudioCustomTextField
            label="Source name"
            value={state.source}
            onChange={(e) => onSourceChange(e.target.value)}
            fullWidth
            variant="outlined"
            className="mt-4"
          />
        </Box>
        <Box className="flex mt-10 justify-center items-center w-full">
          <StudioCustomButton
            text="Add Link with UTM tag"
            textColor="#FFFFFF"
            bgColor="#333333"
            width="100%"
            onClick={() => {
              console.log("UTM link added with source:", state.source);
            }}
          />
        </Box>
      </Box>
      <Divider className="bg-[#B8B8B8] !my-14" />

      {/* Phone Mask Section */}
      <Box className="mt-10">
        <Typography className="!text-2xl !text-[#000000] !font-semibold !font-inter">
          Phone Mask
        </Typography>
        <Typography className="!text-[#989898] !text-lg !mt-7 !mb-8 !font-inter">
          Choose the country your customers will be in. This way the phone
          numbers added in the form will be in a consistent structure.
        </Typography>
        <StudioCustomAutoComplete
          placeholder="Select country..."
          onChange={onCountryChange}
          options={countries}
        />
      </Box>
    </div>
  );
};

export default Settings;
