import { Box, Typography } from "@mui/material";
import React from "react";

const PaymentDetails = ({
  nextPaymentDate,
  lastInvoiceDate,
  amount,
  description,
}) => {
  return (
    <>
      <Typography
        variant="body2"
        className="text-[#838383] !text-sm !font-inter"
      >
        {description}
      </Typography>
      <Box className="flex flex-wrap justify-between items-start">
        <div>
          <Typography
            variant="subtitle2"
            className="text-[#838383] !text-sm !mb-1 !font-inter"
          >
            Next payment
          </Typography>
          <Typography className="!font-inter !text-lg">
            {nextPaymentDate}
          </Typography>
        </div>

        <div className="sm:text-right">
          <Typography className="text-xl !font-semibold !font-inter !mb-1">
            {amount}
          </Typography>
          <Typography
            variant="body2"
            className="text-[#838383] !text-sm !font-inter"
          >
            Last invoice: {lastInvoiceDate}
          </Typography>
        </div>
      </Box>
      <hr className="!border-t-2 border-0 border-solid !border-[#E7E7E7] !mt-6" />
    </>
  );
};

export default PaymentDetails;
