import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCardsData = async (page, limit) => {
  return await axios.get("/card", {
    params: {
      page,
      limit,
    },
  });
};

export const addCards = async (data) => {
  return await axios.post("/card", data);
};

const deleteCard = async (id) => {
  return await axios.delete(`/card?card=${id}`);
};

export const useGetAllCardsData = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-cards", page, limit],
    queryFn: () => getCardsData(page, limit),
    refetchOnWindowFocus: false,
  });
};

export const useGetInfiniteCardsData = (limit = 10) => {
  return useInfiniteQuery({
    queryKey: ["get-cards", limit],
    queryFn: ({ pageParam = 1 }) => getCardsData(pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.data?.length < limit) return undefined; // Stop if no more data
      return allPages.length + 1; // Next page
    },
    refetchOnWindowFocus: false,
  });
};

export const useDeleteCard = (id) => {
  return useMutation({
    queryKey: ["delete-notification", id],
    mutationFn: () => deleteCard(id),
  });
};
