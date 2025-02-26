import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const updateBusinessProfile = async (data) => {
  return await axios.put("/business", data);
};
const getBusinessProfile = async () => {
  return await axios.get("/business/me");
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["get-profile"],
    queryFn: () => getBusinessProfile(),
    refetchOnWindowFocus: false,
  });
};
