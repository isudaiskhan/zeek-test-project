import axios from "axios";

export const updateRules = async (data) => {
  return await axios.put("/business-point", data);
};
