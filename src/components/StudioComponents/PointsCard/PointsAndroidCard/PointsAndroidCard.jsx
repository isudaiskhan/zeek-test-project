import { Avatar, Box, Card, Divider, Typography } from "@mui/material";
import React from "react";
import Barcode from "react-barcode";

const PointsAndroidCard = () => {
  return (
    <Card
      className="flex flex-col gap-2 bg-white rounded-md"
      sx={{ boxShadow: "-1px 2px 20px 0px #00000040" }}
    >
      <Box className="flex flex-row gap-2 p-3 justify-start items-center">
        <Avatar
          src="/images/avatar.png"
          alt="icon"
          sx={{ width: 24, height: 24 }}
        />
        <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
          Custom Card #1
        </Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box className="flex flex-col gap-2 px-3 py-1">
        <div className="flex justify-start items-start">
          <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
            Promotion Name
          </Typography>
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            Discount on the FIRST...
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>10</Typography>
        </div>
        <Box
          className="flex justify-center items-center rounded-md p-2 mt-2"
          sx={{ boxShadow: "-1px 2px 20px 0px #00000040" }}
        >
          <Barcode
            value="63012-816-306"
            displayValue={false}
            height={30}
            width={1}
            background="transparent"
          />
        </Box>
        <Box className="flex justify-center items-center">
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
            63012-816-306
          </Typography>
        </Box>
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
    </Card>
  );
};

export default PointsAndroidCard;
