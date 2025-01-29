import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCRMData = async (page, limit) => {
  return await axios.get("/business/crm", {
    params: {
      page,
      limit,
    },
  });
};

export const useGetCRMData = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-crm", page, limit],
    queryFn: () => getCRMData(page, limit),
    refetchOnWindowFocus: false,
  });
};
