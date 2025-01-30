import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getEmployees = async (page, limit) => {
  return await axios.get("/business-employee", {
    params: {
      page,
      limit,
    },
  });
};

export const addEmployee = async (data) => {
  return await axios.post("/business-employee", data);
};

export const useGetEmployees = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["get-employees", page, limit],
    queryFn: () => getEmployees(page, limit),
    refetchOnWindowFocus: false,
  });
};
