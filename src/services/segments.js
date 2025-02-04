import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllSegments = async (page, limit, keyword) => {
  return await axios.get("/business-segment", {
    params: {
      page,
      limit,
      keyword,
    },
  });
};

export const addSegments = async (data) => {
  return await axios.post("/business-segment", data);
};

const deleteSegments = async (id) => {
  return await axios.delete(`/business-segment?businessSegment=${id}`);
};

export const useGetAllSegments = (page, limit, keyword) => {
  return useQuery({
    queryKey: ["get-segments", page, limit, keyword],
    queryFn: () => getAllSegments(page, limit, keyword),
    refetchOnWindowFocus: false,
  });
};

export const useGetInfiniteSegments = (limit = 10) => {
  return useInfiniteQuery({
    queryKey: ["get-segments", limit],
    queryFn: ({ pageParam = 1 }) => getAllSegments(pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.data?.length < limit) return undefined; // Stop if no more data
      return allPages.length + 1; // Next page
    },
    refetchOnWindowFocus: false,
  });
};

export const useDeleteSegments = (id) => {
  return useMutation({
    mutationKey: ["delete-segments", id],
    mutationFn: () => deleteSegments(id),
  });
};
