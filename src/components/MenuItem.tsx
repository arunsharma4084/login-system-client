import React from "react";

interface menuItemProps {
  title: string;
  path: string;
}

const MenuItem: React.FC<menuItemProps> = ({ title, path }) => {
  return (
    <li className="p-2 border border-gray-500">
      <a href={path}>{title}</a>
    </li>
  );
};

export default MenuItem;
