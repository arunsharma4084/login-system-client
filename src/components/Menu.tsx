import React from "react";
import { menuItems } from "../utils/menuItems";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <div>
    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Dropdown hover 
    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 last:border-t" aria-labelledby="dropdownDefaultButton">
      {menuItems.map((item) => (
        <MenuItem key={item.path} {...item} />
      ))}
    </ul>
    </div>
    </div>
  );
};

export default Menu;
