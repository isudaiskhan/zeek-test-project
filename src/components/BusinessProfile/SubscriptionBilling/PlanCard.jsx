import { Paper } from "@mui/material";
import React from "react";
import PaymentDetails from "./PaymentDetails";
import BusinessInfo from "./BusinessInfo";
import SupportSection from "./SupportSection";
import PlanHeader from "./PlanHeader";

const PlanCard = ({
  planName,
  accessLevel,
  nextPaymentDate,
  amount,
  lastInvoiceDate,
  businessName,
  email,
  description,
  cardType,
  cardEnding,
  onDownloadInvoice,
  onChangePaymentMethod,
}) => {
  return (
    <div>
      <Paper className="p-6 !rounded-[20px] !shadow-md !shadow-gray-300 space-y-6">
        <PlanHeader
          planName={planName}
          accessLevel={accessLevel}
          amount={amount}
        />

        <PaymentDetails
          nextPaymentDate={nextPaymentDate}
          lastInvoiceDate={lastInvoiceDate}
          onDownloadInvoice={onDownloadInvoice}
          amount={amount}
          description={description}
        />

        <BusinessInfo
          businessName={businessName}
          email={email}
          cardType={cardType}
          cardEnding={cardEnding}
          onChangePaymentMethod={onChangePaymentMethod}
        />
      </Paper>

      <Paper className="!rounded-[20px] !shadow-md !shadow-gray-300 space-y-6">
        <SupportSection />
      </Paper>
    </div>
  );
};

export default PlanCard;
