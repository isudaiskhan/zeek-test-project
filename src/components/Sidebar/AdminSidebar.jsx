"use client";

import { Box, IconButton, List, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { routes } from "../../routes/admin";
import AdminSidebarActions from "./Actions/AdminSidebarActions.jsx";
import RenderSidebarList from "./RenderSidebarList";
import { DRAWER_WIDTH } from "@/theme/drawer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const AdminSidebar = ({ closeSidebar = () => {} }) => {
  // State variables
  const [filterRoutes, setFilterRoutes] = useState([]);
  const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH.OPEN); // Default to the "open" state
  const [isRotated, setIsRotated] = useState(false); // Handle icon rotation state
  const [isClient, setIsClient] = useState(false); // New state to track client-side rendering

  // Fetch routes to render in sidebar dynamically
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client side
    let arr = [];
    arr = routes.filter((item) => item.sidebar);
    setFilterRoutes(arr);
  }, []);

  // Toggle sidebar open/close
  const toggleDrawer = () => {
    setDrawerWidth((prevWidth) =>
      prevWidth === DRAWER_WIDTH.OPEN ? DRAWER_WIDTH.CLOSED : DRAWER_WIDTH.OPEN
    );
    setIsRotated((prev) => !prev); // Toggle icon animation
  };

  if (!isClient) {
    return null;
  }

  return (
    <Box sx={{ width: drawerWidth }} className={`sidebar-container ${theme}`}>
      <Box className="logo-box">
        <Typography
          className={`logo-heading ${isRotated ? "hidden" : ""}`}
          sx={{ color: "black" }}
          textAlign="center"
          variant="h5"
        >
          ZEEK.
        </Typography>

        <Box className="drawer-toggle-btn">
          <motion.div
            animate={{
              rotate: isRotated ? 180 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <Image
                src={isRotated ? "/images/menu.svg" : "/images/menu.svg"}
                alt="Toggle Drawer Icon"
                width={24}
                height={24}
              />
            </IconButton>
          </motion.div>
        </Box>
      </Box>

      <Box className="links-box">
        <List className="navLink">
          {filterRoutes.map((route) => (
            <RenderSidebarList
              key={route.path}
              route={route}
              drawerWidth={drawerWidth}
              handleSidebarDrawerClose={closeSidebar}
            />
          ))}
        </List>
      </Box>

      <div className="drawer-footer-actions">
        <AdminSidebarActions drawerWidth={drawerWidth} />
      </div>
    </Box>
  );
};

export default AdminSidebar;

// // new responsivness issue finish in this code
// "use client";

// import { Box, IconButton, List, Typography } from "@mui/material";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { routes } from "../../routes/admin";
// import AdminSidebarActions from "./Actions/AdminSidebarActions";
// import RenderSidebarList from "./RenderSidebarList";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const AdminSidebar = ({ drawerWidth, toggleDrawer, isSidebarOpen }) => {
//   const [filterRoutes, setFilterRoutes] = useState([]);
//   const { theme } = useTheme();

//   useEffect(() => {
//     const sidebarRoutes = routes.filter((route) => route.sidebar);
//     setFilterRoutes(sidebarRoutes);
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: isSidebarOpen ? drawerWidth : 60, // Adjust width for half-closed state
//         overflowX: "hidden",
//         transition: "width 0.3s ease-in-out",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "100vh",
//       }}
//       className={`sidebar-container ${theme}`}
//     >
//       {/* Logo and Toggle Button */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: isSidebarOpen ? "space-between" : "center",
//           padding: "16px",
//         }}
//       >
//         {isSidebarOpen && (
//           <Typography
//             sx={{ color: "black" }}
//             textAlign="center"
//             variant="h5"
//             className="logo-heading"
//           >
//             ZEEK.
//           </Typography>
//         )}
//         <IconButton onClick={toggleDrawer}>
//           <motion.div
//             animate={{ rotate: isSidebarOpen ? 180 : 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             <Image src="/images/menu.svg" alt="Toggle Drawer Icon" width={24} height={24} />
//           </motion.div>
//         </IconButton>
//       </Box>

//       {/* Sidebar Links */}
//       <Box sx={{ flexGrow: 1 }}>
//         <List>
//           {filterRoutes.map((route) => (
//             <RenderSidebarList key={route.path} route={route} isSidebarOpen={isSidebarOpen} />
//           ))}
//         </List>
//       </Box>

//       {/* Footer Actions */}
//       {isSidebarOpen && (
//         <Box sx={{ padding: "16px" }}>
//           <AdminSidebarActions />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default AdminSidebar;
