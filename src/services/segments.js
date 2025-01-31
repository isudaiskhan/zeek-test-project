import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getSegments = (page, limit) => {
  return axios.get("/business-segment", {
    params: {
      page,
      limit,
    },
  });
};

export const useGetSegments = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-segments", page, limit],
    queryFn: () => getSegments(page, limit),
    refetchOnWindowFocus: false,
  });
};
