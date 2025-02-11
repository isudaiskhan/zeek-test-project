"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PromotionItem = ({ id, offer, timeframe, details }) => (
  <Accordion key={id} className="!shadow-none">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      className="!flex !flex-row-reverse !justify-between !items-center gap-3 !py-1"
    >
      <Typography className="!text-sm text-[#000000] !font-sans">
        {offer}
      </Typography>
      <Typography className="!text-sm text-[#000000] !font-sans !ml-auto">
        {timeframe}
      </Typography>
    </AccordionSummary>
    <AccordionDetails className="!px-14 !p-0">
      {details.map((detail, index) => (
        <Typography key={index} className="!text-sm text-[#000000] !font-sans">
          {detail}
        </Typography>
      ))}
      <Button className="!bg-[#FFDAC5] !mt-5 !text-[#FF5B00] !py-[2px] !px-4">
        Activate Promotion
      </Button>
    </AccordionDetails>
  </Accordion>
);

export default PromotionItem;
