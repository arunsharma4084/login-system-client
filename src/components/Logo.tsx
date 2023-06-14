import React from "react";
// import logo from "../assets/vite.svg";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* <img className="w-10 h-10" src={logo} alt="logo" /> */}
      <h2 className="text-3xl font-bold italic text-gray-100">Login System</h2>
    </div>
  );
};

export default Logo;
