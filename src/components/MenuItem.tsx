import React from "react";
import { IconType } from "react-icons";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { User } from "../types/types";

interface menuItemProps {
  title: string;
  path: string;
  icon: IconType,
  id: number,
  user: User | undefined,
  authToken: string | undefined
}

const MenuItem: React.FC<menuItemProps> = ({ id, title, path, icon, user, authToken }) => {
  const Icon = icon
  const navigate = useNavigate()

  return (
    <li 
      tabIndex={0} 
      key={id} 
      className="flex items-center bg-gray-50 px-3 py-1 rounded-xl hover:bg-slate-100 justify-between cursor-pointer" 
      onClick={() => navigate(path, {state: {user, authToken}})}
    >
      <div className="space-x-2 flex items-center pr-4">
      <Icon size={25}/>
      <div 
        className="py-4 text-lg leading-none"
      >{title}</div>

      </div>
      <MdKeyboardArrowRight size={25}/>
    </li>
  );
};

export default MenuItem;