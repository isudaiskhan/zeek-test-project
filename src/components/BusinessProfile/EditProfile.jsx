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
import {
  useInvalidateQuery,
  useReduxUser,
  useSubmitHandler,
} from "@/utils/hooks";
import { useFormik } from "formik";
import { uploadFileFunc } from "@/utils/helper-functions";
import {
  updateBusinessProfile,
  useGetProfile,
} from "@/services/business-profile/profile";
import { fileBaseURL } from "@/utils/urls";
import { UserProfileSchema } from "@/utils/yup-schemas";
import Spinner from "../Spinner/Spinner";

const EditProfile = ({
  onBack,
  businessName,
  firstName,
  lastName,
  email,
  phone,
  profileImage,
  address,
}) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // // get user details
  // const { data: user, isLoading, refetch } = useGetProfile();
  // submit handler
  const { submitHandler, submitLoading } = useSubmitHandler();
  const { invalidateQuery } = useInvalidateQuery();

  const initialValues = {
    businessName: businessName || "",
    phone: phone || "",
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    profileImage: fileBaseURL + profileImage || "",
    address: {
      country: address?.country || "",
      city: address?.city || "",
      street: address?.street || "",
      building: address?.building || "",
      floor: address?.floor || "",
      postalCode: address?.postalCode || "",
    },
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: UserProfileSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      let imageKey = "";
      if (uploadedImage) {
        const response = await uploadFileFunc(uploadedImage);
        imageKey = response?.key;
      }
      const formattedValues = {
        ...values,
        ...(imageKey
          ? { profileImage: imageKey }
          : { profileImage: profileImage }), // Add profileImage field only if imageKey exists
      };

      submitHandler({
        successMsg: "Your profile has been updated successfully!",
        onSubmit: async () => {
          await updateBusinessProfile(formattedValues);
          setSuccessModalOpen(true);
          invalidateQuery(["get-profile"]);
          resetForm();
          handleImageDelete();
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  const handleImageChangeAndUpload = (file) => {
    setUploadedImage(file);
    formik.setFieldValue("profileImage", file);
  };

  const handleImageDelete = () => {
    setUploadedImage(null);
    formik.setFieldValue("profileImage", "");
  };
  const handleSelectChange = (event) => {
    const { value } = event.target;
    formik.setFieldValue("address.country", value);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
    onBack();
  };

  return (
    <>
      <div className="p-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-between items-center">
            <Typography className="!font-inter !text-2xl">
              Edit Profile
            </Typography>
            <div className="flex gap-3">
              <Button
                variant="outlined"
                onClick={onBack}
                className={`!py-2 !px-8 ${!submitLoading && "!text-[#FF5B00]"}`}
                disabled={submitLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className={`!bg-[#FFECE1] ${
                  !submitLoading && "!text-[#FF5B00]"
                } !py-2 !px-8 !textlg`}
                loading={submitLoading}
              >
                Save Changes
              </Button>
            </div>
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
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="Sato"
                  name="businessName"
                  haveBorderRadius
                  borderRadius="10px"
                  value={formik.values.businessName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.businessName &&
                    Boolean(formik.errors.businessName)
                  }
                  errorMessage={formik.errors.businessName}
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
                imageFile={formik.values.profileImage}
                onFileDelete={handleImageDelete}
                onFileChange={handleImageChangeAndUpload}
                error={
                  formik.touched.profileImage &&
                  Boolean(formik.errors.profileImage)
                }
                errorMessage={formik.errors.profileImage}
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
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="Darius"
                  name="firstName"
                  haveBorderRadius
                  borderRadius="10px"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  errorMessage={formik.errors.firstName}
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
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="White"
                  name="lastName"
                  haveBorderRadius
                  borderRadius="10px"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  errorMessage={formik.errors.lastName}
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
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="Dariuswhite@satocafé.com"
                  name="email"
                  haveBorderRadius
                  borderRadius="10px"
                  width="45%"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  errorMessage={formik.errors.email}
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
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="+971 55 123 4567"
                  name="phone"
                  haveBorderRadius
                  borderRadius="10px"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  errorMessage={formik.errors.phone}
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
                Change the country your business is located.
              </Typography>
              <div className="mt-6 mb-7">
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Select Country</InputLabel>
                  <Select
                    name="address.country"
                    labelId="country-select-label"
                    label="Select Country"
                    value={formik.values.address.country}
                    onChange={(event) => handleSelectChange(event)}
                    className="!font-inter max-w-60 !rounded-lg bg-[#F9F9F9]"
                  >
                    <MenuItem value="Pakistan">Pakistan</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
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
                Change the city your business is located.
              </Typography>
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="Dubai"
                  name="address.city"
                  haveBorderRadius
                  borderRadius="10px"
                  value={formik.values.address?.city}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address?.city &&
                    Boolean(formik.errors.address?.city)
                  }
                  errorMessage={formik.errors.address?.city}
                />
              </div>

              <Typography
                variant="body1"
                className="!mb-1 text-black !text-lg !font-inter"
              >
                Street
              </Typography>

              <Typography className="!text-[#838383] !text-sm !font-inter">
                Change the street your business is located.
              </Typography>
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="Jumeirah Beach Road"
                  name="address.street"
                  haveBorderRadius
                  borderRadius="10px"
                  value={formik.values.address?.street}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address?.street &&
                    Boolean(formik.errors.address?.street)
                  }
                  errorMessage={formik.errors.address?.street}
                />
              </div>

              <Typography
                variant="body1"
                className="!mb-1 text-black !text-lg !font-inter"
              >
                Postal Code
              </Typography>

              <Typography className="!text-[#838383] !text-sm !font-inter">
                Change the postal code your business is located.
              </Typography>
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="12345"
                  name="address.postalCode"
                  haveBorderRadius
                  borderRadius="10px"
                  value={formik.values.address?.postalCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address?.postalCode &&
                    Boolean(formik.errors.address?.postalCode)
                  }
                  errorMessage={formik.errors.address?.postalCode}
                />
              </div>

              <Typography
                variant="body1"
                className="!mb-1 text-black !text-lg !font-inter"
              >
                Building No.
              </Typography>

              <Typography className="!text-[#838383] !text-sm !font-inter">
                Change the building number your business is located in.
              </Typography>
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="23"
                  name="address.building"
                  haveBorderRadius
                  borderRadius="10px"
                  value={formik.values.address?.building}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address?.building &&
                    Boolean(formik.errors.address?.building)
                  }
                  errorMessage={formik.errors.address?.building}
                />
              </div>

              <Typography
                variant="body1"
                className="!mb-1 text-black !text-lg !font-inter"
              >
                Floor No.
              </Typography>

              <Typography className="!text-[#838383] !text-sm !font-inter">
                Change the floor your business is located in.
              </Typography>
              <div className="mt-6 mb-7">
                <CustomTextField
                  placeholder="N/A"
                  name="address.floor"
                  haveBorderRadius
                  borderRadius="10px"
                  value={formik.values.address?.floor}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address?.floor &&
                    Boolean(formik.errors.address?.floor)
                  }
                  errorMessage={formik.errors.address?.floor}
                />
              </div>
            </div>
          </div>
        </form>
        {/* Success Modal */}
        <SuccessDialog
          open={successModalOpen}
          onClose={handleCloseSuccessModal}
          imageSrc="/images/approved.svg"
          message="Your profile has been updated successfully!"
          buttonText="Continue"
        />
      </div>
    </>
  );
};

export default EditProfile;
