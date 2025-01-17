import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const FaqAccordion = ({ id, heading, description }) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      sx={{
        boxShadow: "none",
        border: "none",
      }}
      key={id}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
          {heading}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#838383",
            textWrap: "wrap",
          }}
        >
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;
