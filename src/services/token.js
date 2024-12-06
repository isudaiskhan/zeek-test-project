import axios from "axios";
import Cookies from "js-cookie";

export const validateToken = async (token) => {
  try {
    await axios.get(`/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const getToken = (onlyToken = false) => {
  let token = Cookies.get("token");

  if (onlyToken) {
    return token;
  } else {
    token = `Bearer ${token}`;
    return token;
  }
};

export const basicUsernameAndPassword = {
  username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME,
  password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD,
};
