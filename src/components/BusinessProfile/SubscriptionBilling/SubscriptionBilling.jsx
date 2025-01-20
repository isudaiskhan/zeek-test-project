import React from "react";
import PlanCard from "./PlanCard";
import { Box, Typography } from "@mui/material";
import { subscriptionBillingData } from "@/utils/dummy-data";

const SubscriptionBilling = () => {
  return (
    <div>
      <Typography
        variant="h6"
        className="!font-inter px-6 !text-2xl border-b border-0 border-solid border-[#E7E7E7] py-6"
      >
        Subscription & Billing
      </Typography>
      <Box className="p-5">
        <PlanCard {...subscriptionBillingData} />
      </Box>
    </div>
  );
};

export default SubscriptionBilling;
