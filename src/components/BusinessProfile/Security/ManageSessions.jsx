import React from "react";
import { Typography, Box, Card, IconButton, Button } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";

const ManageSessions = ({ data, onClose }) => {
  return (
    <Card className="p-6 w-full !shadow-none">
      <Box className="!flex !items-center !mb-4">
        <IconButton onClick={onClose} className="!mr-5 !p-0">
          <Image
            src="/images/arrow-back.svg"
            width={20}
            height={20}
            alt="close"
          />
        </IconButton>
        <Typography variant="h6" className="!font-inter !text-2xl">
          Manage Sessions
        </Typography>
      </Box>
      <Typography className="!mb-4 !py-5 !text-lg !font-inter border-t border-t-[#E7E7E7] border-0 border-solid">
        View and manage all devices currently logged into your account.
      </Typography>

      {data.map((session, index) => (
        <Box
          key={index}
          className="flex items-start justify-between mb-4 border-b pb-2"
        >
          <Box>
            <Typography
              variant="body1"
              className="!text-sm !font-inter !font-semibold"
            >
              {session.device}
            </Typography>
            <Box className="flex items-center !mt-3 !mb-3">
              <FmdGoodOutlinedIcon
                fontSize="small"
                className="mr-1 text-[#FF975C]"
              />
              <Typography
                variant="body2"
                className="text-[#838383] !text-sm !font-inter"
              >
                Location: {session.location}
              </Typography>
            </Box>
            <Box className="flex items-center mt-1">
              <AccessTimeIcon
                fontSize="small"
                className="mr-1 text-[#FF975C]"
              />
              <Typography
                variant="body2"
                className="text-[#838383] !text-sm !font-inter"
              >
                Last Active: {session.lastActive}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            size="small"
            className="!text-[#FF5B00] ! bg-[#FFECE1]"
          >
            Remove Session
          </Button>
        </Box>
      ))}
    </Card>
  );
};

export default ManageSessions;
