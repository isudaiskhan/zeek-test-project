import StudioCustomButton from "@/components/Custom/StudioCustomButton/StudioCustomButton";
import { ArrowBackIos } from "@mui/icons-material";
import { Box, Container, Divider, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import React from "react";

const StudioHeader = ({
  cardNameHandleChange,
  tabs,
  activeTab,
  handleTabClick,
  cardName,
}) => {
  const router = useRouter();
  return (
    <>
      <Container maxWidth="xl">
        <Box className="flex flex-col md:flex-row justify-between items-center p-4">
          <div className="flex w-full">
            <StudioCustomButton
              text="All Cards"
              textColor="black"
              bgColor="#FFFFFF"
              startIcon={<ArrowBackIos fontSize="small" />}
              onClick={() => router.push("/dashboard/loyalty")}
            />
          </div>
          <div className="flex flex-row gap-2 w-full justify-center items-center">
            <Typography sx={{ fontWeight: 900, fontSize: "36px" }}>
              ZEEK.
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: "20px" }}>
              Design Studio
            </Typography>
          </div>
          <div className="flex w-full"></div>
        </Box>
      </Container>
      <Divider sx={{ width: "100%", my: 1 }} />
      <Container maxWidth="xl">
        <Box className="flex flex-col md:flex-row gap-4 items-center p-4">
          <Box className="flex w-full">
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter Card Name"
              size="small"
              sx={{ backgroundColor: "#FFFFFF" }}
              InputProps={{
                sx: { padding: "3px" },
              }}
              onChange={cardNameHandleChange}
              value={cardName}
            />
          </Box>
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.value}>
              <Box
                className={`flex w-full justify-center items-center p-3 ${
                  activeTab === tab.value ? "bg-[#FFECE1]" : "bg-[#F5F5F5]"
                } rounded-md cursor-pointer ease-in-out transition-all duration-300 hover:bg-[#FFECE1]`}
                onClick={() => handleTabClick(tab.value)}
              >
                <Typography
                  sx={{
                    fontWeight: 510,
                    fontSize: "14px",
                    color: activeTab === tab.value ? "#FF5B00" : "#000000",
                  }}
                >
                  {tab.label}
                </Typography>
              </Box>

              {/* Divider between boxes (except the last one) */}
              {index < tabs.length - 1 && (
                <Divider sx={{ width: "2%", backgroundColor: "#AEAEAE" }} />
              )}
            </React.Fragment>
          ))}
          <Box className="flex w-full justify-center items-center p-3 bg-[#848484] rounded-md cursor-pointer">
            <Typography
              sx={{ fontWeight: 510, fontSize: "14px", color: "#FFFFFF" }}
            >
              Add to Draft
            </Typography>
          </Box>
        </Box>
      </Container>
      <Divider sx={{ width: "100%", my: 1 }} />
    </>
  );
};

export default StudioHeader;
