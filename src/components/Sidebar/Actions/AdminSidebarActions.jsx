import React from "react";
import { HelpSharp, Logout } from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { removeAuthUser } from "@/redux/slices/authUser";
import Image from "next/image";

const drawer = Object.freeze({
  open: 240,
  closed: 80,
});

export const routes = [
  {
    path: "/dashboard/settings",
    name: "Help Center",
    icon: <HelpSharp />,
  },
];

const AdminSidebarActions = ({ drawerWidth }) => {
  // router
  const pathname = usePathname();
  const router = useRouter();

  // redux
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(removeAuthUser());
    router.push("/auth/login");
  };

  return (
    <div className="links-box">
      <List className="navLink">
        {routes.map((route) => (
          <Link href={route.path} key={route.path}>
            <ListItemButton
              className="list-item"
              key={route.path}
              selected={pathname === route.path}
            >
              <Tooltip
                title={drawerWidth === drawer.closed ? route.name : ""}
                placement="right"
                arrow
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
              </Tooltip>
              {drawerWidth === drawer.open && (
                <ListItemText
                  primary={route.name}
                  secondary={route?.description ?? ""}
                />
              )}
            </ListItemButton>
          </Link>
        ))}

        <ListItemButton className="list-item" onClick={handleLogout}>
          <Tooltip
            title={drawerWidth === drawer.closed ? "Logout" : ""}
            placement="right"
            arrow
          >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
          </Tooltip>
          {drawerWidth === drawer.open && (
            <ListItemText primary="Log Out" secondary="" />
          )}
        </ListItemButton>
        <Image
          src="/images/side-footer-logo.svg"
          alt="logo"
          width={100}
          height={100}
          layout="responsive"
          priority
        />
      </List>
    </div>
  );
};

export default AdminSidebarActions;
