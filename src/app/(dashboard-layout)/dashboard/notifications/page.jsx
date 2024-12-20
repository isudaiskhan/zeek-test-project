import React from "react";
import { Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const segments = [
  { tag: "All", people: 152, created: "October 2, 2024", campaigns: 7 },
  { tag: "Platinum", people: 12, created: "October 2, 2024", campaigns: 3 },
  { tag: "Gold", people: 23, created: "October 2, 2024", campaigns: 4 },
  { tag: "Silver", people: 47, created: "October 2, 2024", campaigns: 1 },
  { tag: "Bronze", people: 70, created: "October 2, 2024", campaigns: 2 },
  { tag: "Frequency x3", people: 24, created: "October 2, 2024", campaigns: 7 },
  { tag: "Frequency x5", people: 11, created: "October 2, 2024", campaigns: 7 },
];

const tagStyles = {
  All: "bg-[#F0EFEF] text-[#696969]",
  Platinum: "bg-[#B3B3B3] text-[#222222]",
  Gold: "bg-[#FFF9E3] text-[#FFC700]",
  Silver: "bg-[#ECECEC] text-[#898989]",
  Bronze: "bg-[#EFE3D7] text-[#86684A]",
  "Frequency x3": "bg-[#FFDAC5] text-[#696969]",
  "Frequency x5": "bg-[#FFDAC5] text-[#696969]",
};

const Segments = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <Typography variant="h4" className="!font-bold text-4xl">
          Segments{" "}
          <span className="text-[#B3B3B3] text-4xl font-bold">
            {segments.length}
          </span>
        </Typography>
        <IconButton
          className="!bg-[#FFECE1] !p-1 !hover:bg-orange-200 !text-[#FF762A] !border !border-[#FFE0CE] !border-solid !rounded-xl"
          aria-label="add"
        >
          <AddIcon className="!text-4xl" />
        </IconButton>
      </div>

      <Grid container spacing={4}>
        {segments.map((segment, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
            key={index}
            className={index >= 4 ? "lg:w-1/3 md:w-1/2 w-full" : ""}
          >
            <Card className="!shadow-md !shadow-gray-400 !transition-shadow">
              <CardContent>
                <Typography
                  variant="subtitle1"
                  className="!font-bold !text-sm !font-sans !text-[#696969]"
                >
                  tag:
                  <span
                    className={`px-2 ms-4 py-1 rounded-md ${
                      tagStyles[segment.tag] || "bg-red-100 text-gray-700"
                    }`}
                  >
                    {segment.tag}
                  </span>
                </Typography>
                <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
                  {segment.people} people
                </Typography>
                <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
                  Created: {segment.created}
                </Typography>
                <Typography className="!mt-4 !text-[#696969] !font-bold !text-sm !font-sans">
                  Campaigns done: {segment.campaigns}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Segments;
