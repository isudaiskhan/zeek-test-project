"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Paper,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "next-themes";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback/ErrorFallback";
import DashboardLayoutWrapper from "../../components/LayoutWrappers/Dashboard/LayoutWrapper";
import styles from "./styles.module.scss";
import { DRAWER_WIDTH } from "../../theme/drawer";

const DashboardLayout = ({ children }) => {
  const { theme } = useTheme();

  const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH.OPEN);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    if (!isSmallScreen) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
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
      {isSmallScreen && (
        <IconButton
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
            backgroundColor: "#ffdac5",
            color: "white",
            transition: "transform 0.3s ease",
            transform: isSidebarOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: "white",
            "&:hover": {
              backgroundColor: "#ffdac5",
            },
          }}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      {isSmallScreen ? (
        <Drawer
          variant="temporary"
          anchor="left"
          open={isSidebarOpen}
          onClose={closeSidebar}
          PaperProps={{ sx: { borderRight: "none" } }}
        >
          <AdminSidebar closeSidebar={closeSidebar} />
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{ sx: { borderRight: "none" } }}
          sx={{ width: drawerWidth }}
        >
          <AdminSidebar />
        </Drawer>
      )}

      <Box
        className={`${styles["dashboard-main-container"]} ${styles[theme]}`}
        sx={{
          paddingLeft: {
            xs: 0,
            md: isSidebarOpen ? `${drawerWidth}px` : "60px",
          },
          transition: "padding-left 0.3s ease-in-out",
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
