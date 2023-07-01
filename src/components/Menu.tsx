import React from "react";
import { menuItems } from "../utils/menuItems";
import MenuItem from "./MenuItem";
import { MdEdit } from "react-icons/md";

type menuProps = {
  isOpen: boolean;
}
const Menu: React.FC<menuProps> = ({isOpen}) => {
  return (
    <div tabIndex={0} className={`mt-4 absolute after:content-'' after:absolute after:w-4 after:h-4 after:rotate-45 after:-top-2 after:right-8 after:bg-white after:border-transparent after:border-t-black after:border-l-black after:border 
    right-5 top-18 selection:bg-rose-500 selection:text-white ${!isOpen? "hidden" : ""}`}>
      <div className="border bg-gray-50 w-fit rounded-xl border-gray-700">
        <div className="border-b-black flex flex-col items-center p-2 py-4 border space-y-2 rounded-t-xl relative">
          <img
            src="/empty-avatar.png"
            alt="user avatar"
            width={150}
            height={150}
            sizes="150"
            tabIndex={0}
            className="bg-teal-500 rounded-full border border-rose-500"
          />
          {/* <div className="flex items-center space-x-1 bg-white border border-gray-400 absolute top-28 right-4 p-1 rounded">
            <MdEdit size={20} />
            <p className="leading-none">Edit</p>
          </div> */}
          <h3 tabIndex={0} className="text-xl font-semibold">Arun Sharma</h3>
        </div>
        {menuItems.map((section, index) => {
          return (
            <ul key={index} className={`border-b-black ${index === 0 ? "border" : ""}`}>
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
