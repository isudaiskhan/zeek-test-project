import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getBranches = async (page, limit, keyword) => {
  return await axios.get("/branch", {
    params: {
      page,
      limit,
      keyword,
    },
  });
};

export const addBranch = async (data) => {
  return await axios.post("/branch", data);
};

export const useGetBranches = (page = 1, limit = 10, keyword) => {
  return useQuery({
    queryKey: ["get-branches", page, limit, keyword],
    queryFn: () => getBranches(page, limit, keyword),
    refetchOnWindowFocus: false,
  });
};
