import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";

const ProfileInformation = ({ owner }) => {
  return (
    <Card className="!rounded-lg !border p-3 !border-[#E7E7E7] !border-solid !shadow-none">
      <CardContent>
        <div className="flex items-center gap-4">
          <Image
            alt={owner.name}
            src="/images/owner-profile-image.svg"
            width={100}
            height={100}
          />
          <div>
            <Typography
              variant="h6"
              className="text-[#000000] !font-sans !mb-3 !text-[15px]"
            >
              {owner.name}
            </Typography>
            <Typography
              variant="body2"
              className="text-[#ACACAC] !font-sans !text-[15px]"
            >
              {owner.title}
            </Typography>
            <Typography
              variant="body2"
              className="text-[#ACACAC] !font-sans !text-[12px]"
            >
              {owner.location}
            </Typography>
          </div>

          <Button
            variant="outlined"
            className="!text-xs !ml-auto !text-[#5F5F5F] !font-thin !px-5 !font-maven !rounded-full !border-[#C1C1C1] flex justify-between items-center"
          >
            Edit
            <FaRegEdit className="ml-2 text-xs text-[#888888]" />
          </Button>
        </div>
        <Typography
          variant="subtitle1"
          className="!text-[15px] !text-[#000000] !font-sans !mt-8"
        >
          Personal Information
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div>
            <Typography
              className="!text-[#000000] !text-[15px] !font-sans"
              variant="body2"
            >
              <span className="!text-[#A7A7A7] !text-[14px]">First Name</span>
            </Typography>
            <Typography variant="body2">{owner.name.split(" ")[0]}</Typography>
          </div>
          <div>
            <Typography
              className="!text-[#000000] !text-[15px] !font-sans"
              variant="body2"
            >
              <span className="!text-[#A7A7A7] !text-[14px]">Last Name</span>
            </Typography>
            <Typography variant="body2">{owner.name.split(" ")[1]}</Typography>
          </div>
          <div>
            <Typography
              className="!text-[#000000] !text-[15px] !font-sans"
              variant="body2"
            >
              <span className="!text-[#A7A7A7] !text-[14px]">Email</span>
            </Typography>
            <Typography variant="body2"> {owner.email}</Typography>
          </div>
          <div>
            <Typography variant="body2">
              <span className="!text-[#A7A7A7] !text-[14px]">Phone Number</span>
            </Typography>
            <Typography variant="body2"> {owner.phone}</Typography>
          </div>
          <div>
            <Typography variant="body2">
              <span className="!text-[#A7A7A7] !text-[14px]">Role</span>
            </Typography>
            <Typography variant="body2">{owner.role}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileInformation;
