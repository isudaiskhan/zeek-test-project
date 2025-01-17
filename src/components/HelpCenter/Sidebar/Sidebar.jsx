import React, { useEffect, useState } from "react";
import { List, ListItemText, Box, ListItemButton } from "@mui/material";
import { helpCenterRoutes } from "@/routes/admin";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ activeMenu, handleSelect }) => {
  const pathname = usePathname();
  const [currentActiveMenu, setCurrentActiveMenu] = useState(activeMenu);

  useEffect(() => {
    const matchingRoute = helpCenterRoutes.find((route) =>
      pathname.startsWith(route.path)
    );
    if (matchingRoute) {
      setCurrentActiveMenu(matchingRoute.name);
    }
  }, [pathname]);
  return (
    <Box className="!h-full overflow-y-auto max-h-screen !p-4">
      <List component="div" disablePadding>
        {helpCenterRoutes.map((subRoute, index) => {
          const isActive = currentActiveMenu === subRoute.name;

          return (
            <Link key={index} href={subRoute?.path} passHref>
              <ListItemButton
                className={`!font-inter !text-center !text-[14px] w-auto !cursor-pointer !transition-all !duration-300 ease-in-out !my-7 ${
                  isActive
                    ? "!bg-[#FFEEE4] !rounded-full !text-[#E65300] hover:bg-[#FFE3D8] hover:shadow-lg hover:text-[#FF6600]"
                    : "hover:bg-[#FFE3D8] !rounded-full hover:shadow-lg hover:text-[#FF6600]"
                }`}
                selected={isActive}
                onClick={() => handleSelect(subRoute.name)}
              >
                <ListItemText
                  primary={
                    <span
                      className={`!font-inter !text-center !text-[14px] ${
                        isActive ? "!text-[#E65300]" : "text-[#838383]"
                      }`}
                    >
                      {subRoute.name}
                    </span>
                  }
                  secondary={<span>{subRoute?.description ?? ""}</span>}
                />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
