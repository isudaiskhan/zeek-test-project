"use client";

import React, { useState } from "react";
import { Avatar, Button, IconButton, Typography } from "@mui/material";
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  ExpandMore as ExpandMoreIcon,
  North as NorthIcon,
  StarRounded as StarRoundedIcon,
} from "@mui/icons-material";

import ReactApexChart from "react-apexcharts";
import Image from "next/image";

const Dashboard = () => {
  const [state, setState] = useState({
    series: [45, 65, 60],
    options: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: ["Rose A", "Rose C", "Rose D"],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: false,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
      colors: ["#FFF4C6", "#FFDAC5", "#FFC3BE"],
    },
  });
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
            <IconButton
              size="small"
              className="!text-black !p-2.5 !bg-[#F0F0F0]"
            >
              <ArrowForwardIosIcon fontSize="small" className="!text-2xl" />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="rounded-2xl shadow-lg mt-5 bg-white p-6 w-full flex-1 mx-auto">
        <div className="flex items-start justify-between w-full">
          {/* Left Side - Image */}
          <div className="flex-shrink-0 bg-[#F8F8F8] rounded-full px-4 py-2.5">
            <Image
              src="/images/sale-item.svg"
              alt="Icon"
              className="!w-10 !mt-1"
              layout="responsive"
              width={50}
              height={50}
            />
          </div>

          {/* Center - Text */}
          <Typography
            variant="subtitle2"
            className="text-black !font-sans !text-lg !mt-3 !ps-4 !font-semibold flex-grow"
          >
            Top Sale Items
          </Typography>

          {/* Right Side - Button */}
          <div>
            <Button
              variant="outlined"
              size="small"
              className="!mt-3 !text-xs !text-[#5F5F5F] !font-thin !px-4 !font-maven !rounded-full !border-[#C1C1C1]"
            >
              See Details
            </Button>
          </div>
        </div>

        {/* Chart Section */}
        <div className="flex justify-center">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="polarArea"
            width={400}
          />
        </div>
      </div>

      <div className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
        {/* Outer Container */}
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-lg p-5">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6" className="text-black !font-sans !text-lg">
              Recent Reviews
            </Typography>
            <Button
              variant="outlined"
              size="small"
              className="!text-xs !text-[#5F5F5F] !font-thin !px-5 !font-maven !rounded-full !border-[#C1C1C1]"
            >
              See All
            </Button>
          </div>

          {/* Review Content */}
          <div className="bg-white rounded-xl p-5 shadow-md shadow-gray-200">
            {/* Profile & Name */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                {/* Avatar */}
                <Avatar className="!bg-[#63CEBA] !w-12 !h-12">Z</Avatar>
                <Typography className="text-black !font-maven">
                  Ziyad Mahomed
                </Typography>
              </div>
              {/* Initial Icon */}
              <Avatar className="!bg-[#AF855A] !w-8 !h-8 !text-white !font-medium">
                Z
              </Avatar>
            </div>

            {/* Star Rating */}
            <div className="flex flex-wrap space-x-1 px-14 mb-3">
              <StarRoundedIcon className="text-[#FFD233]" />
              <StarRoundedIcon className="text-[#FFD233]" />
              <StarRoundedIcon className="text-[#FFD233]" />
              <StarRoundedIcon className="text-[#FFD233]" />
              <StarRoundedIcon className="text-[#888888]" />
            </div>

            {/* Review Text */}
            <Typography className="text-black !text-sm !mt-5 !font-maven leading-relaxed">
              Cozy atmosphere and great coffee! Friendly staff, though it can
              get a bit crowded during peak hours.
            </Typography>
          </div>

          {/* Reply Button */}
          <div className="flex justify-start mt-4">
            <Button
              variant="outlined"
              size="small"
              className="!text-xs !text-[#5F5F5F] !font-thin !px-6 !font-maven !rounded-full !border-[#C1C1C1]"
            >
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
