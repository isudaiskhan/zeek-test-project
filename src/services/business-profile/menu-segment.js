import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const addMenuSegment = async (data) => {
  return await axios.post("/menu-segment", data);
};

const getMenuSegment = async (page, limit) => {
  return await axios.get("/menu-segment", {
    params: {
      page,
      limit,
    },
  });
};

export const useGetMenuSegments = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-menu-segments", page, limit],
    queryFn: () => getMenuSegment(page, limit),
    refetchOnWindowFocus: false,
  });
};
