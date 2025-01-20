import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
const SupportSection = () => {
  return (
    <Box className="mt-6 p-4 rounded-lg flex justify-between flex-wrap items-center">
      <div className="flex flex-col">
        <Typography variant="body2" className="!text-[16px] !font-inter !mb-3">
          Ask and you shall receive!
        </Typography>
        <Typography
          variant="body2"
          className="text-[#838383] !font-inter !text-sm"
        >
          Need help with your subscription? Contact us and our team will assist
          you!
        </Typography>
      </div>
      <Button
        size="small"
        variant="outlined"
        className="!text-[#FF5B00] !border-[#E2E2E2]"
        startIcon={<HeadphonesOutlinedIcon />}
      >
        Contact customer support
      </Button>
    </Box>
  );
};

export default SupportSection;
