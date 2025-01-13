"use client";

import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Add } from "@mui/icons-material";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";

import PromotionCard from "@/components/PromotionCard/PromotionCard";
import OfferModal from "@/components/Modals/OfferModal/OfferModal";
import RewardModal from "@/components/Modals/RewardModal/RewardModal";

const tabs = [
  { label: "Offers", value: "offers" },
  { label: "Rewards", value: "rewards" },
];

const offers = [
  {
    id: 1,
    heading: "Purchase a Latte and get a free pastry",
    image: "/images/latte.png",
    points: "N/A",
    coinType: "N/A",
    expiry: "Jan 31, 2025",
    branch: "All",
    offerType: "Repeating Offer",
    createdAt: "Created 2024/11/10 8:14",
  },
  {
    id: 2,
    heading: "50% off all pastries",
    image: "/images/pastries.png",
    points: "N/A",
    coinType: "N/A",
    expiry: "Jan 31, 2025",
    branch: "All",
    offerType: "Repeating Offer",
    createdAt: "Created 2024/11/10 8:14",
  },
  {
    id: 3,
    heading: "25% off a dozen assorted donuts",
    image: "/images/donuts.png",
    points: "N/A",
    coinType: "N/A",
    expiry: "Jan 31, 2025",
    branch: "All",
    offerType: "Repeating Offer",
    createdAt: "Created 2024/11/10 8:14",
  },
];

const rewards = [
  {
    id: 1,
    heading: "Hot/Iced Latte",
    image: "/images/latte.png",
    points: "50",
    coinType: "Sato Points",
    expiry: "Jan 31, 2025",
    branch: "All",
    offerType: "Uses: 3",
    createdAt: "Created 2024/11/10 8:14",
  },
  {
    id: 2,
    heading: "Half a dozen cinnamon rolls",
    image: "/images/pastries.png",
    points: "100",
    coinType: "Zeek Points",
    expiry: "Jan 31, 2025",
    branch: "All",
    offerType: "Uses: 2",
    createdAt: "Created 2024/11/10 8:14",
  },
  {
    id: 3,
    heading: "A dozen assorted donuts",
    image: "/images/donuts.png",
    points: "100",
    coinType: "Sato Points",
    expiry: "Jan 31, 2025",
    branch: "All",
    offerType: "Uses: 1",
    createdAt: "Created 2024/11/10 8:14",
  },
];

const Promotions = () => {
  const [activeTab, setActiveTab] = useState("offers");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openOfferModal, setOpenOfferModal] = useState(false);
  const [openRewardModal, setOpenRewardModal] = useState(false);

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

  return (
    <div className="p-4">
      <Box className="flex flex-wrap items-center justify-between p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h5" fontWeight="bold" fontSize="40px">
            Promotions
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
      <Box className="flex flex-col items-center justify-center gap-1 py-5">
        <div className="w-[90%]">
          {activeTab === "offers" && (
            <Grid container spacing={4}>
              {offers.map((offer) => (
                <Grid item size={{ xs: 12, md: 4 }} key={offer.id}>
                  <PromotionCard
                    heading={offer.heading}
                    image={offer.image}
                    points={offer.points}
                    coinType={offer.coinType}
                    expiry={offer.expiry}
                    branch={offer.branch}
                    offerType={offer.offerType}
                    createdAt={offer.createdAt}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          {activeTab === "rewards" && (
            <Grid container spacing={4}>
              {rewards.map((offer) => (
                <Grid item size={{ xs: 12, md: 4 }} key={offer.id}>
                  <PromotionCard
                    heading={offer.heading}
                    image={offer.image}
                    points={offer.points}
                    coinType={offer.coinType}
                    expiry={offer.expiry}
                    branch={offer.branch}
                    offerType={offer.offerType}
                    createdAt={offer.createdAt}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </Box>

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
