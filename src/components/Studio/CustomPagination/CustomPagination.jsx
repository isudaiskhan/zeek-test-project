import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";

const CustomPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box className="flex flex-row justify-evenly items-center gap-10">
      {/* Previous Arrow */}
      <Box
        onClick={handlePrevious}
        className={`flex items-center justify-center w-14 h-14 rounded-lg p-4 ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer"
        }`}
      >
        <ArrowBackIosIcon fontSize="large" sx={{ ml: 2 }} />
      </Box>

      {/* Page Indicators */}
      <Box className="flex flex-row justify-evenly items-center gap-10">
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <Box
              key={page}
              onClick={() => handlePageClick(page)}
              className={`${
                currentPage === page
                  ? "w-8 h-8 rounded-full bg-orange-300 cursor-pointer"
                  : "w-14 h-3 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
              }`}
            ></Box>
          );
        })}
      </Box>

      {/* Next Arrow */}
      <Box
        onClick={handleNext}
        className={`flex items-center justify-center w-14 h-14 rounded-lg p-4 ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer"
        }`}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </Box>
    </Box>
  );
};

export default CustomPagination;
