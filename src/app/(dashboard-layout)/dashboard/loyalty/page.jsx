/* eslint-disable @next/next/no-img-element */
"use client";

import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import LoyaltyCardsMain from "@/components/LoyaltyCards/LoyaltyCardsMain";
import Spinner from "@/components/Spinner/Spinner";
import CustomTab from "@/components/Studio/CustomTab/CustomTab";
import { CARD_STATUSES } from "@/enums/cards";
import { useGetInfiniteCardsData } from "@/services/loyalty";
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

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetInfiniteCardsData(3);

  const cardsData = data?.pages?.flatMap((page) => page.data) || [];

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
                  {cardsData
                    ?.filter((card) => card?.status === CARD_STATUSES.ACTIVE)
                    .map((card) => (
                      <Grid size={{ xs: 12, md: 6, lg: 4 }} key={card?._id}>
                        <LoyaltyCardsMain
                          id={card?._id}
                          type={card?.type}
                          status={card?.status}
                          createdAt={card?.createdAt}
                          cardBackground={card?.cardDesign?.cardBackground}
                          logo={card?.cardDesign?.logo}
                          textColor={card?.cardDesign?.textColor}
                          backgroundCenterColor={
                            card?.cardDesign?.backgroundCenterColor
                          }
                          centralImage={card?.cardDesign?.centralImage}
                          stampCount={card?.cardDesign?.stampCount}
                          activeStampImage={card?.cardDesign?.activeStampImage}
                          activeStampColor={card?.cardDesign?.activeStampColor}
                          bardCodeType={card?.cardSettings?.bardCodeType}
                        />
                      </Grid>
                    ))}
                </Grid>
                <div className="flex items-center justify-center py-2 mt-4">
                  {hasNextPage ? (
                    <CustomButton
                      text="Load More"
                      bgColor="#FFECE1"
                      textColor="#FF5B00"
                      onClick={fetchNextPage}
                    />
                  ) : (
                    <div className="font-[400] text-red-400 text-sm">
                      Nothing more to load
                    </div>
                  )}
                </div>
              </>
            )}
            {activeTab === "inactive" && (
              <>
                <Grid container spacing={2}>
                  {cardsData
                    ?.filter((card) => card?.status === CARD_STATUSES.INACTIVE)
                    .map((card) => (
                      <Grid size={{ xs: 12, md: 4 }} key={card?._id}>
                        <LoyaltyCardsMain
                          id={card?._id}
                          type={card?.type}
                          status={card?.status}
                          createdAt={card?.createdAt}
                          cardBackground={card?.cardDesign?.cardBackground}
                          logo={card?.cardDesign?.logo}
                          textColor={card?.cardDesign?.textColor}
                          backgroundCenterColor={
                            card?.cardDesign?.backgroundCenterColor
                          }
                          centralImage={card?.cardDesign?.centralImage}
                          stampCount={card?.cardDesign?.stampCount}
                          activeStampImage={card?.cardDesign?.activeStampImage}
                          activeStampColor={card?.cardDesign?.activeStampColor}
                          bardCodeType={card?.cardSettings?.bardCodeType}
                        />
                      </Grid>
                    ))}
                </Grid>
                <div className="flex items-center justify-center py-2 mt-4">
                  {hasNextPage ? (
                    <CustomButton
                      text="Load More"
                      bgColor="#FFECE1"
                      textColor="#FF5B00"
                      onClick={fetchNextPage}
                    />
                  ) : (
                    <div className="font-[400] text-red-400 text-sm">
                      Nothing more to load
                    </div>
                  )}
                </div>
              </>
            )}
            {activeTab === "draft" && (
              <>
                <Grid container spacing={2}>
                  {cardsData
                    ?.filter((card) => card?.status === CARD_STATUSES.DRAFT)
                    .map((card) => (
                      <Grid size={{ xs: 12, md: 4 }} key={card?._id}>
                        <LoyaltyCardsMain
                          id={card?._id}
                          type={card?.type}
                          status={card?.status}
                          createdAt={card?.createdAt}
                          cardBackground={card?.cardDesign?.cardBackground}
                          logo={card?.cardDesign?.logo}
                          textColor={card?.cardDesign?.textColor}
                          backgroundCenterColor={
                            card?.cardDesign?.backgroundCenterColor
                          }
                          centralImage={card?.cardDesign?.centralImage}
                          stampCount={card?.cardDesign?.stampCount}
                          activeStampImage={card?.cardDesign?.activeStampImage}
                          activeStampColor={card?.cardDesign?.activeStampColor}
                          bardCodeType={card?.cardSettings?.bardCodeType}
                        />
                      </Grid>
                    ))}
                </Grid>
                <div className="flex items-center justify-center py-2 mt-4">
                  {hasNextPage ? (
                    <CustomButton
                      text="Load More"
                      bgColor="#FFECE1"
                      textColor="#FF5B00"
                      onClick={fetchNextPage}
                    />
                  ) : (
                    <div className="font-[400] text-red-400 text-sm">
                      Nothing more to load
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </Box>
      )}
    </div>
  );
};

export default Loyalty;
