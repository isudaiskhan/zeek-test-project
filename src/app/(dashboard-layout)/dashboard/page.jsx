"use client";

import React from "react";
import SalesRevenueCard from "@/components/DashboardComponents/SalesRevenueCard";
import SaleItemsCard from "@/components/DashboardComponents/SaleItemsCard";
import RecentReviewsCard from "@/components/DashboardComponents/RecentReviewsCard";
import CardDetails from "@/components/DashboardComponents/CardDetails";
import AccountCard from "@/components/DashboardComponents/AccountCard";

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <SalesRevenueCard />
        <AccountCard />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-[40%] flex flex-col gap-6">
          <SaleItemsCard />
          <RecentReviewsCard />
        </div>
        <CardDetails />
      </div>
    </div>
  );
};

export default Dashboard;
