/* eslint-disable @next/next/no-img-element */
import { MoreHoriz } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import React from "react";

const CouponCard = ({ background, isInActive }) => {
  return (
    <Card
      sx={{
        direction: "column",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        padding: "24px",
        cursor: "pointer",
      }}
    >
      <div className="flex justify-end items-end mb-2">
        <MoreHoriz />
      </div>
      <Box
        className={` h-[200px] flex flex-col p-4 py-2 justify-center rounded-xl shadow-lg`}
        sx={{
          background: background,
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <Typography
            sx={{
              color: "white",
              fontSize: "28px",
              fontWeight: 900,
              textAlign: "start",
            }}
          >
            ZEEK.
          </Typography>
          <img
            src="/images/sato-white.png"
            alt="Custom Icon"
            width="128px"
            height="58px"
          />
        </div>
        <div className="flex flex-row justify-between items-center py-1">
          <div className="flex flex-col justify-start items-start">
            <Typography
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "17px",
              }}
            >
              BOGO latte & pastry
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "17px",
              }}
            >
              Expires 11/30/24
            </Typography>
          </div>
          <div className="">
            <img src="/images/coffee.png" alt="Custom Icon" />
          </div>
        </div>
      </Box>
      <div className="flex flex-row justify-between items-center py-6">
        <Typography
          sx={{
            color: "#000000",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          SATO Bogo Offer
        </Typography>
        <Box className="w-[93px] h-[20px] bg-[#FFE4C4] items-center justify-center rounded-md">
          <Typography
            sx={{
              color: "#C36A01",
              fontSize: "12px",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Coupon
          </Typography>
        </Box>
      </div>
      <div className="flex justify-start items-start py-2">
        <Typography
          sx={{
            color: "#000000",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          204 Customers
        </Typography>
      </div>
      <div className="flex flex-row justify-between items-center py-2">
        <Typography
          sx={{
            color: "#73D3A1",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          {isInActive ? "Inactive" : "Live"}
        </Typography>
        <Typography
          sx={{
            color: "#A4A4A4",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          Created 2024/11/10 8:14
        </Typography>
      </div>
    </Card>
  );
};

export default CouponCard;
