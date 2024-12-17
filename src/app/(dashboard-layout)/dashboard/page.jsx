import { Box, Button, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import NorthIcon from "@mui/icons-material/North";
const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* First Card - Sales Revenue */}
        <div className="flex-1 rounded-2xl shadow-lg bg-white p-6 flex flex-col lg:flex-row gap-8">
          {/* Sales Revenue Section */}
          <div className="">
            <Typography className="text-black !text-lg !font-semibold !font-sans !mb-6">
              Sales Revenue
            </Typography>
            <Typography className="text-black !text-2xl !font-thin !font-inter">
              AED
            </Typography>
            <Typography
              variant="h2"
              className="!font-bold !font-inter text-gray-900"
            >
              9.2K
            </Typography>
            <Typography
              variant="caption"
              className="text-[#888888] !font-maven !mt-4 block"
            >
              Week Sep 7-13
              <IconButton size="small" className="text-[#888888] !ms-3">
                <ArrowForwardIosIcon fontSize="inherit" />
              </IconButton>
            </Typography>
            <Button
              variant="outlined"
              size="small"
              className="!mt-3 !text-xs !text-[#5F5F5F] !font-thin !px-4 !font-maven !rounded-full !border-[#C1C1C1]"
            >
              See Details
            </Button>
          </div>

          {/* Middle Highlight Section */}
          <div className="relative flex-1 bg-gradient-to-b from-[#FFD1B4] to-[#FFBFA2] rounded-2xl p-6 shadow-md">
            <div className="absolute inset-0 -z-10 bg-[#D59C7D] rounded-2xl opacity-20"></div>
            <div className="flex flex-col items-center">
              {/* Middle Highlight Section */}
              {/* <div className="relative flex-1 bg-gradient-to-b from-[#FFD1B4] to-[#FFBFA2] rounded-2xl p-6 shadow-xl overflow-hidden"> */}
              {/* Background Empty Card */}
              <div className="absolute -top-3 -left-3 w-full h-full bg-white rounded-2xl shadow-lg -z-20"></div>

              {/* Outer Shadow Layer */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-[#D59C7D] opacity-20 scale-105"></div>

              {/* Row Content aligned to the Start */}
              <div className="relative w-full flex items-start space-x-4 z-10">
                {/* Custom Image as Icon */}
                <div className="bg-[#FFE6D9] p-1.5 rounded-full shadow-md">
                  <Image
                    src="/images/sales-revenue.svg"
                    className="rounded-full"
                    alt="Custom Icon"
                    width={35}
                    height={30}
                  />
                </div>

                {/* Title */}
                <div className="flex flex-col items-start">
                  <Typography
                    variant="body1"
                    className="text-black !font-maven !text-lg !leading-tight"
                  >
                    Received
                  </Typography>
                  <Typography className="text-black !font-maven !text-lg !leading-tight">
                    Today
                  </Typography>
                </div>
              </div>
              <div className="w-full px-2 mt-5">
                <Typography className="!font-inter !font-thin !text-lg">
                  AED
                </Typography>
                <Typography className="text-gray-900 !text-center !font-bold !text-4xl">
                  1109.44
                </Typography>

                <div className="relative w-full px-2 mt-5">
                  <div className="flex justify-between items-center">
                    {/* Left Section - 9% and Up Arrow */}
                    <div className="flex items-center">
                      <Typography className="!font-maven !text-lg text-black">
                        9%
                      </Typography>
                      <NorthIcon className="!ml-2 p-[3px] !text-lg !rounded-full !bg-[#FFE6D9] text-[#0FA958]" />
                    </div>

                    {/* Right Section - Expand More Icon */}
                    <IconButton
                      size="small"
                      className="!bg-[#FFE6D9] shadow-md hover:shadow-lg"
                    >
                      <ExpandMoreIcon className="text-black" />
                    </IconButton>
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
          </div>

          {/* Daily Sales Section */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <Typography
                variant="subtitle2"
                className="text-black !font-sans !text-lg !font-semibold !mb-2"
              >
                Daily Sales
              </Typography>
              <Button
                variant="outlined"
                size="small"
                className="!text-xs !text-[#5F5F5F] !font-thin !px-3 !font-maven !rounded-full !border-[#C1C1C1]"
              >
                View All
              </Button>
            </div>
            <Typography
              variant="caption"
              className="text-[#888888] !font-maven mb-3 block"
            >
              AED 1109.44 made today!
            </Typography>
            <div className="flex items-center justify-between gap-2 mt-4">
              {/* Bar 1 */}
              <div className="flex flex-col items-center">
                <div className="w-[8px] h-[68px] bg-[#FFDAC5] rounded-md"></div>
                <p className="text-xs mt-1 text-[#888888]">7</p>
              </div>

              {/* Bar 2 */}
              <div className="flex flex-col items-center">
                <div className="w-[8px] h-[96px] bg-[#FFDAC5] rounded-md"></div>
                <p className="text-xs mt-1 text-[#888888]">8</p>
              </div>

              {/* Bar 3 */}
              <div className="flex flex-col items-center">
                <div className="w-[8px] h-[85px] bg-[#FFDAC5] rounded-md"></div>
                <p className="text-xs mt-1 text-[#888888]">9</p>
              </div>

              {/* Bar 4 */}
              <div className="flex flex-col items-center">
                <div className="w-[8px] h-[42px] bg-[#FFDAC5] rounded-md"></div>
                <p className="text-xs mt-1 text-[#888888]">10</p>
              </div>

              {/* Bar 5 */}
              <div className="flex flex-col items-center">
                <div className="w-[9px] h-[123px] bg-[#FF9A62] rounded-md"></div>
                <p className="text-xs mt-1 text-[#888888]">11</p>
              </div>

              {/* Inactive Bar 6 */}
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-[#9E9E9E] rounded-md"></div>
                <p className="text-xs mt-1 text-[#888888]">12</p>
              </div>

              {/* Inactive Bar 7 */}
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-[#9E9E9E] rounded-md"></div>
                <p className="text-xs mt-1 text-[#888888]">13</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card - Account */}
        <div className="lg:w-[30%] rounded-2xl shadow-lg bg-white p-6 flex flex-col justify-between">
          <div>
            <Typography variant="subtitle2" className="text-gray-500 mb-2">
              Account
            </Typography>
            <Typography variant="h4" className="font-bold text-gray-800 mb-4">
              SA<span className="border-t-2 inline-block w-6 mx-1"></span>TO
            </Typography>
            <Typography variant="body2" className="text-gray-600 mb-1">
              Joined: <span className="font-medium">October 22, 2024</span>
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Plan: <span className="font-medium">Standard</span>
            </Typography>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Button
              variant="outlined"
              size="small"
              className="text-gray-600 border-gray-300 hover:border-gray-700 normal-case"
            >
              Change Plan
            </Button>
            <IconButton size="small" className="text-gray-600">
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
