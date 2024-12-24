import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CardComponent = ({ card, index, messages, releaseTimes }) => {
  const buttonStyles = [
    { backgroundColor: "#F0EFEF", color: "#696969", label: "All" },
    { backgroundColor: "#B3B3B3", color: "#222222", label: "Platinum" },
    { backgroundColor: "#FFDAC5", color: "#696969", label: "Frequency X5" },
  ];

  const buttonStyle =
    buttonStyles[index % buttonStyles.length] || buttonStyles[0];
  return (
    <Card
      key={index}
      className={`!shadow-md !rounded-md !hover:shadow-lg !transition-all ${
        index < 3
          ? "border-b-4 border-0 border-solid border-[#28EA84]"
          : index < 6
          ? "border-b-4 border-0 border-solid border-[#FF7171]"
          : "border-b-4 border-0 border-solid border-[#696969]"
      }`}
    >
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <Typography
            variant="h5"
            className="text-[#696969] !text-xl !font-sans !font-bold"
          >
            {card.title}
          </Typography>
          <MoreHorizIcon className="text-gray-600 cursor-pointer" />
        </div>

        {/* Messages Section */}
        <Typography
          variant="body2"
          className="!text-xs !text-[#696969] !px-2 !font-bold !font-sans"
        >
          Messages
        </Typography>
        <div className="space-y-2 mt-2">
          {messages.map((message, idx) => (
            <div
              key={idx}
              className="!text-xs !text-[#696969] !font-bold !font-sans"
            >
              <ul className="flex">
                <li className="text-xl text-[#FFDAC5]"></li>
                {message}
              </ul>
            </div>
          ))}
        </div>

        {/* Message Release Times Section */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <Typography
              variant="subtitle2"
              className="!mt-4 !mb-1 !font-sans !font-bold !text-xs text-[#696969]"
            >
              Message release times
            </Typography>
          </div>

          <div className="flex flex-row justify-between items-end">
            <ul className="list-none ps-2 text-xs font-sans font-bold text-[#696969] space-y-1">
              {releaseTimes.map((time, idx) => (
                <li key={idx}>
                  {idx + 1}. {time}
                </li>
              ))}
            </ul>

            <div className="flex flex-col justify-end items-end mb-2">
              <Button
                variant="outlined"
                color="default"
                className="!text-[#696969] !font-sans !font-bold !text-sm !rounded-md !py-1 !px-2 !border-none"
              >
                Segment
              </Button>
              <div className="flex justify-start mt-2">
                <Button
                  className="!py-0 !px-3 font-sans !rounded-md "
                  sx={{
                    backgroundColor: buttonStyle.backgroundColor,
                    color: buttonStyle.color,
                  }}
                  variant="outline"
                >
                  {buttonStyle.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
