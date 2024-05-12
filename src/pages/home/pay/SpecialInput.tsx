import React, { InputHTMLAttributes } from "react";
import Input from "../profile/reUse/Input";
import { twMerge } from "tailwind-merge";

interface iSpecial extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  letter?: string;
}

const SpecialInput: React.FC<iSpecial> = ({
  label,
  letter,
  className,
  ...props
}) => {
  return (
    <div className="space-y-2 relative">
      <div>{label}</div>

      <div className="relative overflow-hidden h-[44.5px] flex items-center w-full rounded-md border shadow-md">
        <div className="absolute inset-0 bg-purple-200 font-bold text-[16px] flex items-center rounded-md w-[50px] justify-center rounded-r-none">
          {letter}
        </div>
        <div className="flex flex-1 items-center shadow-md justify-end absolute right-0 bottom-0 w-[calc(100%-50px)]">
          <div className="flex-[1]">
            <Input
              {...props}
              className={twMerge(
                "border-none shadow-none w-full h-[43.5px] ",
                className
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialInput;
