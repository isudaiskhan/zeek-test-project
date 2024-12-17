import React from "react";
import { Card, CardContent, Typography, Chip, Divider } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"; // Import the icon

const cards = [
  { id: 1, segment: "All", frequency: null },
  { id: 2, segment: "Platinum", frequency: null },
  { id: 3, segment: "Frequency x5", frequency: true },
];

const messages = [
  "“Sweet Deal! 🎉 Buy one pastry, get one FREE! For a limited time only—don’t miss out!”",
  "“Your favourite pastries are calling! 🥧 Don’t forget our BOGO offer is here for a limited time—grab a friend and indulge together!”",
  "“Just a reminder: BOGO on all pastries won’t last forever! Come by and treat yourself before the offer ends!”",
];

const releaseTimes = [
  "Nov 5, 2024 12:00 PM",
  "Nov 8, 2024 12:00 PM",
  "Nov 11, 2024 12:00 PM",
];

const NotificationOverview = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
        <div className="text-2xl font-bold mb-4 self-start ml-4">
          Active <span className="text-gray-500">3</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full px-5">
          {Array(9)
            .fill()
            .map((_, index) => {
              // Determine border color dynamically based on row
              const borderColorClass =
                index < 3
                  ? "border-b-4 border-0 border-solid border-green-500" // First row
                  : index < 6
                  ? "border-b-4 border-0 border-solid border-red-500" // Second row
                  : "border-b-4 border-0 border-solid border-black"; // Third row

              return (
                <Card
                  key={index}
                  className={`shadow-md rounded-md border border-gray-200 hover:shadow-lg transition-all ${borderColorClass}`}
                  sx={{ borderRadius: "5px" }}
                >
                  <CardContent>
                    <div className="flex justify-between items-center mb-3">
                      <Typography
                        variant="h5"
                        className="font-bold font-sans text-[#696969]"
                      >
                        BOGO on pastries
                      </Typography>
                      <MoreHorizIcon className="text-gray-600 cursor-pointer" />
                    </div>
                    <Divider className="mb-3" />
                    <div className="space-y-2">
                      {messages.map((message, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          className="text-gray-600"
                        >
                          <div className="flex">
                            <li className="text-xl text-[#FFDAC5]"></li>
                            {message}
                          </div>
                          {/* {message} */}
                        </Typography>
                      ))}
                    </div>
                    <Typography
                      variant="subtitle2"
                      className="mt-4 mb-1 text-gray-500"
                    >
                      Message release times
                    </Typography>
                    <ul className="list-none ps-2 text-sm text-gray-700 space-y-1">
                      {releaseTimes.map((time, idx) => (
                        <li key={idx}>
                          {idx + 1}. {time}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-end items-center mt-4">
                      {cards[index % 3].frequency ? (
                        <Chip
                          label={cards[index % 3].segment}
                          className="bg-orange-200 text-orange-800"
                        />
                      ) : (
                        <Chip
                          label={cards[index % 3].segment}
                          className="bg-gray-200 text-gray-800"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default NotificationOverview;
