import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { PiCoinVerticalFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const POS = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="w-[90%]  md:w-[500px] p-2 min-h-[350px] border bg-white rounded-lg shadow-lg">
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
          <div className="font-[Blud] text-[20px]">Pay with C'Gate Code</div>
          <div className=" text-gray-400 text[12px]">
            Type in the 4-6 digit code on the POS
          </div>
          <div className="w-[70%] max-md:w-[90%] mt-6">
            <div className="w-full h-[45px]">
              <label
                htmlFor="posCode"
                className="block text-[14px] font-[Blud]  text-gray-700"
              >
                {" "}
                C'Gate Code{" "}
              </label>
              <input
                type="text"
                placeholder="4-6 digit code "
                className="mt-1 h-full w-full rounded-md border-gray-200 shadow-sm sm:text-sm pl-3 outline-none border"
              />
              <div className=" text-[12px] font-extralight mt-2 flex">
                <div className=" text-[#f7b900]">
                  <PiCoinVerticalFill size={15} />
                </div>
                <p>Daily transaction limit</p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <button className="py-4 mt-4 px-16 rounded-md bg-[#40196D] text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
