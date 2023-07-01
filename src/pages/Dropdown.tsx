import React, { useEffect, useRef} from "react";
import Menu from "../components/Menu";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef(null)
  

  const handleEscapeKey = (e: any) => {
    if(e.key === 'Escape') setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  })

  const useOutsideAlerter = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      // Function for click event
      const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
   
      // Adding click event listener
      isOpen && document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref, isOpen]);
  }

  useOutsideAlerter(dropdownRef)

  return (
    <div ref={dropdownRef} tabIndex={0}>
      <button 
        className="flex items-center space-x-2 relative"
        onClick={() => {
          setIsOpen(!isOpen)
        }}>
          <img
            src="/empty-avatar.png"
            alt="user avatar"
            width={50}
            height={50}
            sizes="50"
            className="border border-white bg-teal-500 rounded-full align-middle"
          />
          <span tabIndex={0} className={`h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-teal-500 ${isOpen ? "hidden" : ""}`}></span>
          <span tabIndex={0} className={`h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-teal-500 ${!isOpen ? "hidden" : ""}`}></span>
      </button>
      <Menu isOpen={isOpen}/>
    </div>
  )
}

export default Dropdown;