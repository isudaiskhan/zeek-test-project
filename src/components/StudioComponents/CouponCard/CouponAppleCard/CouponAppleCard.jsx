import { Box, Card, Typography } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import React from "react";

const CouponAppleCard = () => {
  return (
    <Card
      className="flex flex-col gap-2 bg-white rounded-md"
      sx={{ boxShadow: "-1px 2px 20px 0px #00000040" }}
    >
      <Box className="flex flex-row justify-between items-center p-2">
        <div className="justify-start items-center">
          <Typography sx={{ fontWeight: 500, fontSize: "12px" }}>
            Custom Card #1
          </Typography>
        </div>
        <div className="flex flex-col justify-end items-end">
          <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
            Expiration
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
            00.00.0000
          </Typography>
        </div>
      </Box>
      <Box
        className="flex justify-center items-center"
        sx={{
          height: "100px",
          width: "100%",
          backgroundColor: "#F5F5F5",
          // backgroundImage: `url(/images/checkers.png)`,
          objectFit: "cover",
        }}
      >
        <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
          Background Image
        </Typography>
      </Box>
      <Box className="flex flex-row justify-between p-2">
        <div className="flex flex-col items-start gap-[2px]">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "8px",
              textTransform: "uppercase",
            }}
          >
            Discount for the first...
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>10</Typography>
        </div>
        {/* <div className="flex flex-col items-end gap-[2px]">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "8px",
              textTransform: "uppercase",
            }}
          >
            Till the next Reward
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
            500
          </Typography>
        </div> */}
      </Box>
      <Box className="flex flex-col gap-1 justify-center items-center p-4 mt-4">
        <QRCodeSVG value="https://example.com" size={60} />
        <Typography sx={{ fontWeight: 500, fontSize: "12px" }}>
          Tap ... for details
        </Typography>
      </Box>
    </Card>
  );
};

export default CouponAppleCard;
