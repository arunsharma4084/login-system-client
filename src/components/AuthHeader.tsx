import React from "react";
import Logo from "./Logo";
import Dropdown from "../pages/Dropdown";

const AuthHeader: React.FC = () => {
  return (
    <div className="h-fit bg-gray-900 py-6 px-5">
      <div className="flex items-center justify-between">
        <Logo />
        <Dropdown />
      </div>
    </div>
  );
};

export default AuthHeader;
