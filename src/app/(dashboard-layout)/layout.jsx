// "use client";

// import styles from "./styles.module.scss";

// import { Box, Container, Drawer, Paper } from "@mui/material";
// import { useState } from "react";
// import AdminSidebar from "../../components/Sidebar/AdminSidebar";
// import AdminHeader from "../../components/Header/AdminHeader";
// // import Footer from "../../components/Footer/Footer";
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "components/ErrorFallback/ErrorFallback";
// import { DRAWER_WIDTH } from "../../theme/drawer";
// import DashboardLayoutWrapper from "../../components/LayoutWrappers/Dashboard/LayoutWrapper";
// import { useTheme } from "next-themes";

// const DashboardLayout = ({ children }) => {
//   // theme
//   const { theme } = useTheme();

//   // state
//   const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH.OPEN);

//   return (
//     <DashboardLayoutWrapper>
//       <AdminHeader drawerWidth={drawerWidth} />
//       <Drawer
//         variant="permanent"
//         anchor="left"
//         className="xs:hidden md:block"
//         PaperProps={{
//           sx: {
//             borderRight: "none",
//           },
//         }}
//       >
//         <AdminSidebar
//           drawerWidth={drawerWidth}
//           setDrawerWidth={setDrawerWidth}
//           renderActions
//         />
//       </Drawer>
//       <Box
//         className={`${styles["dashboard-main-container"]} ${styles[theme]}`}
//         sx={{
//           paddingLeft: {
//             xs: 0,
//             md: `${drawerWidth}px`,
//           },
//         }}
//       >
//         <Container className={styles["content-container"]} maxWidth={false}>
//           <Paper elevation={0} className={styles["paper-container"]}>
//             <ErrorBoundary FallbackComponent={ErrorFallback}>
//               <div>{children}</div>
//             </ErrorBoundary>
//           </Paper>
//         </Container>
//         {/* <Footer /> */}
//       </Box>
//     </DashboardLayoutWrapper>
//   );
// };

// export default DashboardLayout;

"use client";

import styles from "./styles.module.scss";
import { Box, Container, Drawer, Paper, IconButton } from "@mui/material";
import { useState } from "react";
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

  const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH.OPEN);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "0 16px",
              backgroundColor: "#f6f6f6",
            }}
          >
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
                  src={"/images/menu.svg"}
                  alt="Toggle Drawer Icon"
                  width={24}
                  height={24}
                />{" "}
              </IconButton>
            </Box>
          </Box>

          <Drawer
            variant="temporary"
            anchor="left"
            open={isSidebarOpen}
            onClose={toggleSidebar}
            PaperProps={{
              sx: {
                borderRight: "none",
              },
            }}
            sx={{
              width: drawerWidth,
              boxSizing: "border-box",
            }}
          >
            <AdminSidebar
              drawerWidth={drawerWidth}
              setDrawerWidth={setDrawerWidth}
              renderActions
              closeSidebar={closeSidebar}
            />
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          anchor="left"
          className="xs:hidden md:block"
          PaperProps={{
            sx: {
              borderRight: "none",
            },
          }}
        >
          <AdminSidebar
            drawerWidth={drawerWidth}
            setDrawerWidth={setDrawerWidth}
            renderActions
          />
        </Drawer>
      )}

      <Box
        className={`${styles["dashboard-main-container"]} ${styles[theme]}`}
        sx={{
          paddingLeft: {
            xs: 0,
            md: `${drawerWidth}px`,
          },
        }}
      >
        <Container className={styles["content-container"]} maxWidth={false}>
          <Paper elevation={0} className={styles["paper-container"]}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <div>{children}</div>
            </ErrorBoundary>
          </Paper>
        </Container>
        {/* <Footer /> */}
      </Box>
    </DashboardLayoutWrapper>
  );
};

export default DashboardLayout;
