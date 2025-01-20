import React, { useState, useRef } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { RiArrowGoBackFill } from "react-icons/ri";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import SuccessDialog from "@/components/Modals/SuccessModal";

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
  const fileInputRef = useRef(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSaveChangesClick = () => {
    setSuccessModalOpen(true);
  };
  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const handleImageUpload = (file) => {
    if (file) {
      setUploadedImage(file);
    }
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
