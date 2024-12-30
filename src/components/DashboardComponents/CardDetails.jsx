import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ReactApexChart from "react-apexcharts";
import ZeekCard from "./ZeekCard";

const CardDetails = () => {
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
      show: true,
      borderColor: "#f2f2f2",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: { show: false },
      },
      yaxis: {
        lines: { show: true },
      },
    },
    yaxis: {
      min: 0,
      max: 90,
      tickAmount: 14,
      labels: {
        show: false,
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
        color: "#D2D2D2",
        height: 3,
      },
      axisTicks: {
        show: false,
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

    dataLabels: {
      enabled: true,
      style: {
        colors: ["#FF7325"],
        fontWeight: "bold",
        fontSize: "14px",
      },
      formatter: function (val, opts) {
        if (val === 54) {
          return "54";
        }
        return "";
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 2,
        blur: 3,
        opacity: 0.5,
      },
    },
  };

  const lineChartSeries = [
    { name: "Cards", data: [0, 40, 45, 54, 60, 70, 90] },
  ];

  const barChartOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    grid: {
      show: true,
      borderColor: "#f2f2f2",
      strokeDashArray: 0,
      position: "back",
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    yaxis: {
      min: 0,
      max: 180,
      tickAmount: 6,
      labels: {
        style: { colors: "#999999" },
        formatter: (val) => `${val}`,
      },
      axisBorder: { show: true, color: "#E0E0E0", width: 2 },
    },
    xaxis: {
      categories: ["", "", "", ""],
      axisBorder: { show: true, color: "#E0E0E0", height: 2 },
      axisTicks: { show: false },
      labels: { show: false },
    },
    plotOptions: {
      bar: { borderRadius: 3, columnWidth: "12%" },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF9A62"],
  };

  const barChartSeries = [{ name: "Customers", data: [180, 150, 60, 30] }];

  const images = [
    "/images/tier-1.svg",
    "/images/tier-2.svg",
    "/images/tier-3.svg",
    "/images/tier-4.svg",
  ];
  return (
    <div className="lg:w-[60%] mt-5 bg-white p-6 rounded-2xl shadow-lg flex-1">
      <Typography variant="h6" className="!mb-4 !font-sans !text-lg">
        Card Details
      </Typography>
      <Card className="sm:!p-5 !shadow-lg !rounded-2xl sm:!bg-[#F2F2F2]">
        <div className="flex flex-col lg:flex-row gap-6">
          <Box className="!p-3 w-full bg-white rounded-xl shadow-md">
            <div className="flex justify-between sm:px-5 px-2">
              <Typography
                variant="body1"
                className="!font-sans sm:!text-base !text-sm"
              >
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
              height={230}
            />
          </Box>
        </div>

        <div className="flex flex-wrap gap-4 mt-5">
          <ZeekCard />

          <div className="xl:w-[60%] w-full relative">
            <Box className="bg-white !p-4 rounded-xl shadow-md relative">
              <div className="flex justify-between mb-2">
                <Typography
                  variant="body1"
                  className="!font-sans text-[#777777]"
                >
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
                height={180}
              />
              <div className="absolute w-full bottom-4 ps-[45px] pe-[40px] flex justify-around">
                {images.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Label ${index + 1}`}
                    width={20}
                    height={20}
                  />
                ))}
              </div>
            </Box>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardDetails;
