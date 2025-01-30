import {
  Autocomplete,
  Box,
  Dialog,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import CustomDialogContent from "@/components/Custom/CustomDialogContent/CustomDialogContent";
import SuccessDialog from "../SuccessModal";
import { WEEK_DAYS } from "@/enums/week-days";
import { useFormik } from "formik";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { addBranch } from "@/services/branch";
import { BranchSchema } from "@/utils/yup-schemas";

const openingTimingOptions = [
  { label: "10:00 AM ", value: "10:00 AM" },
  { label: "11:00 AM ", value: "11:00 AM" },
  { label: "12:00 PM ", value: "12:00 PM" },
  { label: "01:00 PM ", value: "01:00 PM" },
  { label: "02:00 PM ", value: "02:00 PM" },
  { label: "Closed", value: "Closed" },
];

const closingTimingOptions = [
  { label: "10:00 PM ", value: "10:00 PM" },
  { label: "11:00 PM ", value: "11:00 PM" },
  { label: "12:00 AM ", value: "12:00 AM" },
  { label: "01:00 AM ", value: "01:00 AM" },
  { label: "02:00 AM ", value: "02:00 AM" },
  { label: "Closed", value: "Closed" },
];

const managers = [
  { label: "Manager 1", value: "Manager 1" },
  { label: "Manager 2", value: "Manager 2" },
];

const subHeadingSX = { fontWeight: 400, fontSize: "14px" };

const BranchModal = ({ open, onClose }) => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);

  const { submitHandler } = useSubmitHandler();
  const { invalidateQuery } = useInvalidateQuery();
  const initialValues = {
    name: "",
    branchID: "",
    manager: "",
    phone: "",
    address: {
      street: "",
      city: "",
      emirate: "",
    },
    operatingHours: Object.values(WEEK_DAYS).map((day) => ({
      day,
      openingTime: "",
      closingTime: "",
    })),
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: BranchSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      submitHandler({
        successMsg: "Branch has been added successfully",

        onSubmit: async () => {
          await addBranch(values);
          invalidateQuery(["get-branches"]);
          setOpenSuccessModal(true);
        },
        onFinally: () => {
          setSubmitting(false);
          resetForm();
        },
      });
    },
  });

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          width: "60%",
          maxWidth: "60%",
        },
      }}
    >
      <DialogTitle>
        <Typography sx={{ fontSize: "32px", fontWeight: 400 }}>
          Add New Branch
        </Typography>
        <Divider sx={{ mt: 1 }} />
      </DialogTitle>
      <CustomDialogContent>
        <Box className="p-4">
          <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
            Branch Details
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box className="p-4">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col gap-7 justify-start items-start w-full">
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>Branch Name</Typography>
                    <CustomTextField
                      placeholder="Name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      errorMessage={formik.touched.name && formik.errors.name}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>
                      Branch Contact Number
                    </Typography>
                    <CustomTextField
                      placeholder="+971..."
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      errorMessage={formik.touched.phone && formik.errors.phone}
                      type="number"
                    />
                  </div>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col gap-2 justify-start items-start">
                  <Typography sx={subHeadingSX}>Address</Typography>
                  <CustomTextField
                    placeholder="Street"
                    name="address.street"
                    value={formik.values.address.street}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address?.street &&
                      Boolean(formik.errors.address?.street)
                    }
                    errorMessage={
                      formik.touched.address?.street &&
                      formik.errors.address?.street
                    }
                  />
                  <CustomTextField
                    placeholder="City"
                    name="address.city"
                    value={formik.values.address.city}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address?.city &&
                      Boolean(formik.errors.address?.city)
                    }
                    errorMessage={
                      formik.touched.address?.city &&
                      formik.errors.address?.city
                    }
                  />
                  <CustomTextField
                    placeholder="Emirate"
                    name="address.emirate"
                    value={formik.values.address.emirate}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address?.emirate &&
                      Boolean(formik.errors.address?.emirate)
                    }
                    errorMessage={
                      formik.touched.address?.emirate &&
                      formik.errors.address?.emirate
                    }
                  />
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col justify-start items-start gap-2">
                  <Typography sx={subHeadingSX}>
                    Branch ID (Optional)
                  </Typography>
                  <CustomTextField
                    placeholder="Branch ID"
                    name="branchID"
                    value={formik.values.branchID}
                    onChange={formik.handleChange}
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box className="p-4">
            <div className="flex flex-col justify-start items-start gap-2 w-[40%]">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Operational Details
              </Typography>
              <Typography sx={subHeadingSX}>Operational Hours</Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#737373",
                }}
              >
                If your business is not operating, select “closed” for both
                opening and closing times.
              </Typography>
            </div>
            <div className="flex flex-col justify-start items-start gap-4 mt-6">
              {formik.values.operatingHours.map((dayData, index) => (
                <div className="flex flex-col gap-1" key={dayData?.day}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#737373",
                      textTransform: "capitalize",
                    }}
                  >
                    {dayData?.day}
                  </Typography>
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col gap-1">
                      <Autocomplete
                        disablePortal
                        options={openingTimingOptions}
                        sx={{ width: 300 }}
                        onChange={(event, value) => {
                          formik.setFieldValue(
                            `operatingHours.${index}.openingTime`,
                            value?.value || ""
                          );
                        }}
                        value={
                          openingTimingOptions.find(
                            (option) => option.value === dayData.openingTime
                          ) || null
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            size="small"
                            placeholder="Opening Time"
                            error={
                              formik.touched.operatingHours?.[index]
                                ?.openingTime &&
                              Boolean(
                                formik.errors.operatingHours?.[index]
                                  ?.openingTime
                              )
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
                      {formik.touched.operatingHours?.[index]?.openingTime &&
                        formik.errors.operatingHours?.[index]?.openingTime && (
                          <Typography sx={{ fontSize: "12px", color: "red" }}>
                            {formik.errors.operatingHours?.[index]?.openingTime}
                          </Typography>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <Autocomplete
                        disablePortal
                        options={closingTimingOptions}
                        sx={{ width: 300 }}
                        value={
                          closingTimingOptions.find(
                            (option) => option.value === dayData.closingTime
                          ) || null
                        }
                        onChange={(event, value) => {
                          formik.setFieldValue(
                            `operatingHours.${index}.closingTime`,
                            value?.value || ""
                          );
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            placeholder="Closing Time"
                            size="small"
                            error={
                              formik.touched.operatingHours?.[index]
                                ?.closingTime &&
                              Boolean(
                                formik.errors.operatingHours?.[index]
                                  ?.closingTime
                              )
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
                      {formik.touched.operatingHours?.[index]?.closingTime &&
                        formik.errors.operatingHours?.[index]?.closingTime && (
                          <Typography sx={{ fontSize: "12px", color: "red" }}>
                            {formik.errors.operatingHours?.[index]?.closingTime}
                          </Typography>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Box>
          <Box className="p-4">
            <div className="flex flex-col justify-start items-start gap-6">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Manager Assignment
              </Typography>
              <div className="flex flex-col gap-2">
                <Typography sx={subHeadingSX}>Select Manager</Typography>
                <Autocomplete
                  disablePortal
                  options={managers}
                  sx={{ width: 300 }}
                  value={formik.values.manager}
                  onChange={(event, value) => {
                    formik.setFieldValue("manager", value?.value || "");
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Select..."
                      size="small"
                      error={
                        formik.touched.manager && Boolean(formik.errors.manager)
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
                {formik.touched.manager && formik.errors.manager && (
                  <Typography sx={{ fontSize: "12px", color: "red" }}>
                    {formik.errors.manager}
                  </Typography>
                )}
              </div>
            </div>
          </Box>
          <Box className="p-4">
            <div className="flex flex-row gap-4 justify-center items-center">
              <CustomButton
                text="Cancel"
                bgColor="#F4F4F4"
                textColor="#787878"
                onClick={onClose}
              />

              <CustomButton
                text="Add Branch"
                bgColor="#FFECE1"
                textColor="#FF5B00"
                type="submit"
              />
            </div>
          </Box>
        </form>
      </CustomDialogContent>
      {openSuccessModal && (
        <SuccessDialog
          open={openSuccessModal}
          onClose={handleCloseSuccessModal}
          message="Your Branch has been added successfully"
          buttonText="Continue"
        />
      )}
    </Dialog>
  );
};

export default BranchModal;
