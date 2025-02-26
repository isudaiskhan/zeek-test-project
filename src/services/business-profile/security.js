import axios from "axios";

export const updatePassword = async (data) => {
  return await axios.put("/business", data);
};
