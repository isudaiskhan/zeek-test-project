"use client";

import React, { useState } from "react";
import {
  Avatar,
  Card,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  ExpandMore as ExpandMoreIcon,
  North as NorthIcon,
  StarRounded as StarRoundedIcon,
} from "@mui/icons-material";

import ReactApexChart from "react-apexcharts";
import Image from "next/image";

const Dashboard = () => {
  const [polarChart, setPolarChart] = useState({
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
        show: false,
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

  // Chart Configuration
  const lineChartOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      show: true, // Enable grid
      borderColor: "#D7D7D7", // Solid gridline color
      strokeDashArray: 0, // Solid lines (no dashes)
      position: "back", // Gridlines appear behind the chart
      xaxis: {
        lines: { show: false }, // Hide vertical gridlines
      },
      yaxis: {
        lines: { show: true }, // Show horizontal gridlines
      },
    },
    yaxis: {
      min: 0,
      max: 90,
      tickAmount: 14,
      labels: {
        style: { colors: "#999999" },
        formatter: function (value) {
          // Show only center value '54'
          return value === 54 ? "54" : "";
        },
      },
      axisBorder: { show: true, color: "#D2D2D2", width: 3 },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      axisBorder: {
        show: true,
        color: "#D2D2D2", // Border color
        height: 3, // Border thickness
      },
      axisTicks: {
        show: false, // Hide ticks if not needed
      },
      labels: {
        style: {
          colors: "#000",
          fontSize: "12px",
        },
      },
    },
    colors: ["#FF7325"],
    tooltip: { enabled: true },
  };

  const lineChartSeries = [
    { name: "Cards", data: [10, 40, 45, 50, 60, 70, 90] },
  ];
  
  
  

  // Data for the bar chart (customer tiers)
  const barChartOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    grid: {
      show: true, // Enable grid
      borderColor: "#f0f0f0", // Solid gridline color
      strokeDashArray: 0, // Solid lines (no dashes)
      position: "back", // Gridlines appear behind the chart
      xaxis: {
        lines: { show: false }, // Hide vertical gridlines
      },
      yaxis: {
        lines: { show: true }, // Show horizontal gridlines
      },
    },
    yaxis: {
      min: 0,
      max: 200,
      tickAmount: 6,
      labels: {
        style: { colors: "#999999" },
        
      },
      
      axisBorder: { show: true, color: "#E0E0E0", width: 2 },
    },
    
    xaxis: {
      categories: ["Tier 1", "Tier 2", "Tier 3", "Tier 4"],
      axisBorder: {
        show: true,
        color: "#E0E0E0", // Border color
        height: 2, // Border thickness
      },
      axisTicks: {
        show: false, // Hide ticks if not needed
      },
      labels: {
        style: {
          colors: "#999999",
          fontSize: "12px",
        },
      },
    },
    plotOptions: {
      bar: { borderRadius: 3, columnWidth: "8%" },
    },
    dataLabels: {
      enabled: false, // This will hide the numbers inside the bars
    },
    colors: ["#ff9f43", "#ffcc33", "#f78da7", "#777777"],
  };

  const barChartSeries = [{ name: "Customers", data: [180, 150, 60, 30] }];


  const barScatterChart = {
    series: [
      { name: "Bar Data", type: "column", data: [10, 13, 11, 7, 15, null, null] },
      { name: "Dot Data", type: "scatter", data: [null, null, null, null, null, 0, 0] }
    ],
    options: {
      chart: {
        height: 200,
        type: "line",
        stacked: false,
        toolbar: {
          show: false, // Hide the toolbar icons
        },
      },
      colors: ["#FFDAC5", "#9E9E9E", "#000"],
      plotOptions: {
        bar: { columnWidth: "18%", borderRadius: 5 },
      },
      stroke: { width: [0, 0] },
      markers: { size: 6 },
      xaxis: {
        categories: [7, 8, 9, 10, 11, 12, 13],
        labels: {
          show: true, // Remove x-axis numbers
        },
        axisBorder: {
          show: false, // Remove bottom border
        },
        axisTicks: {
          show: false, // Remove bottom ticks
        },
      },
      yaxis: { show: false }, // Hide y-axis
      grid: {
        show: false, // Remove grid lines
      },
      tooltip: { enabled: false }, // Disable tooltips
      legend: { show: false }, // Hide legend
      
    },
    
  };
  

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
            <div className="">
   

   <ReactApexChart
     options={barScatterChart.options}
     series={barScatterChart.series}
     type="line"
     height={200}
   />
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
    
      <div className="flex flex-col lg:flex-row gap-6">
  {/* Left Side: Top Sale Items and Recent Reviews */}
  <div className="lg:w-[40%] flex flex-col gap-6">
    {/* Top Sale Items */}
    <div className="rounded-2xl shadow-lg mt-5 bg-white p-6 flex flex-col justify-start">
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
      <div className="flex justify-center -mt-14">
        <ReactApexChart
          options={polarChart.options}
          series={polarChart.series}
          type="polarArea"
          width={350}
        />
      </div>
    </div>

    {/* Recent Reviews */}
    <div className="rounded-2xl shadow-lg bg-white p-8 flex flex-col justify-start">
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
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <Avatar className="!bg-[#63CEBA] !w-12 !h-12">Z</Avatar>
              <Typography className="text-black !font-maven">
                Ziyad Mahomed
              </Typography>
            </div>
            <Avatar className="!bg-[#AF855A] !w-8 !h-8 !text-white !font-medium">
              Z
            </Avatar>
          </div>

          <div className="flex flex-wrap space-x-1 px-14 mb-3">
            <StarRoundedIcon className="text-[#FFD233]" />
            <StarRoundedIcon className="text-[#FFD233]" />
            <StarRoundedIcon className="text-[#FFD233]" />
            <StarRoundedIcon className="text-[#FFD233]" />
            <StarRoundedIcon className="text-[#888888]" />
          </div>

          <Typography className="text-black !text-sm !mt-5 !font-maven leading-relaxed">
            Cozy atmosphere and great coffee! Friendly staff, though it can get
            a bit crowded during peak hours.
          </Typography>
        </div>

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

  {/* Right Side: Card Details */}
  <div className="lg:w-[60%] mt-5 bg-white p-6 rounded-2xl shadow-lg flex-1">
    <Typography variant="h6" className="!mb-4 !font-sans !text-lg">
      Card Details
    </Typography>
    <Card className="!p-5 !shadow-lg !rounded-2xl !bg-[#F2F2F2]">
      <div className="flex flex-col lg:flex-row gap-6">
        <Box className="!p-3 w-full bg-white rounded-xl shadow-md">
          <div className="flex justify-between pt-3 px-5">
            <Typography variant="body1" className="!font-sans">
              Cards distributed this week
            </Typography>
            <Button
              variant="outlined"
              size="small"
              className="!text-xs !text-[#5F5F5F] !font-thin !px-4 !font-maven !rounded-full !border-[#C1C1C1]"
            >
              See Details
            </Button>
          </div>
          <ReactApexChart
            options={lineChartOptions}
            series={lineChartSeries}
            type="area"
            height={250}
          />
        </Box>
      </div>

      <div className="flex flex-wrap gap-4 mt-5">
        <Box className="relative flex-1 my-auto p-6 rounded-lg h-60 shadow-lg">
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
            <div className="font-semibold text-[16px] font-inter">
              HL28GR098K2
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              variant="outlined"
              size="small"
              className="!text-xs !bg-white !text-[#5F5F5F] !font-thin !px-4 !font-maven !rounded-full !border-[#C1C1C1]"
            >
              Customize
            </Button>
          </div>
        </Box>

        <div className="lg:w-[60%] w-full">
          <Box className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex justify-between mb-2">
              <Typography variant="body1" className="!font-sans text-[#777777]">
                Customer Tiers
              </Typography>
              <Button
              variant="outlined"
              size="small"
              className="!text-xs !text-[#5F5F5F] !font-thin !px-4 !font-maven !rounded-full !border-[#C1C1C1]"
            >
              See Details
            </Button>
            </div>
            <ReactApexChart
              options={barChartOptions}
              series={barChartSeries}
              type="bar"
              height={220}
            />
          </Box>
        </div>
      </div>
    </Card>
  </div>
</div>

      
      
    
      {/* </div> */}


    
      {/* </div> */}
    </div>

    
  );
};

export default Dashboard;
