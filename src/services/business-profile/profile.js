import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
