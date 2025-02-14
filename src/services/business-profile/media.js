import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const getMediaGallery = async (page, limit) => {
  return await axios.get("/business-media", {
    params: {
      page,
      limit,
    },
  });
};

export const addMediaGallery = async (formData) => {
  return await axios.post("/business-media", formData);
};

export const deleteMediaGallery = async (id) => {
  return await axios.delete(`/business-media`, {
    params: {
      businessMedia: id,
    },
  });
};

export const useGetMediaGallery = (limit = 9) => {
  return useInfiniteQuery({
    queryKey: ["get-media", limit],
    queryFn: ({ pageParam = 1 }) => getMediaGallery(pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages?.length;
      return currentPage < lastPage?.totalPages ? currentPage + 1 : undefined;
    },
    refetchOnWindowFocus: false,
  });
};
