import React from "react";
import { IconType } from "react-icons";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface menuItemProps {
  title: string;
  path: string;
  icon: IconType,
  id: number
}

const MenuItem: React.FC<menuItemProps> = ({ id, title, path, icon }) => {
  const Icon = icon
  const navigate = useNavigate()

  return (
    <li key={id} className="flex items-center bg-gray-50 justify-between cursor-pointer" onClick={() => navigate(path)}>
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