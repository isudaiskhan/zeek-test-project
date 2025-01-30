import axios from "axios";

export const uploadFile = async (data) => {
  return await axios.post("/file", data);
};
