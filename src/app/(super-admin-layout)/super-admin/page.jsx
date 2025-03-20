"use client";
import ChurnRate from "@/components/SuperAdminComponents/BusinessPerformanceMetrics/ChurnRate/ChurnRate";
import EngagementScore from "@/components/SuperAdminComponents/BusinessPerformanceMetrics/EngagementScore/EngagementScore";
import NewBusinesses from "@/components/SuperAdminComponents/BusinessPerformanceMetrics/NewBusinesses/NewBusinesses";
import TopBusinesses from "@/components/SuperAdminComponents/BusinessPerformanceMetrics/TopBusinesses/TopBusinesses";
import TotalBusinesses from "@/components/SuperAdminComponents/BusinessPerformanceMetrics/TotalBusinesses/TotalBusinesses";
import React from "react";

const SuperAdmin = () => {
  const metrics = {
    totalActiveBusinesses: 1200,
    newBusinesses: { daily: 15, weekly: 100, monthly: 400 },
    churnRate: "5%",
    topBusinesses: ["Business A", "Business B", "Business C"],
    engagementScore: 85,
  };

  const churnSeries = [95, 5];
  const churnLabels = ["Active Businesses", "Churned Businesses"];
  const churnColors = ["#FFDAC5", "#F44336"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <TotalBusinesses total={metrics.totalActiveBusinesses} />

      <NewBusinesses
        daily={metrics.newBusinesses.daily}
        weekly={metrics.newBusinesses.weekly}
        monthly={metrics.newBusinesses.monthly}
      />

      <ChurnRate
        series={churnSeries}
        labels={churnLabels}
        colors={churnColors}
      />

      <TopBusinesses businesses={metrics.topBusinesses} />

      <EngagementScore score={metrics.engagementScore} />
    </div>
  );
};

export default SuperAdmin;
