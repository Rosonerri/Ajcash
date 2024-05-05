import { ButtonHTMLAttributes, FC } from "react";

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button: FC<iButton> = ({ text, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-[17px] border-white rounded-[40px] border"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
