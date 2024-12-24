import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ZeekCard = () => {
  return (
    <Box className="relative xl:hidden block lg:flex-1 my-auto p-6 rounded-lg lg:h-60 h-72">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/card.svg"
          alt="Background Image"
          className="!rounded-2xl"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="absolute font-inter top-4 left-4 z-10 text-black font-extrabold text-[28px]">
        ZEEK.
      </div>

      <div className="absolute inset-0 flex px-6 items-center justify-center sm:justify-start md:justify-end z-10 text-black font-bold text-4xl sm:text-5xl lg:text-6xl tracking-widest">
        <Image
          src="/images/card-logo.svg"
          alt="logo"
          className="!w-24 sm:!w-32"
          width={100}
          height={100}
        />
      </div>

      <div className="absolute bottom-4 font-inter left-4 z-10 text-black text-sm">
        CARD NO.
        <div className="font-semibold text-[16px] font-inter">HL28GR098K2</div>
      </div>

      <div className="flex justify-end relative z-20">
        <Link href="/dashboard/loyalty" passHref>
          <Button
            variant="outlined"
            size="small"
            className="!text-xs !bg-white !text-[#5F5F5F] !font-thin !px-4 !font-maven !rounded-full !border-[#C1C1C1]"
          >
            Customize
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default ZeekCard;
