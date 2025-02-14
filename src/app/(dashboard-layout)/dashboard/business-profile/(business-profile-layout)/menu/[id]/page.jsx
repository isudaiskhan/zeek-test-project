"use client";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import SuccessDialog from "@/components/Modals/SuccessModal";
import Spinner from "@/components/Spinner/Spinner";
import {
  updateMenuItem,
  useGetMenuItem,
} from "@/services/business-profile/menu";
import { uploadFileFunc } from "@/utils/helper-functions";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { fileBaseURL } from "@/utils/urls";
import { MenuItemSchema } from "@/utils/yup-schemas";
import { IconButton, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { use, useMemo, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

const headingSX = { fontSize: "18px", fontWeight: 400 };
const subHeadSX = { color: "#838383", fontSize: "14px", fontWeight: 400 };

const EditMenuItem = ({ params }) => {
  const { id } = use(params);

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  // Router
  const router = useRouter();

  // React Query
  const { data: menuItem, isLoading, isError, error } = useGetMenuItem(id);

  // Ensure initial values are always valid
  const initialValues = useMemo(
    () => ({
      name: menuItem?.name || "",
      description: menuItem?.description || "",
      price: menuItem?.price || "",
      image: fileBaseURL + menuItem?.image || "",
    }),
    [menuItem]
  );

  const { submitHandler } = useSubmitHandler();
  const { invalidateQuery } = useInvalidateQuery();

  // Initialize formik
  const formik = useFormik({
    enableReinitialize: true, // Ensures formik updates when initialValues change
    initialValues,
    validationSchema: MenuItemSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      let imageKey = "";
      if (uploadedImage) {
        const response = await uploadFileFunc(uploadedImage);
        imageKey = response?.key;
      }
      const formattedValues = {
        ...values,
        ...(imageKey && { image: imageKey }), // Add image field only if imageKey exists
      };

      submitHandler({
        successMsg: "Your changes have been updated!",
        onSubmit: async () => {
          await updateMenuItem(id, formattedValues);
          invalidateQuery(["get-menu-items"]);
          setSuccessModalOpen(true);
          resetForm();
          handleImageDelete();
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
    router.back();
  };
  const handleImageChangeAndUpload = (file) => {
    setUploadedImage(file);
    formik.setFieldValue("image", file);
  };
  const handleImageDelete = () => {
    setUploadedImage(null);
    formik.setFieldValue("image", "");
  };

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className="flex flex-col gap-4 px-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col justify-start items-start gap-2">
          <IconButton onClick={() => router.back()}>
            <RiArrowGoBackFill style={{ size: "30px", color: "#000000" }} />
          </IconButton>
          <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
            Edit Menu Item
          </Typography>
        </div>
        <div className="flex flex-col justify-start items-start gap-8 mt-3">
          {/* Item Name */}
          <div className="flex flex-col gap-2">
            <Typography sx={headingSX}>Item Name</Typography>
            <Typography sx={subHeadSX}>Name the new item</Typography>
            <CustomTextField
              haveBorderRadius
              borderRadius="10px"
              placeholder="ie. Espresso"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              errorMessage={formik.errors.name}
            />
          </div>
          {/* Item Description */}
          <div className="flex flex-col gap-2">
            <Typography sx={headingSX}>Item Description</Typography>
            <Typography sx={subHeadSX}>Describe the new item</Typography>
            <CustomTextField
              haveBorderRadius
              borderRadius="10px"
              placeholder="ie. Espresso"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              errorMessage={formik.errors.description}
              multiline
              rows={4}
            />
          </div>
          {/* Item Price */}
          <div className="flex flex-col gap-2">
            <Typography sx={headingSX}>Item Price</Typography>
            <Typography sx={subHeadSX}>
              Price the new item (values in AED)
            </Typography>
            <CustomTextField
              haveBorderRadius
              borderRadius="10px"
              placeholder="ie. 20, 30, 40, 50"
              name="price"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              errorMessage={formik.errors.price}
            />
          </div>
          {/* Item Image */}
          <div className="flex flex-col gap-2">
            <Typography sx={headingSX}>Item Image</Typography>
            <Typography sx={subHeadSX}>
              Upload an image of the new item
            </Typography>
            <ImageUpload
              imageFile={uploadedImage || formik.values.image}
              onFileDelete={handleImageDelete}
              onFileChange={handleImageChangeAndUpload}
              error={formik.touched.image && Boolean(formik.errors.image)}
              errorMessage={formik.errors.image}
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-row gap-6 mt-6 justify-center items-center">
          <CustomButton
            text="Cancel"
            textColor="#000000"
            bgColor="#F4F4F4"
            onClick={() => router.back()}
          />
          <CustomButton
            type="submit"
            text="Update Item"
            textColor="#FF762A"
            bgColor="#FFECE1"
          />
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
    </div>
  );
};

export default EditMenuItem;
