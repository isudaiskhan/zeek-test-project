import axios from "axios";
import { basicUsernameAndPassword } from "./token";

export const login = async (email, password) => {
  const data = {
    email,
    password,
  };

  return axios.post(`/auth/login`, data, {
    auth: {
      ...basicUsernameAndPassword,
    },
  });
};

export const signup = async (data) => {
  return axios.post(`/auth/signup`, data, {
    auth: {
      ...basicUsernameAndPassword,
    },
  });
};
