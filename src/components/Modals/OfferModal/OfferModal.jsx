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
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import React, { useState } from "react";
import SuccessDialog from "../SuccessModal";
import { useFormik } from "formik";
import {
  getImageBase64URL,
  transformString,
  uploadFileFunc,
} from "@/utils/helper-functions";
import dayjs from "dayjs";
import { useGetBranches } from "@/services/branch";
import {
  DOUBLE_POINTS,
  OFFER_TYPES,
  PROMOTION_REPEATS_ON,
} from "@/enums/promotion";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { addPromotion } from "@/services/promotions";
import { PromotionOfferSchema } from "@/utils/yup-schemas";

const subHeadingsSX = {
  fontSize: "14px",
  fontWeight: 400,
};

const paragraphSX = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#737373",
};

const offerTypeOptions = Object.entries(OFFER_TYPES).map(([key, value]) => ({
  label: transformString(key),
  value,
}));

const daysOfWeekOptions = Object.entries(PROMOTION_REPEATS_ON).map(
  ([key, value]) => ({
    label: transformString(key),
    value,
  })
);

const pointsOptions = Object.entries(DOUBLE_POINTS).map(([key, value]) => ({
  label: transformString(key),
  value,
}));

const OfferModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("repeating");
  const [activePoints, setActivePoints] = useState("single");
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [filePreview, setFilePreview] = React.useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = React.useRef(null);

  const { data } = useGetBranches(1, 1000);

  const { invalidateQuery } = useInvalidateQuery();
  const { submitHandler } = useSubmitHandler();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePointsClick = (point) => {
    setActivePoints(point);
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const initialValues = {
    promotionType: "offer",
    name: "",
    description: "",
    image: "",
    expiryDate: null,
    allBranches: false,
    branches: [""],
    maxLimitUse: "",
    repeatsOn: [""],
    offerType: "",
    doublePoints: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: PromotionOfferSchema,
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
        <Typography sx={{ fontSize: "32px", fontWeight: 400 }}>
          Add New Offer
        </Typography>
        <Divider sx={{ my: 2 }} />
      </DialogTitle>
      <CustomDialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Box className="flex flex-col gap-8 p-4">
            <div className="flex justify-start items-start mb-4">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Offer Details
              </Typography>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Offer Name</Typography>
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
              <Typography sx={subHeadingsSX}>Offer Description</Typography>
              <Typography sx={paragraphSX}>
                Add a description of the promotion for added detail if needed.
              </Typography>
              <CustomTextField
                placeholder="i.e. 20% off"
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

            <div className="flex flex-col justify-start items-start gap-2">
              <Typography sx={subHeadingsSX}>Offer Image</Typography>
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
            <div className="flex justify-start items-start my-4">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Operational Details
              </Typography>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Valid Through</Typography>
              <Typography sx={paragraphSX}>
                Choose the expiry date for this offer
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
              <Typography sx={subHeadingsSX}>
                Offer Availability Block (Optional)
              </Typography>
              <Typography sx={paragraphSX}>
                Choose a time frame in the day where the offer will be
                available.
              </Typography>
              <div className="flex flex-row gap-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker", "TimePicker"]}>
                    <TimePicker
                      label="00:00"
                      sx={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "8px",
                      }}
                    />
                    <TimePicker
                      label="00:00"
                      sx={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "8px",
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Branch</Typography>
              <Typography sx={paragraphSX}>
                Choose whether offer is branch specific or applicable for all
                branches
              </Typography>
              <Autocomplete
                disablePortal
                multiple
                // options={data?.data || []}
                options={[{ _id: "ALL", name: "ALL" }, ...(data?.data || [])]}
                getOptionLabel={(option) => option.name}
                sx={{ width: "50%" }}
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
                      newValue.map((item) => item._id)
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
              <Typography sx={subHeadingsSX}>Offer Uses</Typography>
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
                Choose how many times a customer can redeem this offer. If
                &quot;Repeating&quot; was selected above, leave this section
                blank.
              </Typography>
              <CustomTextField
                placeholder="i.e, 1,2,3,4"
                type="number"
                name="maxLimitUse"
                value={formik.values.maxLimitUse}
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
              <Typography sx={subHeadingsSX}>Repeated Weekly</Typography>
              <Typography sx={paragraphSX}>
                If “Repeating” was selected above, select which days the offer
                will be available. If the offer will be available every day of
                the week, select “all” below.
              </Typography>
              <Autocomplete
                disablePortal
                multiple
                options={daysOfWeekOptions}
                getOptionLabel={(option) => option.label}
                value={
                  daysOfWeekOptions.filter((option) =>
                    formik.values.repeatsOn?.includes(option.value)
                  ) || []
                } // Ensure multiple selected values
                onChange={(event, newValue) => {
                  formik.setFieldValue(
                    "repeatsOn",
                    newValue.map((option) => option.value) // Store only values
                  );
                }}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select"
                    size="small"
                    error={
                      formik.touched.repeatsOn &&
                      Boolean(formik.errors.repeatsOn)
                    }
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
              {formik.touched.repeatsOn && formik.errors.repeatsOn && (
                <Typography sx={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.repeatsOn}
                </Typography>
              )}
            </div>
            <div className="flex flex-col justify-start items-start gap-2 ">
              <Typography sx={subHeadingsSX}>Double Points</Typography>
              <Typography sx={paragraphSX}>
                Choose if you would like to apply double points for redeeming
                this offer.
              </Typography>
              <Box className="flex flex-col items-center justify-center gap-1 py-5 w-auto">
                <div
                  className={`w-auto flex flex-col md:flex-row gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-md`}
                  style={{
                    boxShadow: "-1px 2px 20px -5px #00000040",
                  }}
                >
                  {pointsOptions?.map((point) => (
                    <Box
                      key={point.value}
                      onClick={() => {
                        handlePointsClick(point.value);
                        formik.setFieldValue("pointsMultiplier", point.value);
                      }}
                      className={`w-auto h-8 justify-center items-center font-semibold px-16 py-2 rounded-xl transition duration-200 cursor-pointer ${
                        activePoints === point.value
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
            <Box className="p-4">
              <div className="flex flex-row gap-4 justify-center items-center">
                <CustomButton
                  text="Cancel"
                  bgColor="#F4F4F4"
                  textColor="#787878"
                  onClick={onClose}
                />

                <CustomButton
                  text="Add Offer"
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
          buttonText="Close"
        />
      )}
    </Dialog>
  );
};

export default OfferModal;
