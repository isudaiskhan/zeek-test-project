// import { DRAWER_WIDTH } from "@/theme/drawer";
// import { useToggleState } from "@/utils/hooks";
// import { ExpandLess, ExpandMore } from "@mui/icons-material";
// import {
//   Collapse,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Tooltip,
// } from "@mui/material";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const RenderSidebarList = ({
//   route,
//   drawerWidth,
//   handleSidebarDrawerClose,
//   isSmallScreen,
// }) => {
//   // router
//   const pathname = usePathname();

//   // hooks for toggling the subRoutes visibility (sidebar open/close state)
//   const [sidebarOpen, sidebarToggle] = useToggleState();

//   // handle click on list item, toggle sub-routes if available
//   const handleListItemClick = () => {
//     if (route.subRoutes) {
//       sidebarToggle(); // Toggle sub-routes visibility
//     } else {
//       if (handleSidebarDrawerClose) {
//         handleSidebarDrawerClose(); // Close the sidebar
//       }
//     }
//   };

//   const handleSubListItemClick = () => {
//     if (handleSidebarDrawerClose) {
//       handleSidebarDrawerClose(); // Close sidebar when a sub-item is clicked
//     }
//   };

//   // Determine whether to show the sidebar icon and text based on the drawer width
//   const isSidebarCollapsed = drawerWidth === DRAWER_WIDTH.CLOSED;

//   // Close sidebar on small screen if any item is clicked
//   const closeSidebarOnClick = () => {
//     if (isSmallScreen && handleSidebarDrawerClose) {
//       handleSidebarDrawerClose();
//     }
//   };

//   return (
//     <Link href={route.path}>
//       <ListItemButton
//         button
//         className="list-item"
//         onClick={() => {
//           handleListItemClick();
//           closeSidebarOnClick(); // Close the sidebar on item click (for small screens)
//         }}
//         selected={pathname === route.path}
//       >
//         <Tooltip
//           title={isSidebarCollapsed ? route.name : ""}
//           placement="right"
//           arrow
//         >
//           <ListItemIcon>{route.icon}</ListItemIcon>
//         </Tooltip>
//         {/* Show text only if the sidebar is fully opened */}
//         {!isSidebarCollapsed && (
//           <ListItemText
//             primary={route.name}
//             secondary={route?.description ?? ""}
//           />
//         )}
//         {/* Show sub-menu toggle button if subRoutes exist */}
//         {route.subRoutes && !isSidebarCollapsed && (
//           <IconButton>
//             {sidebarOpen ? <ExpandLess /> : <ExpandMore />}
//           </IconButton>
//         )}
//       </ListItemButton>

//       {/* If sub-routes exist, render them in a collapsible list */}
//       {route.subRoutes && (
//         <Collapse in={sidebarOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             {route.subRoutes.map((subRoute) => (
//               <Link key={subRoute.path} href={subRoute.path}>
//                 <ListItemButton
//                   button
//                   className="list-item"
//                   onClick={() => {
//                     handleSubListItemClick();
//                     closeSidebarOnClick(); // Close sidebar on sub-item click (for small screens)
//                   }}
//                   selected={pathname === subRoute.path}
//                   sx={{ pl: 4 }}
//                 >
//                   <Tooltip
//                     title={isSidebarCollapsed ? subRoute.name : ""}
//                     placement="right"
//                     arrow
//                   >
//                     <ListItemIcon>{subRoute.icon}</ListItemIcon>
//                   </Tooltip>
//                   {/* Show text if sidebar is not collapsed */}
//                   {!isSidebarCollapsed && (
//                     <ListItemText
//                       primary={subRoute.name}
//                       secondary={subRoute?.description ?? ""}
//                     />
//                   )}
//                 </ListItemButton>
//               </Link>
//             ))}
//           </List>
//         </Collapse>
//       )}
//     </Link>
//   );
// };

// export default RenderSidebarList;






























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
          button
          className="list-item"
          onClick={() => {
            handleListItemClick();
            closeSidebarOnClick();
          }}
          selected={pathname === route.path}
        >
          <Tooltip title={isSidebarCollapsed ? route.name : ""} placement="right" arrow>
            <ListItemIcon>{route.icon}</ListItemIcon>
          </Tooltip>
          {!isSidebarCollapsed && (
            <ListItemText primary={route.name} secondary={route?.description ?? ""} />
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
                  button
                  className="list-item"
                  onClick={() => {
                    handleSubListItemClick();
                    closeSidebarOnClick();
                  }}
                  selected={pathname === subRoute.path}
                  sx={{ pl: 4 }}
                >
                  <Tooltip title={isSidebarCollapsed ? subRoute.name : ""} placement="right" arrow>
                    <ListItemIcon>{subRoute.icon}</ListItemIcon>
                  </Tooltip>
                  {!isSidebarCollapsed && (
                    <ListItemText primary={subRoute.name} secondary={subRoute?.description ?? ""} />
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
