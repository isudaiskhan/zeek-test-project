import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import { useSubmitHandler } from "@/utils/hooks";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import SuccessDialog from "../SuccessModal";
import { addMenuSegment } from "@/services/business-profile/menu-segment";

const SegmentMenuModal = ({ open, onClose }) => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const { submitHandler } = useSubmitHandler();

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const initialValues = {
    title: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      submitHandler({
        successMsg: "Menu Segment has been created successfully",
        onSubmit: async () => {
          await addMenuSegment(values);
          setOpenSuccessModal(true);
          resetForm();
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

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
        <Box className="p-4">
          <Typography sx={{ fontSize: "32px", fontWeight: 400 }}>
            Create Menu Segment
          </Typography>
        </Box>{" "}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Box className="flex flex-col gap-8 p-4">
            <Typography sx={{ fontWeight: 500, fontSize: "24px" }}>
              Title
            </Typography>
            <CustomTextField
              placeholder="Menu Segment Name"
              name="title"
              onChange={formik.handleChange}
            />
            <Box className="p-4">
              <div className="flex flex-row gap-4 justify-center items-center">
                <CustomButton
                  text="Cancel"
                  bgColor="#F4F4F4"
                  textColor="#787878"
                  onClick={onClose}
                />

                <CustomButton
                  text="Add Segment"
                  bgColor="#FFECE1"
                  textColor="#FF5B00"
                  type="submit"
                />
              </div>
            </Box>
          </Box>
        </form>
      </DialogContent>

      {openSuccessModal && (
        <SuccessDialog
          open={openSuccessModal}
          onClose={handleCloseSuccessModal}
          message="Menu Segment has been created successfully!"
          buttonText="Continue"
        />
      )}
    </Dialog>
  );
};

export default SegmentMenuModal;
