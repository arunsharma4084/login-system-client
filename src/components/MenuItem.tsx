import React from "react";

interface menuItemProps {
  title: string;
  path: string;
}

const MenuItem: React.FC<menuItemProps> = ({ title, path }) => {
  return (
    <li>
      <a href={path} className="block px-4 py-2 hover:bg-gray-100">{title}</a>
    </li>
  );
};

export default MenuItem;