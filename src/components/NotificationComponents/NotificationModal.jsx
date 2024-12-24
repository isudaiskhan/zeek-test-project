import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import Image from "next/image";

const NotificationModal = ({
  openModal,
  handleCloseModal,
  handleOpenDraftModal,
  handleOpenPublishModal,
  openPublishModal,
  handleClosePublishModal,
  openDraftModal,
  handleCloseDraftModal,
}) => {
  return (
    <>
      {/* Main Notification Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className="!backdrop-blur-sm"
      >
        <Box className="w-full md:w-1/2 bg-white rounded-md shadow-md p-8 mx-auto my-8">
          <Typography
            variant="h5"
            className="!text-3xl !font-sans !border-b !border-solid !border-0 !border-[#BABABA] !py-2 !mb-2"
          >
            Create Notification
          </Typography>
          <form>
            <Typography
              variant="subtitle1"
              className="!font-sans !mt-10 !text-xl !text-black !mb-6"
            >
              Which segments would you like to notify?
            </Typography>
            <Button
              variant="contained"
              className="!bg-[#F4F4F4] !text-black !font-sans !font-semibold !rounded-full !flex !items-center !space-x-2 !px-6 !py-2"
            >
              <AddIcon />
              <span>Add Segment</span>
            </Button>

            <Typography
              variant="subtitle1"
              className="!font-sans !mt-10 !text-xl !text-black !mb-2"
            >
              Your Message
            </Typography>
            <div className="max-w-xl">
              <TextField
                label="Type notification message here ..."
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                InputLabelProps={{ className: "!text-sm !text-[#A2A2A2]" }}
                className="!bg-[#F4F4F4] !rounded-md !shadow-sm !border-transparent"
              />
            </div>

            <Typography
              variant="subtitle1"
              className="!font-sans !mt-7 !text-xl !text-black !mb-3"
            >
              Schedule notification timing
            </Typography>
            <Box className="flex items-center space-x-12">
              <div className="flex items-center space-x-2">
                <FormControl className="!w-20 !bg-[#f5f5f5] rounded-full">
                  <InputLabel className="!text-black">DD</InputLabel>
                  <Select
                    defaultValue=""
                    displayEmpty
                    sx={{ borderRadius: "999px" }}
                  >
                    {[...Array(31)].map((_, i) => (
                      <MenuItem key={i} value={i + 1}>
                        {String(i + 1).padStart(2, "0")}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className="!w-20 !bg-[#f5f5f5] rounded-full">
                  <InputLabel className="!text-black">MM</InputLabel>
                  <Select
                    defaultValue=""
                    displayEmpty
                    sx={{ borderRadius: "999px" }}
                  >
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((month, i) => (
                      <MenuItem key={i} value={i + 1}>
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Box>

            <div className="flex justify-end mt-8">
              <Button
                onClick={handleCloseModal}
                className="!mr-4 !bg-[#F4F4F4] !px-8 !py-2 !text-black !text-sm !font-sans !rounded-md"
              >
                Cancel
              </Button>
              <Button
                onClick={handleOpenDraftModal}
                className="!mr-4 !bg-[#F4F4F4] !px-8 !py-2 !text-black !text-sm !font-sans !rounded-md"
              >
                Draft
              </Button>
              <Button
                onClick={handleOpenPublishModal}
                className="!bg-[#FFECE1] !px-8 !py-2 !text-black !text-sm !font-sans !rounded-md"
              >
                Publish
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      {/* Modal for Publish */}
      <Modal
        open={openPublishModal}
        onClose={handleClosePublishModal}
        className="flex items-center justify-center !backdrop-blur-sm"
      >
        <motion.div
          className="w-full md:w-1/4 bg-white !rounded-xl !shadow-lg mx-auto !my-8 !p-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <Image
              src="/images/approved.svg"
              alt="Success"
              className="mb-4 w-[120px] h-[120px] object-cover"
              width={100}
              height={100}
            />
            <Typography
              variant="h6"
              className="!mb-12 text-center !text-xl !font-sans !mt-5"
            >
              Your notification has been sent out successfully!
            </Typography>
            <Button
              onClick={handleClosePublishModal}
              className="!mt-3 !bg-[#F4F4F4] !text-[#787878] !py-2 !rounded-lg w-full"
            >
              Continue
            </Button>
          </div>
        </motion.div>
      </Modal>

      {/* Modal for Draft */}
      <Modal
        open={openDraftModal}
        onClose={handleCloseDraftModal}
        className="flex items-center justify-center !backdrop-blur-sm"
      >
        <motion.div
          className="w-full md:w-1/4 bg-white !rounded-lg !shadow-lg mx-auto !my-8 !p-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <Image
              src="/images/draft.svg"
              alt="Draft"
              className="mb-4 w-[120px] h-[120px] object-cover"
              width={100}
              height={100}
            />
            <Typography
              variant="h6"
              className="!mb-12 text-center !text-xl !font-sans !mt-5"
            >
              Your notification has been put in your drafts
            </Typography>
            <Button
              onClick={handleCloseDraftModal}
              className="!mt-3 !bg-[#F4F4F4] !text-[#787878] !py-2 !rounded-lg w-full"
            >
              Continue
            </Button>
          </div>
        </motion.div>
      </Modal>
    </>
  );
};

export default NotificationModal;
