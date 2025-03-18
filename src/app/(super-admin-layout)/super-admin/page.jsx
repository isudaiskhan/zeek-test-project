import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const SuperAdmin = () => {
  // Dummy data (Replace with API data later)
  const metrics = {
    totalActiveBusinesses: 1200,
    newBusinesses: {
      daily: 15,
      weekly: 100,
      monthly: 400,
    },
    churnRate: "5%",
    topBusinesses: ["Business A", "Business B", "Business C"],
    engagementScore: 85,
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Total Active Businesses */}
      <Card className="!shadow-md">
        <CardContent>
          <Typography
            variant="h6"
            className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
          >
            Total Active Businesses
          </Typography>
          <Typography variant="h4" className="text-[#838383] !font-semibold">
            {metrics.totalActiveBusinesses}
          </Typography>
        </CardContent>
      </Card>

      {/* New Businesses Onboarded */}
      <Card className="!shadow-lg">
        <CardContent>
          <Typography
            className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
            variant="h6"
          >
            New Businesses Onboarded
          </Typography>
          <Typography className="text-[#838383] " variant="body1">
            Daily: {metrics.newBusinesses.daily}
          </Typography>
          <Typography className="text-[#838383] " variant="body1">
            Weekly: {metrics.newBusinesses.weekly}
          </Typography>
          <Typography className="text-[#838383] " variant="body1">
            Monthly: {metrics.newBusinesses.monthly}
          </Typography>
        </CardContent>
      </Card>

      {/* Business Churn Rate */}
      <Card className="!shadow-lg">
        <CardContent>
          <Typography
            className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
            variant="h6"
          >
            Business Churn Rate
          </Typography>
          <Typography variant="h4" className="text-[#838383] !font-semibold">
            {metrics.churnRate}
          </Typography>
        </CardContent>
      </Card>

      {/* Top-Performing Businesses */}
      <Card className="!shadow-lg !col-span-2">
        <CardContent>
          <Typography
            className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
            variant="h6"
          >
            Top-Performing Businesses
          </Typography>
          <ul className="list-disc pl-4">
            {metrics.topBusinesses.map((business, index) => (
              <li key={index} className="text-[#838383] ">
                {business}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Business Engagement Score */}
      <Card className="!shadow-lg">
        <CardContent>
          <Typography
            className="text-black !font-sans !mb-3 !text-2xl !font-semibold"
            variant="h6"
          >
            Business Engagement Score
          </Typography>
          <Typography variant="h4" className="text-[#838383] !font-semibold">
            {metrics.engagementScore}%
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdmin;
