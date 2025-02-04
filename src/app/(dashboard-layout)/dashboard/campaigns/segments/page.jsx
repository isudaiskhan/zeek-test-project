"use client";
import React, { useState } from "react";
import { Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SegmentCard from "@/components/SegmentCard/SegmentCard";
import CreateSegment from "@/components/Modals/Segments/CreateSegment";
import { useGetInfiniteSegments } from "@/services/segments";
import Spinner from "@/components/Spinner/Spinner";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";

const Segments = () => {
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetInfiniteSegments(12);

  const segmentsData = data?.pages?.flatMap((page) => page.data) || [];

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">
          An error occurred while fetching segments.
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 mt-3">
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h4" className="!font-bold !text-4xl">
            Segments
            <span className="text-[#B3B3B3] text-4xl ml-3 font-bold">
              {data?.totalCount}
            </span>
          </Typography>
          <IconButton
            className="!bg-[#FFECE1] !me-7 !p-1 !hover:bg-orange-200 !text-[#FF762A] !border !border-[#FFE0CE] !border-solid !rounded-xl"
            aria-label="add"
            onClick={handleOpenModal}
          >
            <AddIcon className="!text-4xl" />
          </IconButton>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {segmentsData?.map((item) => (
                <SegmentCard
                  key={item?._id}
                  id={item?._id}
                  title={item?.title}
                  tier={item?.tier}
                  timeLastVisit={item?.timeLastVisit}
                  visitFrequency={item?.visitFrequency}
                  createdAt={item?.createdAt}
                />
              ))}
            </div>
            <div className="flex items-center justify-center py-2">
              {hasNextPage && (
                <CustomButton
                  text="Load More"
                  bgColor="#FFECE1"
                  textColor="#FF5B00"
                  onClick={fetchNextPage}
                />
              )}
            </div>
          </>
        )}
      </div>

      {openModal && (
        <CreateSegment open={openModal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Segments;
