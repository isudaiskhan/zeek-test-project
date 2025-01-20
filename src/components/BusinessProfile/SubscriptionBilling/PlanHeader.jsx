import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const PlanCard = ({ planName }) => {
  return (
    <Box className="flex justify-between items-center">
      <div className="flex flex-wrap items-center space-x-2">
        <Typography
          variant="h6"
          className="!font-semibold !text-xl !font-inter"
        >
          {planName}
        </Typography>
        <IconButton className="!bg-[#00B355] !p-[2px] !text-white">
          <CheckIcon className="!text-lg" />
        </IconButton>
        <Button
          size="small"
          variant="secondary"
          className="!bg-[#FFF4EE] sm:!ml-5 !text-[#FF5B00] !py-1"
        >
          Full Access
        </Button>
      </div>
    </Box>
  );
};

export default PlanCard;
