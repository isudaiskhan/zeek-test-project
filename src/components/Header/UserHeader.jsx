"use client";

import styles from "./styles.module.scss";
import { Avatar, Box, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import UserSideBar from "../Sidebar/UserSideBar";
import dayjs from "dayjs";
import { projectName } from "theme/theme-config";
import { useReduxUser } from "utils/hooks";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "next-themes";
import DrawerToggle from "./DrawerToggle";
import UserMenu from "./Menu/UserMenu";

const UserHeader = ({ drawerWidth }) => {
  // theme
  const { theme } = useTheme();

  // state
  const [currentDate, setCurrentDate] = useState(
    dayjs().format("ddd DD, YYYY hh:mm A")
  );
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // redux
  const userRedux = useReduxUser();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentDate(dayjs().format("ddd DD, YYYY hh:mm A"));
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const handleSidebarDrawerOpen = () => {
    setSidebarMenu(true);
  };

  const handleSidebarDrawerClose = () => {
    setSidebarMenu(false);
  };

  const handleOpenMenu = (element) => {
    setAnchorEl(element);
  };

  return (
    <Box
      className={`${styles["header-container"]} ${styles[theme]} backdrop-blur-sm`}
    >
      <Box className={styles["header-title-btn"]}>
        <DrawerToggle handleSidebarDrawerOpen={handleSidebarDrawerOpen} />
        <Link href="/">
          <p
            className={`${styles["header-title"]} text-sm md:text-lg font-semibold`}
          >
            {projectName}
          </p>
        </Link>
      </Box>
      {userRedux && (
        <div className="flex items-center gap-3">
          <div className="items-center justify-center hidden md:flex">
            <ThemeSwitcher />
            <span
              className={`${styles["date-span"]} text-primary-light dark:text-primary-dark`}
            >
              {currentDate}
            </span>
          </div>
          <Avatar
            src="/images/user.png"
            onClick={(e) => handleOpenMenu(e.currentTarget)}
            className={styles["header-avatar"]}
          />
        </div>
      )}
      {/* menu */}
      <UserMenu anchorEl={anchorEl} toggle={setAnchorEl} />

      {/* dialog */}
      <Drawer
        open={sidebarMenu}
        variant="temporary"
        onClose={handleSidebarDrawerClose}
      >
        <UserSideBar
          handleSidebarDrawerClose={handleSidebarDrawerClose}
          drawerWidth={drawerWidth}
          renderActions
        />
      </Drawer>
    </Box>
  );
};

export default UserHeader;
