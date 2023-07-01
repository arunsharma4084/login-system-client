import React from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";

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
    <li key={id} className="flex space-x-2 items-center bg-gray-50">
      <Icon size={25}/>
      <div 
        className="py-2 text-lg"
        onClick={() => navigate(path)}
      >{title}</div>
    </li>
  );
};

export default MenuItem;