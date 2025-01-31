import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomDialogContent from "@/components/Custom/CustomDialogContent/CustomDialogContent";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import {
  Autocomplete,
  Box,
  Dialog,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useRef, useState } from "react";
import SuccessDialog from "../SuccessModal";
import { useFormik } from "formik";
import {
  getImageBase64URL,
  transformString,
  uploadFileFunc,
} from "@/utils/helper-functions";
import { OFFER_TYPES, PROMOTION_COIN_TYPES } from "@/enums/promotion";
import dayjs from "dayjs";
import { useGetBranches } from "@/services/branch";
import { PromotionRewardSchema } from "@/utils/yup-schemas";
import { useGetSegments } from "@/services/segments";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { addPromotion } from "@/services/promotions";

const subHeadingsSX = {
  fontSize: "14px",
  fontWeight: 400,
};

const paragraphSX = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#737373",
};

const coinTypesOptions = Object.entries(PROMOTION_COIN_TYPES).map(
  ([key, value]) => ({
    label: transformString(key),
    value,
  })
);

const offerTypeOptions = Object.entries(OFFER_TYPES).map(([key, value]) => ({
  label: transformString(key),
  value,
}));

const RewardModal = ({ open, onClose }) => {
  const [activeCoinType, setActiveCoinType] = useState("sato");
  const [activeTab, setActiveTab] = useState("repeating");
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [filePreview, setFilePreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const { invalidateQuery } = useInvalidateQuery();
  const { submitHandler } = useSubmitHandler();

  const { data } = useGetBranches(1, 1000);
  const { data: segments } = useGetSegments(1, 1000);

  const handleCoinTypeClick = (coin) => {
    setActiveCoinType(coin);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const initialValues = {
    promotionType: "reward",
    name: "",
    description: "",
    image: "",
    expiryDate: null,
    allBranches: false,
    branches: [""],
    maxLimitUse: "",
    coinCost: "",
    coinType: "",
    businessSegments: [""],
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: PromotionRewardSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      let imageKey = "";
      if (selectedFile) {
        const response = await uploadFileFunc(selectedFile);
        imageKey = response?.key;
      }
      const formattedValues = {
        ...values,
        image: imageKey,
        expiryDate: values.expiryDate
          ? dayjs(values.expiryDate).format("YYYY-MM-DD")
          : null,
      };
      submitHandler({
        successMsg: "Your new promotion has been added successfully!",
        onSubmit: async () => {
          await addPromotion(formattedValues);
          invalidateQuery(["get-promotions"]);
          setOpenSuccessModal(true);
          resetForm();
          setFilePreview("");
          setSelectedFile(null);
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64URL = await getImageBase64URL(file);
      setFilePreview(base64URL);
      setSelectedFile(file);
      formik.setFieldValue("image", file.name);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          width: "50%",
          maxWidth: "50%",
        },
      }}
    >
      <DialogTitle>
        <Box className="p-4">
          <Typography sx={{ fontSize: "32px", fontWeight: 400 }}>
            Add New Reward
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
      </DialogTitle>
      <CustomDialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Box className="flex flex-col gap-8 p-4">
            <div className="flex justify-start items-start mb-4">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Reward Details
              </Typography>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Reward Name</Typography>
              <CustomTextField
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                errorMessage={formik.touched.name && formik.errors.name}
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Reward Description</Typography>
              <Typography sx={paragraphSX}>
                Add a description of the promotion for added detail if needed.
              </Typography>
              <CustomTextField
                placeholder="i.e. 10, 20, 30"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                errorMessage={
                  formik.touched.description && formik.errors.description
                }
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Reward Image</Typography>
              <Typography sx={paragraphSX}>
                Upload an image or select an image from the active menu items.
              </Typography>
              <div
                className="flex justify-center items-center rounded-md p-4 cursor-pointer w-[325px] h-[297px] relative"
                style={{
                  border: "1px solid #D3D3D3",
                  backgroundImage: filePreview
                    ? `url(${filePreview})`
                    : `url("/images/checkers.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={handleFileClick}
                error={formik.touched.image && Boolean(formik.errors.image)}
              >
                {!filePreview && (
                  <Box
                    className="flex justify-center items-center px-6 py-2 bg-[#FFFFFF] rounded-2xl"
                    sx={{ boxShadow: "0px 0px 10px 0px #0000004D" }}
                  >
                    <Typography sx={subHeadingsSX}>Add Image</Typography>
                  </Box>
                )}
                <input
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  type="file"
                  hidden
                  accept="image/*"
                />
              </div>
              {formik.touched.image && formik.errors.image && (
                <Typography sx={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.image}
                </Typography>
              )}
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Coin Type</Typography>
              <Box className="flex flex-col items-center justify-center gap-1 py-4 w-auto">
                <div
                  className={`w-auto flex flex-col md:flex-row gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-md`}
                  style={{
                    boxShadow: "-1px 2px 20px -5px #00000040",
                  }}
                >
                  {coinTypesOptions.map((point) => (
                    <Box
                      key={point.value}
                      onClick={() => {
                        handleCoinTypeClick(point.value);
                        formik.setFieldValue("coinType", point.value);
                      }}
                      className={`w-auto h-8 justify-center items-center font-semibold px-16 py-2 rounded-xl transition duration-200 cursor-pointer ${
                        activeCoinType === point.value
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
                        {point.label}
                      </Typography>
                    </Box>
                  ))}
                </div>
              </Box>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Coin Cost</Typography>
              <Typography sx={paragraphSX}>
                Choose the cost of redeeming the reward in points value.
              </Typography>
              <CustomTextField
                placeholder="i.e. 10, 20, 50"
                name="coinCost"
                type="number"
                value={formik.values.coinCost}
                onChange={formik.handleChange}
                error={
                  formik.touched.coinCost && Boolean(formik.errors.coinCost)
                }
                errorMessage={formik.touched.coinCost && formik.errors.coinCost}
              />
            </div>
            <div className="flex justify-start items-start my-4">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Operational Details
              </Typography>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Valid Through</Typography>
              <Typography sx={paragraphSX}>
                Choose the expiry date for this reward
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="DD/MM/YYYY"
                    value={formik.values.expiryDate}
                    onChange={(newValue) => {
                      formik.setFieldValue(
                        "expiryDate",
                        newValue ? dayjs(newValue) : null
                      );
                    }}
                    sx={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "8px",
                    }}
                    renderInput={(params) => (
                      <CustomTextField
                        {...params}
                        name="expiryDate"
                        error={
                          formik.touched.expiryDate &&
                          Boolean(formik.errors.expiryDate)
                        }
                      />
                    )}
                  />
                </DemoContainer>
              </LocalizationProvider>
              {formik.touched.expiryDate && formik.errors.expiryDate && (
                <Typography sx={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.expiryDate}
                </Typography>
              )}
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Branch</Typography>
              <Typography sx={paragraphSX}>
                Choose whether reward is branch specific or applicable for all
                branches
              </Typography>
              <Autocomplete
                multiple
                disablePortal
                options={[{ _id: "ALL", name: "ALL" }, ...(data?.data || [])]}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 }}
                value={
                  formik.values.allBranches
                    ? [{ _id: "ALL", name: "ALL" }]
                    : data?.data?.filter((item) =>
                        formik.values.branches?.includes(item._id)
                      ) || []
                }
                onChange={(event, newValue) => {
                  if (newValue.some((item) => item._id === "ALL")) {
                    formik.setFieldValue("allBranches", true);
                    formik.setFieldValue(
                      "branches",
                      data?.data?.map((item) => item._id) || []
                    );
                  } else {
                    formik.setFieldValue("allBranches", false);
                    formik.setFieldValue(
                      "branches",
                      newValue.map((item) => item._id) || []
                    );
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select"
                    size="small"
                    error={
                      formik.touched.branches && Boolean(formik.errors.branches)
                    }
                    sx={{
                      borderRadius: "16px", // For rounded corners
                      backgroundColor: "#F4F4F4",
                      width: "80%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "16px",
                      },
                    }}
                  />
                )}
              />
              {formik.touched.branches && formik.errors.branches && (
                <Typography sx={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.branches}
                </Typography>
              )}
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Reward Uses</Typography>
              <Typography sx={paragraphSX}>
                Choose whether this offer is repeating or limited use
              </Typography>
              <Box className="flex flex-col items-center justify-center gap-1 py-5 w-auto">
                <div
                  className={`w-auto flex flex-col md:flex-row gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-md`}
                  style={{
                    boxShadow: "-1px 2px 20px -5px #00000040",
                  }}
                >
                  {offerTypeOptions.map((tab) => (
                    <Box
                      key={tab.value}
                      onClick={() => {
                        handleTabClick(tab.value);
                        formik.setFieldValue("offerType", tab.value);
                      }}
                      className={`w-auto h-8 justify-center items-center font-semibold px-16 py-2 rounded-xl transition duration-200 cursor-pointer ${
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
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Limited use value</Typography>
              <Typography sx={paragraphSX}>
                Choose how many times a customer can redeem this Reward. If
                &quot;Repeating&quot; was selected above, leave this section
                blank.
              </Typography>
              <CustomTextField
                placeholder="i.e, 1,2,3,4"
                name="maxLimitUse"
                value={formik.values.maxLimitUse}
                type="number"
                onChange={formik.handleChange}
                error={
                  formik.touched.maxLimitUse &&
                  Boolean(formik.errors.maxLimitUse)
                }
                errorMessage={
                  formik.touched.maxLimitUse && formik.errors.maxLimitUse
                }
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <Typography sx={subHeadingsSX}>
                Segment Specific Promotion
              </Typography>
              <Typography sx={paragraphSX}>
                If this reward is offered to a specific segment of customers,
                please select which segments below. If the reward is available
                to everyone, select “All” below.
              </Typography>
              <Autocomplete
                multiple
                disablePortal
                options={[
                  { _id: "all", title: "All" },
                  ...(segments?.data || []),
                ]}
                getOptionLabel={(option) => option.title}
                onChange={(event, value) => {
                  if (value.some((item) => item._id === "all")) {
                    // Include all segment IDs if "All" is selected
                    formik.setFieldValue(
                      "businessSegments",
                      segments?.data.map((segment) => segment._id) || []
                    );
                  } else {
                    // Otherwise, set the selected IDs
                    formik.setFieldValue(
                      "businessSegments",
                      value.map((item) => item._id)
                    );
                  }
                }}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select"
                    size="small"
                    sx={{
                      borderRadius: "16px", // For rounded corners
                      backgroundColor: "#F4F4F4",
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "16px",
                      },
                    }}
                  />
                )}
              />
            </div>

            <Box className="p-4">
              <div className="flex flex-row gap-4 justify-center items-center">
                <CustomButton
                  text="Cancel"
                  bgColor="#F4F4F4"
                  textColor="#787878"
                  onClick={onClose}
                />

                <CustomButton
                  text="Add Reward"
                  bgColor="#FFECE1"
                  textColor="#FF5B00"
                  type="submit"
                />
              </div>
            </Box>
          </Box>
        </form>
      </CustomDialogContent>
      {openSuccessModal && (
        <SuccessDialog
          open={openSuccessModal}
          onClose={handleCloseSuccessModal}
          message="Your new promotion has been added successfully!"
          buttonText="Continue"
        />
      )}
    </Dialog>
  );
};

export default RewardModal;
