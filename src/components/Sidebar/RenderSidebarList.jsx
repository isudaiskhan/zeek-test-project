import { DRAWER_WIDTH } from "@/theme/drawer";
import { useToggleState } from "@/utils/hooks";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RenderSidebarList = ({
  route,
  drawerWidth,
  handleSidebarDrawerClose,
}) => {
  // router
  const pathname = usePathname();

  // hooks
  const [sidebarOpen, sidebarToggle] = useToggleState();

  const handleListItemClick = () => {
    if (route.subRoutes) {
      sidebarToggle();
    } else {
      if (handleSidebarDrawerClose) {
        handleSidebarDrawerClose();
      }
    }
  };

  const handleSubListItemClick = () => {
    if (handleSidebarDrawerClose) {
      handleSidebarDrawerClose();
    }
  };

  return (
    <Link href={route.path}>
      <ListItemButton
        button
        className="list-item"
        onClick={handleListItemClick}
        selected={pathname === route.path}
      >
        <Tooltip
          title={drawerWidth === DRAWER_WIDTH.CLOSED ? route.name : ""}
          placement="right"
          arrow
        >
          <ListItemIcon>{route.icon}</ListItemIcon>
        </Tooltip>
        {drawerWidth === DRAWER_WIDTH.OPEN && (
          <ListItemText
            primary={route.name}
            secondary={route?.description ?? ""}
          />
        )}
        {route.subRoutes && (
          <IconButton>
            {sidebarOpen ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        )}
      </ListItemButton>
      {route.subRoutes && (
        <Collapse in={sidebarOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {route.subRoutes.map((subRoute) => (
              <Link key={subRoute.path} href={subRoute.path}>
                <ListItemButton
                  button
                  className="list-item"
                  onClick={handleSubListItemClick}
                  selected={pathname === subRoute.path}
                  sx={{ pl: 4 }}
                >
                  <Tooltip
                    title={
                      drawerWidth === DRAWER_WIDTH.CLOSED ? subRoute.name : ""
                    }
                    placement="right"
                    arrow
                  >
                    <ListItemIcon>{subRoute.icon}</ListItemIcon>
                  </Tooltip>
                  {drawerWidth === DRAWER_WIDTH.OPEN && (
                    <ListItemText
                      primary={subRoute.name}
                      secondary={subRoute?.description ?? ""}
                    />
                  )}
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
    </Link>
  );
};

export default RenderSidebarList;
