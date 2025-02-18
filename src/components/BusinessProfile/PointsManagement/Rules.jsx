"use client";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import SuccessDialog from "@/components/Modals/SuccessModal";
import { updateRules } from "@/services/business-profile/points-management";
import { uploadFileFunc } from "@/utils/helper-functions";
import { useSubmitHandler } from "@/utils/hooks";
import { RulesSchema } from "@/utils/yup-schemas";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";

const initialValues = {
  pointsPerAmount: "",
  redemptionPointValue: "",
  pointName: "",
  isPointExpirable: true,
  birthdayPoints: "",
  loyaltyCoinImage: "",
  minPointsForRedemption: "",
  minSpendForPoints: "",
  monthsForExpiry: "",
  pointsCapPerTransaction: "",
  pointsForSignUp: "",
  pointsPerReview: "",
};
const Rules = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const { submitHandler } = useSubmitHandler();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RulesSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      let imageKey = "";
      if (uploadedImage) {
        const response = await uploadFileFunc(uploadedImage);
        imageKey = response?.key;
      }
      const formattedValues = {
        ...values,
        loyaltyCoinImage: imageKey,
      };

      if (!values.isPointExpirable) {
        formattedValues.monthsForExpiry = null;
      }
      submitHandler({
        successMsg: "Your changes have been updated!",
        onSubmit: async () => {
          await updateRules(formattedValues);
          setSuccessModalOpen(true);
          resetForm();
          handleImageDelete();
          setActiveTab(true);
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    formik.setFieldValue("isPointExpirable", newValue ? true : false);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const handleImageChangeAndUpload = (file) => {
    if (file) {
      setUploadedImage(file);
      formik.setFieldValue("loyaltyCoinImage", file);
    }
  };

  const handleImageDelete = () => {
    setUploadedImage(null);
    formik.setFieldValue("loyaltyCoinImage", "");
  };

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
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
            <div className="mt-6 max-w-[15rem]">
              <CustomTextField
                placeholder="ie. 1, 2, 5, 10"
                name="pointsPerAmount"
                value={formik.values.pointsPerAmount}
                onChange={formik.handleChange}
                error={
                  formik.touched.pointsPerAmount &&
                  Boolean(formik.errors.pointsPerAmount)
                }
                errorMessage={
                  formik.touched.pointsPerAmount &&
                  formik.errors.pointsPerAmount
                }
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
              Maximum points a customer can earn in a single transaction, if
              none leave blank.
            </Typography>
            <div className="mt-6 max-w-[15rem]">
              <CustomTextField
                placeholder="ie. 100, 200, 500"
                name="pointsCapPerTransaction"
                value={formik.values.pointsCapPerTransaction}
                onChange={formik.handleChange}
                error={
                  formik.touched.pointsCapPerTransaction &&
                  Boolean(formik.errors.pointsCapPerTransaction)
                }
                errorMessage={
                  formik.touched.pointsCapPerTransaction &&
                  formik.errors.pointsCapPerTransaction
                }
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
            <div className="mt-6 max-w-[15rem]">
              <CustomTextField
                placeholder="ie. 10, 20, 50"
                name="minSpendForPoints"
                value={formik.values.minSpendForPoints}
                onChange={formik.handleChange}
                error={
                  formik.touched.minSpendForPoints &&
                  Boolean(formik.errors.minSpendForPoints)
                }
                errorMessage={
                  formik.touched.minSpendForPoints &&
                  formik.errors.minSpendForPoints
                }
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
            <div className="mt-6 max-w-[15rem]">
              <CustomTextField
                placeholder="ie. 10, 20, 50, 100"
                name="redemptionPointValue"
                value={formik.values.redemptionPointValue}
                onChange={formik.handleChange}
                error={
                  formik.touched.redemptionPointValue &&
                  Boolean(formik.errors.redemptionPointValue)
                }
                errorMessage={
                  formik.touched.redemptionPointValue &&
                  formik.errors.redemptionPointValue
                }
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
            <div className="mt-6 max-w-[15rem]">
              <CustomTextField
                placeholder="ie. 0, 10, 20, 50"
                name="minPointsForRedemption"
                value={formik.values.minPointsForRedemption}
                onChange={formik.handleChange}
                error={
                  formik.touched.minPointsForRedemption &&
                  Boolean(formik.errors.minPointsForRedemption)
                }
                errorMessage={
                  formik.touched.minPointsForRedemption &&
                  formik.errors.minPointsForRedemption
                }
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
            value={formik.values.isPointExpirable}
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
            <Tab label="Yes" value={true} />
            <Tab label="No" value={false} />
          </Tabs>

          <Typography className="!text-[#838383] !mt-6 !mb-2 !text-sm !font-inter">
            How many months of inactivity will expire points? if &apos;No is
            selected above,leave blank.
          </Typography>
          <div className="max-w-[15rem]">
            <CustomTextField
              placeholder="ie. 10, 20, 50, 100"
              name="monthsForExpiry"
              value={formik.values.monthsForExpiry}
              onChange={formik.handleChange}
              error={
                formik.touched.monthsForExpiry &&
                Boolean(formik.errors.monthsForExpiry)
              }
              errorMessage={
                formik.touched.monthsForExpiry && formik.errors.monthsForExpiry
              }
              haveBorderRadius
              borderRadius="10px"
              type="number"
              disabled={!activeTab}
            />
          </div>
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

            <ImageUpload
              imageFile={uploadedImage}
              onFileDelete={handleImageDelete}
              onFileChange={handleImageChangeAndUpload}
              error={Boolean(formik.errors.loyaltyCoinImage)}
              errorMessage={formik.errors.loyaltyCoinImage}
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
            <div className="mt-6 max-w-[15rem]">
              <CustomTextField
                placeholder="ie. Zeek Points"
                name="pointName"
                value={formik.values.pointName}
                onChange={formik.handleChange}
                error={
                  formik.touched.pointName && Boolean(formik.errors.pointName)
                }
                errorMessage={
                  formik.touched.pointName && formik.errors.pointName
                }
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
              Points given to customers when they first join the loyalty
              program.
            </Typography>
            <div className="mt-6 max-w-[15rem]">
              <CustomTextField
                placeholder="ie. 10, 20, 50, 100"
                name="pointsForSignUp"
                value={formik.values.pointsForSignUp}
                onChange={formik.handleChange}
                error={
                  formik.touched.pointsForSignUp &&
                  Boolean(formik.errors.pointsForSignUp)
                }
                errorMessage={
                  formik.touched.pointsForSignUp &&
                  formik.errors.pointsForSignUp
                }
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
            <div className="mt-6 max-w-[15rem]">
              <CustomTextField
                placeholder="ie. 1, 5, 10, 20"
                name="pointsPerReview"
                value={formik.values.pointsPerReview}
                onChange={formik.handleChange}
                error={
                  formik.touched.pointsPerReview &&
                  Boolean(formik.errors.pointsPerReview)
                }
                errorMessage={
                  formik.touched.pointsPerReview &&
                  formik.errors.pointsPerReview
                }
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
              <div className="mt-6 max-w-[15rem]">
                <CustomTextField
                  placeholder="ie. 10, 20, 50, 100"
                  name="birthdayPoints"
                  value={formik.values.birthdayPoints}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.birthdayPoints &&
                    Boolean(formik.errors.birthdayPoints)
                  }
                  errorMessage={
                    formik.touched.birthdayPoints &&
                    formik.errors.birthdayPoints
                  }
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
            type="submit"
            color="primary"
            loading={formik.isSubmitting}
            className={`!px-10 !py-2 rounded-full !bg-[#FFEEE4] ${
              !formik.isSubmitting && "!text-[#E65300]"
            } transition duration-200`}
          >
            Save Changes
          </Button>
        </div>
      </form>

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
