import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
};

export const authUserSlice = createSlice({
  name: "auth-user",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      const { userData, token } = action.payload;
      localStorage.setItem("userData", JSON.stringify(userData));
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      const newState = {
        ...state,
        user: userData,
      };
      return newState;
    },
    removeAuthUser: () => {
      Cookies.remove("token");
      localStorage.clear();
      const newState = {
        ...initialState,
      };
      return newState;
    },
  },
});

export const { removeAuthUser, setAuthUser } = authUserSlice.actions;

export default authUserSlice.reducer;
