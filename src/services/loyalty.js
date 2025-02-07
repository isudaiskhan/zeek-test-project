import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCardsData = async (page, limit) => {
  return await axios.get("/card", {
    params: {
      page,
      limit,
    },
  });
};

export const useGetAllCardsData = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-cards", page, limit],
    queryFn: () => getCardsData(page, limit),
    refetchOnWindowFocus: false,
  });
};
