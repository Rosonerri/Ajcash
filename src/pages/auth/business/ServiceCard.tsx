import { FC } from "react";

export interface iService {
  text?: string;
  icon?: React.ReactNode;
  heading?: string;
}

const ServiceCard: FC<iService> = ({ text, heading, icon }) => {
  return (
    <div className="bg-gray-100 py-7 h-[300px] rounded-md space-y-4 flex flex-col items-center hover:bg-white hover:shadow-lg group transition-all duration-300">
      <div className="rounded-full bg-white w-[70px] h-[70px] group-hover:bg-blue-600 group-hover:text-white flex justify-center items-center text-gray-500 text-[30px] duration-300 transition-all">
        {icon}
      </div>

      <center className="text-[22px] ">{heading}</center>

      <div className="text-center w-[70%] text-[14px] font-light">{text}</div>
    </div>
  );
};

export default ServiceCard;
