"use client";
import React, { useState } from "react";
import { Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SegmentCard from "@/components/SegmentCard/SegmentCard";
import { segments, tagStyles } from "@/utils/dummy-data";
import CreateSegment from "@/components/Modals/Segments/CreateSegment";

const Segments = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="p-4 mt-3">
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h4" className="!font-bold !text-4xl">
            Segments
            <span className="text-[#B3B3B3] text-4xl ml-3 font-bold">
              {segments.length}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {segments.map(({ tag, people, created, campaigns }, index) => (
            <SegmentCard
              key={index}
              tag={tag}
              people={people}
              created={created}
              campaigns={campaigns}
              index={index}
              tagStyles={tagStyles}
            />
          ))}
        </div>
      </div>

      {openModal && (
        <CreateSegment open={openModal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Segments;
