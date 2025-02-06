import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getMediaGallery = async (page, limit) => {
  return await axios.get("/business-media", {
    params: {
      page,
      limit,
    },
  });
};

export const useGetMediaGallery = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-media", page, limit],
    queryFn: () => getMediaGallery(page, limit),
    refetchOnWindowFocus: false,
  });
};
