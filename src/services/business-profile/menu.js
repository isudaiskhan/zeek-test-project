import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const addNewMenuItem = async (data) => {
  return await axios.post("/business-menu", data);
};

export const updateMenuItem = async (ID, data) => {
  return await axios.put(`/business-menu`, data, {
    params: {
      businessMenu: ID,
    },
  });
};

const getMenuItems = async (page, limit) => {
  return await axios.get("/business-menu", {
    params: {
      page,
      limit,
    },
  });
};

const getMenuItem = async (ID) => {
  return await axios.get(`/business-menu/${ID}`);
};

export const useGetMenuItems = (limit = 10) => {
  return useInfiniteQuery({
    queryKey: ["get-segments", limit],
    queryFn: ({ pageParam = 1 }) => getMenuItems(pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages.length;
      return currentPage < lastPage.totalPages ? currentPage + 1 : undefined;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetMenuItem = (ID) => {
  return useQuery({
    enabled: !!ID,
    queryKey: ["get-menu-item", ID],
    queryFn: () => getMenuItem(ID),
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
