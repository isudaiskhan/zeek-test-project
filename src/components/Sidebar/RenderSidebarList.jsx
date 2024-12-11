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
  isSmallScreen,
}) => {
  const pathname = usePathname();
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

  const isSidebarCollapsed = drawerWidth === DRAWER_WIDTH.CLOSED;

  const closeSidebarOnClick = () => {
    if (isSmallScreen && handleSidebarDrawerClose) {
      handleSidebarDrawerClose();
    }
  };

  return (
    <div>
      <Link href={route.path} passHref>
        <ListItemButton
          className="list-item"
          onClick={() => {
            handleListItemClick();
            closeSidebarOnClick();
          }}
          selected={pathname === route.path}
        >
          <Tooltip
            title={isSidebarCollapsed ? route.name : ""}
            placement="right"
            arrow
          >
            <ListItemIcon>{route.icon}</ListItemIcon>
          </Tooltip>
          {!isSidebarCollapsed && (
            <ListItemText
              primary={route.name}
              secondary={route?.description ?? ""}
            />
          )}
          {route.subRoutes && !isSidebarCollapsed && (
            <IconButton>
              {sidebarOpen ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )}
        </ListItemButton>
      </Link>

      {route.subRoutes && (
        <Collapse in={sidebarOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {route.subRoutes.map((subRoute) => (
              <Link key={subRoute.path} href={subRoute.path} passHref>
                <ListItemButton
                  className="list-item"
                  onClick={() => {
                    handleSubListItemClick();
                    closeSidebarOnClick();
                  }}
                  selected={pathname === subRoute.path}
                  sx={{ pl: 4 }}
                >
                  <Tooltip
                    title={isSidebarCollapsed ? subRoute.name : ""}
                    placement="right"
                    arrow
                  >
                    <ListItemIcon>{subRoute.icon}</ListItemIcon>
                  </Tooltip>
                  {!isSidebarCollapsed && (
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
    </div>
  );
};

export default RenderSidebarList;
