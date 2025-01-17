"use client";

import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AddCard = () => {
  const [activeTab, setActiveTab] = useState("loyalty");

  const router = useRouter();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Container maxWidth="xl">
      <Box className="p-2">
        <Box className="flex justify-start items-start">
          <CustomButton
            text="All Cards"
            textColor="black"
            bgColor="#EAEAEA"
            startIcon={<ArrowBackIosIcon fontSize="small" />}
            onClick={() => router.push("/dashboard/loyalty")}
          />
        </Box>
        <Box className="flex flex-row justify-start items-start py-10">
          <Typography
            sx={{ fontWeight: 510, fontSize: "40px", color: "#8E8E8E" }}
          >
            What kind of card would you like to create?
          </Typography>
        </Box>
        <Box className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-40 justify-center items-center">
            <div className="flex flex-col gap-8 justify-center items-center">
              <Box
                className="w-[238px] h-[80px] items-center p-5 rounded-xl cursor-pointer"
                sx={{
                  border: "2px solid #EEEEEE",
                  backgroundColor: activeTab === "loyalty" ? "#FFECE1" : "",
                }}
                onClick={() => handleTabClick("loyalty")}
              >
                <Typography
                  sx={{
                    fontWeight: activeTab === "loyalty" ? 700 : 400,
                    fontSize: "24px",
                    color: activeTab === "loyalty" ? "#FF5B00" : "#000000",
                    textAlign: "center",
                  }}
                >
                  Loyalty
                </Typography>
              </Box>
              <Box
                className="w-[238px] h-[80px] items-center p-5 rounded-xl cursor-pointer"
                sx={{
                  border: "2px solid #EEEEEE",
                  backgroundColor: activeTab === "coupon" ? "#FFECE1" : "",
                }}
                onClick={() => handleTabClick("coupon")}
              >
                <Typography
                  sx={{
                    fontWeight: activeTab === "coupon" ? 700 : 400,
                    fontSize: "24px",
                    color: activeTab === "coupon" ? "#FF5B00" : "#000000",
                    textAlign: "center",
                  }}
                >
                  Coupons
                </Typography>
              </Box>
              <Box
                className="w-[238px] h-[80px] items-center p-5 rounded-xl cursor-pointer"
                sx={{
                  border: "2px solid #EEEEEE",
                  backgroundColor: activeTab === "stamp" ? "#FFECE1" : "",
                }}
                onClick={() => handleTabClick("stamp")}
              >
                <Typography
                  sx={{
                    fontWeight: activeTab === "stamp" ? 700 : 400,
                    fontSize: "24px",
                    color: activeTab === "stamp" ? "#FF5B00" : "#000000",
                    textAlign: "center",
                  }}
                >
                  Stamp
                </Typography>
              </Box>
            </div>
            <Box
              className="w-[238px] h-[80px] items-center p-5 rounded-xl cursor-pointer"
              sx={{
                border: "2px solid #EEEEEE",
                backgroundColor: "#FFECE1",
              }}
              onClick={() =>
                router.push(
                  activeTab === "loyalty"
                    ? "/studio/create-card-loyalty"
                    : activeTab === "coupon"
                    ? "/studio/create-card-coupon"
                    : activeTab === "stamp"
                    ? "/studio/create-card-stamp"
                    : "#"
                )
              }
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "24px",
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                Create Card
              </Typography>
            </Box>
          </div>
          <div className="flex justify-center items-center relative bg-red-500">
            {activeTab === "loyalty" && (
              <Image
                src="/images/loyalty-phone.png"
                alt="Loyalty"
                loader={() => "/images/loyalty-image.png"}
                width={600}
                height={700}
                className="absolute top-[-240px] right-1/2 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[700px] bg-blend-lighten"
              />
            )}
            {activeTab === "coupon" && (
              <Image
                src="/images/coupon-phone.png"
                alt="Coupon"
                width={600}
                height={700}
                loader={() => "/images/coupon-image.png"}
                className="absolute top-[-240px] right-1/2 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[700px] bg-blend-lighten"
              />
            )}
            {activeTab === "stamp" && (
              <Image
                src="/images/stamp-phone.png"
                alt="Stamp"
                width={600}
                height={700}
                loader={() => "/images/stamp-image.png"}
                className="absolute top-[-240px] right-1/2 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[700px] bg-blend-lighten"
              />
            )}
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default AddCard;
