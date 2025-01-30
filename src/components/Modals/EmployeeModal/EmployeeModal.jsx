import {
  Autocomplete,
  Box,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { MdOutlineFileUpload } from "react-icons/md";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomDialogContent from "@/components/Custom/CustomDialogContent/CustomDialogContent";
import SuccessDialog from "../SuccessModal";
import { useGetBranches } from "@/services/branch";
import { useFormik } from "formik";
import { useGetAllRoles } from "@/services/roles";
import dayjs from "dayjs";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import { EmployeeSchema } from "@/utils/yup-schemas";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { addEmployee } from "@/services/employees";
import { EMPLOYMENT_TYPE } from "@/enums/employment-type";
import { getImageBase64URL, transformString } from "@/utils/helper-functions";
import { uploadFile } from "@/services/file";

const subHeadingSX = { fontWeight: 400, fontSize: "14px" };

const employmentOptions = Object.entries(EMPLOYMENT_TYPE).map(
  ([key, value]) => ({
    label: transformString(key),
    value,
  })
);

const EmployeeModal = ({ open, onClose }) => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [filePreview, setFilePreview] = React.useState("");
  const fileInputRef = React.useRef(null);

  const { invalidateQuery } = useInvalidateQuery();
  const { submitHandler } = useSubmitHandler();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const { data: branches } = useGetBranches(1, 1000);
  const { data: roles } = useGetAllRoles(1, 1000);

  const initialEmployeeValues = {
    email: "",
    fullName: "",
    phone: "",
    role: "", // employee, manager,
    branch: "", // branch_id
    employmentType: "", // full_time, part_time
    hireDate: null,
    profileImage: "",
    emergencyPhone: "",
    employeeID: "", // optional
    jobTitle: "",
    notes: "", // optional
    temporaryPassword: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: initialEmployeeValues,
    validationSchema: EmployeeSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      const formattedValues = {
        ...values,
        hireDate: values.hireDate
          ? dayjs(values.hireDate).format("YYYY-MM-DD")
          : null,
      };

      submitHandler({
        successMsg: "Employee added successfully",
        onSubmit: async () => {
          await addEmployee(formattedValues);
          invalidateQuery("get-employees");
          setOpenSuccessModal(true);
          resetForm();
        },
        onFinally: () => {
          setSubmitting(false);
          setFilePreview("");
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

      const formData = new FormData();
      formData.append("file", file);
      try {
        const key = await uploadFile(formData);
        formik.setFieldValue("profileImage", key?.key);
      } catch (error) {
        console.error("File upload failed");
      }
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
          width: "60%",
          maxWidth: "60%",
        },
      }}
    >
      <DialogTitle>
        <Typography sx={{ fontSize: "32px", fontWeight: 400 }}>
          Add New Employee
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </DialogTitle>
      <CustomDialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Box className="p-4">
            <div className="flex justify-start items-start my-6">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Personal Information
              </Typography>
            </div>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col justify-start items-start gap-6">
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>Full Name</Typography>
                    <CustomTextField
                      placeholder="Name"
                      name="fullName"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      error={
                        formik.touched.fullName &&
                        Boolean(formik.errors.fullName)
                      }
                      errorMessage={
                        formik.touched.fullName && formik.errors.fullName
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>Phone Number</Typography>
                    <CustomTextField
                      placeholder="+971.."
                      name="phone"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      errorMessage={formik.touched.phone && formik.errors.phone}
                    />
                  </div>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col justify-start items-start gap-6">
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>Email Address</Typography>
                    <CustomTextField
                      placeholder="example@business.com"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      errorMessage={formik.touched.email && formik.errors.email}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>
                      Employee ID (Optional)
                    </Typography>
                    <CustomTextField
                      placeholder="Employee ID"
                      name="employeeID"
                      onChange={formik.handleChange}
                      value={formik.values.employeeID}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box className="p-4">
            <div className="flex justify-start items-start my-6">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Role And Branch Assignment
              </Typography>
            </div>
            <Grid container spacing={{ md: 4, lg: 6 }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col gap-2">
                  <Typography sx={subHeadingSX}>Role</Typography>
                  <Autocomplete
                    disablePortal
                    options={roles?.data || []}
                    getOptionLabel={(option) => option.name}
                    sx={{ width: 300 }}
                    value={
                      roles?.data?.find(
                        (role) => role._id === formik.values.role
                      ) || null
                    }
                    onChange={(_, newValue) => {
                      formik.setFieldValue(
                        "role",
                        newValue ? newValue._id : ""
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Select"
                        size="small"
                        error={
                          formik.touched.role && Boolean(formik.errors.role)
                        }
                        sx={{
                          borderRadius: "16px", // For rounded corners
                          backgroundColor: "#F4F4F4",
                          width: "70%",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "16px",
                          },
                        }}
                      />
                    )}
                  />
                  {formik.touched.role && formik.errors.role && (
                    <Typography sx={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.role}
                    </Typography>
                  )}
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col gap-2">
                  <Typography sx={subHeadingSX}>Branch</Typography>
                  <Autocomplete
                    disablePortal
                    options={branches?.data || []}
                    getOptionLabel={(option) => option.name}
                    sx={{ width: 300 }}
                    value={
                      branches?.data?.find(
                        (branch) => branch._id === formik.values.branch
                      ) || null
                    }
                    onChange={(_, newValue) => {
                      formik.setFieldValue(
                        "branch",
                        newValue ? newValue._id : ""
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Select"
                        error={
                          formik.touched.branch && Boolean(formik.errors.branch)
                        }
                        size="small"
                        sx={{
                          borderRadius: "16px", // For rounded corners
                          backgroundColor: "#F4F4F4",
                          width: "70%",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "16px",
                          },
                        }}
                      />
                    )}
                  />
                  {formik.touched.branch && formik.errors.branch && (
                    <Typography sx={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.branch}
                    </Typography>
                  )}
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box className="p-4">
            <div className="flex justify-start items-start my-6">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Employment Details
              </Typography>
            </div>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col justify-start items-start gap-6">
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>Job Title</Typography>
                    <CustomTextField
                      placeholder="i.e Cook, Cashier, Waiter"
                      name="jobTitle"
                      onChange={formik.handleChange}
                      value={formik.values.jobTitle}
                      error={
                        formik.touched.jobTitle &&
                        Boolean(formik.errors.jobTitle)
                      }
                      errorMessage={
                        formik.touched.jobTitle && formik.errors.jobTitle
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography sx={subHeadingSX}>Employment Type</Typography>
                    <Autocomplete
                      disablePortal
                      options={employmentOptions} // Convert object to an array of values
                      getOptionLabel={(option) => option.label} // Label each option
                      sx={{ width: 300 }}
                      value={
                        employmentOptions.find(
                          (type) => type.value === formik.values.employmentType
                        ) || null
                      }
                      onChange={(_, newValue) => {
                        formik.setFieldValue(
                          "employmentType",
                          newValue?.value || ""
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          placeholder="Select"
                          size="small"
                          error={
                            formik.touched.employmentType &&
                            Boolean(formik.errors.employmentType)
                          }
                          sx={{
                            borderRadius: "16px", // For rounded corners
                            backgroundColor: "#F4F4F4",
                            width: "70%",
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "16px",
                            },
                          }}
                        />
                      )}
                    />
                    {formik.touched.employmentType &&
                      formik.errors.employmentType && (
                        <Typography sx={{ color: "red", fontSize: "12px" }}>
                          {formik.errors.employmentType}
                        </Typography>
                      )}
                  </div>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col justify-start items-start gap-2">
                  <Typography sx={subHeadingSX}>Date of Hire</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="DD/MM/YYYY"
                        value={formik.values.hireDate}
                        onChange={(newValue) => {
                          formik.setFieldValue(
                            "hireDate",
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
                            name="hireDate"
                            error={
                              formik.touched.hireDate &&
                              Boolean(formik.errors.hireDate)
                            }
                          />
                        )}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  {formik.touched.hireDate && formik.errors.hireDate && (
                    <Typography sx={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.hireDate}
                    </Typography>
                  )}
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box className="p-4">
            <div className="flex justify-start items-start my-6">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Login Details
              </Typography>
            </div>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col justify-start items-start gap-2">
                  <Typography sx={subHeadingSX}>Confirm Login Email</Typography>
                  <CustomTextField
                    placeholder="example@business.com"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    errorMessage={formik.touched.email && formik.errors.email}
                  />
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <Typography sx={subHeadingSX}>Temporary Password</Typography>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#737373" }}
                  >
                    Password is auto-generated and sent to the employee’s email.
                    If you would like to manually set a password, type it in the
                    field below
                  </Typography>
                  <div className="flex flex-row gap-4">
                    <CustomTextField
                      placeholder="Temporary Password"
                      name="temporaryPassword"
                      type={showPassword ? "text" : "password"}
                      onChange={formik.handleChange}
                      value={formik.values.temporaryPassword}
                      error={
                        formik.touched.temporaryPassword &&
                        Boolean(formik.errors.temporaryPassword)
                      }
                      errorMessage={
                        formik.touched.temporaryPassword &&
                        formik.errors.temporaryPassword
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePassword}
                              edge="end"
                              aria-label={
                                showPassword ? "Hide password" : "Show password"
                              }
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomTextField
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                      }
                      errorMessage={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleToggleConfirmPassword}
                              edge="end"
                              aria-label={
                                showConfirmPassword
                                  ? "Hide password"
                                  : "Show password"
                              }
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box className="p-4">
            <div className="flex justify-start items-start my-6">
              <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
                Optional Additions
              </Typography>
            </div>
            <Grid container spacing={{ md: 4, lg: 6 }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <div className="flex flex-col justify-start items-start gap-3">
                  <Typography sx={subHeadingSX}>Profile Picture</Typography>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#737373",
                        textWrap: "wrap",
                      }}
                    >
                      Drag and drop a photo to upload or select one from files.
                    </Typography>
                    {/* <Box
                      className="flex justify-center items-center rounded-md bg-[#F4F4F4] w-[230px] h-[180px] p-4 cursor-pointer"
                      onClick={(e) =>
                        e.currentTarget
                          .querySelector('input[type="file"]')
                          .click()
                      }
                    >
                      <MdOutlineFileUpload
                        style={{
                          fontSize: "64px",
                          color: "#737373",
                        }}
                      />
                      <input type="file" hidden accept="image/*" />
                    </Box> */}
                    <Box
                      className="flex justify-center items-center rounded-md bg-[#F4F4F4] w-[230px] h-[180px] p-4 cursor-pointer"
                      onClick={handleFileClick}
                    >
                      {filePreview ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={filePreview}
                          alt="Profile Preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <MdOutlineFileUpload
                          style={{
                            fontSize: "64px",
                            color: "#737373",
                          }}
                        />
                      )}
                      <input
                        type="file"
                        ref={fileInputRef}
                        hidden
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </Box>
                  </div>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <div className="flex flex-col justify-start items-start gap-8 w-full">
                  <div className="flex flex-col gap-3">
                    <Typography sx={subHeadingSX}>
                      Emergency Contact Information
                    </Typography>
                    <CustomTextField
                      placeholder="+971.."
                      name="emergencyPhone"
                      value={formik.values.emergencyPhone}
                      onChange={formik.handleChange}
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Typography sx={subHeadingSX}>
                      Notes or Additional Information
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Additional Info"
                      multiline
                      name="notes"
                      value={formik.values.notes}
                      onChange={formik.handleChange}
                      rows={4}
                      sx={{
                        borderRadius: "16px", // For rounded corners
                        backgroundColor: "#F4F4F4",
                        width: "80%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "16px",
                        },
                      }}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
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
                text="Add Employee"
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
          message="Your Employee has been added successfully!"
          buttonText="Continue"
        />
      )}
    </Dialog>
  );
};

export default EmployeeModal;
