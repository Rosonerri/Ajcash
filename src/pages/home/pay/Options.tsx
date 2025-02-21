import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface iOption {
  link?: any;
  text?: string;
  icon?: any;
}

const Options: React.FC<iOption> = ({ link, text, icon }) => {
  return (
    <Link to={link}>
      <div className="h-[50px] max-md:justify-center shadow-md flex items-center justify-between px-2 rounded-md border">
        <div className="flex items-center text-[20px] text-[#40196D]">
          {icon}{" "}
          <div className="ml-3 text-[#40196D] font-bold text-[15px] max-md:hidden">
            {text}
          </div>
        </div>
        <div className="max-md:hidden">
          <MdKeyboardArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default Options;