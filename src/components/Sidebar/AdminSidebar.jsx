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

const AdminSidebar = ({ closeSidebar = () => {} }) => {
  const [filterRoutes, setFilterRoutes] = useState([]);
  const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH.OPEN);
  const [isRotated, setIsRotated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
    let arr = [];
    arr = routes.filter((item) => item.sidebar);
    setFilterRoutes(arr);
  }, []);

  // Toggle sidebar open/close
  const toggleDrawer = () => {
    setDrawerWidth((prevWidth) =>
      prevWidth === DRAWER_WIDTH.OPEN ? DRAWER_WIDTH.CLOSED : DRAWER_WIDTH.OPEN
    );
    setIsRotated((prev) => !prev);
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
        {/* <AdminSidebarActions drawerWidth={drawerWidth} /> */}
      </div>
    </Box>
  );
};

export default AdminSidebar;
