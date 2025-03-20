"use client";

import TokenActivity from "@/components/SuperAdminComponents/LoyaltyTokenPerformance/TokenActivity/TokenActivity";
import TokenHoldingTrends from "@/components/SuperAdminComponents/LoyaltyTokenPerformance/TokenHoldingTrends/TokenHoldingTrends";
import TopBusinesses from "@/components/SuperAdminComponents/LoyaltyTokenPerformance/TopBusinesses/TopBusinesses";
import TotalTokens from "@/components/SuperAdminComponents/LoyaltyTokenPerformance/TotalTokens/TotalTokens";
import React from "react";

const LoyaltyToken = () => {
  const metrics = {
    totalTokens: {
      issued: 245000,
      redeemed: 178500,
    },
    topTokenBusinesses: ["Business Alpha", "Business Beta", "Business Gamma"],
    tokenHoldingTrends: [150, 300, 450, 600, 750, 900, 1050],
    tokenActivity: {
      avgHoldings: "1,240",
      avgSpending: "320",
      activeUsers: "45K",
    },
  };

  const chartCategories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <TotalTokens
        issued={metrics.totalTokens.issued}
        redeemed={metrics.totalTokens.redeemed}
      />

      <TokenHoldingTrends
        trends={metrics.tokenHoldingTrends}
        categories={chartCategories}
      />

      <TopBusinesses businesses={metrics.topTokenBusinesses} />

      <TokenActivity
        avgHoldings={metrics.tokenActivity.avgHoldings}
        avgSpending={metrics.tokenActivity.avgSpending}
        activeUsers={metrics.tokenActivity.activeUsers}
      />
    </div>
  );
};

export default LoyaltyToken;
