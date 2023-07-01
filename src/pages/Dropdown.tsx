import React from "react";
import Menu from "../components/Menu";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button 
        className="flex items-center space-x-2 relative"
        onClick={() => setIsOpen(!isOpen)}>
          <img
            src="/empty-avatar.png"
            alt="user avatar"
            width={50}
            height={50}
            sizes="50"
            className="border border-white bg-teal-500 rounded-full"
          />
          <span className={`h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-teal-500 ${isOpen ? "hidden" : ""}`}></span>
          <span className={`h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-teal-500 ${!isOpen ? "hidden" : ""}`}></span>
      </button>
      <Menu isOpen={isOpen}/>
    </div>
  )
}

export default Dropdown;