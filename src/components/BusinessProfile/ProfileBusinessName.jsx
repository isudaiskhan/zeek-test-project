import React from "react";
import { Button, Box, Typography, Card } from "@mui/material";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";

const ProfileBusinessName = ({ name, type, city, country, onEdit }) => {
  return (
    <Box>
      <div className="flex justify-between items-center px-5">
        <Typography className="!font-bold !mt-10 !mb-5" variant="h5">
          Profile
        </Typography>

        <Button
          onClick={onEdit}
          variant="outlined"
          className="!text-xs !ml-auto !text-[#5F5F5F] !font-thin !px-5 !font-maven !rounded-full !border-[#C1C1C1] flex justify-between items-center"
        >
          Edit
          <FaRegEdit className="ml-2 text-xs text-[#888888]" />
        </Button>
      </div>

      <Card className="!rounded-lg !border !border-[#E7E7E7] !border-solid !shadow-none p-4 flex items-center">
        <Box className="mr-6 flex-shrink-0">
          <Image
            src="/images/business-profile.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </Box>

        <Box className="flex-grow">
          <Typography
            variant="h6"
            className="text-[#000000] !font-sans !mb-3 !text-[15px]"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            className="text-[#ACACAC] !font-sans !text-[15px]"
          >
            {type}
          </Typography>
          <Typography
            variant="body2"
            className="text-[#ACACAC] !font-sans !text-[12px]"
          >
            {city}, {country}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
export default ProfileBusinessName;
