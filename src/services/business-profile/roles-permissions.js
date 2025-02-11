import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const addNewBusinnessRole = async (data) => {
  return await axios.post("/business-role", data);
};

export const deleteRole = async (id) => {
  return await axios.delete(`/business-role?businessRole=${id}`);
};

const getRoles = async (page, limit) => {
  return await axios.get("/business-role", {
    params: {
      page,
      limit,
    },
  });
};

export const useGetRoles = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-roles", page, limit],
    queryFn: () => getRoles(page, limit),
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
