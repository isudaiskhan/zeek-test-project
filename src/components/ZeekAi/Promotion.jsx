"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Typography,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PromotionItem from "./PromotionItem";

const Promotion = ({ chipLabel, chipColor, chipBgColor, promotions }) => (
  <Accordion defaultExpanded className="!shadow-none !rounded-lg !m-0 !p-0">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      className="!flex !flex-row-reverse !justify-between !items-center gap-3"
    >
      <div className="!flex !items-center !gap-2">
        <Chip
          label={chipLabel}
          style={{
            color: chipColor,
            backgroundColor: chipBgColor,
          }}
          className="!rounded-lg !font-medium"
        />
      </div>
    </AccordionSummary>

    <div className="!flex !items-center !justify-between !px-14">
      <div className="flex items-center gap-1">
        <LocalOfferIcon className="!text-[#727171]" fontSize="small" />
        <Typography className="!font-sans !text-[#727171] !font-medium !text-xs">
          Offer
        </Typography>
      </div>
      <div className="flex items-center gap-1">
        <AccessTimeIcon fontSize="small" className="!mr-1 !text-[#727171]" />
        <Typography className="!font-sans !text-[#727171] !font-semibold !text-xs">
          Timeframe
        </Typography>
      </div>
    </div>
    <AccordionDetails>
      <div className="divide-y border rounded-md">
        {promotions.map(({ id, offer, timeframe, details }) => (
          <PromotionItem
            key={id}
            id={id}
            offer={offer}
            timeframe={timeframe}
            details={details}
          />
        ))}
      </div>
    </AccordionDetails>
  </Accordion>
);

export default Promotion;
