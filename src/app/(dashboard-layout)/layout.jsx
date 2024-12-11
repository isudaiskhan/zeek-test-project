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
import { useToggleState } from "@/utils/hooks";

const DashboardLayout = ({ children }) => {
  const { theme } = useTheme();

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH.OPEN);
  const [permDrawer, togglePermDrawer] = useToggleState(!isSmallScreen);
  const [tempDrawer, toggleTempDrawer] = useToggleState(isSmallScreen);

  useEffect(() => {
    if (isSmallScreen) {
      togglePermDrawer(false);
    } else {
      togglePermDrawer(true);
      toggleTempDrawer(false);
    }
  }, [isSmallScreen]);

  const toggleSidebar = () => {
    if (isSmallScreen) {
      toggleTempDrawer();
    } else {
      togglePermDrawer();
    }
  };

  const closeSidebar = () => {
    if (isSmallScreen) {
      toggleTempDrawer();
    } else {
      togglePermDrawer();
    }
    // setIsSidebarOpen(false);
  };

  console.log(permDrawer);

  return (
    <DashboardLayoutWrapper>
      {isSmallScreen && !tempDrawer && (
        <IconButton
          title="Open menu"
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
            backgroundColor: "#ffdac5",
            color: "white",
            transition: "transform 0.3s ease",
            transform: permDrawer ? "rotate(180deg)" : "rotate(0deg)",
            color: "white",
            "&:hover": {
              backgroundColor: "#ffdac5",
            },
          }}
          onClick={toggleSidebar}
        >
          {tempDrawer ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}
      <Drawer
        open={permDrawer}
        variant="permanent"
        anchor="left"
        PaperProps={{ sx: { borderRight: "none" } }}
        sx={{ width: drawerWidth }}
        className="hidden md:block"
      >
        <AdminSidebar />
      </Drawer>

      <Box
        className={`${styles["dashboard-main-container"]} ${styles[theme]}`}
        sx={{
          paddingLeft: {
            xs: 0,
            md: permDrawer ? `${drawerWidth}px` : "60px",
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

      {/* Drawer */}
      <Drawer
        open={tempDrawer}
        variant="temporary"
        anchor="left"
        onClose={closeSidebar}
        PaperProps={{ sx: { borderRight: "none" } }}
      >
        <AdminSidebar closeSidebar={closeSidebar} />
      </Drawer>
    </DashboardLayoutWrapper>
  );
};

export default DashboardLayout;
