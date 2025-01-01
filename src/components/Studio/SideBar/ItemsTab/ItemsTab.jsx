import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DragIndicatorOutlined } from "@mui/icons-material";

const ItemsTab = () => {
  return (
    <div>
      <Box className="flex justify-start items-center px-5 py-2">
        <MenuOutlinedIcon sx={{ fontSize: "20px", color: "black", mr: 1 }} />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "20px",
            color: "black",
            textAlign: "left",
          }}
        >
          Items
        </Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box className="flex justify-start items-center px-5 py-2">
        <div>
          <Accordion
            disableGutters
            elevation={0}
            square
            sx={{
              boxShadow: "none",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "black",
                }}
              >
                In This Card
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex flex-col gap-2">
                {["Name", "Tier", "Card Number", "Date Added", "Card Type"].map(
                  (item, index) => (
                    <div
                      className="flex flex-row items-center gap-2"
                      key={index}
                    >
                      <Typography sx={itemsSX}>{item}</Typography>
                    </div>
                  )
                )}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            square
            sx={{
              boxShadow: "none",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "black",
                }}
              >
                Add Custom Fields
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex flex-col gap-2">
                {["Link", "New Dynamic Field", "New Static Field"].map(
                  (item, index) => (
                    <div
                      className="flex flex-row items-center gap-2  my-2"
                      key={index}
                    >
                      <DragIndicatorOutlined fontSize="small" />
                      <Typography sx={itemsSX}>{item}</Typography>
                    </div>
                  )
                )}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            square
            sx={{
              boxShadow: "none",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "black",
                }}
              >
                Add Present Fields
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex flex-col gap-2">
                {[
                  "Email",
                  "Phone Number",
                  "Opt Out of Lock Screen notifications",
                  "Useful Links",
                ].map((item, index) => (
                  <div
                    className="flex flex-row items-center gap-2  my-2"
                    key={index}
                  >
                    <DragIndicatorOutlined fontSize="small" />
                    <Typography sx={itemsSX}>{item}</Typography>
                  </div>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            square
            sx={{
              boxShadow: "none",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "black",
                }}
              >
                Add Advanced Fields
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex flex-col gap-2">
                {[
                  "Expiry Date",
                  "Salutation",
                  "Suffix",
                  "Gender",
                  "Date of Birth",
                  "Points",
                  "Member Status",
                  "Grouping Identifier",
                ].map((item, index) => (
                  <div
                    className="flex flex-row items-center gap-2  my-2"
                    key={index}
                  >
                    <DragIndicatorOutlined fontSize="small" />
                    <Typography sx={itemsSX}>{item}</Typography>
                  </div>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </div>
  );
};

const itemsSX = {
  fontWeight: 400,
  fontSize: "14px",
  color: "black",
};

export default ItemsTab;
