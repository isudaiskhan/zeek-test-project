"use client";
import ResolutionPerformance from "@/components/SuperAdminComponents/OperationalTechnicalMetrics/ResolutionPerformance/ResolutionPerformance";
import SupportTickets from "@/components/SuperAdminComponents/OperationalTechnicalMetrics/SupportTickets/SupportTickets";
import SystemStatus from "@/components/SuperAdminComponents/OperationalTechnicalMetrics/SystemStatus/SystemStatus";
import UptimeTrends from "@/components/SuperAdminComponents/OperationalTechnicalMetrics/UptimeTrends/UptimeTrends";
import React from "react";

const OperationalMetrics = () => {
  const metrics = {
    systemStatus: {
      uptime: "99.98%",
      downtime: "1.2h",
      lastMonthTrend: [99.5, 99.7, 99.8, 99.9, 99.6, 99.8, 99.9],
    },
    supportTickets: {
      open: 45,
      resolved: 120,
      averageResolution: "4.2h",
    },
  };

  const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const ticketCategories = ["High", "Medium", "Low"];
  const ticketSeries = [{ data: [18, 32, 15] }];
  const resolutionSeries = [65, 25, 10];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <SystemStatus
        uptime={metrics.systemStatus.uptime}
        downtime={metrics.systemStatus.downtime}
      />

      <UptimeTrends
        seriesData={metrics.systemStatus.lastMonthTrend}
        categories={categories}
      />

      <SupportTickets
        open={metrics.supportTickets.open}
        resolved={metrics.supportTickets.resolved}
        chartSeries={ticketSeries}
        categories={ticketCategories}
      />

      <ResolutionPerformance
        averageResolution={metrics.supportTickets.averageResolution}
        series={resolutionSeries}
      />
    </div>
  );
};

export default OperationalMetrics;
