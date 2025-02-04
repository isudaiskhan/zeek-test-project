import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getAllReviews = async (page, limit, tag) => {
  return await axios.get("/review/business", {
    params: {
      page,
      limit,
      tag,
    },
  });
};


export const addCommentReply = async (data) => {
  return await axios.post("/business-comment", data);
};


export const useGetAllReviews = (page, limit, tag) => {
  return useQuery({
    queryKey: ["reviews", page, limit, tag],
    queryFn: () => getAllReviews(page, limit, tag),
    refetchOnWindowFocus: false,
  });
};
