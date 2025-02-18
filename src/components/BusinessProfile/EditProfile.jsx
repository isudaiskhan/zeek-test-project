import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CustomTextField from "../CustomTextField/CustomTextField";
import SuccessDialog from "../Modals/SuccessModal";
import ImageUpload from "../ImageUpload/ImageUpload";

const EditProfile = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    country: "",
  });

  const handleImageChangeAndUpload = (file) => {
    setUploadedImage(file);
  };

  const handleImageDelete = () => {
    setUploadedImage(null);
  };
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChangesClick = () => {
    console.log("Base64 Image String:", uploadedImage);
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <Typography className="!font-inter !text-2xl">
            Edit Profile
          </Typography>
          <Button
            onClick={handleSaveChangesClick}
            className="!bg-[#FFECE1] !text-[#FF5B00] !py-2 !px-8 !textlg"
          >
            Save Changes
          </Button>

          {/* Success Modal */}
          <SuccessDialog
            open={successModalOpen}
            onClose={handleCloseSuccessModal}
            imageSrc="/images/approved.svg"
            message="Your profile has been updated successfully!"
            buttonText="Continue"
          />
        </div>

        {/* Business Information */}
        <div className="!mt-10">
          <Typography
            variant="h6"
            className="!mb-8 !font-bold !text-xl text-[#838383] !font-inter"
          >
            Business Information
          </Typography>
          <div className="px-5">
            <Typography
              variant="body1"
              className="!mb-1 !mt-6 text-black !text-lg !font-inter"
            >
              Business Name
            </Typography>
            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change your business name, this will be visible to users.
            </Typography>
            <div className="mt-6 mb-7 max-w-[15rem]">
              <CustomTextField
                placeholder="Sato"
                name="businessname"
                haveBorderRadius
                borderRadius="10px"
              />
            </div>

            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Business Logo
            </Typography>
            <Typography
              variant="body1"
              className="!text-[#838383] !mb-5 !text-sm !font-inter"
            >
              Change your business logo, this will be visible to users.
            </Typography>

            <ImageUpload
              imageFile={uploadedImage}
              onFileDelete={handleImageDelete}
              onFileChange={handleImageChangeAndUpload}
            />
          </div>

          {/* Personal Information */}
          <Typography
            variant="h6"
            className="!mb-8 !mt-10 !font-bold !text-xl text-[#838383] !font-inter"
          >
            Personal Information
          </Typography>
          <div className="px-5">
            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              First Name
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change your business owner name, this will not be visible to
              users.
            </Typography>
            <div className="mt-6 mb-7 max-w-[15rem]">
              <CustomTextField
                placeholder="Darius"
                name="firstname"
                haveBorderRadius
                borderRadius="10px"
              />
            </div>
            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Last Name
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change your business owner name, this will not be visible to
              users.
            </Typography>
            <div className="mt-6 mb-7 max-w-[15rem]">
              <CustomTextField
                placeholder="White"
                name="lastname"
                haveBorderRadius
                borderRadius="10px"
              />
            </div>

            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Email
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change your business email, this will not be visible to users.
            </Typography>
            <div className="mt-6 mb-7 max-w-[15rem]">
              <CustomTextField
                placeholder="Dariuswhite@satocafé.com"
                name="email"
                haveBorderRadius
                borderRadius="10px"
              />
            </div>

            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Phone Number
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change your business phone number, this will not be visible to
              users.
            </Typography>
            <div className="mt-6 mb-7 max-w-[15rem]">
              <CustomTextField
                placeholder="+971 55 123 4567"
                name="phonenumber"
                haveBorderRadius
                borderRadius="10px"
              />
            </div>
          </div>

          {/* Primary Business Address */}
          <Typography
            variant="h6"
            className="!mb-8 !mt-10 !font-bold !text-xl text-[#838383] !font-inter"
          >
            Primary Business Address
          </Typography>
          <div className="px-5">
            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Country
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change the country your bussiness is located.
            </Typography>
            <div className="mt-6 mb-7">
              <FormControl fullWidth variant="outlined">
                <InputLabel>United Arab Emirates</InputLabel>
                <Select
                  name="country"
                  labelId="country-select-label"
                  label="Select role..."
                  value={selectedOptions.country}
                  onChange={(event) => handleSelectChange(event)}
                  className="!font-inter max-w-[15rem] !rounded-lg bg-[#F9F9F9]"
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              City/State
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change the city your bussiness is located.
            </Typography>
            <div className="mt-6 mb-7 max-w-[15rem]">
              <CustomTextField
                placeholder="Dubai"
                name="city/state"
                haveBorderRadius
                borderRadius="10px"
              />
            </div>

            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Street
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change the street your bussiness is located.
            </Typography>
            <div className="mt-6 mb-7 max-w-[15rem]">
              <CustomTextField
                placeholder="Jumeirah Beach Road"
                name="street"
                haveBorderRadius
                borderRadius="10px"
              />
            </div>

            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Building No.
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change the building number your bussiness is located in.
            </Typography>
            <div className="mt-6 mb-7 max-w-[15rem]">
              <CustomTextField
                placeholder="23"
                name="buildingnumber"
                haveBorderRadius
                borderRadius="10px"
              />
            </div>

            <Typography
              variant="body1"
              className="!mb-1 text-black !text-lg !font-inter"
            >
              Floor No.
            </Typography>

            <Typography className="!text-[#838383] !text-sm !font-inter">
              Change the floor your bussiness is located in.
            </Typography>
            <div className="mt-6 mb-7 max-w-[15rem]">
              <CustomTextField
                placeholder="N/A"
                name="floornumber"
                haveBorderRadius
                borderRadius="10px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
