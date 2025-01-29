import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { Close } from "@mui/icons-material";
import { fileBaseURL } from "@/utils/urls";
import { BUSINESS_TIERS } from "@/enums/tiers";

const subParaSX = { fontSize: "20px", fontWeight: 400, color: "#838383" };

const getTierStyle = (tier) => {
  switch (tier) {
    case BUSINESS_TIERS.PLATINUM:
      return { backgroundColor: "#0000004D", color: "#222222" };
    case BUSINESS_TIERS.GOLD:
      return { backgroundColor: "#FFD23340", color: "#FFC700" };
    case BUSINESS_TIERS.SILVER:
      return { backgroundColor: "#ECECEC", color: "#898989" };
    case BUSINESS_TIERS.BRONZE:
      return { backgroundColor: "#BE8E5E40", color: "#86684A" };
    default:
      return {};
  }
};

const ViewCustomerModal = ({
  open,
  onClose,
  name,
  email,
  avatar,
  tier,
  points,
  lastVisited,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "20px",
          width: "50%",
          maxWidth: "50%",
        },
      }}
    >
      <Box className="p-4 relative">
        <div className="absolute top-4 left-4">
          <IconButton onClick={onClose}>
            <Close fontSize="large" sx={{ color: "black" }} />
          </IconButton>
        </div>
        <DialogTitle>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 8 }}>
              <div className="flex flex-row gap-6 justify-start items-center">
                <div className="flex justify-center rounded-full">
                  <Image
                    src={`${fileBaseURL}${avatar}`}
                    alt={name}
                    width={100}
                    height={100}
                    layout="responsive"
                    className="w-[150px] h-[150px] rounded-full"
                    loader={({ src }) => src}
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <Typography sx={{ fontSize: "32px", fontWeight: 400 }}>
                    {name}
                  </Typography>
                  <Typography sx={subParaSX}>{email}</Typography>
                  <Typography sx={subParaSX}>Joined: 01/10/2024</Typography>
                </div>
              </div>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col justify-center gap-24 items-center mt-8">
                <div className="flex justify-center items-center w-full">
                  <Box
                    sx={{
                      padding: "4px 2px",
                      borderRadius: "4px",
                      justifyItems: "center",
                      width: "110px",
                      height: "38px",
                      boxShadow: "0px 0px 50px 0px #0000004D",
                      ...getTierStyle(tier),
                    }}
                    className="flex justify-center items-center"
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#222222",
                        textTransform: "capitalize",
                      }}
                    >
                      {tier}
                    </Typography>
                  </Box>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: 400, color: "#000000" }}
                  >
                    Current Points Value:{" "}
                    <span className="font-bold text-[20px]">{points}</span>
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
        </DialogTitle>
        <DialogContent>
          <Box className="flex flex-col gap-6 px-6 mx-4">
            <div className="flex flex-col justify-start items-start gap-4">
              <Typography
                sx={{ fontSize: "24px", fontWeight: 700, color: "#838383" }}
              >
                Engagement Metrics
              </Typography>
              <div className="flex flex-col justify-start items-start gap-2 px-4">
                <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
                  Last Date Visit:{" "}
                  <span className="font-bold">{lastVisited}</span>
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
                  Visit Frequency: <span className="font-bold">5.4/mo</span>
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
                  Total Visits: <span className="font-bold">33</span>
                </Typography>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <Typography
                sx={{ fontSize: "24px", fontWeight: 700, color: "#838383" }}
              >
                Spending Behavior
              </Typography>
              <div className="flex flex-col justify-start items-start gap-2 px-4">
                <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
                  CLV (Customer Lifetime Value):{" "}
                  <span className="font-bold">AED 2345</span>
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
                  Average Transaction Value:{" "}
                  <span className="font-bold">AED 76</span>
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
                  Top Purchased Item:{" "}
                  <span className="font-bold">Iced Coffee</span>
                </Typography>
              </div>
            </div>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ViewCustomerModal;
