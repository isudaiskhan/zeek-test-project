import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { PiDownloadFill } from "react-icons/pi";

const ProfileCSVDownload = () => {
  return (
    <Card className="!rounded-lg !border p-3 !border-[#E7E7E7] !border-solid !shadow-none">
      <CardContent>
        <Box className="flex flex-col gap-2 justify-start items-start">
          <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
            CSV File Download
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#A7A7A7" }}
          >
            Get all your customer data in a single CSV file, organized and
            convenient!
          </Typography>
          <Box
            className="flex flex-row gap-4 justify-center items-center rounded-lg py-2 px-4 cursor-pointer"
            sx={{ border: "1px solid #E2E2E2" }}
          >
            <PiDownloadFill size={20} color="#FF5B00" />
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, color: "#FF5B00" }}
            >
              Download Customer CSV File
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCSVDownload;
