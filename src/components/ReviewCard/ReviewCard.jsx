import { Box, Divider, Rating, TextField, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
// import { FaStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import CustomButton from "../Custom/CustomButton/CustomButton";
import { fileBaseURL } from "@/utils/urls";
import dayjs from "dayjs";

const boxSX = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #D9D9D9",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  padding: "8px 16px",
};

const typographySX = {
  color: "#000000",
  fontWeight: 700,
  fontSize: "14px",
};

const ReviewCard = ({
  name,
  avatar,
  clv,
  totalReviews,
  rating,
  date,
  reviewText,
  id,
  replyActive,
  handleReplyClick,
  tags,
}) => {
  return (
    <>
      <Box className="p-4" key={id}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box className="flex flex-row justify-center items-center gap-4">
              <Image
                src={`${fileBaseURL}${avatar}` || "/images/review.png"}
                alt={name || "Avatar"}
                width={100}
                height={100}
                style={{ borderRadius: "10%" }}
              />
              <div className="flex flex-col justify-center">
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#000000",
                    mb: 2,
                  }}
                >
                  {name || "N/A"}
                </Typography>
                <Typography
                  sx={{ color: "#929292", fontSize: "14px", fontWeight: 700 }}
                >
                  CLV: {clv || "N/A"}
                </Typography>
                <Typography
                  sx={{ color: "#929292", fontSize: "14px", fontWeight: 700 }}
                >
                  Total Reviews: {totalReviews || "N/A"}
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box className="flex flex-col justify-start items-start">
              <div className="flex flex-row gap-4 items-start justify-start">
                <Rating name={name} value={rating} readOnly />
                <Typography
                  sx={{ fontWeight: 400, fontSize: "14px", color: "#929292" }}
                >
                  {dayjs(date).format("DD/MM/YYYY") || "N/A"}
                </Typography>
              </div>
            </Box>
            <Box className="py-4 justify-center items-center">
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {reviewText}
              </Typography>
            </Box>
            <Box className="flex flex-col">
              <Box className="py-1">
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#929292",
                    textTransform: "capitalize",
                  }}
                >
                  Tags:{" "}
                  {Array.isArray(tags)
                    ? tags.map((tag) => tag).join(", ")
                    : tags}
                </Typography>
              </Box>
              <Box className="flex flex-wrap justify-between items-center py-2 w-full">
                <Box sx={boxSX}>
                  <Typography sx={typographySX}>Public Comment</Typography>{" "}
                </Box>

                <div className="flex flex-row gap-4 cursor-pointer">
                  <Box sx={boxSX} onClick={() => handleReplyClick(id)}>
                    <Typography sx={typographySX}>Reply To Review</Typography>
                  </Box>
                  <Box sx={boxSX}>
                    <FaRegThumbsUp
                      style={{ color: "#FF9A62", fontSize: "20px" }}
                    />
                  </Box>
                </div>
              </Box>
              {replyActive === id && (
                <div className="flex flex-col justify-end items-end gap-4 my-4 p-2 w-full">
                  <TextField
                    variant="outlined"
                    placeholder="Type reply here..."
                    multiline
                    rows={3}
                    sx={{
                      borderRadius: "10px", // For rounded corners
                      backgroundColor: "#FFFFFF",
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                      },
                    }}
                  />
                  <CustomButton
                    text="Reply to Review"
                    bgColor="#FFECE1"
                    textColor="#FF762A"
                  />
                </div>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ my: 1 }} />
    </>
  );
};

export default ReviewCard;
