import axios from "axios";

export const updateRules = async (data) => {
  return await axios.put("/business-point", data);
};

export const updateTiers = async (data) => {
  return await axios.put("/business-tier", data);
};
