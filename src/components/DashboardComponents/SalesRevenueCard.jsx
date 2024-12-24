import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  ExpandMore as ExpandMoreIcon,
  North as NorthIcon,
} from "@mui/icons-material";

import ReactApexChart from "react-apexcharts";
import Image from "next/image";

const SalesRevenueCard = () => {
  // First bar chart
  const barScatterChart = {
    series: [
      {
        name: "Bar Data",
        type: "column",
        data: [10, 13, 11, 7, 15, null],
      },
      {
        name: "Dot Data",
        type: "scatter",
        data: [null, null, null, null, null, 0, 0],
      },
    ],
    options: {
      chart: {
        height: 200,
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      colors: ["#FFDAC5", "#9E9E9E", "#000"],
      plotOptions: {
        bar: {
          columnWidth: "23%",
          borderRadius: 5,
          colors: {
            ranges: [
              {
                from: 15,
                to: 15,
                color: "#FF9A62",
              },
            ],
          },
        },
      },
      stroke: { width: [0, 0] },
      markers: { size: 6 },
      xaxis: {
        categories: [7, 8, 9, 10, 11, 12, 13],
        labels: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: { show: false },
      grid: {
        show: false,
      },
      tooltip: { enabled: false },
      legend: { show: false },
    },
  };
  return (
    <>
      {/* First Card - Sales Revenue */}
      <div className="flex-1 rounded-2xl shadow-lg bg-white p-6 flex flex-col lg:flex-row gap-8">
        <div className="lg:pe-5">
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
        <div className="relative flex-1 my-auto h-[14rem] mb-8">
          {/* Backside Card */}
          <div className="absolute inset-0 top-0 -mt-4 left-[44px] right-[44px] bg-[#D89C7C] rounded-xl shadow-lg h-[16.5rem]"></div>

          <div className="relative flex-1 bg-gradient-to-b from-[#FFD1B4] to-[#FFBFA2] rounded-2xl p-5 shadow-md">
            <div className="flex flex-col items-center relative z-10">
              <div className="relative w-full flex items-start space-x-4 z-10">
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

                <div className="relative w-full px-1 mt-5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Typography className="!font-maven !text-lg text-black">
                        9%
                      </Typography>
                      <NorthIcon className="!ml-2 p-[3px] !text-lg !rounded-full !bg-[#FFE6D9] text-[#0FA958]" />
                    </div>

                    <IconButton
                      size="small"
                      className="!bg-[#FFE6D9] shadow-md hover:shadow-lg"
                    >
                      <ExpandMoreIcon className="text-black" />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Sales Section */}
        <div className="lg:w-[270px]">
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
    </>
  );
};

export default SalesRevenueCard;
