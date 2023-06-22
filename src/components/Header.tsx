import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <div className="h-fit bg-rose-400 py-6 px-5">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-2">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
