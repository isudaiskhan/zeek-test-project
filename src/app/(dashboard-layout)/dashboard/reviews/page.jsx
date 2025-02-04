"use client";
import {
  Box,
  Chip,
  Divider,
  Menu,
  MenuItem,
  Pagination,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaBell } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { useGetAllReviews } from "@/services/reviews";
import Spinner from "@/components/Spinner/Spinner";
import { REVIEW_TYPES } from "@/enums/reviews";

const boxSX = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #D9D9D9",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  padding: "8px 16px",
  cursor: "pointer",
};

const typographySX = {
  color: "#000000",
  fontWeight: 700,
  fontSize: "14px",
};

const ratingData = [
  { stars: 5, count: 331, color: "#28EA84" },
  { stars: 4, count: 132, color: "#B881FF" },
  { stars: 3, count: 69, color: "#FFD233" },
  { stars: 2, count: 17, color: "#8FE8FF" },
  { stars: 1, count: 5, color: "#FF7B31" },
];
const Reviews = () => {
  const [replyActive, setReplyActive] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tag, setTag] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const { data, isLoading, isError } = useGetAllReviews(page, 3, tag);

  const handleReplyClick = (id) => {
    setReplyActive((prevId) => (prevId === id ? null : id));
  };

  const totalReviews = ratingData.reduce((acc, item) => acc + item.count, 0);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleTagClick = (tag) => {
    setTag(tag);
    setPage(1);
    setAnchorEl(null);
  };

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Box className="flex flex-wrap justify-between items-center p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h5" fontWeight="bold" fontSize="40px">
            Reviews
          </Typography>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <Box sx={boxSX} onClick={handleMenuOpen}>
            <Typography sx={typographySX}>All Reviews</Typography>
            {/* <IconButton > */}
            <KeyboardArrowDownIcon
              sx={{ color: "#000000" }}
              fontSize="medium"
            />
            {/* </IconButton> */}
          </Box>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              "& .MuiMenu-list": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <MenuItem
              sx={{ fontSize: "14px", fontWeight: 700, color: "#000000" }}
              onClick={() => handleTagClick(REVIEW_TYPES.PUBLIC)}
            >
              Public Reviews
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "14px", fontWeight: 700, color: "#000000" }}
              onClick={() => handleTagClick(REVIEW_TYPES.PRIVATE)}
            >
              Private Reviews
            </MenuItem>
          </Menu>
          <Box sx={boxSX}>
            <Typography sx={typographySX}>Nov 2023 - Nov 2024</Typography>
            <KeyboardArrowDownIcon
              sx={{ color: "#000000" }}
              fontSize="medium"
            />
          </Box>
          <FaBell
            style={{
              color: "#B3B3B3",
              fontSize: "30px",
              cursor: "pointer",
            }}
          />
        </div>
      </Box>
      <Box className="flex flex-row justify-evenly items-center gap-4 w-full p-10">
        {/* Growth Section */}
        <Box className="flex flex-col items-center space-x-4">
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, fontSize: "20px", color: "#000000" }}
          >
            Total Reviews
          </Typography>
          <div className="flex flex-row items-center space-x-2">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: "40px",
              }}
            >
              {data?.totalReviews}
            </Typography>

            <Chip
              label={
                <Box className="flex items-center space-x-2">
                  <span className="text-[#29704B] text-[12px] font-bold">
                    22%
                  </span>
                  <FaArrowTrendUp
                    style={{
                      color: "#29704B",
                      fontSize: "15px",
                    }}
                  />
                </Box>
              }
              sx={{
                backgroundColor: "#C9FFE3",
                color: "#27AE60",
                fontWeight: "bold",
                padding: "0 8px",
              }}
            />
          </div>
          {/* </Box> */}
          <Typography variant="body2" sx={{ color: "#AAAAAA" }}>
            Growth in reviews over this year
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        {/* Average Ratings Section */}
        <Box className="flex flex-col items-center">
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, fontSize: "20px", color: "#000000" }}
          >
            Average Ratings
          </Typography>
          <Box className="flex items-center space-x-2">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: "40px",
              }}
            >
              {data?.averageRating}
            </Typography>
            <Rating
              name="Average Rating"
              value={data?.averageRating ?? 0}
              readOnly
            />
          </Box>
          <Typography variant="body2" sx={{ color: "#AAAAAA" }}>
            Average rating over the last year
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />

        {/* Ratings Distribution */}
        <Box className="flex flex-col w-full max-w-xs">
          {ratingData.map((item, index) => (
            <Box key={index} className="flex items-center space-x-2 mb-2">
              <Typography
                variant="body2"
                sx={{ color: "#929292", fontSize: "12px", fontWeight: 700 }}
              >
                ⭐ {item.stars}
              </Typography>
              <Box className="flex-1 rounded-full h-2 overflow-hidden">
                <Box
                  className={`h-full`}
                  style={{
                    width: `${(item.count / totalReviews) * 100}%`,
                    backgroundColor: item.color,
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#929292", fontSize: "12px", fontWeight: 700 }}
              >
                {item.count}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="w-full px-10">
        <Divider />
      </Box>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box className="w-full px-10 py-5">
          {data?.data?.map((item) => (
            <ReviewCard
              key={item?._id}
              id={item?._id}
              name={item?.user?.name}
              clv={item?.clv}
              totalReviews={item?.totalReviews}
              rating={item?.rating}
              date={item?.createdAt}
              reviewText={item?.comment}
              avatar={item?.user?.image}
              tags={item?.tags}
              replyActive={replyActive}
              handleReplyClick={handleReplyClick}
            />
          ))}
        </Box>
      )}
      <div className="flex flex-row justify-center items-center py-4">
        <Pagination
          count={data?.totalPages}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default Reviews;
