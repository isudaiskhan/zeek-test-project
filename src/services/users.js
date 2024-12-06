import axios from "axios";
import { getToken } from "./token";
import { USER_ROLES } from "@/enums/users";

export const getUserProfile = async (token) => {
  return axios.get(`/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const validateUserIsAdmin = async () => {
  const token = getToken(true);

  const userData = await getUserProfile(token);

  if (userData && userData?.type?.includes(USER_ROLES.ADMIN)) {
    return true;
  } else {
    return false;
  }
};
