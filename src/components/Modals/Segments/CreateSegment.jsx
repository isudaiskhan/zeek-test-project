"use client";
import { Box, Modal, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import SuccessModal from "../SuccessModal";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import { useFormik } from "formik";
import { BUSINESS_TIERS } from "@/enums/tiers";
import { transformString } from "@/utils/helper-functions";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { addSegments } from "@/services/segments";
import { timeSinceLastVisit, visitFrequency } from "@/enums/segments";
import { SegmentSchema } from "@/utils/yup-schemas";

const tiersOptions = Object.entries(BUSINESS_TIERS).map(([key, value]) => ({
  label: transformString(key),
  value,
}));

const CreateSegment = ({ open, onClose }) => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const { submitHandler } = useSubmitHandler();
  const { invalidateQuery } = useInvalidateQuery();

  const handleOpenSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      tier: "", // bronze, silver, gold, platinum
      timeLastVisit: "", // 7, 14, 30, 60, 90
      visitFrequency: "", // 2,3,5,7
    },
    validationSchema: SegmentSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      submitHandler({
        successMsg: "Segment has been created successfully",
        onSubmit: async () => {
          await addSegments(values);
          invalidateQuery(["get-segments"]);
          handleOpenSuccessModal();
          resetForm();
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  return (
    <>
      <Modal open={open} onClose={onClose} className="!backdrop-blur-sm">
        <Box className="w-full md:w-1/2 bg-white rounded-md shadow-md p-8 mx-auto my-20">
          <Typography
            variant="h5"
            className="!font-bold !text-3xl !border-b !border-solid !border-0 !border-[#BABABA] !py-2 !mb-2"
          >
            Create Segment
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Typography
              variant="subtitle1"
              className="!font-bold !font-sans !mt-10 !text-2xl !text-black !mb-2"
            >
              Title
            </Typography>
            <CustomTextField
              placeholder="Name"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              errorMessage={formik.errors.title}
            />
            <Typography
              variant="subtitle1"
              className="!font-bold !font-sans !mt-10 !text-2xl !text-black !mb-1"
            >
              Groups
            </Typography>
            <Typography className="!font-sans !text-sm !text-[#A1A1A1] !mb-3">
              Tiers
            </Typography>
            <div className="mb-4 flex gap-2 flex-wrap">
              {tiersOptions.map((tier, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  className={`capitalize !border !rounded-lg !px-6 !py-2 !shadow !shadow-[#00000040] !font-sans ${
                    formik.values.tier === tier.value
                      ? "!text-[#FF5B00]"
                      : "!text-[#5B5B5B]"
                  } !text-sm  !border-solid ${
                    formik.values.tier === tier.value
                      ? "!bg-[#FFECE1]"
                      : "!bg-[#FFFFFF]"
                  }  !border-[#EDEDED]`}
                  onClick={() =>
                    formik.setFieldValue(
                      "tier",
                      formik.values.tier === tier.value ? "" : tier.value
                    )
                  }
                >
                  {tier.label}
                </Button>
              ))}
            </div>
            <Typography className="!font-sans !text-sm !text-[#A1A1A1] !mb-3 !mt-7">
              Time since last visit
            </Typography>
            <div className="mb-4 flex gap-2 flex-wrap">
              {timeSinceLastVisit.map((time, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => {
                    formik.setFieldValue(
                      "timeLastVisit",
                      formik.values.timeLastVisit === time.value
                        ? ""
                        : time.value
                    );
                  }}
                  className={`capitalize !border !rounded-lg !px-6 !py-2 !shadow !shadow-[#00000040] !font-sans !text-sm ${
                    formik.values.timeLastVisit === time.value
                      ? "!text-[#FF5B00]"
                      : "!text-[#5B5B5B]"
                  } !border-solid ${
                    formik.values.timeLastVisit === time.value
                      ? "!bg-[#FFECE1]"
                      : "!bg-[#FFFFFF]"
                  } !border-[#EDEDED]`}
                >
                  {time?.label}
                </Button>
              ))}
            </div>
            <div className="flex flex-col space-y-4">
              <Typography className="!font-sans !text-sm !text-[#A1A1A1] !mt-7">
                Frequency of visits per month
              </Typography>
              <div className="flex md:flex-row flex-col gap-4">
                {visitFrequency.map((item, index) => (
                  <Box
                    className={`${
                      formik.values.visitFrequency === item.value
                        ? "!bg-[#FFECE1]"
                        : "!bg-[#FFFFFF] "
                    } rounded-xl py-2 px-5 cursor-pointer`}
                    sx={{ boxShadow: "0px 0px 6px 0px #00000040" }}
                    key={index}
                    onClick={() => {
                      formik.setFieldValue(
                        "visitFrequency",
                        formik.values.visitFrequency === item.value
                          ? ""
                          : item.value
                      );
                    }}
                  >
                    <Typography
                      sx={{
                        color:
                          formik.values.visitFrequency === item.value
                            ? "#FF5B00"
                            : "#5B5B5B",
                        textAlign: "center",
                        fontSize: "15px",
                        fontWeight: 400,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={onClose}
                className="!mr-4 !bg-[#F4F4F4] !px-8 !py-2 !text-black !text-sm !font-sans !rounded-md"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="!bg-[#FFECE1] !px-8 !py-2 !text-black !text-sm !font-sans !rounded-md"
              >
                Create
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      <SuccessModal
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        message="Your segment has been created successfully!"
        buttonText="Continue"
      />
    </>
  );
};

export default CreateSegment;
