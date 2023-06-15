import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <div className="h-fit bg-rose-400 py-6 px-5">
      <div className="flex items-center justify-between">
        <Logo />
        {/* <button
          className="py-2 px-3 text-lg bg-teal-300 rounded border self-center"
          onClick={() => {
            console.log("Log Out");
          }}
        >
          Log Out
        </button> */}
        <div className="flex items-center space-x-2">
          <img
            src="/empty-avatar.png"
            alt="user avatar"
            width={50}
            height={50}
            sizes="50"
            className="border border-black bg-teal-500 rounded-full"
          />
          <span className="h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-teal-500"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
