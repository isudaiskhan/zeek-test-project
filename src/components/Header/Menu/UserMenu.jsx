import ReusableMenu from "@/components/Custom/ReusableMenu/ReusableMenu";
import { removeAuthUser } from "@/redux/slices/authUser";
import { LogoutOutlined } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const UserMenu = ({ anchorEl, toggle }) => {
  // router
  const router = useRouter();

  // redux
  const dispatch = useDispatch();

  const handleMenuClose = () => {
    toggle(null);
  };

  const handleLogout = async () => {
    handleMenuClose();
    Cookies.remove("loggedIn");
    router.push("/auth/login");
    dispatch(removeAuthUser());
    // const logoutEvent = new CustomEvent("logout", {
    //   detail: { logOut: true },
    // });
    // window.dispatchEvent(logoutEvent);
  };

  const menuItems = [
    {
      label: "Logout",
      onClick: handleLogout,
      icon: <LogoutOutlined />,
      disabled: false,
    },
  ];

  return (
    <>
      <ReusableMenu
        isDense
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        toggle={toggle}
        menuItems={menuItems}
        slotProps={{
          paper: {
            sx: {
              width: 150,
              maxWidth: "100%",
            },
          },
        }}
      />
    </>
  );
};

export default UserMenu;
