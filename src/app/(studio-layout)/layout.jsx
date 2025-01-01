"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./styles.module.scss";
import { useTheme } from "next-themes";
import ErrorFallback from "@/components/ErrorFallback/ErrorFallback";

const StudioLayout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <Box
      className={`${styles["dashboard-main-container"]} ${styles[theme]}`}
      sx={{
        paddingLeft: {
          xs: 0,
          md: 0,
        },
        backgroundColor: "white",
        transition: "0.3s ease-in-out",
      }}
    >
      <Container className={styles["content-container"]} maxWidth="xl">
        {/* <Paper elevation={0} className={styles["paper-container"]}> */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div>{children}</div>
        </ErrorBoundary>
        {/* </Paper> */}
      </Container>
    </Box>
  );
};

export default StudioLayout;
