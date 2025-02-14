"use client";
import { Box } from "@mui/material";
import React from "react";
import MenuItem from "./MenuItem";
import MenuEdit from "./MenuEdit";
import AddMenuItem from "./AddMenuItem";
import { useGetMenuItems } from "@/services/business-profile/menu";
import Spinner from "@/components/Spinner/Spinner";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

const Menu = () => {
  const [activeTab, setActiveTab] = React.useState("menuItem");

  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetMenuItems();

  const menuItems = data?.pages?.flatMap((page) => page.data) || [];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (isLoading) return <Spinner />;

  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <Box className="p-8">
      {activeTab === "menuItem" && (
        <MenuItem
          menuItemsData={menuItems}
          handleTabClick={handleTabClick}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
      {activeTab === "menuEdit" && (
        <MenuEdit
          menuItemsData={menuItems}
          handleTabClick={handleTabClick}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
      {activeTab === "addMenuItem" && (
        <AddMenuItem handleTabClick={handleTabClick} />
      )}
    </Box>
  );
};

export default Menu;
