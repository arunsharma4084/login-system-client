import React from "react";
import { menuItems } from "../utils/menuItems";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <ul className="p-8 w-fit">
      {menuItems.map((item) => (
        <MenuItem key={item.path} {...item} />
      ))}
    </ul>
  );
};

export default Menu;
