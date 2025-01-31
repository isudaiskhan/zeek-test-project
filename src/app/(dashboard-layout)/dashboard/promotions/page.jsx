"use client";

import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Add } from "@mui/icons-material";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";

import PromotionCard from "@/components/PromotionCard/PromotionCard";
import OfferModal from "@/components/Modals/OfferModal/OfferModal";
import RewardModal from "@/components/Modals/RewardModal/RewardModal";
import { useGetPromotions } from "@/services/promotions";
import Spinner from "@/components/Spinner/Spinner";

const tabs = [
  { label: "Offers", value: "offers" },
  { label: "Rewards", value: "rewards" },
];

const Promotions = () => {
  const [activeTab, setActiveTab] = useState("offers");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openOfferModal, setOpenOfferModal] = useState(false);
  const [openRewardModal, setOpenRewardModal] = useState(false);

  const { data, isLoading, isError } = useGetPromotions();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOpenOfferModal = () => {
    setOpenOfferModal(true);
    setAnchorEl(null);
  };

  const handleCloseOfferModal = () => {
    setOpenOfferModal(false);
  };

  const handleOpenRewardModal = () => {
    setOpenRewardModal(true);
    setAnchorEl(null);
  };

  const handleCloseRewardModal = () => {
    setOpenRewardModal(false);
  };

  if (isError) {
    return <div>Error Loading Promotions....</div>;
  }

  return (
    <div className="p-4">
      <Box className="flex flex-wrap items-center justify-between p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h4" className="!font-bold !text-4xl">
            Promotions
            <span className="text-[#B3B3B3] text-4xl ml-3 font-bold">
              {data?.totalCount ? data?.totalCount : 0}
            </span>
          </Typography>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <CustomButton
            icon={<Add fontSize="large" sx={{ color: "#FF762A" }} />}
            bgColor="#FFDAC5"
            textColor="#787878"
            onClick={handleMenuOpen}
          />
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              sx={{ fontWeight: 700, fontSize: "14px" }}
              onClick={handleOpenOfferModal}
            >
              Add New Offer
            </MenuItem>
            <MenuItem
              sx={{ fontWeight: 700, fontSize: "14px" }}
              onClick={handleOpenRewardModal}
            >
              Add New Reward
            </MenuItem>
          </Menu>
        </div>
      </Box>
      <Box className="flex flex-col items-center justify-center gap-1 py-5 w-auto">
        <div
          className={`w-[60%] flex flex-col md:flex-row gap-2 items-center justify-center bg-white p-2 rounded-md shadow-md`}
          style={{
            boxShadow: "-1px 2px 20px -5px #00000040",
          }}
        >
          {tabs.map((tab) => (
            <Box
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
              className={`w-full h-8 justify-center items-center font-semibold px-16 py-2 rounded-md transition duration-200 cursor-pointer ${
                activeTab === tab.value
                  ? "bg-[#FFECE1] text-[#FF5B00] hover:bg-orange-200"
                  : "bg-white text-gray-600 hover:bg-gray-300"
              }`}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#696969",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                {tab.label}
              </Typography>
            </Box>
          ))}
        </div>
      </Box>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box className="flex flex-col items-center justify-center gap-1 py-5">
          <div className="w-[90%]">
            {activeTab === "offers" && (
              <Grid container spacing={4} alignItems="stretch">
                {data?.data
                  ?.filter((offer) => offer?.promotionType === "offer")
                  .map((offer) => (
                    <Grid size={{ xs: 12, md: 4 }} key={offer?._id}>
                      <PromotionCard
                        heading={offer?.name}
                        id={offer?._id}
                        image={offer?.image}
                        points={offer?.coinCost}
                        coinType={offer?.coinType}
                        expiry={offer?.expiryDate}
                        branch={offer?.branches?.map((b) => b.name).join(", ")}
                        offerType={offer?.promotionType}
                        createdAt={offer?.createdAt}
                        maxLimitUse={offer?.maxLimitUse}
                        promotionType={offer?.promotionType}
                      />
                    </Grid>
                  ))}
              </Grid>
            )}
            {activeTab === "rewards" && (
              <Grid container spacing={4}>
                {data?.data
                  ?.filter((reward) => reward?.promotionType === "reward")
                  .map((reward) => (
                    <Grid size={{ xs: 12, md: 4 }} key={reward._id}>
                      <PromotionCard
                        heading={reward?.name}
                        id={reward?._id}
                        image={reward?.image}
                        points={reward?.coinCost}
                        coinType={reward?.coinType}
                        expiry={reward?.expiry}
                        branch={reward?.branches?.map((b) => b.name).join(", ")}
                        offerType={reward?.offerType}
                        createdAt={reward?.createdAt}
                        maxLimitUse={reward?.maxLimitUse}
                        promotionType={reward?.promotionType}
                      />
                    </Grid>
                  ))}
              </Grid>
            )}
          </div>
        </Box>
      )}

      {openOfferModal && (
        <OfferModal open={openOfferModal} onClose={handleCloseOfferModal} />
      )}
      {openRewardModal && (
        <RewardModal open={openRewardModal} onClose={handleCloseRewardModal} />
      )}
    </div>
  );
};

export default Promotions;
