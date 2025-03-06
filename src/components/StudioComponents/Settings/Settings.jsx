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
import {
  BARCODE_TYPES,
  CARD_EXPIRATION_TYPES,
  DISCOUNT_VALUE,
  POINTS_LIFETIME_TYPES,
  REWARD_PROGRAM,
} from "@/enums/loyalty-card-actions";
import dayjs from "dayjs";
import { COUNTRIES_OPTIONS } from "@/enums/countries";
import { CARD_TYPES_OPTIONS } from "@/enums/cards";

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
  handleStampPerSpend,
  handleStampPerVisit,
  handleDiscountValueChange,
  handleSetFixedAmountValue,
  handleVariablePercentageChange,
}) => {
  const daysOptions = [
    { label: "Days", value: "days" },
    { label: "Weeks", value: "weeks" },
    { label: "Months", value: "months" },
    { label: "Years", value: "years" },
  ];

  const dateOptions = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
  ];

  return (
    <div className="p-6">
      {/* Barcode Section */}
      <RadioGroup value={state.barcode} onChange={onBarcodeChange}>
        <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
          Barcode Type
        </Typography>
        <FormControlLabel
          value={BARCODE_TYPES.PDF_417}
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="PDF 417"
        />
        <FormControlLabel
          value={BARCODE_TYPES.QR_CODE}
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="QR Code"
        />
      </RadioGroup>
      <Divider className="!my-8 bg-[#B8B8B8]" />

      {state.activeCardType === CARD_TYPES_OPTIONS.STAMP ? (
        <>
          <RadioGroup
            value={state.rewardProgram}
            onChange={(e) => onRewardProgramChange(e.target.value)}
          >
            <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
              Reward Program
            </Typography>
            <FormControlLabel
              value={REWARD_PROGRAM.SPEND}
              control={
                <Radio
                  sx={{
                    color: "#CACACA",
                    "&.Mui-checked": { color: "#28EA84" },
                  }}
                />
              }
              label="Spend (Give stamps based on customer spend)"
            />
            <FormControlLabel
              value={REWARD_PROGRAM.VISIT}
              control={
                <Radio
                  sx={{
                    color: "#CACACA",
                    "&.Mui-checked": { color: "#28EA84" },
                  }}
                />
              }
              label="Visit (Give stamps based on customer visits)"
            />
          </RadioGroup>

          {state.rewardProgram === REWARD_PROGRAM.SPEND && (
            <Box>
              <Typography className="!text-xl !font-inter !font-semibold !text-[#000000] !mb-4 !mt-10">
                How do your customers earn points?
              </Typography>
              <Typography className="!text-base !font-inter !text-[#989898] !mb-5">
                Eg: 1 stamp for every 1 AED spent
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Box
                  display="flex"
                  border="1px solid #CCCCCC"
                  borderRadius="4px"
                >
                  <Box
                    bgcolor="#E8E8E8"
                    px={2}
                    display="flex"
                    alignItems="center"
                  >
                    AED
                  </Box>
                  <TextField
                    value={state.stampPerSpent}
                    onChange={(e) => handleStampPerSpend(e.target.value)}
                    sx={{ "& fieldset": { border: "none" } }}
                    size="small"
                    type="number"
                  />
                </Box>
                <Typography>=</Typography>
                <Box
                  display="flex"
                  border="1px solid #CCCCCC"
                  borderRadius="4px"
                >
                  <TextField
                    value={state.pointsPerSpend}
                    onChange={(e) => onPointsPerSpendChange(e.target.value)}
                    sx={{ "& fieldset": { border: "none" } }}
                    size="small"
                    type="number"
                    disabled
                  />
                  <Box
                    bgcolor="#E8E8E8"
                    px={2}
                    display="flex"
                    alignItems="center"
                  >
                    Stamps
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {state.rewardProgram === REWARD_PROGRAM.VISIT && (
            <Box>
              <Typography className="!text-xl !font-inter !font-semibold !text-[#000000] !mb-4 !mt-10">
                How do your customers earn points?
              </Typography>
              <Typography className="!text-base !font-inter !text-[#989898] !mb-5">
                Eg: 1 stamp for every 1 visit
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Box
                  display="flex"
                  border="1px solid #CCCCCC"
                  borderRadius="4px"
                >
                  <Box
                    bgcolor="#E8E8E8"
                    px={2}
                    display="flex"
                    alignItems="center"
                  >
                    Visit
                  </Box>
                  <TextField
                    value={state.visitsRequired}
                    onChange={(e) => onVisitsRequiredChange(e.target.value)}
                    sx={{ "& fieldset": { border: "none" } }}
                    size="small"
                    disabled
                    type="number"
                  />
                </Box>
                <Typography>=</Typography>
                <Box
                  display="flex"
                  border="1px solid #CCCCCC"
                  borderRadius="4px"
                >
                  <TextField
                    value={state.stampPerVisit}
                    onChange={(e) => handleStampPerVisit(e.target.value)}
                    sx={{ "& fieldset": { border: "none" } }}
                    size="small"
                    type="number"
                  />
                  <Box
                    bgcolor="#E8E8E8"
                    px={2}
                    display="flex"
                    alignItems="center"
                  >
                    Stamp
                  </Box>
                </Box>
              </Box>
              <FormControlLabel
                className="mt-7"
                control={
                  <Checkbox
                    checked={state.dailyVisitLimit}
                    onChange={onDailyVisitLimitToggle}
                    sx={{
                      color: "#CACACA",
                      "&.Mui-checked": { color: "#28EA84" },
                    }}
                  />
                }
                label="Restrict to one visit per day"
              />
            </Box>
          )}
          <Divider className="!my-8 bg-[#B8B8B8]" />
        </>
      ) : state.activeCardType === CARD_TYPES_OPTIONS.LOYALTY ? (
        <>
          <RadioGroup
            value={state.rewardProgram}
            onChange={(e) => onRewardProgramChange(e.target.value)}
          >
            <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
              Reward Program
            </Typography>
            <FormControlLabel
              value={REWARD_PROGRAM.SPEND}
              control={
                <Radio
                  sx={{
                    color: "#CACACA",
                    "&.Mui-checked": { color: "#28EA84" },
                  }}
                />
              }
              label="Spend (Give points based on customer spend)"
            />
            <FormControlLabel
              value={REWARD_PROGRAM.VISIT}
              control={
                <Radio
                  sx={{
                    color: "#CACACA",
                    "&.Mui-checked": { color: "#28EA84" },
                  }}
                />
              }
              label="Visit (Give points based on customer visits)"
            />
          </RadioGroup>

          {state.rewardProgram === REWARD_PROGRAM.SPEND && (
            <Box>
              <Typography className="!text-xl !font-inter !font-semibold !text-[#000000] !mb-4 !mt-10">
                How do your customers earn points?
              </Typography>
              <Typography className="!text-base !font-inter !text-[#989898] !mb-5">
                Eg: 1 point for every 1 AED spent
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Box
                  display="flex"
                  border="1px solid #CCCCCC"
                  borderRadius="4px"
                >
                  <Box
                    bgcolor="#E8E8E8"
                    px={2}
                    display="flex"
                    alignItems="center"
                  >
                    AED
                  </Box>
                  <TextField
                    value={state.spendAmount}
                    onChange={(e) => onSpendChange(e.target.value)}
                    sx={{ "& fieldset": { border: "none" } }}
                    size="small"
                    disabled
                    type="number"
                  />
                </Box>
                <Typography>=</Typography>
                <Box
                  display="flex"
                  border="1px solid #CCCCCC"
                  borderRadius="4px"
                >
                  <TextField
                    value={state.pointsPerSpend}
                    onChange={(e) => onPointsPerSpendChange(e.target.value)}
                    sx={{ "& fieldset": { border: "none" } }}
                    size="small"
                    type="number"
                  />
                  <Box
                    bgcolor="#E8E8E8"
                    px={2}
                    display="flex"
                    alignItems="center"
                  >
                    Points
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {state.rewardProgram === REWARD_PROGRAM.VISIT && (
            <Box>
              <Typography className="!text-xl !font-inter !font-semibold !text-[#000000] !mb-4 !mt-10">
                How do your customers earn points?
              </Typography>
              <Typography className="!text-base !font-inter !text-[#989898] !mb-5">
                Eg: 1 point for every 1 visit
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Box
                  display="flex"
                  border="1px solid #CCCCCC"
                  borderRadius="4px"
                >
                  <Box
                    bgcolor="#E8E8E8"
                    px={2}
                    display="flex"
                    alignItems="center"
                  >
                    Visit
                  </Box>
                  <TextField
                    value={state.visitsRequired}
                    onChange={(e) => onVisitsRequiredChange(e.target.value)}
                    sx={{ "& fieldset": { border: "none" } }}
                    size="small"
                    disabled
                    type="number"
                  />
                </Box>
                <Typography>=</Typography>
                <Box
                  display="flex"
                  border="1px solid #CCCCCC"
                  borderRadius="4px"
                >
                  <TextField
                    value={state.pointsPerVisit}
                    onChange={(e) => onPointsPerVisitChange(e.target.value)}
                    sx={{ "& fieldset": { border: "none" } }}
                    size="small"
                    type="number"
                  />
                  <Box
                    bgcolor="#E8E8E8"
                    px={2}
                    display="flex"
                    alignItems="center"
                  >
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
                    sx={{
                      color: "#CACACA",
                      "&.Mui-checked": { color: "#28EA84" },
                    }}
                  />
                }
                label="Restrict to one visit per day"
              />
            </Box>
          )}
          <Divider className="!my-8 bg-[#B8B8B8]" />
        </>
      ) : null}

      {/* Card Expiration Section */}
      <RadioGroup
        value={state.expirationOption}
        onChange={onExpirationOptionChange}
      >
        <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
          Card Expiration Date
        </Typography>
        <FormControlLabel
          value={CARD_EXPIRATION_TYPES.UNLIMITED}
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Unlimited"
        />
        <FormControlLabel
          value={CARD_EXPIRATION_TYPES.FIXED_PERIOD}
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Fixed period"
        />
        <FormControlLabel
          value={CARD_EXPIRATION_TYPES.FIXED_PERIOD_AFTER_CARD_ISSUE}
          control={
            <Radio
              sx={{ color: "#CACACA", "&.Mui-checked": { color: "#28EA84" } }}
            />
          }
          label="Fixed period after card issue"
        />
      </RadioGroup>

      {state.expirationOption === CARD_EXPIRATION_TYPES.FIXED_PERIOD && (
        <Box mt={3}>
          <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
            Expiration Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={state.expirationDate}
              onChange={(newValue) => onExpirationDateChange(dayjs(newValue))}
            />
          </LocalizationProvider>
        </Box>
      )}

      {state.expirationOption ===
        CARD_EXPIRATION_TYPES.FIXED_PERIOD_AFTER_CARD_ISSUE && (
        <Box mt={3}>
          <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
            Period
          </Typography>
          <Box display="flex" gap={2}>
            <StudioCustomAutoComplete
              onChange={(event, newValue) =>
                onExpirationPeriodChange("value", newValue.value || null)
              }
              options={dateOptions}
              placeholder="1"
              hideLabel
            />
            <StudioCustomAutoComplete
              onChange={(event, newValue) =>
                onExpirationPeriodChange("unit", newValue.value || null)
              }
              options={daysOptions}
              placeholder="Days"
              hideLabel
            />
          </Box>
        </Box>
      )}
      <Divider className="!my-8 bg-[#B8B8B8]" />

      {state.activeCardType === CARD_TYPES_OPTIONS.COUPON ? (
        <>
          <RadioGroup
            value={state.discountValue}
            onChange={(e) => handleDiscountValueChange(e.target.value)}
          >
            <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
              Discount Value
            </Typography>
            <FormControlLabel
              value={DISCOUNT_VALUE.FIXED}
              control={
                <Radio
                  sx={{
                    color: "#CACACA",
                    "&.Mui-checked": { color: "#28EA84" },
                  }}
                />
              }
              label="Fixed Value"
            />
            <FormControlLabel
              value={DISCOUNT_VALUE.PERCENTAGE}
              control={
                <Radio
                  sx={{
                    color: "#CACACA",
                    "&.Mui-checked": { color: "#28EA84" },
                  }}
                />
              }
              label="Variable Value"
            />
          </RadioGroup>

          {state.discountValue === DISCOUNT_VALUE.FIXED && (
            <Box className="flex flex-col gap-4 p-4">
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Amount
              </Typography>
              <Box className="flex flex-row justify-center items-end px-10">
                <TextField
                  value={state.fixedValueAmount}
                  onChange={(e) => handleSetFixedAmountValue(e.target.value)}
                  fullWidth
                  size="small"
                  sx={{ "& fieldset": { border: "2px solid #E8E8E8" } }}
                  type="number"
                />
                <Box className="bg-[#E8E8E8] p-2 items-center px-8 font-normal text-[16px]">
                  AED
                </Box>
              </Box>
            </Box>
          )}

          {state.discountValue === DISCOUNT_VALUE.PERCENTAGE && (
            <Box className="flex flex-col gap-4 p-4">
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Percentage
              </Typography>
              <Box className="flex flex-row justify-center items-end px-10">
                <TextField
                  value={state.variablePercentage}
                  onChange={(e) =>
                    handleVariablePercentageChange(e.target.value)
                  }
                  fullWidth
                  size="small"
                  sx={{ "& fieldset": { border: "2px solid #E8E8E8" } }}
                  type="number"
                />
                <Box className="bg-[#E8E8E8] p-2 items-center px-8 font-normal text-[16px]">
                  %
                </Box>
              </Box>
            </Box>
          )}

          <Divider className="!my-12 bg-[#B8B8B8]" />
        </>
      ) : (
        <>
          <RadioGroup
            value={state.pointsLifetime}
            onChange={(e) => onPointsLifetimeChange(e.target.value)}
          >
            <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
              {state.activeCardType === CARD_TYPES_OPTIONS.STAMP
                ? "Stamp Lifetime"
                : "Points Lifetime"}
            </Typography>
            <FormControlLabel
              value={POINTS_LIFETIME_TYPES.UNLIMITED}
              control={
                <Radio
                  sx={{
                    color: "#CACACA",
                    "&.Mui-checked": { color: "#28EA84" },
                  }}
                />
              }
              label="Unlimited"
            />
            <FormControlLabel
              value={POINTS_LIFETIME_TYPES.FIXED_PERIOD_AFTER_POINTS_EARNED}
              control={
                <Radio
                  sx={{
                    color: "#CACACA",
                    "&.Mui-checked": { color: "#28EA84" },
                  }}
                />
              }
              label={
                state.activeCardType === CARD_TYPES_OPTIONS.STAMP
                  ? "Fixed period after latest stamp earned"
                  : "Fixed period after points earned"
              }
            />
          </RadioGroup>

          {state.pointsLifetime ===
            POINTS_LIFETIME_TYPES.FIXED_PERIOD_AFTER_POINTS_EARNED && (
            <Box mt={3}>
              <Typography className="!text-xl !font-inter !text-[#000000] !mb-5">
                Period
              </Typography>
              <Box display="flex" gap={2}>
                <StudioCustomAutoComplete
                  onChange={(event, value) =>
                    onPointsPeriodChange("value", value.value || null)
                  }
                  placeholder="1"
                  hideLabel
                  options={dateOptions}
                />
                <StudioCustomAutoComplete
                  onChange={(event, value) =>
                    onPointsPeriodChange("unit", value.value || null)
                  }
                  placeholder="Days"
                  hideLabel
                  options={daysOptions}
                />
              </Box>
            </Box>
          )}
          <Divider className="!my-12 bg-[#B8B8B8]" />
        </>
      )}

      {/* Points Lifetime Section */}

      <div>
        <Typography className="!text-2xl !font-semibold !mb-6">
          Card issuing form
        </Typography>
        {Object.entries(state.cardIssueForm).map(([key, field]) => (
          <FieldItems
            key={key}
            fieldKey={key}
            field={field}
            onChange={onFieldChange}
          />
        ))}
      </div>
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
          onChange={(event, value) => onCountryChange(value.value || null)}
          options={COUNTRIES_OPTIONS}
        />
      </Box>
    </div>
  );
};

export default Settings;
