"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import SuccessDialog from "@/components/Modals/SuccessModal";
import CustomTextField from "@/components/CustomTextField/CustomTextField";

const Tiers = () => {
  const [bronzeTier, setBronzeTier] = useState({
    min: "",
    max: "",
    multiplier: "",
  });
  const [silverTier, setSilverTier] = useState({
    min: "",
    max: "",
    multiplier: "",
  });
  const [goldTier, setGoldTier] = useState({
    min: "",
    max: "",
    multiplier: "",
  });
  const [platinumTier, setPlatinumTier] = useState({
    min: "",
    max: "",
    multiplier: "",
  });

  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleTierChange = (setTierFunction, field, value) => {
    setTierFunction((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveChangesClick = () => {
    console.log({ bronzeTier, silverTier, goldTier, platinumTier });
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const validatePositiveNumber = (value) => /^\d+$/.test(value);

  return (
    <Box>
      <Typography className="!mb-8 !font-bold !text-xl text-[#838383] !font-inter">
        Tier Thresholds
      </Typography>

      {/* Bronze Tier */}
      <div className="flex items-center w-full mb-6">
        <div className="px-5 w-full">
          <Typography className="!mb-1 text-black !text-lg !font-inter">
            Bronze Tier Boundaries
          </Typography>
          <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
            Set the boundaries for the bronze tier
          </Typography>
          <div className="flex items-center space-x-5">
            <CustomTextField
              placeholder="0"
              value={bronzeTier.min}
              onChange={(e) =>
                handleTierChange(setBronzeTier, "min", e.target.value)
              }
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
            <Typography className="!text-lg text-black !font-inter">
              To
            </Typography>
            <CustomTextField
              placeholder="99"
              value={bronzeTier.max}
              onChange={(e) =>
                handleTierChange(setBronzeTier, "max", e.target.value)
              }
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>
        </div>
      </div>

      {/* Silver Tier */}
      <div className="flex items-center w-full mb-6">
        <div className="px-5 w-full">
          <Typography className="!mb-1 text-black !text-lg !font-inter">
            Silver Tier Boundaries
          </Typography>
          <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
            Set the boundaries for the silver tier
          </Typography>
          <div className="flex items-center space-x-5">
            <CustomTextField
              placeholder="100"
              value={silverTier.min}
              onChange={(e) =>
                handleTierChange(setSilverTier, "min", e.target.value)
              }
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
            <Typography className="!text-lg text-black !font-inter">
              To
            </Typography>
            <CustomTextField
              placeholder="199"
              value={silverTier.max}
              onChange={(e) =>
                handleTierChange(setSilverTier, "max", e.target.value)
              }
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>
        </div>
      </div>

      {/* Gold Tier */}
      <div className="flex items-center w-full mb-6">
        <div className="px-5 w-full">
          <Typography className="!mb-1 text-black !text-lg !font-inter">
            Gold Tier Boundaries
          </Typography>
          <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
            Set the boundaries for the gold tier
          </Typography>
          <div className="flex items-center space-x-5">
            <CustomTextField
              placeholder="200"
              value={goldTier.min}
              onChange={(e) =>
                handleTierChange(setGoldTier, "min", e.target.value)
              }
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
            <Typography className="!text-lg text-black !font-inter">
              To
            </Typography>
            <CustomTextField
              placeholder="299"
              value={goldTier.max}
              onChange={(e) =>
                handleTierChange(setGoldTier, "max", e.target.value)
              }
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>
        </div>
      </div>

      {/* Platinum Tier */}
      <div className="flex items-center w-full mb-6">
        <div className="px-5 w-full">
          <Typography className="!mb-1 text-black !text-lg !font-inter">
            Platinum Tier Boundaries
          </Typography>
          <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
            Set the boundaries for the platinum tier
          </Typography>
          <div className="flex items-center space-x-5">
            <CustomTextField
              placeholder="300"
              value={platinumTier.min}
              onChange={(e) =>
                handleTierChange(setPlatinumTier, "min", e.target.value)
              }
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
            <Typography className="!text-lg text-black !font-inter">
              To
            </Typography>
            <CustomTextField
              placeholder="399"
              value={platinumTier.max}
              onChange={(e) =>
                handleTierChange(setPlatinumTier, "max", e.target.value)
              }
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>
        </div>
      </div>

      {/* Tiers Perks */}
      <Typography className="!mb-8 !mt-12 !font-bold !text-xl text-[#838383] !font-inter">
        Tier Perks
      </Typography>
      <div className="px-5">
        <Typography className="!mb-1 text-black !mt-5 !text-lg !font-inter">
          Bronze Point Multiplier
        </Typography>
        <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
          Set the bronze tier point multiplier
        </Typography>
        <CustomTextField
          placeholder="1"
          value={bronzeTier.multiplier}
          onChange={(e) =>
            handleTierChange(setBronzeTier, "multiplier", e.target.value)
          }
          validate={validatePositiveNumber}
          errorMessage="Please enter a positive number"
          haveBorderRadius
          borderRadius="10px"
          type="number"
          className="mt-2"
        />
      </div>

      <div className="px-5">
        <Typography className="!mb-1 text-black !mt-5 !text-lg !font-inter">
          Silver Point Multiplier
        </Typography>
        <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
          Set the silver tier point multiplier
        </Typography>
        <CustomTextField
          placeholder="1.3"
          value={silverTier.multiplier}
          onChange={(e) =>
            handleTierChange(setSilverTier, "multiplier", e.target.value)
          }
          validate={validatePositiveNumber}
          errorMessage="Please enter a positive number"
          haveBorderRadius
          borderRadius="10px"
          type="number"
          className="mt-2"
        />
      </div>

      <div className="px-5">
        <Typography className="!mb-1 text-black !mt-5 !text-lg !font-inter">
          Gold Point Multiplier
        </Typography>
        <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
          Set the gold tier point multiplier
        </Typography>
        <CustomTextField
          placeholder="1.6"
          value={goldTier.multiplier}
          onChange={(e) =>
            handleTierChange(setGoldTier, "multiplier", e.target.value)
          }
          validate={validatePositiveNumber}
          errorMessage="Please enter a positive number"
          haveBorderRadius
          borderRadius="10px"
          type="number"
          className="mt-2"
        />
      </div>

      <div className="px-5">
        <Typography className="!mb-1 text-black !mt-5 !text-lg !font-inter">
          Platinum Point Multiplier
        </Typography>
        <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
          Set the platinum tier point multiplier
        </Typography>
        <CustomTextField
          placeholder="2"
          value={platinumTier.multiplier}
          onChange={(e) =>
            handleTierChange(setPlatinumTier, "multiplier", e.target.value)
          }
          validate={validatePositiveNumber}
          errorMessage="Please enter a positive number"
          haveBorderRadius
          borderRadius="10px"
          type="number"
          className="mt-2"
        />
      </div>

      <Box className="flex justify-center mt-6">
        <Button
          onClick={handleSaveChangesClick}
          color="primary"
          className="!px-10 !py-2 rounded-full !bg-[#FFEEE4] !text-[#E65300] transition duration-200"
        >
          Save Changes
        </Button>
      </Box>

      <SuccessDialog
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        imageSrc="/images/approved.svg"
        message="Your changes have been updated!"
        buttonText="Continue"
      />
    </Box>
  );
};

export default Tiers;
