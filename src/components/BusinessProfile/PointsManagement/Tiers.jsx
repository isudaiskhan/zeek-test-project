"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import SuccessDialog from "@/components/Modals/SuccessModal";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import { useFormik } from "formik";
import { TiersSchema } from "@/utils/yup-schemas";
import { useSubmitHandler } from "@/utils/hooks";
import { updateTiers } from "@/services/business-profile/points-management";

const initialValues = {
  bronze: {
    pointMultiplier: "",
    minThreshold: 0,
    maxThreshold: "",
  },
  silver: {
    pointMultiplier: "",
    minThreshold: "",
    maxThreshold: "",
  },
  gold: {
    pointMultiplier: "",
    minThreshold: "",
    maxThreshold: "",
  },
  platinum: {
    pointMultiplier: "",
    minThreshold: "",
    maxThreshold: "",
  },
};

const Tiers = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const { submitHandler } = useSubmitHandler();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: TiersSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      submitHandler({
        successMsg: "Your changes have been updated!",
        onSubmit: async () => {
          await updateTiers(values);
          setSuccessModalOpen(true);
          resetForm();
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
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
                width="100%"
                placeholder="0"
                name="bronze.minThreshold"
                value={formik.values.bronze.minThreshold || 0}
                disabled={true}
                onChange={formik.handleChange}
                error={
                  formik.touched.bronze?.minThreshold &&
                  Boolean(formik.errors.bronze?.minThreshold)
                }
                errorMessage={formik.errors.bronze?.minThreshold}
                haveBorderRadius
                borderRadius="10px"
                type="number"
              />
              <Typography className="!text-lg text-black !font-inter">
                To
              </Typography>
              <CustomTextField
                width="100%"
                placeholder="99"
                name="bronze.maxThreshold"
                value={formik.values.bronze.maxThreshold}
                onChange={formik.handleChange}
                error={
                  formik.touched.bronze?.maxThreshold &&
                  Boolean(formik.errors.bronze?.maxThreshold)
                }
                errorMessage={formik.errors.bronze?.maxThreshold}
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
                width="100%"
                placeholder="100"
                name="silver.minThreshold"
                value={formik.values.silver.minThreshold}
                onChange={formik.handleChange}
                error={
                  formik.touched.silver?.minThreshold &&
                  Boolean(formik.errors.silver?.minThreshold)
                }
                errorMessage={formik.errors.silver?.minThreshold}
                haveBorderRadius
                borderRadius="10px"
                type="number"
              />
              <Typography className="!text-lg text-black !font-inter">
                To
              </Typography>
              <CustomTextField
                width="100%"
                placeholder="199"
                name="silver.maxThreshold"
                value={formik.values.silver.maxThreshold}
                onChange={formik.handleChange}
                error={
                  formik.touched.silver?.maxThreshold &&
                  Boolean(formik.errors.silver?.maxThreshold)
                }
                errorMessage={formik.errors.silver?.maxThreshold}
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
                width="100%"
                placeholder="200"
                name="gold.minThreshold"
                value={formik.values.gold.minThreshold}
                onChange={formik.handleChange}
                error={
                  formik.touched.gold?.minThreshold &&
                  Boolean(formik.errors.gold?.minThreshold)
                }
                errorMessage={formik.errors.gold?.minThreshold}
                haveBorderRadius
                borderRadius="10px"
                type="number"
              />
              <Typography className="!text-lg text-black !font-inter">
                To
              </Typography>
              <CustomTextField
                width="100%"
                placeholder="299"
                name="gold.maxThreshold"
                value={formik.values.gold.maxThreshold}
                onChange={formik.handleChange}
                error={
                  formik.touched.gold?.maxThreshold &&
                  Boolean(formik.errors.gold?.maxThreshold)
                }
                errorMessage={formik.errors.gold?.maxThreshold}
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
                width="100%"
                placeholder="300"
                name="platinum.minThreshold"
                value={formik.values.platinum.minThreshold}
                onChange={formik.handleChange}
                error={
                  formik.touched.platinum?.minThreshold &&
                  Boolean(formik.errors.platinum?.minThreshold)
                }
                errorMessage={formik.errors.platinum?.minThreshold}
                haveBorderRadius
                borderRadius="10px"
                type="number"
              />
              <Typography className="!text-lg text-black !font-inter">
                To
              </Typography>
              <CustomTextField
                width="100%"
                placeholder="399"
                name="platinum.maxThreshold"
                value={formik.values.platinum.maxThreshold}
                onChange={formik.handleChange}
                error={
                  formik.touched.platinum?.maxThreshold &&
                  Boolean(formik.errors.platinum?.maxThreshold)
                }
                errorMessage={formik.errors.platinum?.maxThreshold}
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
          <div className="max-w-[15rem]">
            <CustomTextField
              width="100%"
              placeholder="1"
              name="bronze.pointMultiplier"
              value={formik.values.bronze.pointMultiplier}
              onChange={formik.handleChange}
              error={
                formik.touched.bronze?.pointMultiplier &&
                Boolean(formik.errors.bronze?.pointMultiplier)
              }
              errorMessage={formik.errors.bronze?.pointMultiplier}
              haveBorderRadius
              borderRadius="10px"
              type="number"
              className="mt-2"
            />
          </div>
        </div>

        <div className="px-5">
          <Typography className="!mb-1 text-black !mt-5 !text-lg !font-inter">
            Silver Point Multiplier
          </Typography>
          <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
            Set the silver tier point multiplier
          </Typography>
          <div className="max-w-[15rem]">
            <CustomTextField
              width="100%"
              placeholder="1.3"
              name="silver.pointMultiplier"
              value={formik.values.silver.pointMultiplier}
              onChange={formik.handleChange}
              error={
                formik.touched.silver?.pointMultiplier &&
                Boolean(formik.errors.silver?.pointMultiplier)
              }
              errorMessage={formik.errors.silver?.pointMultiplier}
              haveBorderRadius
              borderRadius="10px"
              type="number"
              className="mt-2"
            />
          </div>
        </div>

        <div className="px-5">
          <Typography className="!mb-1 text-black !mt-5 !text-lg !font-inter">
            Gold Point Multiplier
          </Typography>
          <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
            Set the gold tier point multiplier
          </Typography>
          <div className="max-w-[15rem]">
            <CustomTextField
              width="100%"
              placeholder="1.6"
              name="gold.pointMultiplier"
              value={formik.values.gold.pointMultiplier}
              onChange={formik.handleChange}
              error={
                formik.touched.gold?.pointMultiplier &&
                Boolean(formik.errors.gold?.pointMultiplier)
              }
              errorMessage={formik.errors.gold?.pointMultiplier}
              haveBorderRadius
              borderRadius="10px"
              type="number"
              className="mt-2"
            />
          </div>
        </div>

        <div className="px-5">
          <Typography className="!mb-1 text-black !mt-5 !text-lg !font-inter">
            Platinum Point Multiplier
          </Typography>
          <Typography className="text-[#838383] !mb-5 !text-sm !font-inter">
            Set the platinum tier point multiplier
          </Typography>
          <div className="max-w-[15rem]">
            <CustomTextField
              width="100%"
              placeholder="2"
              name="platinum.pointMultiplier"
              value={formik.values.platinum.pointMultiplier}
              onChange={formik.handleChange}
              error={
                formik.touched.platinum?.pointMultiplier &&
                Boolean(formik.errors.platinum?.pointMultiplier)
              }
              errorMessage={formik.errors.platinum?.pointMultiplier}
              haveBorderRadius
              borderRadius="10px"
              type="number"
              className="mt-2"
            />
          </div>
        </div>

        <Box className="flex justify-center mt-6">
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
        </Box>
      </form>

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
