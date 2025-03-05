import CustomPasswordField from "@/components/Custom/CustomPasswordField/CustomPasswordField";
import SuccessDialog from "@/components/Modals/SuccessModal";
import { updatePassword } from "@/services/business-profile/security";
import { useSubmitHandler } from "@/utils/hooks";
import { PasswordSchema } from "@/utils/yup-schemas";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
const ChangePasswordForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    password: false,
    confirmPassword: false,
  });
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const { submitHandler, submitLoading } = useSubmitHandler();

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: PasswordSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      const payload = {
        currentPassword: values.currentPassword,
        password: values.password,
      };
      submitHandler({
        successMsg: "Your password has been updated successfully",
        onSubmit: async () => {
          await updatePassword(payload);

          setSuccessModalOpen(true);
          resetForm();
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
    onClose();
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box className="flex flex-col !max-w-xl w-full p-6 bg-white me-auto">
          <Box className="mb-6">
            <Box className="!flex !items-center !mb-4">
              <IconButton onClick={onClose} className="!mr-5 !p-0">
                <Image
                  src="/images/arrow-back.svg"
                  width={20}
                  height={20}
                  alt="close"
                />
              </IconButton>
              <Typography variant="h6" className="!font-inter !text-2xl">
                Change Password
              </Typography>
            </Box>
            <Typography className="!mt-7 !mb-5 !text-lg !font-inter">
              Update your password to keep your account secure.
            </Typography>
          </Box>

          <label className="mb-4"> Current Password </label>

          <CustomPasswordField
            name="currentPassword"
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.currentPassword && formik.errors.currentPassword
            }
            errorMessage={formik.errors.currentPassword}
            showPassword={showPassword.currentPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />

          <label className="mb-4"> New Password </label>

          <CustomPasswordField
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
            errorMessage={formik.errors.password}
            showPassword={showPassword.password}
            togglePasswordVisibility={togglePasswordVisibility}
          />

          <label className="mb-4"> Confirm New Password </label>

          <CustomPasswordField
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            errorMessage={formik.errors.confirmPassword}
            showPassword={showPassword.confirmPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />

          <Button
            variant="contained"
            className={`!bg-[#ffe2d3] ${
              !submitLoading && "!text-[#ff6f00]"
            } py-2`}
            type="submit"
            loading={submitLoading}
          >
            Change Password
          </Button>
        </Box>
      </form>
      {/* Success Modal */}
      <SuccessDialog
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        imageSrc="/images/approved.svg"
        message="Your password has been updated successfully!"
        buttonText="Continue"
      />
    </>
  );
};

export default ChangePasswordForm;
