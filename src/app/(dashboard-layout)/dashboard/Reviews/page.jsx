"use client";
import { Box, Chip, Divider, Rating, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaBell } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import ReviewCard from "@/components/ReviewCard/ReviewCard";

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

const reviewDataArray = [
  {
    id: 1,
    name: "Sarah Lee",
    avatar: "/images/review.png",
    clv: "$200",
    totalReviews: 4,
    rating: 4,
    date: "24-11-2024",
    reviewText:
      "Great spot for a coffee break! The atmosphere is cozy and welcoming, perfect for catching up with friends or getting some work done. The coffee is excellent, and the pastries are fresh and delicious. My only feedback is that the service was a bit slow during peak hours, but the staff was friendly and accommodating. Overall, a lovely experience—I’ll definitely be back!",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "/images/review.png",
    clv: "$150",
    totalReviews: 6,
    rating: 5,
    date: "15-11-2024",
    reviewText:
      "Absolutely love this place! The ambiance is fantastic, and the food quality is top-notch. The staff is incredibly polite and helpful. Highly recommend the cappuccino!",
  },
  {
    id: 3,
    name: "Emily Clark",
    avatar: "/images/review.png",
    clv: "$300",
    totalReviews: 10,
    rating: 3,
    date: "10-11-2024",
    reviewText:
      "Nice café, but the seating was limited. The drinks were good, but the desserts were just okay. Service could use some improvement.",
  },
  {
    id: 4,
    name: "Michael Smith",
    avatar: "/images/review.png",
    clv: "$250",
    totalReviews: 8,
    rating: 4,
    date: "05-11-2024",
    reviewText:
      "Good experience overall. The lattes are excellent, but I found the prices a bit high. Worth visiting for a relaxing afternoon.",
  },
];
const Reviews = () => {
  const ratingData = [
    { stars: 5, count: 331, color: "#28EA84" },
    { stars: 4, count: 132, color: "#B881FF" },
    { stars: 3, count: 69, color: "#FFD233" },
    { stars: 2, count: 17, color: "#8FE8FF" },
    { stars: 1, count: 5, color: "#FF7B31" },
  ];

  const totalReviews = ratingData.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="p-4">
      <Box className="flex flex-wrap justify-between items-center p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h5" fontWeight="bold" fontSize="40px">
            Reviews
          </Typography>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <Box sx={boxSX}>
            <Typography sx={typographySX}>All Reviews</Typography>
            <KeyboardArrowDownIcon
              sx={{ color: "#000000" }}
              fontSize="medium"
            />
          </Box>
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
          <div className="flex flex-row items-center space-x-2">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: "40px",
              }}
            >
              554
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
              4.4
            </Typography>
            <Rating name="Average Rating" value={4} readOnly />
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
      <Box className="w-full px-10 py-5">
        {reviewDataArray.map((item) => (
          <>
            <ReviewCard
              key={item.id}
              id={item.id}
              name={item.name}
              clv={item.clv}
              totalReviews={item.totalReviews}
              rating={item.rating}
              date={item.date}
              reviewText={item.reviewText}
              avatar={item.avatar}
            />
            <Divider key={`divider-${item.id}`} />
          </>
        ))}
      </Box>
    </div>
  );
};

export default Reviews;
