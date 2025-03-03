import { countries } from "@/enums/countries";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ActiveLinks from "../ActiveLinks/ActiveLinks";
import { CARD_TYPES_OPTIONS } from "@/enums/cards";

const InformationPage = ({
  handleCardDescriptionChange,
  handleCompanyNameChange,
  activeLinks,
  handleActiveLinkChange,
  addNewLink,
  handleIssuerInformationChange,
  issuerInformation,
  handleRemoveLink,
  handleEarnStamps,
  handleRewardDetails,
  handleEarnedStampMessage,
  handleEarnedRewardMessage,
  activeCardType,
}) => {
  return (
    <Box className="flex flex-col gap-4 p-4">
      <Box className="flex flex-col gap-4 mt-4">
        <Typography sx={{ fontSize: "40px", fontWeight: 400 }}>
          Information
        </Typography>
        <Divider sx={{ width: "100%", mt: 4 }} />
      </Box>
      <Box className="flex flex-col gap-4 mt-8">
        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
          Card Description
        </Typography>
        <Box className="px-4">
          <TextField
            variant="outlined"
            className="!w-full"
            placeholder="Enter Description..."
            onChange={handleCardDescriptionChange}
            size="small"
          />
        </Box>
      </Box>
      <Box className="flex flex-col gap-4 mt-8">
        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
          Company Name
        </Typography>
        <Box className="px-4">
          <TextField
            variant="outlined"
            className="!w-full"
            placeholder="Enter Company Name..."
            onChange={handleCompanyNameChange}
            size="small"
          />
        </Box>
      </Box>
      {activeCardType === CARD_TYPES_OPTIONS.STAMPS && (
        <>
          <Box className="flex flex-col gap-4 mt-8">
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
              How to earn stamps
            </Typography>
            <Box className="px-4">
              <TextField
                variant="outlined"
                className="!w-full"
                placeholder="Enter brief explanation..."
                onChange={handleEarnStamps}
                size="small"
              />
            </Box>
          </Box>
          <Box className="flex flex-col gap-4 mt-8">
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
              Reward Details
            </Typography>
            <Box className="px-4">
              <TextField
                variant="outlined"
                className="!w-full"
                placeholder="Enter reward details..."
                onChange={handleRewardDetails}
                size="small"
              />
            </Box>
          </Box>
        </>
      )}
      <Divider sx={{ width: "100%", mt: 8 }} />
      {activeCardType === CARD_TYPES_OPTIONS.STAMPS && (
        <>
          <Box className="flex flex-col gap-4 mt-8">
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
              Earned stamp message
            </Typography>
            <Box className="flex flex-col gap-2 px-4">
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, color: "#888888" }}
              >
                The tag {"{#}"} is required (i.e. You need {"[#]"} more stamps
                to receive your reward!)
              </Typography>

              <TextField
                variant="outlined"
                className="!w-full"
                placeholder="Enter message..."
                onChange={handleEarnedStampMessage}
                size="small"
              />
            </Box>
          </Box>
          <Box className="flex flex-col gap-4 mt-8">
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
              Earned Reward message
            </Typography>
            <Box className="px-4">
              <TextField
                variant="outlined"
                className="!w-full"
                placeholder="Enter message..."
                onChange={handleEarnedRewardMessage}
                size="small"
              />
            </Box>
          </Box>
          <Divider sx={{ width: "100%", mt: 8 }} />
        </>
      )}
      <Box className="flex flex-col gap-4 mt-8">
        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
          Active Links
        </Typography>
        <Box className="px-4">
          {activeLinks.map((item, index) => (
            <ActiveLinks
              key={index}
              index={index}
              type={item.type}
              text={item.text}
              link={item.link}
              activeLinks={activeLinks}
              handleActiveLinkChange={handleActiveLinkChange}
              handleRemoveLink={handleRemoveLink}
            />
          ))}
          <Button
            variant="contained"
            sx={{ width: "100%", mt: 2, background: "#333" }}
            onClick={addNewLink}
          >
            Add link
          </Button>
        </Box>
      </Box>
      <Divider sx={{ width: "100%", mt: 8 }} />
      <Box className="flex flex-col gap-4 mt-8">
        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
          Issuer Information
        </Typography>
        <Box className="flex flex-col gap-4 px-4">
          <TextField
            variant="outlined"
            className="!w-full"
            placeholder="Company Name"
            size="small"
            onChange={(e) =>
              handleIssuerInformationChange("companyName", e.target.value)
            }
          />
          <TextField
            variant="outlined"
            className="!w-full"
            placeholder="Email"
            size="small"
            type="email"
            onChange={(e) =>
              handleIssuerInformationChange("email", e.target.value)
            }
          />
          <div className="flex flex-row gap-4">
            <Autocomplete
              options={countries}
              getOptionLabel={(option) => option.label}
              disableClearable
              value={
                countries.find((c) => c.value === issuerInformation.country) ||
                null
              } // Ensure proper value selection
              onChange={
                (_, selectedOption) =>
                  handleIssuerInformationChange(
                    "country",
                    selectedOption ? selectedOption.value : ""
                  ) // Handle null selection
              }
              renderInput={(params) => (
                <TextField {...params} placeholder="Country" />
              )}
              size="small"
              sx={{ width: "20%" }}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  {...props}
                  className="flex items-center gap-2 p-2"
                >
                  {option.name} ({option.value})
                </Box>
              )}
            />
            <TextField
              variant="outlined"
              className="!w-full"
              size="small"
              placeholder="+971"
              type="tel"
              value={`${issuerInformation.country}${issuerInformation.phone}`}
              onChange={(e) => {
                const inputValue = e.target.value.replace(
                  issuerInformation.country,
                  ""
                ); // Remove country prefix
                handleIssuerInformationChange("phone", inputValue);
              }}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default InformationPage;
