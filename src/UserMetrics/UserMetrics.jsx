// import React, { useState } from "react";
// import { Card, CardContent, Typography } from "@mui/material";
// import Chart from "react-apexcharts";

// const UserMetrics = () => {
//   const [engagementChartData] = useState({
//     chart: { type: "line", toolbar: { show: false } },
//     xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
//     stroke: { curve: "smooth" },
//     colors: ["#FF7325"],
//   });

//   const engagementSeries = [
//     { name: "Users", data: [400, 600, 800, 700, 900, 1150, 1000] },
//   ];

//   const [churnChartData] = useState({
//     labels: ["Active Users", "Churned Users"],
//     colors: ["#FFDAC5", "#F44336"],
//     legend: { position: "bottom" },
//   });

//   const churnSeries = [95, 5];

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {/* Total Users */}
//       <Card className="!shadow-md">
//         <CardContent>
//           <Typography
//             variant="h6"
//             className="text-black !font-sans !mb-3 !text-2xl !font-semibold
//           "
//           >
//             Total Users
//           </Typography>
//           <Typography variant="h4" className="text-[#838383] !font-bold">
//             25,000
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* New Users (Daily, Weekly, Monthly) */}
//       <Card className="!shadow-md">
//         <CardContent>
//           <Typography
//             variant="h6"
//             className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
//           >
//             New Users
//           </Typography>
//           <Typography variant="body1" className="text-[#838383]">
//             Daily: 1,200
//           </Typography>
//           <Typography variant="body1" className="text-[#838383]">
//             Weekly: 8,400
//           </Typography>
//           <Typography variant="body1" className="text-[#838383]">
//             Monthly: 36,000
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Retention Rate */}
//       <Card className="!shadow-md">
//         <CardContent>
//           <Typography
//             variant="h6"
//             className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
//           >
//             User Retention Rate
//           </Typography>
//           <Typography variant="h4" className="text-[#838383] !font-bold">
//             85%
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Churn Rate with Pie Chart */}
//       <Card className="!shadow-md col-span-1">
//         <CardContent>
//           <Typography
//             variant="h6"
//             className="text-black !font-sans !mb-4 !text-2xl !font-semibold"
//           >
//             Churn Rate
//           </Typography>
//           <Chart
//             options={churnChartData}
//             series={churnSeries}
//             type="pie"
//             height={250}
//           />
//         </CardContent>
//       </Card>

//       {/* User Engagement Chart */}
//       <Card className="col-span-1 md:col-span-2 !shadow-md">
//         <CardContent>
//           <Typography
//             variant="h6"
//             className="text-black !font-sans !mb-4 !text-2xl !font-semibold"
//           >
//             User Engagement
//           </Typography>
//           <Chart
//             options={engagementChartData}
//             series={engagementSeries}
//             type="line"
//             height={250}
//           />
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UserMetrics;

"use client";
import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import {
  Assessment,
  Autorenew,
  BarChart,
  PeopleAlt,
  PersonAdd,
} from "@mui/icons-material";

const UserMetrics = () => {
  const dummyData = {
    totalActiveUsers: 25000,
    newUsers: { daily: 1200, weekly: 8400, monthly: 36000 },
    churnRate: "5%",
    topBusinesses: ["Business A", "Business B", "Business C"],
    retentionRateScore: 85,
  };
  const [engagementChartData] = useState({
    chart: { type: "line", toolbar: { show: false } },
    xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    stroke: { curve: "smooth" },
    colors: ["#FF7325"],
  });

  const engagementSeries = [
    { name: "Users", data: [400, 600, 800, 700, 900, 1150, 1000] },
  ];

  const [churnChartData] = useState({
    labels: ["Active Users", "Churned Users"],
    colors: ["#FFDAC5", "#F44336"],
    legend: { position: "bottom" },
  });

  const churnSeries = [95, 5];

  const [retentionRateChartData] = useState({
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

  const retentionRateSeries = [dummyData.retentionRateScore];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Total Users */}
      <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
        <CardContent className="relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              <PeopleAlt className="text-[#FF9A62]" fontSize="large" />
            </div>
            <div></div>
            <Typography variant="h6" className="font-semibold">
              Total Users
            </Typography>
          </div>
          <Typography variant="h4" className="font-bold px-2">
            {dummyData.totalActiveUsers}
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{ borderRadius: "16px", boxShadow: 3 }}
        className="lg:col-span-2"
      >
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              <PersonAdd className="text-[#FF9A62]" fontSize="large" />
            </div>
            <Typography variant="h6" className="font-semibold">
              New Users
            </Typography>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Typography variant="h5" className="font-bold">
                {dummyData.newUsers.daily}
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                Daily
              </Typography>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Typography variant="h5" className="font-bold">
                {dummyData.newUsers.weekly}
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                Weekly
              </Typography>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Typography variant="h5" className="font-bold">
                {dummyData.newUsers.monthly}
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                Monthly
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Retention Rate */}
      <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
        {" "}
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              <Autorenew className="text-[#FF9A62]" fontSize="large" />
            </div>
            <Typography variant="h6" className="font-semibold">
              User Retention Rate
            </Typography>
          </div>
          <Chart
            options={retentionRateChartData}
            series={retentionRateSeries}
            type="radialBar"
            height={200}
          />
          <Typography
            variant="caption"
            className="text-green-600 flex items-center mt-2 justify-center"
          ></Typography>
        </CardContent>
      </Card>

      {/* Churn Rate with Pie Chart */}
      <Card
        sx={{ borderRadius: "16px", boxShadow: 3 }}
        className="col-span-1 md:col-span-2"
      >
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              {" "}
              <Assessment className="text-[#FF9A62]" fontSize="large" />{" "}
            </div>
            <Typography variant="h6" className="font-semibold">
              Churn Rate
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

      {/* User Engagement Chart */}
      <Card
        sx={{ borderRadius: "16px", boxShadow: 3 }}
        className="col-span-1 md:col-span-3"
      >
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-2.5 bg-[#F8F8F8] rounded-full">
              {" "}
              <BarChart className="text-[#FF9A62]" fontSize="large" />{" "}
            </div>
            <Typography variant="h6" className="font-semibold">
              User Engagement
            </Typography>
          </div>
          <Chart
            options={engagementChartData}
            series={engagementSeries}
            type="line"
            height={250}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserMetrics;
