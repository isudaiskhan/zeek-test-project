// import React from "react";
// import { Card, CardContent, Typography } from "@mui/material";

// const SuperAdmin = () => {
//   // Dummy data (Replace with API data later)
//   const metrics = {
//     totalActiveBusinesses: 1200,
//     newBusinesses: {
//       daily: 15,
//       weekly: 100,
//       monthly: 400,
//     },
//     churnRate: "5%",
//     topBusinesses: ["Business A", "Business B", "Business C"],
//     engagementScore: 85,
//   };

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {/* Total Active Businesses */}
//       <Card className="!shadow-md">
//         <CardContent>
//           <Typography
//             variant="h6"
//             className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
//           >
//             Total Active Businesses
//           </Typography>
//           <Typography variant="h4" className="text-[#838383] !font-semibold">
//             {metrics.totalActiveBusinesses}
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* New Businesses Onboarded */}
//       <Card className="!shadow-lg">
//         <CardContent>
//           <Typography
//             className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
//             variant="h6"
//           >
//             New Businesses Onboarded
//           </Typography>
//           <Typography className="text-[#838383] " variant="body1">
//             Daily: {metrics.newBusinesses.daily}
//           </Typography>
//           <Typography className="text-[#838383] " variant="body1">
//             Weekly: {metrics.newBusinesses.weekly}
//           </Typography>
//           <Typography className="text-[#838383] " variant="body1">
//             Monthly: {metrics.newBusinesses.monthly}
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Business Churn Rate */}
//       <Card className="!shadow-lg">
//         <CardContent>
//           <Typography
//             className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
//             variant="h6"
//           >
//             Business Churn Rate
//           </Typography>
//           <Typography variant="h4" className="text-[#838383] !font-semibold">
//             {metrics.churnRate}
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Top-Performing Businesses */}
//       <Card className="!shadow-lg !col-span-2">
//         <CardContent>
//           <Typography
//             className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
//             variant="h6"
//           >
//             Top-Performing Businesses
//           </Typography>
//           <ul className="list-disc pl-4">
//             {metrics.topBusinesses.map((business, index) => (
//               <li key={index} className="text-[#838383] ">
//                 {business}
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Business Engagement Score */}
//       <Card className="!shadow-lg">
//         <CardContent>
//           <Typography
//             className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
//             variant="h6"
//           >
//             Business Engagement Score
//           </Typography>
//           <Typography variant="h4" className="text-[#838383] !font-semibold">
//             {metrics.engagementScore}%
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SuperAdmin;

"use client";
import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Business,
  Star,
  Assessment,
  Autorenew,
  BusinessCenter,
} from "@mui/icons-material";
import Chart from "react-apexcharts";

const SuperAdmin = () => {
  const metrics = {
    totalActiveBusinesses: 1200,
    newBusinesses: { daily: 15, weekly: 100, monthly: 400 },
    churnRate: "5%",
    topBusinesses: ["Business A", "Business B", "Business C"],
    engagementScore: 85,
  };

  const [churnChartData] = useState({
    labels: ["Active Businesses", "Churned Businesses"],
    colors: ["#FFDAC5", "#F44336"],
    legend: { position: "bottom" },
  });

  const churnSeries = [95, 5];

  const [engagementChartData] = useState({
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        track: {
          background: "#f0f0f0",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "24px",
            fontWeight: 700,
            color: "#000",
            formatter: (val) => `${val}%`,
            offsetY: 8,
          },
        },
        stroke: {
          lineCap: "round",
        },
      },
    },
    colors: ["#ffbe99"],
    labels: ["Engagement Score"],
  });

  const engagementSeries = [metrics.engagementScore];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Total Active Businesses */}
      <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
        <CardContent className="relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              <Business className="text-[#FF9A62]" fontSize="large" />
            </div>
            <div></div>
            <Typography variant="h6" className="font-semibold">
              Active Businesses
            </Typography>
          </div>
          <Typography variant="h4" className="font-bold px-2">
            {metrics.totalActiveBusinesses}
          </Typography>
        </CardContent>
      </Card>

      {/* New Businesses Onboarded */}
      <Card
        sx={{ borderRadius: "16px", boxShadow: 3 }}
        className="lg:col-span-2"
      >
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              <BusinessCenter className="text-[#FF9A62]" fontSize="large" />
            </div>
            <Typography variant="h6" className="font-semibold">
              New Businesses
            </Typography>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Typography variant="h5" className="font-bold">
                {metrics.newBusinesses.daily}
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                Daily
              </Typography>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Typography variant="h5" className="font-bold">
                {metrics.newBusinesses.weekly}
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                Weekly
              </Typography>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Typography variant="h5" className="font-bold">
                {metrics.newBusinesses.monthly}
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                Monthly
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Churn Rate */}
      <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              {" "}
              <Assessment className="text-[#FF9A62]" fontSize="large" />{" "}
            </div>
            <Typography variant="h6" className="font-semibold">
              Business Churn Rate
            </Typography>
          </div>
          <Chart
            options={churnChartData}
            series={churnSeries}
            type="pie"
            height={250}
          />
        </CardContent>
      </Card>

      {/* Top-Performing Businesses */}
      <Card
        sx={{ borderRadius: "16px", boxShadow: 3 }}
        className="lg:col-span-2"
      >
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              <Star className="text-[#FF9A62]" fontSize="large" />
            </div>
            <Typography variant="h6" className="font-semibold">
              Top-Performing Businesses
            </Typography>
          </div>
          <div className="space-y-4">
            {metrics.topBusinesses.map((business, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#F8F8F8] text-[#FF9A62] rounded-full text-sm">
                    #{index + 1}
                  </span>
                  <Typography variant="body1">{business}</Typography>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Business Engagement Score */}
      <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
        {" "}
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              <Autorenew className="text-[#FF9A62]" fontSize="large" />
            </div>
            <Typography variant="h6" className="font-semibold">
              Engagement Score
            </Typography>
          </div>
          <Chart
            options={engagementChartData}
            series={engagementSeries}
            type="radialBar"
            height={200}
          />
          <Typography
            variant="caption"
            className="text-green-600 flex items-center mt-2 justify-center"
          ></Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdmin;
