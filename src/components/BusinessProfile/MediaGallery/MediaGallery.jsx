"use client";
import React, { useState } from "react";
import { Card, CardMedia, Button, Typography } from "@mui/material";
import MediaGalleryModalWrapper from "./MediaGalleryModalWrapper";
import {
  deleteMediaGallery,
  useGetMediaGallery,
} from "@/services/business-profile/media";
import { fileBaseURL } from "@/utils/urls";
import ConfirmationDialog from "@/components/Modals/ConfirmationDialog";
import Spinner from "@/components/Spinner/Spinner";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";

const MediaGallery = () => {
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetMediaGallery();
  const [id, setId] = useState(null);

  const mediaGallery = data?.pages?.flatMap((page) => page.data) || [];

  const { submitHandler, submitLoading } = useSubmitHandler();
  const { invalidateQuery } = useInvalidateQuery();

  const handleDelete = async (id) => {
    submitHandler({
      successMsg: "Media deleted successfully",
      onSubmit: async () => {
        await deleteMediaGallery(id);
        invalidateQuery(["get-roles"]);
        setConfirmationDialog(false);
      },
      onFinally: () => {
        setConfirmationDialog(false);
      },
    });
  };

  const handleOpenConfirmationDialog = (id) => {
    setConfirmationDialog(true);
    setId(id);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="space-y-4 sm:px-16 p-5">
      <div className="flex items-center justify-between mb-8">
        <Typography variant="h4" className="!font-inter !text-2xl">
          Media Gallery
        </Typography>
        <MediaGalleryModalWrapper />
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:gap-20 gap-10">
        {mediaGallery?.map((item, index) => (
          <div key={index} className="relative group">
            <Card className="!shadow-none">
              <CardMedia
                component="img"
                image={fileBaseURL + item?.image}
                alt={`image-${index}`}
                className="transition-opacity duration-300 ease-in-out group-hover:opacity-80 h-[200px] "
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#00000041] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Button
                  variant="contained"
                  className="!bg-white !text-red-500 !font-inter !px-6 !rounded-lg !py-2"
                  onClick={() => handleOpenConfirmationDialog(item?._id)}
                >
                  Delete Image
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center py-2">
        {hasNextPage && (
          <CustomButton
            loading={isFetchingNextPage}
            text="Load More"
            bgColor="#FFECE1"
            textColor="#FF5B00"
            onClick={fetchNextPage}
          />
        )}
      </div>
      {confirmationDialog && (
        <ConfirmationDialog
          setDialog={setConfirmationDialog}
          title={`Are you sure to delete this media ?`}
          onConfirm={() => handleDelete(id)}
          confirmationBtnText="Delete"
          confirmationBtnColor="error"
          loading={submitLoading}
        />
      )}
    </div>
  );
};

export default MediaGallery;
