"use client";
import React, { useState, useRef } from "react";
import { Box, Button, Typography, Tab, Tabs } from "@mui/material";
import SuccessDialog from "@/components/Modals/SuccessModal";
import CustomTextField from "@/components/CustomTextField/CustomTextField";

const Rules = () => {
  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState("rules");
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const [inputs, setInputs] = useState({
    pointsPerAED: "",
    pointsCapPerTransaction: "",
    minSpendForPoints: "",
    pointValueForRedemption: "",
    minPointsForRedemption: "",
    inactivityMonths: "",
    pointNaming: "",
    signUpBonus: "",
    reviewRewards: "",
    birthdayRewards: "",
  });

  const handleSaveChangesClick = () => {
    console.log(inputs);
    setSuccessModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const validatePositiveNumber = (value) => {
    return /^\d+$/.test(value);
  };

  const handleImageUpload = (file) => {
    if (file) {
      setUploadedImage(file);
    }
  };

  return (
    <Box>
      <div className="!mt-10">
        <Typography
          variant="h6"
          className="!mb-8 !font-bold !text-xl text-[#838383] !font-inter"
        >
          Points Allocation Rules
        </Typography>
        <div className="px-5">
          <Typography
            variant="body1"
            className="!mb-1 text-black !text-lg !font-inter"
          >
            Points Per AED
          </Typography>

          <Typography className="!text-[#838383] !text-sm !font-inter">
            Set how many points customers earn per AED spent.
          </Typography>
          <div className="mt-6">
            <CustomTextField
              placeholder="ie. 1, 2, 5, 10"
              name="pointsPerAED"
              value={inputs.pointsPerAED}
              onChange={handleInputChange}
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>
          <Typography
            variant="body1"
            className="!mb-1 !mt-6 text-black !text-lg !font-inter"
          >
            Points Cap Per Transaction
          </Typography>
          <Typography className="!text-[#838383] !text-sm !font-inter">
            Maximum points a customer can earn in a single transaction, if none
            leave blank.
          </Typography>
          <div className="mt-6">
            <CustomTextField
              placeholder="ie. 100, 200, 500"
              name="pointsCapPerTransaction"
              value={inputs.pointsCapPerTransaction}
              onChange={handleInputChange}
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>
          <Typography
            variant="body1"
            className="!mb-1 !mt-6 text-black !text-lg !font-inter"
          >
            Minimum Spend for Points
          </Typography>
          <Typography className="!text-[#838383] !text-sm !font-inter">
            Define a spending minimum to earn points. (e.g., minimum AED 10
            purchase to earn points).
          </Typography>
          <div className="mt-6">
            <CustomTextField
              placeholder="ie. 10, 20, 50"
              name="minSpendForPoints"
              value={inputs.minSpendForPoints}
              onChange={handleInputChange}
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="!mt-10">
        <Typography
          variant="h6"
          className="!mb-8 !font-bold !text-xl text-[#838383] !font-inter"
        >
          Redemption Rules
        </Typography>
        <div className="px-5">
          <Typography
            variant="body1"
            className="!mb-1 !mt-6 text-black !text-lg !font-inter"
          >
            Point Value for Redemption
          </Typography>
          <Typography className="!text-[#838383] !text-sm !font-inter">
            How many points equal AED 1.
          </Typography>
          <div className="mt-6">
            <CustomTextField
              placeholder="ie. 10, 20, 50, 100"
              name="pointValueForRedemption"
              value={inputs.pointValueForRedemption}
              onChange={handleInputChange}
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>
          <Typography
            variant="body1"
            className="!mb-1 !mt-6 text-black !text-lg !font-inter"
          >
            Minimum Points for Redemption
          </Typography>
          <Typography className="!text-[#838383] !text-sm !font-inter">
            Minimum Points required to redeem any reward.
          </Typography>
          <div className="mt-6">
            <CustomTextField
              placeholder="ie. 0, 10, 20, 50"
              name="minPointsForRedemption"
              value={inputs.minPointsForRedemption}
              onChange={handleInputChange}
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="px-5">
        <Typography className="!mb-1 !mt-6 text-black !text-lg !font-inter">
          Expiry Policy
        </Typography>

        <Typography className="text-[#838383] !text-sm !font-inter">
          Define if/when points expire (eg., after 12 months of inactivity).
        </Typography>
        <Typography className="!mt-6 !mb-3 text-[#838383] !text-sm !font-inter">
          Do points expire ?
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="none"
          sx={{
            "& .MuiTab-root": {
              border: "1px solid #E7E7E7",
            },
            "& .Mui-selected": {
              color: "#FF5B00",
              backgroundColor: "#E7E7E7",
            },
          }}
        >
          <Tab label="Yes" value="rules" />
          <Tab label="No" value="tiers" />
        </Tabs>

        <Typography className="!text-[#838383] !mt-6 !mb-2 !text-sm !font-inter">
          How many months of inactivity will expire points? if &apos;No is
          selected above,leave blank.
        </Typography>
        <CustomTextField
          placeholder="ie. 10, 20, 50, 100"
          name="inactivityMonths"
          value={inputs.inactivityMonths}
          onChange={handleInputChange}
          validate={validatePositiveNumber}
          errorMessage="Please enter a positive number"
          haveBorderRadius
          borderRadius="10px"
          type="number"
        />
      </div>

      <div className="!mt-10">
        <Typography
          variant="h6"
          className="!mb-8 !font-bold !text-xl text-[#838383] !font-inter"
        >
          Design & Branding
        </Typography>
        <div className="px-5">
          <Typography
            variant="body1"
            className="!mb-1 text-black !text-lg !font-inter"
          >
            Loyalty coin/icon
          </Typography>
          <Typography
            variant="body1"
            className="!text-[#838383] !mb-2 !text-sm !font-inter"
          >
            upload or customize a coin/logo that represents the points.
          </Typography>

          <div
            className="flex justify-center items-center rounded-md p-4 cursor-pointer w-[230px] h-[210px]"
            style={{
              border: "1px solid #D3D3D3",
              backgroundImage: uploadedImage
                ? `url(${URL.createObjectURL(uploadedImage)})`
                : `url("/images/checkers.png")`,
              backgroundSize: "cover",
            }}
            onClick={() => fileInputRef.current.click()}
          >
            {!uploadedImage && (
              <Box
                className="flex justify-center items-center px-6 py-2 bg-[#FFFFFF] rounded-2xl"
                sx={{ boxShadow: "0px 0px 10px 0px #0000004D" }}
              >
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                  Upload Image
                </Typography>
              </Box>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
          <Typography
            variant="body1"
            className="!mb-1 !mt-6 text-black !text-lg !font-inter"
          >
            Point Naming
          </Typography>
          <Typography className="!text-[#838383] !text-sm !font-inter">
            Name your points(e.g., &apos;Zeek Points&apos;, &apos;Coffee
            Coins&apos;).
          </Typography>
          <div className="mt-6">
            <CustomTextField
              placeholder="ie. Zeek Points"
              name="pointNaming"
              value={inputs.pointNaming}
              onChange={handleInputChange}
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>

          <Typography
            variant="h6"
            className="!mb-8 !mt-10 !font-bold !text-xl text-[#838383] !font-inter"
          >
            Bonus Points
          </Typography>
          <Typography
            variant="body1"
            className="!mb-1 text-black !text-lg !font-inter"
          >
            Sign-Up Bonus
          </Typography>

          <Typography className="!text-[#838383] !text-sm !font-inter">
            Points given to customers when they first join the loyalty program.
          </Typography>
          <div className="mt-6">
            <CustomTextField
              placeholder="ie. 10, 20, 50, 100"
              name="signUpBonus"
              value={inputs.signUpBonus}
              onChange={handleInputChange}
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>

          <Typography
            variant="h6"
            className="!mb-8 !mt-10 !font-bold !text-xl text-[#838383] !font-inter"
          >
            Activity Rules
          </Typography>
          <Typography
            variant="body1"
            className="!mb-1 text-black !text-lg !font-inter"
          >
            Review Rewards
          </Typography>

          <Typography className="!text-[#838383] !text-sm !font-inter">
            Reward points for leaving reviews.
          </Typography>
          <div className="mt-6">
            <CustomTextField
              placeholder="ie. 1, 5, 10, 20"
              name="reviewRewards"
              value={inputs.reviewRewards}
              onChange={handleInputChange}
              validate={validatePositiveNumber}
              errorMessage="Please enter a positive number"
              haveBorderRadius
              borderRadius="10px"
              type="number"
            />
          </div>

          <div className="mt-6">
            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Birthday Rewards
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              automatically assign bonus points on a customer&apos;s birthday.
            </Typography>
            <div className="mt-6">
              <CustomTextField
                placeholder="ie. 10, 20, 50, 100"
                name="birthdayRewards"
                value={inputs.birthdayRewards}
                onChange={handleInputChange}
                validate={validatePositiveNumber}
                errorMessage="Please enter a positive number"
                haveBorderRadius
                borderRadius="10px"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Button
          onClick={handleSaveChangesClick}
          color="primary"
          className="!px-10 !py-2 rounded-full !bg-[#FFEEE4] !text-[#E65300] transition duration-200"
        >
          Save Changes
        </Button>
      </div>

      {/* Success Modal */}
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

export default Rules;
