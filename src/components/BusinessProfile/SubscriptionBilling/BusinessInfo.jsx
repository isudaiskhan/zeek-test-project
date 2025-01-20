import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
const BusinessInfo = ({ businessName, email, cardEnding }) => {
  return (
    <Box className="space-y-2">
      <Typography className="!text-lg !font-inter" variant="subtitle2">
        {businessName}
      </Typography>
      <Typography
        variant="body2"
        className="!text-[#838383] !text-sm !font-inter"
      >
        {email}
      </Typography>
      <div className="flex items-center space-x-2">
        <Image
          src="/images/master-card.svg"
          alt="icon"
          className="h-10 w-10"
          width={100}
          height={100}
        />
        <Typography className="!text-sm !font-inter" variant="body2">
          Mastercard ending in {cardEnding}
        </Typography>
      </div>
      <div className="flex items-center flex-wrap justify-between">
        <Button
          variant="outlined"
          className="!border-[#E2E2E2] !text-[#888888]"
          size="small"
        >
          Change payment method
        </Button>
        <Button
          size="small"
          className="!text-[#FF5B00]"
          startIcon={<FileDownloadOutlinedIcon />}
        >
          Download Invoice
        </Button>
      </div>
    </Box>
  );
};

export default BusinessInfo;
