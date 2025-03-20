"use client";
import ChurnRate from "@/components/SuperAdminComponents/UsersMetrics/ChurnRate/ChurnRate";
import EngagementChart from "@/components/SuperAdminComponents/UsersMetrics/EngagementChart/EngagementChart";
import NewUsers from "@/components/SuperAdminComponents/UsersMetrics/NewUsers/NewUsers";
import RetentionRate from "@/components/SuperAdminComponents/UsersMetrics/RetentionRate/RetentionRate";
import TotalUsers from "@/components/SuperAdminComponents/UsersMetrics/TotalUsers/TotalUsers";
import React from "react";

const UserMetrics = () => {
  const dummyData = {
    totalActiveUsers: 25000,
    newUsers: { daily: 1200, weekly: 8400, monthly: 36000 },
    churnRate: "5%",
    retentionRateScore: 85,
  };

  const engagementSeries = [
    { name: "Users", data: [400, 600, 800, 700, 900, 1150, 1000] },
  ];
  const engagementCategories = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const churnSeries = [95, 5];
  const churnLabels = ["Active Users", "Churned Users"];
  const churnColors = ["#FFDAC5", "#F44336"];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <TotalUsers total={dummyData.totalActiveUsers} />

      <NewUsers
        daily={dummyData.newUsers.daily}
        weekly={dummyData.newUsers.weekly}
        monthly={dummyData.newUsers.monthly}
      />

      <RetentionRate score={dummyData.retentionRateScore} />

      <ChurnRate
        series={churnSeries}
        labels={churnLabels}
        colors={churnColors}
      />

      <EngagementChart
        series={engagementSeries}
        categories={engagementCategories}
      />
    </div>
  );
};

export default UserMetrics;
