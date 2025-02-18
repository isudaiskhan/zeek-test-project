import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Add } from "@mui/icons-material";
import { Box, Dialog, DialogTitle, Divider, Typography } from "@mui/material";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomDialogContent from "@/components/Custom/CustomDialogContent/CustomDialogContent";
import SuccessDialog from "../SuccessModal";
import DraftModal from "../DraftModal";
import { useGetAllSegments } from "@/services/segments";
import { useFormik } from "formik";
import dayjs from "dayjs";
import CustomTextField from "@/components/CustomTextField/CustomTextField";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { addNotification } from "@/services/notifications";
import { NOTIFICATION_STATUS } from "@/enums/status";
import { NotificationSchema } from "@/utils/yup-schemas";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";

const SendNotification = ({ open, onClose }) => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const [openDraftModal, setOpenDraftModal] = React.useState(false);
  const [dateTimeFields, setDateTimeFields] = React.useState([null]);

  const { data } = useGetAllSegments(1, 100);

  const { submitHandler } = useSubmitHandler();
  const { invalidateQuery } = useInvalidateQuery();

  const handleOpenSuccessModal = () => {
    setOpenSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const handleOpenDraftModal = () => {
    setOpenDraftModal(true);
  };

  const handleCloseDraftModal = () => {
    setOpenDraftModal(false);
  };

  const initialValues = {
    title: "",
    segment: "",
    message: "",
    time: [],
    status: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: NotificationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      const formattedValues = {
        ...values,
        // time: values.time ? dayjs(values.time).format("YYYY-MM-DD") : null,
        time: values.time.map((date) =>
          date ? dayjs(date).format("YYYY-MM-DDTHH:mm:ssZ") : null
        ),
      };
      submitHandler({
        successMsg: "Notification sent successfully",
        onSubmit: async () => {
          await addNotification(formattedValues);
          invalidateQuery("get-all-notifications");
          formattedValues.status === NOTIFICATION_STATUS.DRAFT
            ? handleOpenDraftModal()
            : handleOpenSuccessModal();
          resetForm();
          setDateTimeFields([null]);
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  const addDateTimeField = () => {
    if (dateTimeFields.length < 3) {
      setDateTimeFields([...dateTimeFields, null]);
    }
  };

  const removeDateTimeField = (index) => {
    const newFields = dateTimeFields.filter((_, i) => i !== index);
    const newTimes = formik.values.time.filter((_, i) => i !== index);
    setDateTimeFields(newFields);
    formik.setFieldValue("time", newTimes);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          width: "55%",
          maxWidth: "55%",
        },
      }}
    >
      <DialogTitle>
        <Box className="p-4">
          <Typography variant="h5" fontSize="32px" sx={{ fontWeight: 400 }}>
            Create Notification
          </Typography>
        </Box>
        <Divider />
      </DialogTitle>
      <CustomDialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Box className="flex flex-col justify-start items-start p-4">
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Notification Title
            </Typography>
            <CustomTextField
              variant="outlined"
              placeholder="ie. BOGO on pastries"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              errorMessage={formik.touched.title && formik.errors.title}
              size="large"
            />
          </Box>
          <Box display="flex" alignItems="start" className="p-4">
            <div className="flex flex-col space-y-4">
              <Typography
                variant="h5"
                fontSize="24px"
                sx={{ fontWeight: 400, marginBottom: 1 }}
              >
                Which Segment would you like to notify?
              </Typography>
              <div className="flex flex-col gap-2">
                <div className="flex md:flex-row flex-col gap-4">
                  {data?.data?.map((item) => (
                    <Box
                      className={`${
                        formik.values.segment === item?._id
                          ? "bg-[#FFECE1]"
                          : "bg-white"
                      } rounded-xl py-2 px-5 cursor-pointer`}
                      onClick={() =>
                        formik.setFieldValue(
                          "segment",
                          formik.values.segment === item?._id ? "" : item?._id
                        )
                      }
                      sx={{ boxShadow: "0px 0px 6px 0px #00000040" }}
                      key={item?._id}
                      error={
                        formik.touched.segment && Boolean(formik.errors.segment)
                      }
                    >
                      <Typography
                        sx={{
                          color:
                            formik.values.segment === item?._id
                              ? "#FF5B00"
                              : "#5B5B5B",
                          textAlign: "center",
                          fontSize: "15px",
                          fontWeight: 400,
                          textTransform: "capitalize",
                        }}
                      >
                        {item?.tier}
                      </Typography>
                    </Box>
                  ))}
                </div>
                {formik.touched.segment && formik.errors.segment && (
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}
                  >
                    {formik.errors.segment}
                  </Typography>
                )}
              </div>
            </div>
          </Box>
          <Box display="flex" alignItems="start" className="p-4">
            <div className="flex flex-col space-y-4 w-full">
              <Typography
                variant="h5"
                fontSize="24px"
                sx={{ fontWeight: 400, marginBottom: 1 }}
              >
                Your Message
              </Typography>
              <CustomTextField
                placeholder="Type Notification Message Here..."
                multiline
                color="secondary"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                rows={6}
                error={formik.touched.message && Boolean(formik.errors.message)}
                errorMessage={formik.touched.message && formik.errors.message}
                size="large"
                width="80%"
              />
            </div>
          </Box>
          <Box display="flex" alignItems="start" className="p-4">
            <div className="flex flex-col space-y-4 w-full">
              <div className="flex flex-row gap-4">
                <Typography
                  variant="h5"
                  fontSize="24px"
                  sx={{ fontWeight: 400, marginBottom: 1 }}
                >
                  Schedule Notification Timing
                </Typography>
              </div>
              <div className="flex flex-row gap-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  {dateTimeFields.map((_, index) => (
                    <Box key={index} className="flex flex-col gap-4">
                      <DateTimePicker
                        label="Select Date & Time"
                        value={formik.values.time[index] || null}
                        onChange={(newValue) => {
                          const newTimes = [...formik.values.time];
                          newTimes[index] = newValue;
                          formik.setFieldValue("time", newTimes);
                        }}
                        sx={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "8px",
                        }}
                        renderInput={(params) => (
                          <CustomTextField {...params} name="time" />
                        )}
                      />
                      {index > 0 && (
                        <CustomButton
                          text="Remove"
                          textColor="#FFFFFF"
                          bgColor="#FF0000"
                          startIcon={<Delete />}
                          onClick={() => removeDateTimeField(index)}
                        />
                      )}
                    </Box>
                  ))}
                </LocalizationProvider>
              </div>
            </div>
          </Box>
          <Box display="flex" alignItems="start" className="p-4">
            {dateTimeFields.length < 3 && (
              <Box display="flex" alignItems="start" className="p-4">
                <CustomButton
                  text="Add follow-up Notification"
                  textColor="#000000"
                  bgColor="#FFFFFF"
                  startIcon={<Add />}
                  onClick={addDateTimeField}
                />
              </Box>
            )}
          </Box>
          <Box
            display="flex"
            alignItems="end"
            className="p-4 mt-4 items-end justify-end"
          >
            <div className="flex flex-row gap-4 justify-center items-end">
              <CustomButton
                text="Cancel"
                bgColor="#F4F4F4"
                textColor="#787878"
                onClick={onClose}
              />
              <CustomButton
                text="Draft"
                bgColor="#F4F4F4"
                textColor="#787878"
                type="submit"
                onClick={() =>
                  formik.setFieldValue("status", NOTIFICATION_STATUS.DRAFT)
                }
              />
              <CustomButton
                text="Publish"
                bgColor="#FFECE1"
                textColor="#FF5B00"
                type="submit"
                onClick={() =>
                  formik.setFieldValue("status", NOTIFICATION_STATUS.ACTIVE)
                }
              />
            </div>
          </Box>
        </form>
      </CustomDialogContent>
      {openSuccessModal && (
        <SuccessDialog
          open={openSuccessModal}
          onClose={handleCloseSuccessModal}
          message="Your Notification has been sent out successfully!"
          buttonText="Continue"
        />
      )}
      {openDraftModal && (
        <DraftModal
          open={openDraftModal}
          onClose={handleCloseDraftModal}
          message="Your Notification has been put in your draft!"
          buttonText="Continue"
        />
      )}
    </Dialog>
  );
};

export default SendNotification;
