import React, { useEffect, useState } from "react";
import { List, ListItemText, Box, ListItemButton } from "@mui/material";
import { businessProfileRoutes } from "@/routes/admin";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileSidebar = ({ activeMenu, handleSelect }) => {
  const pathname = usePathname();
  const [currentActiveMenu, setCurrentActiveMenu] = useState(activeMenu);

  useEffect(() => {
    const matchingRoute = businessProfileRoutes.find((route) =>
      pathname.startsWith(route.path)
    );
    if (matchingRoute) {
      setCurrentActiveMenu(matchingRoute.name);
    }
  }, [pathname]);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <Box className="!h-full overflow-y-auto max-h-screen !border-0 !border-solid !border-[#E7E7E7] !border-r-2 !p-4">
      <List component="div" disablePadding>
        {businessProfileRoutes.map((subRoute, index) => {
          const isActive = currentActiveMenu === subRoute.name;

          return (
            <Link key={index} href={subRoute?.path} passHref>
              <ListItemButton
                className={`!font-inter !text-[14px] !cursor-pointer !transition-all !duration-300 ease-in-out !my-7 ${
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
                      className={`!font-inter !text-[14px] ${
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

        <ListItemButton
          className="!font-inter !text-[14px] !cursor-pointer !transition-all !duration-300 ease-in-out !my-7 hover:bg-[#FFE3D8] !rounded-full hover:shadow-lg hover:text-[#FF6600]"
          onClick={handleLogout}
        >
          <ListItemText
            primary={
              <span className="!font-inter !text-[14px] text-[#838383]">
                Log Out
              </span>
            }
          />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default ProfileSidebar;
