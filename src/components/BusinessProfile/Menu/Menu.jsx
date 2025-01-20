"use client";

import { Box } from "@mui/material";
import React from "react";
import MenuItem from "./MenuItem";
import MenuEdit from "./MenuEdit";
import AddMenuItem from "./AddMenuItem";

const menuItemsData = [
  {
    id: 1,
    title: "Black Coffee",
    description:
      "Rich, bold, and aromatic, our black coffee is brewed from freshly ground premium beans.",
    image: "/images/checkers.png",
  },
  {
    id: 2,
    title: "Cappuccino",
    description:
      "A cappuccino is a coffee drink made with espresso, steamed milk, and a small amount of milk foam.",
    image: "/images/checkers.png",
  },
  {
    id: 3,
    title: "Latte",
    description:
      "A latte is a coffee drink made with espresso, steamed milk, and a small amount of milk foam.",
    image: "/images/checkers.png",
  },
  {
    id: 4,
    title: "Black Coffee",
    description:
      "Rich, bold, and aromatic, our black coffee is brewed from freshly ground premium beans.",
    image: "/images/checkers.png",
  },
  {
    id: 5,
    title: "Cappuccino",
    description:
      "A cappuccino is a coffee drink made with espresso, steamed milk, and a small amount of milk foam.",
    image: "/images/checkers.png",
  },
  {
    id: 6,
    title: "Latte",
    description:
      "A latte is a coffee drink made with espresso, steamed milk, and a small amount of milk foam.",
    image: "/images/checkers.png",
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = React.useState("menuItem");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box className="p-8">
      {activeTab === "menuItem" && (
        <MenuItem
          menuItemsData={menuItemsData}
          handleTabClick={handleTabClick}
        />
      )}
      {activeTab === "menuEdit" && (
        <MenuEdit
          menuItemsData={menuItemsData}
          handleTabClick={handleTabClick}
        />
      )}
      {activeTab === "addMenuItem" && (
        <AddMenuItem handleTabClick={handleTabClick} />
      )}
    </Box>
  );
};

export default Menu;
