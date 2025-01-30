import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import { RiArrowGoBackFill } from "react-icons/ri";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import SuccessDialog from "@/components/Modals/SuccessModal";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

const headingSX = {
  fontSize: "18px",
  fontWeight: 400,
};

const subHeadSX = {
  color: "#838383",
  fontSize: "14px",
  fontWeight: 400,
};

const AddMenuItem = ({ handleTabClick }) => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSaveChangesClick = () => {
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  console.log("Base64 Image String:", uploadedImage);

  const handleImageChangeAndUpload = (file) => {
    setUploadedImage(file);
  };

  const handleImageDelete = () => {
    setUploadedImage(null);
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-col justify-start items-start gap-2">
        <IconButton onClick={() => handleTabClick("menuItem")}>
          <RiArrowGoBackFill style={{ size: "30px", color: "#000000" }} />
        </IconButton>
        <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
          Add Menu Item
        </Typography>
      </div>
      <div className="flex flex-col justify-start items-start gap-8 mt-3">
        <div className="flex flex-col gap-2">
          <Typography sx={headingSX}>Item Name</Typography>
          <Typography sx={subHeadSX}>Name the new item</Typography>
          <CustomTextField
            haveBorderRadius
            borderRadius="10px"
            placeholder="ie. Espresso"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typography sx={headingSX}>Item Description</Typography>
          <Typography sx={subHeadSX}>Describe the new item</Typography>
          <CustomTextField
            haveBorderRadius
            borderRadius="10px"
            placeholder="ie. Espresso"
            multiline
            rows={4}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typography sx={headingSX}>Item Price</Typography>
          <Typography sx={subHeadSX}>
            Price the new item (values in AED)
          </Typography>
          <CustomTextField
            haveBorderRadius
            borderRadius="10px"
            placeholder="ie. 20, 30, 40, 50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typography sx={headingSX}>Item Image</Typography>
          <Typography sx={subHeadSX}>
            Upload an image of the new item
          </Typography>
          <ImageUpload
            imageFile={uploadedImage}
            onFileDelete={handleImageDelete}
            onFileChange={handleImageChangeAndUpload}
          />
        </div>
      </div>
      <div className="flex flex-row gap-6 mt-6 justify-center items-center">
        <CustomButton
          text="Cancel"
          textColor="#000000"
          bgColor="#F4F4F4"
          onClick={() => handleTabClick("menuItem")}
        />
        <CustomButton
          onClick={handleSaveChangesClick}
          text="Create Item"
          textColor="#FF762A"
          bgColor="#FFECE1"
        />
      </div>
      {/* Success Modal */}
      <SuccessDialog
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        imageSrc="/images/approved.svg"
        message="Your new item has been created successfully"
        buttonText="Continue"
      />
    </div>
  );
};

export default AddMenuItem;
