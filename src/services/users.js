import axios from "axios";
import { getToken } from "./token";
import { USER_ROLES } from "@/enums/users";

export const getBusinessProfile = async (token) => {
  return axios.get(`/business/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const validateUserIsAdmin = async () => {
  const token = getToken(true);

  const userData = await getBusinessProfile(token);

  if (userData && userData?.type?.includes(USER_ROLES.ADMIN)) {
    return true;
  } else {
    return false;
  }
};
