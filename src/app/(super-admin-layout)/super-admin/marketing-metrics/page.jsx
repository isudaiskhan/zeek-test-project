"use client";
import Campaigns from "@/components/SuperAdminComponents/MarketingGrowthMetrics/Campaigns/Campaigns";
import ConversionMetrics from "@/components/SuperAdminComponents/MarketingGrowthMetrics/ConversionMetrics/ConversionMetrics";
import ReferralProgram from "@/components/SuperAdminComponents/MarketingGrowthMetrics/ReferralProgram/ReferralProgram";
import ReferralTrendChart from "@/components/SuperAdminComponents/MarketingGrowthMetrics/ReferralTrendChart/ReferralTrendChart";
import TopCampaigns from "@/components/SuperAdminComponents/MarketingGrowthMetrics/TopCampaigns/TopCampaigns";
import React from "react";

const MarketingMetrics = () => {
  const metrics = {
    referrals: {
      total: 4520,
      active: 1125,
      converted: 2890,
      trend: [120, 210, 180, 300, 240, 360, 420],
    },
    campaigns: {
      total: 15,
      roi: "5.8x",
      bestCampaign: "Holiday Special 2023",
      conversionRate: 38.4,
      topCampaigns: [
        { name: "Holiday Special 2023", conversion: 42 },
        { name: "Summer Sale", conversion: 39 },
        { name: "Referral Bonus", conversion: 37 },
        { name: "New User Offer", conversion: 35 },
      ],
    },
  };

  const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <ReferralProgram
        total={metrics.referrals.total}
        active={metrics.referrals.active}
        converted={metrics.referrals.converted}
      />

      <ReferralTrendChart
        seriesData={metrics.referrals.trend}
        categories={categories}
      />

      <Campaigns
        roi={metrics.campaigns.roi}
        bestCampaign={metrics.campaigns.bestCampaign}
      />

      <ConversionMetrics
        conversionRate={metrics.campaigns.conversionRate}
        totalCampaigns={metrics.campaigns.total}
      />

      <TopCampaigns campaigns={metrics.campaigns.topCampaigns} />
    </div>
  );
};

export default MarketingMetrics;
