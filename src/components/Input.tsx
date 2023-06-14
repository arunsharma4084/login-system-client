import React from "react";

interface inputProps {
  type: string;
  value: string;
  name: string;
  placeholder: string;
  autoFocus?: boolean;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ handleChange, ...props }: inputProps) => {
  return (
    <div className="relative flex flex-col space-y-1">
      <input
        {...props}
        onChange={(e) => handleChange(e)}
        className="peer h-8 w-full rounded-md border-2 border-gray-300 p-2 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
      />
      <label
        className="pointer-events-none absolute -top-6 left-0 px-[10px] text-sm leading-none transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-700"
        htmlFor="user-name"
      >
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
