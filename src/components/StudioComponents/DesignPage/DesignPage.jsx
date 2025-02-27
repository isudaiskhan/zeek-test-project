import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import FileUpload from "../FileUpload/FileUpload";
import Grid from "@mui/material/Grid2";
import CardFields from "../CardFields/CardFields";

const DesignPage = ({
  handleLogoChange,
  logoPreview,
  handleRemoveLogo,
  handleIconChange,
  iconPreview,
  handleRemoveIcon,
  handleCentralImageChange,
  centralImagePreview,
  handleRemoveCentralImage,
  handleCardBgColorChange,
  cardBgColor,
  handleCardTextColorChange,
  cardTextColor,
  handleCenterBackgroundColorChange,
  centerBackgroundColor,
  handleCardFieldChange,
  cardFields,
  addNewField,
  handleRemoveField,
}) => {
  return (
    <Box className="flex flex-col gap-4 p-4">
      <Box className="flex flex-col gap-4 mt-4">
        <Typography sx={{ fontSize: "40px", fontWeight: 400 }}>
          Design
        </Typography>
        <Divider sx={{ width: "100%", mt: 4 }} />
      </Box>
      <Box className="flex justify-center items-center mt-4">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="flex flex-col gap-2 w-full">
              <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                Logo
              </Typography>
              <FileUpload
                onImageChange={handleLogoChange}
                imagePreview={logoPreview}
                handleRemoveImage={handleRemoveLogo}
              />
              <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                Recommended size: 480x150 pixels. The minimum height is 150px.
                Only PNG format. 3 megabytes
              </Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="flex flex-col gap-2 w-full">
              <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                Icon
              </Typography>
              <FileUpload
                onImageChange={handleIconChange}
                imagePreview={iconPreview}
                handleRemoveImage={handleRemoveIcon}
              />
              <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                Recommended size: 480x150 pixels. The minimum height is 150px.
                Only PNG format. 3 megabytes
              </Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="flex flex-col gap-2 w-full">
              <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                Central Image
              </Typography>
              <FileUpload
                onImageChange={handleCentralImageChange}
                imagePreview={centralImagePreview}
                handleRemoveImage={handleRemoveCentralImage}
              />
              <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                Recommended size: 480x150 pixels. The minimum height is 150px.
                Only PNG format. 3 megabytes
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ width: "100%", mt: 4 }} />

      {/* // Colors //  */}
      <Box className="flex flex-col justify-center mt-4 items-start">
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          Colors
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="flex px-6 mt-8 w-full">
              <div className="flex flex-col justify-start items-start w-full">
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                  Card Background
                </Typography>
                <div className="flex flex-row justify-between gap-4 items-center mt-2 w-full">
                  <Box
                    className="w-[50px] h-[40px] rounded-md border-solid border-[2px] border-[#C6C6C6]"
                    sx={{ backgroundColor: cardBgColor }}
                  ></Box>
                  <TextField
                    type="text"
                    value={cardBgColor}
                    onChange={handleCardBgColorChange}
                    size="small"
                    fullWidth
                  />
                </div>
              </div>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="flex px-6 mt-8 w-full">
              <div className="flex flex-col justify-start items-start w-full">
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                  Text Color
                </Typography>
                <div className="flex flex-row justify-between gap-4 items-center mt-2 w-full">
                  <Box
                    className="w-[50px] h-[40px] rounded-md border-solid border-[2px] border-[#C6C6C6]"
                    sx={{ backgroundColor: cardTextColor }}
                  ></Box>
                  <TextField
                    type="text"
                    value={cardTextColor}
                    onChange={handleCardTextColorChange}
                    size="small"
                    fullWidth
                  />
                </div>
              </div>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="flex px-6 mt-8 w-full">
              <div className="flex flex-col justify-start items-start w-full">
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                  Background of Center
                </Typography>
                <div className="flex flex-row justify-between gap-4 items-center mt-2 w-full">
                  <Box
                    className="w-[50px] h-[40px] rounded-md border-solid border-[2px] border-[#C6C6C6]"
                    sx={{ backgroundColor: centerBackgroundColor }}
                  ></Box>
                  <TextField
                    type="text"
                    value={centerBackgroundColor}
                    onChange={handleCenterBackgroundColorChange}
                    size="small"
                    fullWidth
                  />
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ width: "100%", mt: 4 }} />
      <Box className="flex flex-col justify-center mt-4">
        <Typography
          sx={{ fontSize: "24px", fontWeight: "600", alignItems: "start" }}
        >
          Card Fields
        </Typography>
        {cardFields.map((item, index) => (
          <CardFields
            key={index}
            index={index}
            field={item.field}
            fieldName={item.fieldName}
            handleCardFieldChange={handleCardFieldChange}
            handleRemoveField={handleRemoveField}
            cardFields={cardFields}
          />
        ))}
        <Button
          variant="contained"
          sx={{ width: "100%", mt: 2, background: "#333" }}
          onClick={addNewField}
        >
          Add field
        </Button>
      </Box>
    </Box>
  );
};

export default DesignPage;
