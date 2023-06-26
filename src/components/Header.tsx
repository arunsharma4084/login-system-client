import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="h-fit bg-gray-900 py-6 px-5">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-2">
          <button className="ml-1 px-1 pb-1 text-xl italic leading-none text-white">
            <Link to="/signup">SignUp</Link>
          </button>
          <button className="ml-1 px-1 pb-1 text-xl italic leading-none text-white">
            <Link to="/signup">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
