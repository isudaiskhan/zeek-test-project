import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllRoles = async (page, limit) => {
  return await axios.get("business-role", {
    params: {
      page,
      limit,
    },
  });
};

export const useGetAllRoles = (page, limit) => {
  return useQuery({
    queryKey: ["business-role", page, limit],
    queryFn: () => getAllRoles(page, limit),
    refetchOnWindowFocus: false,
  });
};
