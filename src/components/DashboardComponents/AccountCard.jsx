import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { ArrowForwardIos as ArrowForwardIosIcon } from "@mui/icons-material";
import Image from "next/image";

const AccountCard = () => {
  return (
    <div className="xl:w-[30%] w-full rounded-2xl shadow-lg bg-white p-6 flex flex-col justify-between">
      <div>
        <Typography
          variant="subtitle2"
          className="!text-black !font-maven !text-lg"
        >
          Account
        </Typography>
        <div className="flex justify-end">
          <Image
            src="/images/logo.svg"
            alt="Custom Icon"
            className="!-mt-4 !w-36"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <Typography
          variant="body2"
          className="!text-black !mb-1 !mt-5 !font-maven !text-sm"
        >
          Joined:
        </Typography>
        <Typography
          variant="body2"
          className="!text-black !mb-1 !font-maven !text-sm"
        >
          October 22, 2024
        </Typography>
        <Typography
          variant="body2"
          className="!text-black !mt-2.5 !mb-1 !font-maven !text-sm"
        >
          Plan:
        </Typography>
        <Typography
          variant="body2"
          className="!text-black !mb-1 !font-maven !text-sm"
        >
          Standard
        </Typography>
      </div>
      <div className="flex justify-between items-center">
        <Button
          variant="outlined"
          size="small"
          className="!text-xs !text-black !font-thin !px-4 !font-maven !rounded-full !border-[#9E9E9E]"
        >
          Change Plan
        </Button>
        <IconButton size="small" className="!text-black !p-2.5 !bg-[#F0F0F0]">
          <ArrowForwardIosIcon fontSize="small" className="!text-2xl" />
        </IconButton>
      </div>
    </div>
  );
};

export default AccountCard;
