import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const addNewBusinnessRole = async (data) => {
  return await axios.post("/business-role", data);
};

export const updateBusinessRole = async (id, data) => {
  return await axios.patch(`/business-role/${id}/access`, data);
};

export const deleteRole = async (id) => {
  return await axios.delete(`/business-role?businessRole=${id}`);
};

const getAllRoles = async (page, limit) => {
  return await axios.get("/business-role", {
    params: {
      page,
      limit,
    },
  });
};

const getRoles = async (platform, page, limit) => {
  return await axios.get("/business-role", {
    params: {
      platform,
      page,
      limit,
    },
  });
};

export const useGetAllBusinessRoles = (limit = 10) => {
  return useInfiniteQuery({
    queryKey: ["get-all-roles", limit],
    queryFn: ({ pageParam = 1 }) => getAllRoles(pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages?.length;
      return currentPage < lastPage?.totalPages ? currentPage + 1 : undefined;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetRoles = (platform, limit = 10) => {
  return useInfiniteQuery({
    queryKey: ["get-roles", platform, limit],
    queryFn: ({ pageParam = 1 }) => getRoles(platform, pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages?.length;
      return currentPage < lastPage?.totalPages ? currentPage + 1 : undefined;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetRole = (id) => {
  return useQuery({
    queryKey: ["get-role", id],
    queryFn: () => axios.get(`/business-role/${id}`),
    refetchOnWindowFocus: false,
  });
};
