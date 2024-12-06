"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayoutWrapper from "@/components/LayoutWrappers/Root/LayoutWrapper";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";
import { sonner } from "@/theme/theme-config";
import MuiThemeProvider from "./MuiThemeProvider";
import Spinner from "@/components/Spinner/Spinner";
import { Next13ProgressBar } from "next13-progressbar";
import axios from "axios";
import colorVariables from "@/styles/colors.module.scss";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { CssBaseline } from "@mui/material";

// colors
const primaryColor = colorVariables.primary;

// react query
const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorMessage =
      error?.response?.data?.error || error.message || "Something went wrong.";
    throw new Error(errorMessage);
  }
);

const Providers = ({ children }) => {
  // state
  const [token, setToken] = useState("");

  useEffect(() => {
    // token
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (token) {
      Cookies.set("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [token]);

  return (
    <>
      <Next13ProgressBar
        color={primaryColor}
        options={{
          showSpinner: false,
        }}
      />
      <Toaster
        position={sonner.position}
        expand={sonner.expand}
        closeButton={sonner.closeButton}
        richColors={sonner.richColors}
        visibleToasts={sonner.visibleToasts}
        icons={{
          loading: <Spinner size={20} />,
        }}
        toastOptions={{
          duration: sonner.toastOptions.duration,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <NextThemeProvider attribute="class" enableSystem={false}>
          <MuiThemeProvider>
            <CssBaseline />
            <ReduxProvider store={store}>
              <RootLayoutWrapper>
                <main>{children}</main>
              </RootLayoutWrapper>
            </ReduxProvider>
          </MuiThemeProvider>
        </NextThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
