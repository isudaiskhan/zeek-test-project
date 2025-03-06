import { CARD_TYPES_OPTIONS } from "@/enums/cards";
import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";

const CardTypes = ({ activeCardType, handleCardTypeClick, cardTypes }) => {
  return (
    <Box className="flex flex-col gap-4 p-4">
      <Box className="flex justify-start mt-4">
        <Typography sx={{ fontWeight: 400, fontSize: "40px" }}>
          Card Type
        </Typography>
      </Box>
      <Divider sx={{ width: "100%", my: 1 }} />
      <Box className="flex flex-col md:flex-row gap-4 justify-center items-center p-4">
        {cardTypes.map((card, index) => (
          <Box
            key={index}
            className={`flex flex-col w-full justify-center gap-1 items-center p-4 ${
              activeCardType === card.value ? "bg-[#898989]" : "bg-[#FFFFFF]"
            }  rounded-md cursor-pointer ease-in-out transition-all duration-200`}
            sx={{ border: "1px solid #C6C6C6" }}
            onClick={() => handleCardTypeClick(card.value)}
          >
            {card.icon({
              size: 50,
              color: activeCardType === card.value ? "#FFFFFF" : "#000000",
            })}
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                color: activeCardType === card.value ? "#FFFFFF" : "#000000",
                textTransform: "capitalize",
              }}
            >
              {card.label}
            </Typography>
            <Chip
              label={card.buttonText}
              sx={{
                fontSize: "10px",
                padding: "4px",
                mt: 4,
                backgroundColor: card.bgColor,
                // card.label === "Coupons" ? "#F0F3FF" : "#FFEBDF",
                color: card.textColor,
                border:
                  card.label === CARD_TYPES_OPTIONS.COUPON
                    ? "1px solid #768CEA"
                    : "1px solid #FF5B00",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardTypes;
