"use client";
import React from "react";
import { Card, CardMedia, Button, Typography } from "@mui/material";
import { images } from "@/utils/dummy-data";
import MediaGalleryModalWrapper from "./MediaGalleryModalWrapper";

const MediaGallery = () => {
  return (
    <div className="space-y-4 px-16 p-5">
      <div className="flex items-center justify-between mb-8">
        <Typography variant="h4" className="!font-inter !text-2xl">
          Media Gallery
        </Typography>
        <MediaGalleryModalWrapper />
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-20">
        {images.slice(0, 9).map((src, index) => (
          <div key={index} className="relative group">
            <Card className="!shadow-none">
              <CardMedia
                component="img"
                image={src}
                alt={`image-${index}`}
                className="transition-opacity duration-300 ease-in-out group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#00000041] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <Button
                  variant="contained"
                  className="!bg-white !text-red-500 !font-inter !px-6 !rounded-lg !py-2"
                >
                  Delete Image
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
