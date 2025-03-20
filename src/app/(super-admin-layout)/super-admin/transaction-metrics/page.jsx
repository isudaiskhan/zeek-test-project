"use client";
import ConversionRate from "@/components/SuperAdminComponents/TransactionRevenueMetrics/ConversionRate/ConversionRate";
import RevenueDistribution from "@/components/SuperAdminComponents/TransactionRevenueMetrics/RevenueDistribution/RevenueDistribution";
import RevenueMetric from "@/components/SuperAdminComponents/TransactionRevenueMetrics/RevenueMetric/RevenueMetric";
import RevenuePerformance from "@/components/SuperAdminComponents/TransactionRevenueMetrics/RevenuePerformance/RevenuePerformance";
import TotalTransactions from "@/components/SuperAdminComponents/TransactionRevenueMetrics/TotalTransactions/TotalTransactions";
import React from "react";

const TransactionMetrics = () => {
  const metrics = {
    totalTransactions: 45210,
    totalRevenue: 1256000,
    revenuePerBusiness: {
      topEarners: ["Business X", "Business Y", "Business Z"],
      lowPerformers: ["Business M", "Business N", "Business O"],
    },
    conversionRate: 32.5,
    averageOrderValue: 89.45,
  };

  const revenueSeries = [75, 25];
  const revenueChartLabels = ["Top Earners", "Low Performers"];
  const revenueChartColors = ["#FFDAC5", "#F44336"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <TotalTransactions total={metrics.totalTransactions} />

      <RevenueMetric
        title="Total Revenue"
        value={metrics.totalRevenue}
        isCurrency={true}
      />

      <RevenueMetric
        title="Average Order Value"
        value={metrics.averageOrderValue}
        isCurrency={true}
      />

      <RevenueDistribution
        labels={revenueChartLabels}
        colors={revenueChartColors}
        series={revenueSeries}
      />

      <RevenuePerformance
        topEarners={metrics.revenuePerBusiness.topEarners}
        lowPerformers={metrics.revenuePerBusiness.lowPerformers}
      />

      <ConversionRate rate={metrics.conversionRate} />
    </div>
  );
};

export default TransactionMetrics;
