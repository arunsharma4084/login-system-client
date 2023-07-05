import React from "react";
import { MdManageAccounts } from "react-icons/md";
// import logo from "../assets/vite.svg";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* <img className="w-10 h-10" src={logo} alt="logo" /> */}
      {/* <MdManageAccounts size={50}/> */}
      <img src="/images/login-system-logo.png" alt="logo for this web app"  width={50} height={50} />
      <h2 className="text-4xl font-bold leading-none -mt-2">Login System</h2>
    </div>
  );
};

export default Logo;
