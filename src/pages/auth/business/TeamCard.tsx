import { FC } from "react";
import { BsPinterest, BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

export interface iTeam {
  img: string;
  name: string;
  role: string;
}

const TeamCard: FC<iTeam> = ({ img, name, role }) => {
  return (
    <div>
      <div className="border flex flex-col justify-center items-center border-dashed h-[370px] py-5 space-y-4">
        <img
          src={img}
          alt=""
          className="rounded-full border-[3px] w-[90px] h-[90px] transition-all duration-300 hover:w-[120px] object-cover object-top hover:h-[120px]"
        />
        <center className="text-[20px]">{name}</center>
        <div className="flex gap-3 items-center">
          <div className="w-[45px] h-[45px] text-gray-500 bg-gray-200 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white flex items-center justify-center text-[20px]">
            <FaFacebookSquare />
          </div>
          <div className="w-[45px] h-[45px] text-gray-500 bg-gray-200 rounded-full cursor-pointer transition-all duration-300 hover:bg-red-500 hover:text-white flex items-center justify-center text-[20px]">
            <BsPinterest />
          </div>
          <div className="w-[45px] h-[45px] text-gray-500 bg-gray-200 rounded-full cursor-pointer transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center text-[20px]">
            <BsTwitterX />
          </div>
        </div>
        <div className="text-center text-[14px] font-light w-[80%]">{role}</div>
      </div>
    </div>
  );
};

export default TeamCard;
