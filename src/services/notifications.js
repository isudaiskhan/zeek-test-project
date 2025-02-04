import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const getAllNotifications = async (page, limit, status) => {
  return await axios.get("/business-notification", {
    params: {
      page,
      limit,
      status,
    },
  });
};

export const addNotification = (data) => {
  return axios.post("/business-notification", data);
};

export const updateNotification = (id, data) => {
  return axios.put(`/business-notification?businessNotification=${id}`, data);
};

const deleteNotification = (id) => {
  return axios.delete(`/business-notification?businessNotification=${id}`);
};

export const useGetAllNotifications = (limit = 10, status) => {
  return useInfiniteQuery({
    queryKey: ["get-notifications", limit, status],
    queryFn: ({ pageParam = 1 }) =>
      getAllNotifications(pageParam, limit, status),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.data?.length < limit) return undefined; // Stop if no more data
      return allPages.length + 1; // Next page
    },
    refetchOnWindowFocus: false,
  });
};

export const useDeleteNotification = (id) => {
  return useMutation({
    queryKey: ["delete-notification", id],
    mutationFn: () => deleteNotification(id),
  });
};
