import React from "react";
import Logo from "./Logo";
import Dropdown from "../pages/Dropdown";

const AuthHeader: React.FC = () => {
  return (
    <div className="h-fit bg-gray-background border-2 border-b-gray-200 shadow-2xl py-6 px-5">
      <div className="flex items-center justify-between">
        <Logo />
        <Dropdown />
      </div>
    </div>
  );
};

export default AuthHeader;
