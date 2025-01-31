import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const getPromotionsData = async (page, limit) => {
  return await axios.get("/business-promotion", {
    params: {
      page,
      limit,
    },
  });
};

export const addPromotion = async (data) => {
  return await axios.post("/business-promotion", data);
};

const deletePromotion = async (id, data) => {
  return await axios.delete(
    `/business-promotion?businessPromotion=${id}`,
    data
  );
};

export const useGetPromotions = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-promotions", page, limit],
    queryFn: () => getPromotionsData(page, limit),
    refetchOnWindowFocus: false,
  });
};

export const useDeletePromotion = (id) => {
  return useMutation({
    mutationKey: ["delete-promotion", id],
    mutationFn: () => deletePromotion(id),
  });
};
