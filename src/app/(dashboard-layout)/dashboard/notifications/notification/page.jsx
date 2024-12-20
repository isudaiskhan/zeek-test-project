import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const cards = [
  { id: 1, segment: "All", frequency: null },
  { id: 2, segment: "Platinum", frequency: null },
  { id: 3, segment: "Frequency x5", frequency: true },
];

const messages = [
  "Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!",
  "Your favourite pastries are calling! 🍰 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!",
  "Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!",
];

const releaseTimes = [
  "Nov 5, 2024 12:00 PM",
  "Nov 8, 2024 12:00 PM",
  "Nov 11, 2024 12:00 PM",
];

const NotificationOverview = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
      <Typography
        variant="h5"
        className="text-black !text-4xl !font-sans !self-start !font-bold"
      >
        Notifications
      </Typography>
      <Typography className="!text-3xl !font-bold !font-sans !mb-4 !self-start !mt-12 !ml-4">
        Active <span className="text-[#B3B3B3]"> 3</span>
      </Typography>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-14 w-full px-5">
        {Array(9)
          .fill()
          .map((_, index) => {
            const card = cards[index % 3];
            const isPlatinum = card.segment === "Platinum";
            const isFrequencyX5 = card.segment === "Frequency x5";

            return (
              <Card
                key={index}
                className={`!shadow-md !rounded-md !hover:shadow-lg !transition-all ${
                  index < 3
                    ? "border-b-4 border-0 border-solid border-[#28EA84]"
                    : index < 6
                    ? "border-b-4 border-0 border-solid border-[#FF7171]"
                    : "border-b-4 border-0 border-solid border-black"
                }`}
              >
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <Typography
                      variant="h5"
                      className="text-[#696969] !text-xl !font-sans !font-bold"
                    >
                      BOGO on pastries
                    </Typography>
                    <MoreHorizIcon className="text-gray-600 cursor-pointer" />
                  </div>

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
                        <ul className="flex list-none">
                          <li className="text-xl text-[#FFDAC5]"></li>
                          <li>{message}</li>
                        </ul>
                      </div>
                    ))}
                  </div>

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

                      <div className="flex flex-col justify-end items-center mt-2">
                        <Button
                          variant="outlined"
                          color="default"
                          className="!text-[#696969] !font-sans !font-bold !text-xs !rounded-md !py-1 !px-2 !border-none"
                        >
                          Segment
                        </Button>
                        <Button
                          variant="outlined"
                          color="default"
                          className={`${
                            isPlatinum
                              ? "!bg-[#B3B3B3] !text-[#222222]"
                              : isFrequencyX5
                              ? "!bg-[#FFDAC5] !text-[#696969]"
                              : "!bg-[#F0EFEF] !text-[#696969]"
                          } !font-sans !py-1 !font-bold !text-xs !rounded-md !mt-1 !border-none`}
                        >
                          {card.segment}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default NotificationOverview;
