import React from "react";
import { GiNigeria } from "react-icons/gi";
import { ImFlag } from "react-icons/im";
import { IoChevronBack } from "react-icons/io5";
import { PiCoinVerticalFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const TV = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="w-[90%]  md:w-[500px] p-2 min-h-[320px] border bg-white rounded-lg shadow-lg mb-5 md:mb-0">
        <div className="w-full h-[30px] flex items-center">
          <div
            className="ml-5 mt-5 flex hover:cursor-pointer hover:underline items-center"
            onClick={() => {
              navigate(-1);
            }}
          >
            <div className="mr-1">
              <IoChevronBack />
            </div>
            <div>Back</div>
          </div>
        </div>
        <div className=" w-full flex flex-col items-center">
          <div className="font-[Blud] text-[20px] flex gap-1">
            <p>TV</p>
            <div className=" text-green-600">
              <ImFlag />
            </div>
          </div>
          <div className="w-[80%] max-md:w-[90%] mt-6">
            <div className="w-full h-[45px]">
              <label
                htmlFor="posCode"
                className="block text-[14px] font-[Blud]  text-gray-700"
              >
                {" "}
                Service Provider{" "}
              </label>
              <select
                name=""
                id=""
                className="mt-1 h-full w-full rounded-md border-gray-200 shadow-sm sm:text-sm pl-3 outline-none border cursor-pointer"
              >
                <option value="" className=" hover:cursor-pointer ">
                  GoTv
                </option>
                <option value="" className=" cursor-pointer">
                  DSTV
                </option>
                <option value="" className=" cursor-pointer">
                  Startime
                </option>
                <option value="" className=" cursor-pointer">
                  NTA
                </option>
              </select>
            </div>
          </div>
          <div className="mt-16">
            <button className="py-4 mt-4 px-16 rounded-md bg-[#40196D] text-white">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TV;
