import { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

interface iPayButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const PayButton: FC<iPayButton> = ({ text, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "py-4 px-16 rounded-md bg-[#40196D] text-white",
        className
      )}
    >
      {text ? text : "Pay"}
    </button>
  );
};

export default PayButton;
