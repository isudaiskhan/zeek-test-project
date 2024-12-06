"use client";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, List, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { routes } from "../../routes/admin";
import AdminSidebarActions from "./Actions/AdminSidebarActions.jsx";
import RenderSidebarList from "./RenderSidebarList";
import { DRAWER_WIDTH } from "@/theme/drawer";

const AdminSidebar = ({
  drawerWidth,
  handleSidebarDrawerClose,
  setDrawerWidth,
  renderToggleButton,
  renderActions,
}) => {
  // theme
  const { theme } = useTheme();

  // state
  const [filterRoutes, setFilterRoutes] = useState([]);

  useEffect(() => {
    let arr = [];
    arr = routes.filter((item) => item.sidebar);
    setFilterRoutes(arr);
  }, []);

  const toggleDrawer = () => {
    if (drawerWidth === DRAWER_WIDTH.CLOSED) {
      setDrawerWidth(DRAWER_WIDTH.OPEN);
    } else {
      setDrawerWidth(DRAWER_WIDTH.CLOSED);
    }
  };

  return (
    <Box sx={{ width: drawerWidth }} className={`sidebar-container ${theme}`}>
      <Box className="logo-box">
        <Typography
          className="logo-heading"
          color="primary"
          textAlign="center"
          variant="h5"
        >
          ZEEK
        </Typography>
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
          {
            <Box className="drawer-toggle-btn">
              <Button
                onClick={toggleDrawer}
                fullWidth
                color="primary"
                variant="contained"
              >
                hgjhghg
                {drawerWidth === DRAWER_WIDTH.OPEN ? (
                  <ArrowBackIos style={{ fontSize: "inherit" }} />
                ) : (
                  <ArrowForwardIos style={{ fontSize: "inherit" }} />
                )}
              </Button>
            </Box>
          }
        </div>
      }
    </Box>
  );
};

export default AdminSidebar;
