import React from "react";
import Logo from "./Logo";
import Dropdown from "../pages/Dropdown";
import { authProps } from "../types/types";

const AuthHeader = (props: authProps) => {
  return (
    <div className="h-fit bg-gray-background border-2 border-b-gray-200 shadow py-6 px-5">
      <div className="flex items-center justify-between">
        <Logo />
        <Dropdown {...props}/>
      </div>
    </div>
  );
};

export default AuthHeader;
