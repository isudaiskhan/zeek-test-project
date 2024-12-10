"use client";

import styles from "./styles.module.scss";
import { Box, Container, Drawer, Paper, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminHeader from "../../components/Header/AdminHeader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback/ErrorFallback";
import { DRAWER_WIDTH } from "../../theme/drawer";
import DashboardLayoutWrapper from "../../components/LayoutWrappers/Dashboard/LayoutWrapper";
import { useTheme } from "next-themes";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

const DashboardLayout = ({ children }) => {
  const { theme } = useTheme();

  // Sidebar states
  const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH.OPEN);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default to false on small screens

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    if (!isSmallScreen) {
      setIsSidebarOpen(true); // Always open the sidebar on medium and larger screens
    } else {
      setIsSidebarOpen(false); // Close the sidebar on small screens by default
    }
  }, [isSmallScreen]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <DashboardLayoutWrapper>
      <AdminHeader drawerWidth={drawerWidth} />

      {isSmallScreen ? (
        <>
          {/* Temporary Drawer for Small Screens */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "16px",
              backgroundColor: "#f6f6f6",
            }}
          >
            <IconButton onClick={toggleSidebar}>
              <Image
                src="/images/menu.svg"
                alt="Toggle Drawer Icon"
                width={24}
                height={24}
              />
            </IconButton>
          </Box>

          <Drawer
            variant="temporary"
            anchor="left"
            open={isSidebarOpen}
            onClose={closeSidebar}
            PaperProps={{ sx: { borderRight: "none" } }}
          >
            <AdminSidebar
              drawerWidth={drawerWidth}
              toggleDrawer={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
              closeSidebar={closeSidebar}
            />
          </Drawer>
        </>
      ) : (
        /* Permanent Drawer for Larger Screens */
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{ sx: { borderRight: "none" } }}
          sx={{ width: drawerWidth }}
        >
          <AdminSidebar
            drawerWidth={drawerWidth}
            toggleDrawer={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            closeSidebar={closeSidebar}
          />
        </Drawer>
      )}

      <Box
        className={`${styles["dashboard-main-container"]} ${styles[theme]}`}
        sx={{
          paddingLeft: {
            xs: 0,
            md: isSidebarOpen ? `${drawerWidth}px` : "60px",
          },
          transition: "padding-left 0.3s ease-in-out", // Smooth transition when toggling
        }}
      >
        <Container className={styles["content-container"]} maxWidth={false}>
          <Paper elevation={0} className={styles["paper-container"]}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <div>{children}</div>
            </ErrorBoundary>
          </Paper>
        </Container>
      </Box>
    </DashboardLayoutWrapper>
  );
};

export default DashboardLayout;
