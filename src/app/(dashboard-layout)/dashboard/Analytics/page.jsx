"use client";

import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AnalyticsCard from "@/components/Analytics/AnalyticsCard/AnalyticsCard";
import BarChart from "@/components/Analytics/BarChart/BarChart";
import PolarChart from "@/components/Analytics/PolarChart/PolarChart";
import GroupedBarChart from "@/components/Analytics/GroupedBarChart/GroupedBarChart";
import RadialBarChart from "@/components/Analytics/RadialBarChart/RadialBarChart";
import LineChart from "@/components/Analytics/LineChart/LineChart";
import GradientChart from "@/components/Analytics/GradientChart/GradientChart";
import SplineAreaChart from "@/components/Analytics/SplineAreaChart/SplineAreaChart";
import TimeBarChart from "@/components/Analytics/TimeBarChart/TimeBarChart";

const boxSX = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #D9D9D9",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  padding: "8px 16px",
};

const typographySX = {
  color: "#000000",
  fontWeight: 700,
  fontSize: "14px",
};

const totalSalesSeries = [
  {
    name: "Actual",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Target",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
];

const customerEngagementSeries = [
  {
    name: "This Month",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Last Month",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
];

const customerRetentionSeries = [
  {
    name: "18-19",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "30-50",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: "50+",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
];

const salesByBranch = [
  { name: "Branch 1", data: 42 },
  { name: "Branch 2", data: 47 },
  { name: "Branch 3", data: 52 },
];

const salesByTier = [
  { name: "Bronze", data: 50 },
  { name: "Silver", data: 20 },
  { name: "Gold", data: 18 },
  { name: "Platinum", data: 12 },
];

const salesByCategoryData = {
  labels: [
    "Coffee",
    "Cold Beverage",
    "Specialty Drinks",
    "Teas & Infusions",
    "Pastries & Snacks",
    "Sandwiches & Salads",
  ],
  series: [
    {
      data: [44, 55, 41, 64, 22, 43],
      name: "Actual",
    },
    {
      data: [53, 32, 33, 52, 13, 44],
      name: "Target",
    },
  ],
};

const cardsAndRewardsData = [
  {
    name: "Loyalty Card Issued",
    data: [0, 41, 35, 51, 49, 62, 69, 91, 49],
  },
  {
    name: "Rewards Redeemed",
    data: [100, 34, 13, 56, 77, 88, 99, 77, 45],
  },
];

const reviewsData = [
  {
    name: "4.0+",
    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
  },
  {
    name: "3.0+",
    data: [4, 6, 20, 19, 12, 8, 15, 7, 11, 18, 6, 3, 22, 9, 12, 7, 19, 5],
  },
  {
    name: "less than 3.0",
    data: [1, 2, 1, 0, 3, 2, 1, 1, 0, 1, 2, 3, 22, 9, 12, 7, 19, 5],
  },
];

const customerVisitByGenderData = [
  {
    name: "Male",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "Female",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

const busiestTime = [
  {
    name: "Closed",
    data: [
      2, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 100, 120, 130, 110, 90, 60,
      40, 30, 20, 10, 5,
    ],
  },
  {
    name: "Busiest",
    data: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  },
];

const averageSpendData = [
  {
    name: "AED 0-50",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "AED 50-100",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: "AED 100+",
    data: [35, 41, 36, 26, 31, 33, 24, 19, 21],
  },
];

const analyticsCard = [
  {
    id: 1,
    title: "Total Sales",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <BarChart chartSeries={totalSalesSeries} />,
    amount: "AED 12,345",
  },
  {
    id: 2,
    title: "Sales by Branch",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <PolarChart salesData={salesByBranch} />,
    amount: "AED 12,345",
  },
  {
    id: 3,
    title: "Sales by Category",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <GroupedBarChart salesByCategoryData={salesByCategoryData} />,
    amount: "AED 12,345",
  },
  {
    id: 4,
    title: "Sales by Tier",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <RadialBarChart salesByTier={salesByTier} />,
    amount: "AED 12,345",
  },
];

const engagementMetricsData = [
  {
    id: 1,
    title: "Customer Engagement Rate",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <BarChart chartSeries={customerEngagementSeries} />,
    amount: "AED 12,345",
  },
  {
    id: 2,
    title: "Cards And Rewards",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <LineChart series={cardsAndRewardsData} />,
    amount: "AED 12,345",
  },
  {
    id: 3,
    title: "Total Sales",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <RadialBarChart salesByTier={salesByTier} />,
    amount: "AED 12,345",
  },
  {
    id: 4,
    title: "Reviews",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <GradientChart series={reviewsData} />,
    amount: "AED 12,345",
  },
];

const demographicsData = [
  {
    id: 1,
    title: "Customers Visit by Age",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <BarChart chartSeries={customerRetentionSeries} />,
    amount: "AED 12,345",
  },
  {
    id: 2,
    title: "Customers Visit by Gender",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <SplineAreaChart series={customerVisitByGenderData} />,
    amount: "AED 12,345",
  },
  {
    id: 3,
    title: "Busiest Time",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <TimeBarChart series={busiestTime} />,
    amount: "AED 12,345",
  },
  {
    id: 4,
    title: "Average Spend",
    subtitle: "Oct 1 - Oct 31, 2024",
    chart: <BarChart chartSeries={averageSpendData} />,
    amount: "AED 12,345",
  },
];

const Analytics = () => {
  const salesScrollRef = useRef(null);
  const engagementScrollRef = useRef(null);
  const demographicsScrollRef = useRef(null);

  const setupScrollHandlers = (scrollRef) => ({
    handleMouseDown: (e) => {
      const container = scrollRef.current;
      container.isDown = true;
      container.startX = e.pageX - container.offsetLeft;
      container.scrollLeftStart = container.scrollLeft;
      container.classList.add("scrolling");
    },
    handleMouseLeaveOrUp: () => {
      const container = scrollRef.current;
      container.isDown = false;
      container.classList.remove("scrolling");
    },
    handleMouseMove: (e) => {
      const container = scrollRef.current;
      if (!container.isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const distance = x - container.startX;
      container.scrollLeft = container.scrollLeftStart - distance;
    },
  });

  const salesHandlers = setupScrollHandlers(salesScrollRef);
  const engagementHandlers = setupScrollHandlers(engagementScrollRef);
  const demographicsHandlers = setupScrollHandlers(demographicsScrollRef);

  return (
    <div className="p-4">
      <Box className="flex flex-wrap items-center justify-between p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h5" fontWeight="bold" fontSize="40px">
            Analytics
          </Typography>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <Box sx={boxSX}>
            <Typography sx={typographySX}>Oct 01 - Oct 31</Typography>
            <KeyboardArrowDownIcon
              sx={{ color: "#000000" }}
              fontSize="medium"
            />
          </Box>
        </div>
      </Box>
      <Box className="flex flex-col px-10 py-4">
        <div className="flex items-center w-full sm:w-auto py-2">
          <Typography variant="h5" fontWeight="bold" fontSize="24px">
            Sales and Revenue
          </Typography>
        </div>
        <div
          className="w-full sm:w-auto py-4 overflow-x-hidden cursor-pointer"
          ref={salesScrollRef}
          onMouseDown={salesHandlers.handleMouseDown}
          onMouseLeave={salesHandlers.handleMouseLeaveOrUp}
          onMouseUp={salesHandlers.handleMouseLeaveOrUp}
          onMouseMove={salesHandlers.handleMouseMove}
        >
          <div className="grid grid-flow-col gap-11 auto-cols-[450px]">
            {analyticsCard.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <AnalyticsCard
                  title={item.title}
                  subtitle={item.subtitle}
                  chart={item.chart}
                  amount={item.amount}
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
      <Box className="flex flex-col px-10 py-4">
        <div className="flex items-center w-full sm:w-auto py-2">
          <Typography variant="h5" fontWeight="bold" fontSize="24px">
            Engagement Metrics
          </Typography>
        </div>
        <div
          className="w-full sm:w-auto py-4 overflow-x-hidden cursor-pointer"
          ref={engagementScrollRef}
          onMouseDown={engagementHandlers.handleMouseDown}
          onMouseLeave={engagementHandlers.handleMouseLeaveOrUp}
          onMouseUp={engagementHandlers.handleMouseLeaveOrUp}
          onMouseMove={engagementHandlers.handleMouseMove}
        >
          <div className="grid grid-flow-col gap-11 auto-cols-[450px]">
            {engagementMetricsData.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <AnalyticsCard
                  title={item.title}
                  subtitle={item.subtitle}
                  chart={item.chart}
                  amount={item.amount}
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
      <Box className="flex flex-col px-10 py-4">
        <div className="flex items-center w-full sm:w-auto py-2">
          <Typography variant="h5" fontWeight="bold" fontSize="24px">
            Demographics
          </Typography>
        </div>
        <div
          className="w-full sm:w-auto py-4 overflow-x-hidden cursor-pointer"
          ref={demographicsScrollRef}
          onMouseDown={demographicsHandlers.handleMouseDown}
          onMouseLeave={demographicsHandlers.handleMouseLeaveOrUp}
          onMouseUp={demographicsHandlers.handleMouseLeaveOrUp}
          onMouseMove={demographicsHandlers.handleMouseMove}
        >
          <div className="grid grid-flow-col gap-11 auto-cols-[450px]">
            {demographicsData.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <AnalyticsCard
                  title={item.title}
                  subtitle={item.subtitle}
                  chart={item.chart}
                  amount={item.amount}
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Analytics;
