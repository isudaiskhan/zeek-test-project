import {
  Box,
  Card,
  Divider,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";

const AppleCardCouponBack = ({
  isOverview,
  handleAutomaticUpdateChange,
  automaticUpdateSwitch,
  handleAllowNotificationsChange,
  allowNotificationsSwitch,
}) => {
  const TypoSX = {
    fontWeight: 400,
    fontSize: isOverview ? "10px" : "16px",
  };
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "-1px 2px 20px 0px #00000040",
        width: isOverview ? "266px" : "451px",
        height: isOverview ? "291px" : "493px",
      }}
    >
      <Box className={`${isOverview ? "p-2" : "p-8"}`}>
        <Box
          className={`rounded-xl bg-[#F6F6F6] ${isOverview ? "p-2" : "p-4"}`}
        >
          <div className="flex flex-row gap-4 justify-between items-center">
            <Typography sx={TypoSX}>Automatic Updates</Typography>
            <FormControlLabel
              control={
                <Switch
                  size={isOverview ? "small" : "medium"}
                  onChange={handleAutomaticUpdateChange}
                  checked={automaticUpdateSwitch}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
            />
          </div>
          <Divider sx={{ width: "100%", my: 1 }} />
          <div className="flex flex-row gap-4 justify-between items-center">
            <Typography sx={TypoSX}>Allow Notifications</Typography>
            <FormControlLabel
              control={
                <Switch
                  size={isOverview ? "small" : "medium"}
                  checked={allowNotificationsSwitch}
                  onChange={handleAllowNotificationsChange}
                />
              }
            />
          </div>
        </Box>
        <Box
          className={`rounded-xl bg-[#F6F6F6] ${isOverview ? "p-2" : "p-4"}  ${
            isOverview ? "mt-1" : "mt-5"
          }`}
        >
          <Typography
            sx={{
              fontWeight: 400,
              color: "#D20000",
              fontSize: isOverview ? "10px" : "16px",
              textAlign: "start",
            }}
          >
            Remove Pass
          </Typography>
        </Box>
        <Box
          className={`flex flex-col justify-start items-start gap-2 rounded-xl bg-[#F6F6F6] ${
            isOverview ? "p-2" : "p-4"
          } ${isOverview ? "mt-1" : "mt-5"} `}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: isOverview ? "11px" : "16px",
              lineHeight: "20px",
            }}
          >
            Card Details
          </Typography>
          <Typography sx={TypoSX}>
            <strong>Added:</strong> 11/10/24 2:15 PM
          </Typography>
          <Typography sx={TypoSX}>
            <strong>Valid Until:</strong> 11/30/24 11:59 PM
          </Typography>
          <Typography sx={TypoSX}>
            <strong>Card Type:</strong> Coupon
          </Typography>
          <Typography sx={TypoSX}>
            <strong>Usage:</strong> One-time usage
          </Typography>
          <Typography sx={TypoSX}>
            <strong>Company:</strong> SATO Ltd.
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default AppleCardCouponBack;
