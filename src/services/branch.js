import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getBranches = async (page, limit) => {
  return await axios.get("/branch", {
    params: {
      page,
      limit,
    },
  });
};

export const addBranch = async (data) => {
  return await axios.post("/branch", data);
};

export const useGetBranches = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-branches", page, limit],
    queryFn: () => getBranches(page, limit),
    refetchOnWindowFocus: false,
  });
};
