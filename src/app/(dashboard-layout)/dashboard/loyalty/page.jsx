/* eslint-disable @next/next/no-img-element */
"use client";

import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CouponCard from "@/components/Loyalty/CouponCard/CouponCard";
import CouponPastryCard from "@/components/Loyalty/CouponPastryCard/CouponPastryCard";
import LoyaltyCard from "@/components/Loyalty/LoyaltyCard/LoyaltyCard";
import Spinner from "@/components/Spinner/Spinner";
import CustomTab from "@/components/Studio/CustomTab/CustomTab";
import { CARD_STATUSES, CARD_TYPES } from "@/enums/cards";
import { useGetAllCardsData } from "@/services/loyalty";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const tabs = [
  { label: "Live Cards", value: "live" },
  { label: "Inactive Cards", value: "inactive" },
  { label: "Draft Cards", value: "draft" },
];

const Loyalty = () => {
  const [activeTab, setActiveTab] = useState("live");

  const { data, isLoading, isError } = useGetAllCardsData(1, 10);

  console.log(data, "cards");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const router = useRouter();

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="p-4">
      <Box className="flex flex-wrap items-center justify-between p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h5" fontWeight="bold" fontSize="40px">
            My Cards
          </Typography>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <CustomButton
            icon={<Add fontSize="large" sx={{ color: "#FF762A" }} />}
            bgColor="#FFDAC5"
            textColor="#787878"
            onClick={() => router.push("/studio/add-card")}
          />
        </div>
      </Box>
      <CustomTab
        tabs={tabs}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Box className="flex flex-col items-center justify-center gap-1 py-5">
          <div className="w-[80%]">
            {activeTab === "live" && (
              <>
                <Grid container spacing={2}>
                  {data?.data
                    ?.filter((card) => card?.status === CARD_STATUSES.ACTIVE)
                    .map((card) => (
                      <Grid size={{ xs: 12, md: 4 }} key={card._id}>
                        {card?.type === CARD_TYPES.LOYALTY ? (
                          <LoyaltyCard
                            expiry={card?.validUntil}
                            createdAt={card?.createdAt}
                            status={card?.status}
                            logoImage={card?.logoImage}
                            heroImage={card?.heroImage}
                            cardNumber={card?.cardNumber}
                            colors={card?.colors}
                            type={card?.type}
                            onClick={() =>
                              router.push("/studio/update-card-loyalty")
                            }
                          />
                        ) : card?.type === CARD_TYPES.COUPON ? (
                          <CouponCard
                            expiry={card?.validUntil}
                            status={card?.status}
                            logoImage={card?.logoImage}
                            createdAt={card?.createdAt}
                            heroImage={card?.heroImage}
                            cardNumber={card?.cardNumber}
                            colors={card?.colors}
                            type={card?.type}
                          />
                        ) : card?.type === CARD_TYPES.STAMP ? (
                          <CouponPastryCard
                            expiry={card?.validUntil}
                            status={card?.status}
                            logoImage={card?.logoImage}
                            createdAt={card?.createdAt}
                            heroImage={card?.heroImage}
                            cardNumber={card?.cardNumber}
                            colors={card?.colors}
                            type={card?.type}
                          />
                        ) : null}
                      </Grid>
                    ))}
                </Grid>
              </>
            )}
            {activeTab === "inactive" && (
              <>
                <Grid container spacing={2}>
                  {data?.data
                    ?.filter((card) => card?.status === CARD_STATUSES.INACTIVE)
                    .map((card) => (
                      <Grid size={{ xs: 12, md: 4 }} key={card?._id}>
                        {card?.type === CARD_TYPES.LOYALTY ? (
                          <LoyaltyCard
                            expiry={card?.validUntil}
                            status={card?.status}
                            logoImage={card?.logoImage}
                            heroImage={card?.heroImage}
                            cardNumber={card?.cardNumber}
                            colors={card?.colors}
                            type={card?.type}
                          />
                        ) : card?.type === CARD_TYPES.COUPON ? (
                          <CouponCard
                            expiry={card?.validUntil}
                            status={card?.status}
                            logoImage={card?.logoImage}
                            createdAt={card?.createdAt}
                            heroImage={card?.heroImage}
                            cardNumber={card?.cardNumber}
                            colors={card?.colors}
                            type={card?.type}
                          />
                        ) : card?.type === CARD_TYPES.STAMP ? (
                          <CouponPastryCard
                            expiry={card?.validUntil}
                            status={card?.status}
                            logoImage={card?.logoImage}
                            createdAt={card?.createdAt}
                            heroImage={card?.heroImage}
                            cardNumber={card?.cardNumber}
                            colors={card?.colors}
                            type={card?.type}
                          />
                        ) : null}
                      </Grid>
                    ))}
                </Grid>
              </>
            )}
            {activeTab === "draft" && (
              <>
                <Grid container spacing={2}>
                  {data?.data
                    ?.filter((card) => card?.status === CARD_STATUSES.DRAFT)
                    .map((card) => (
                      <Grid size={{ xs: 12, md: 4 }} key={card?._id}>
                        {card?.type === CARD_TYPES.LOYALTY ? (
                          <LoyaltyCard
                            expiry={card?.validUntil}
                            status={card?.status}
                            logoImage={card?.logoImage}
                            heroImage={card?.heroImage}
                            cardNumber={card?.cardNumber}
                            colors={card?.colors}
                            type={card?.type}
                          />
                        ) : card?.type === CARD_TYPES.COUPON ? (
                          <CouponCard
                            expiry={card?.validUntil}
                            status={card?.status}
                            logoImage={card?.logoImage}
                            createdAt={card?.createdAt}
                            heroImage={card?.heroImage}
                            cardNumber={card?.cardNumber}
                            colors={card?.colors}
                            type={card?.type}
                          />
                        ) : card?.type === CARD_TYPES.STAMP ? (
                          <CouponPastryCard
                            expiry={card?.validUntil}
                            status={card?.status}
                            logoImage={card?.logoImage}
                            createdAt={card?.createdAt}
                            heroImage={card?.heroImage}
                            cardNumber={card?.cardNumber}
                            colors={card?.colors}
                            type={card?.type}
                          />
                        ) : null}
                      </Grid>
                    ))}
                </Grid>
              </>
            )}
          </div>
        </Box>
      )}
    </div>
  );
};

export default Loyalty;
