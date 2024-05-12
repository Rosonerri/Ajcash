import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<iInput> = ({ label, className, ...props }) => {
  return (
    <div className="space-y-2 text-start">
      <label>{label}</label>

      <input
        {...props}
        className={twMerge(
          "w-full flex justify-between outline-none cursor-text items-center bg-white text-gray-400 border shadow-md rounded-md px-4 py-2",
          className
        )}
      ></input>
    </div>
  );
};

export default Input;
