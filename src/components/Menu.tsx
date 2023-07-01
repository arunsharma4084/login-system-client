import React from "react";
import { menuItems } from "../utils/menuItems";
import MenuItem from "./MenuItem";

type menuProps = {
  isOpen: boolean;
}
const Menu: React.FC<menuProps> = ({isOpen}) => {
  return (
    <div className={`mt-4 absolute after:content-'' after:absolute after:w-6 after:h-6 after:rotate-45 after:top-0 after:right-0 after:bg-white right-5 top-16 selection:bg-rose-500 selection:text-white ${isOpen? "hidden" : ""}`}>
      <div className="border bg-gray-50 w-fit rounded-xl border-gray-700">
        <div className="border-b-black flex flex-col items-center p-2 pt-4 border space-y-2 rounded-t-xl">
          <img
            src="/empty-avatar.png"
            alt="user avatar"
            width={100}
            height={100}
            sizes="100"
            className="bg-teal-500 rounded-full"
          />
          <h3 className="text-lg font-semibold">Arun Sharma</h3>
        </div>
        {menuItems.map((section, index) => {
          return (
            <ul key={index} className={`px-3 py-1 pr-8 border-b-black ${index === 0 ? "border" : ""}`}>
              {section.map((item) => {
                return <MenuItem key={item.id} {...item} />
              })}
            </ul>
          )
        })}
      </div>
    </div>
  );
};

export default Menu;
