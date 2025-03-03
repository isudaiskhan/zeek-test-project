import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import SuccessDialog from "@/components/Modals/SuccessModal";
import { addNewMenuItem } from "@/services/business-profile/menu";
import { useGetMenuSegments } from "@/services/business-profile/menu-segment";
import { uploadFileFunc } from "@/utils/helper-functions";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { MenuItemSchema } from "@/utils/yup-schemas";
import { Autocomplete, IconButton, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

const headingSX = {
  fontSize: "18px",
  fontWeight: 400,
};

const subHeadSX = {
  color: "#838383",
  fontSize: "14px",
  fontWeight: 400,
};

const initialValues = {
  name: "",
  description: "",
  price: "",
  image: "",
  menuSegment: "",
};

const AddMenuItem = ({ handleTabClick }) => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const { submitHandler } = useSubmitHandler();
  const { invalidateQuery } = useInvalidateQuery();

  const { data: menuSegments } = useGetMenuSegments(1, 100);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: MenuItemSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      let imageKey = "";
      if (uploadedImage) {
        const response = await uploadFileFunc(uploadedImage);
        imageKey = response?.key;
      }
      const formattedValues = {
        ...values,
        image: imageKey,
      };

      submitHandler({
        successMsg: "Your new item has been created successfully!",
        onSubmit: async () => {
          await addNewMenuItem(formattedValues);
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
    handleTabClick("menuItem");
  };

  const handleImageChangeAndUpload = (file) => {
    if (file) {
      setUploadedImage(file);
      formik.setFieldValue("image", file);
    }
  };

  const handleImageDelete = () => {
    setUploadedImage(null);
    formik.setFieldValue("image", "");
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col justify-start items-start gap-2">
          <IconButton onClick={() => handleTabClick("menuItem")}>
            <RiArrowGoBackFill style={{ size: "30px", color: "#000000" }} />
          </IconButton>
          <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
            Add Menu Item
          </Typography>
        </div>
        <div className="flex flex-col justify-start items-start gap-8 mt-3">
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
              width="100%"
            />
          </div>
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
              width="100%"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography sx={headingSX}>Item Segment</Typography>
            <Typography sx={subHeadSX}>
              Select the segment to add this menu item to.
            </Typography>
            <Autocomplete
              disablePortal
              options={menuSegments?.data || []}
              getOptionLabel={(option) => option.title}
              onChange={(event, newValue) => {
                formik.setFieldValue("menuSegment", newValue?._id);
              }}
              sx={{ width: 300 }}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Segment"
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
          </div>
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
              width="100%"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography sx={headingSX}>Item Image</Typography>
            <Typography sx={subHeadSX}>
              Upload an image of the new item
            </Typography>
            <ImageUpload
              imageFile={uploadedImage}
              onFileDelete={handleImageDelete}
              onFileChange={handleImageChangeAndUpload}
              error={formik.touched.image && Boolean(formik.errors.image)}
              errorMessage={formik.errors.image}
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 mt-6 justify-center items-center">
          <CustomButton
            text="Cancel"
            textColor="#000000"
            bgColor="#F4F4F4"
            onClick={() => handleTabClick("menuItem")}
          />
          <CustomButton
            type="submit"
            text="Create Item"
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
        message="Your new item has been created successfully"
        buttonText="Continue"
      />
    </div>
  );
};

export default AddMenuItem;
