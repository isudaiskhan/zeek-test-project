import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { fileBaseURL } from "@/utils/urls";

const ProfileInformation = ({
  title,
  city,
  country,
  email,
  phone,
  role,
  firstName,
  lastName,
  profileImage,
}) => {
  return (
    <Card className="!rounded-lg !border p-3 !border-[#E7E7E7] !border-solid !shadow-none">
      <CardContent>
        <div className="flex items-center gap-4">
          <Image
            alt="Profile Image"
            src={
              profileImage
                ? `${fileBaseURL}${profileImage}`
                : "/images/owner-profile-image.svg"
            }
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <div>
            <Typography
              variant="h6"
              className="text-[#000000] !font-sans !mb-3 !text-[15px]"
            >
              {firstName + " " + lastName}
            </Typography>
            <Typography
              variant="body2"
              className="text-[#ACACAC] !font-sans !text-[15px]"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              className="text-[#ACACAC] !font-sans !text-[12px]"
            >
              {city}, {country}
            </Typography>
          </div>
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
            <Typography variant="body2">{firstName || "N/A"}</Typography>
          </div>
          <div>
            <Typography
              className="!text-[#000000] !text-[15px] !font-sans"
              variant="body2"
            >
              <span className="!text-[#A7A7A7] !text-[14px]">Last Name</span>
            </Typography>
            <Typography variant="body2">{lastName || "N/A"}</Typography>
          </div>
          <div>
            <Typography
              className="!text-[#000000] !text-[15px] !font-sans"
              variant="body2"
            >
              <span className="!text-[#A7A7A7] !text-[14px]">Email</span>
            </Typography>
            <Typography variant="body2">{email}</Typography>
          </div>
          <div>
            <Typography variant="body2">
              <span className="!text-[#A7A7A7] !text-[14px]">Phone Number</span>
            </Typography>
            <Typography variant="body2">{phone}</Typography>
          </div>
          <div>
            <Typography variant="body2">
              <span className="!text-[#A7A7A7] !text-[14px]">Role</span>
            </Typography>
            <Typography variant="body2">{role}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileInformation;
