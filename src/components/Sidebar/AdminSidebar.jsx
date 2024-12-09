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

const AdminSidebar = ({
  handleSidebarDrawerClose,
  renderToggleButton,
  renderActions,
}) => {
  // state
  const [filterRoutes, setFilterRoutes] = useState([]);
  const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH.OPEN); // Default open
  const [isRotated, setIsRotated] = useState(false);

  // theme
  const { theme } = useTheme();

  useEffect(() => {
    let arr = [];
    arr = routes.filter((item) => item.sidebar);
    setFilterRoutes(arr);
  }, []);

  const toggleDrawer = () => {
    setDrawerWidth((prevWidth) =>
      prevWidth === DRAWER_WIDTH.OPEN ? DRAWER_WIDTH.CLOSED : DRAWER_WIDTH.OPEN
    );
    setIsRotated((prev) => !prev); // Toggle rotation
  };

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
              handleSidebarDrawerClose={handleSidebarDrawerClose}
            />
          ))}
        </List>
      </Box>

      {
        <div className="drawer-footer-actions">
          <AdminSidebarActions drawerWidth={drawerWidth} />
          {}
        </div>
      }
    </Box>
  );
};

export default AdminSidebar;

// "use client";

// import { useState } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import { motion } from "framer-motion";

// const AdminSidebar = () => {
//   const [isRotated, setIsRotated] = useState(false);

//   const toggleRotation = () => {
//     setIsRotated((prev) => !prev);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "16px",
//         backgroundColor: "#fff",
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {/* ZEEK Text */}
//       <Typography
//         variant="h5"
//         component="div"
//         sx={{
//           fontWeight: "bold",
//           color: "#000",
//         }}
//       >
//         ZEEK
//       </Typography>

//       {/* Icon Button */}
//       <motion.div
//         animate={{
//           rotate: isRotated ? 180 : 0,
//         }}
//         transition={{
//           duration: 0.5,
//           ease: "easeInOut",
//         }}
//       >
//         <IconButton
//           onClick={toggleRotation}
//           sx={{
//             backgroundColor: "#f0f0f0",
//             borderRadius: "50%",
//             "&:hover": {
//               backgroundColor: "#e0e0e0",
//             },
//           }}
//         >
//           {isRotated ? (
//             <ArrowForwardIos sx={{ color: "#000" }} />
//           ) : (
//             <ArrowBackIos sx={{ color: "#000" }} />
//           )}
//         </IconButton>
//       </motion.div>
//     </Box>
//   );
// };

// export default AdminSidebar;
