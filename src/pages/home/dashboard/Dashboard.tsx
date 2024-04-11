import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiArrowUpRightFill } from "react-icons/pi";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Charts from "./Charts";

import Card from "./Card";


const Dashboard = () => {
  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };
  return (
    <>
      <div className="w-full bg-white text-black   pt-[20px] pb-[10px] pl-[27px] pr-[27px] flex-col   ">
        <div className="flex w-[100%] items-center justify-between">
          <div className="flex items-center">
            <h3 className="text-[20px] font-[Blud] ml-[12px]">Dashboard</h3>
          </div>
        </div>

        <div className="py-[10px] flex  justify-between max-md:flex-col">
          <div className="w-[60%] max-lg:w-full h-[250px] my-3 flex  justify-between ">
            <div className="w-[100%] h-full flex-col flex items-center  ">
              <div className="flex items-center justify-between w-[95%]">
                <div className="text-[#40196D] font-bold">
                  Welcome Back , <span className="text-[20px]">Francis</span>
                </div>
              </div>
              <div className="w-full h-[150px]  flex justify-between items-center my-10 ">
                <div className="flex items-center  w-[90%]">
                  <div className=" w-[75%]">
                    <div className="text-[30px] font-black">
                      {eye ? "₦20,300.36" : "₦*****"}
                    </div>
                    <div className="text-[14px] font-semibold text-gray-700">
                      Your Money
                    </div>
                    <div className="text-[14px] font-semibold text-gray-700 my-1">
                      Credit Limit
                    </div>
                    <div className="flex my-5 ">
                      <button className="bg-[#40196D] text-white px-8 py-3 text-[14px] rounded-md font-thin">
                        Make Payment
                      </button>
                      <button className="ml-4 border-[1px] border-[#40196D] text-[14px]  px-8 py-3 rounded-md hover:bg-gray-800 transition duration-300 hover:cursor-pointer hover:text-white text-[#40196D]">
                        Requisites{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="-ml-6"
                    onClick={() => {
                      onEye();
                    }}
                  >
                    {!eye ? (
                      <FaEyeSlash className="text-[20px] hover:cursor-pointer" />
                    ) : (
                      <FaEye className="text-[20px] hover:cursor-pointer" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] max-md:w-[300px] flex justify-center items-center">
            <Card />
          </div>
        </div>

        <div className="flex items-center justify-between max-lg:flex-col mt-[5px] ">
          <div className="w-[50%] max-lg:w-full  md:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
            <p className="text-[15px] text-[#797D8C]">Total Balance</p>
            <h3 className="font-[700] text-[19px]">
              {eye ? <div>₦ 21,200.00</div> : <div>₦ *******</div>}
            </h3>
            <div className="w-[100%] flex items-center justify-between mt-[5px]">
              <div className="flex items-center">
                <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                  <PiArrowUpRightFill />
                </div>
                <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">
                  +15%
                </p>
              </div>
            </div>
            <div className="absolute right-[17px] top-[20px]">
              <div
                className="-ml-6"
                onClick={() => {
                  onEye();
                }}
              >
                {!eye ? (
                  <FaEyeSlash className="text-[20px] hover:cursor-pointer" />
                ) : (
                  <FaEye className="text-[20px] hover:cursor-pointer" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] flex justify-between mt-[20px]">
          <Charts />
        </div>

        <div className="w-[100%] flex flex-col mt-[30px]">
          <div className=" flex justify-between">
            <h4 className="text-[15px] font-[600] ml-[12px]">
              Top Transactions
            </h4>
            <h4 className="text-[15px] font-[600] ml-[12px] underline">
              View All
            </h4>
          </div>

          <div className="w-[100%] flex items-center h-[40px] my-[10px] border border-[#EBE8FF] rounded-lg justify-between ">
            <div className="flex items-center w-[205px]">
              <img src={""} alt="" className="h-[27px]" />
              <p className="text-[#797D8C] max-md:text-[10px] text-[14px] ml-[22px]">
                Nicholas Patrick
              </p>
            </div>

            <p className="text-[14px] max-md:text-[10px] font-[700]"># 2540.58</p>

            <p className="text-[14px] max-md:text-[10px] text-[#797D8C]  max-md:hidden" >150 Products</p>

            <p className="text-[14px] max-md:text-[10px] text-[#F7941D] mx-3">Credit</p>

            <div className="text-primary cursor-pointer flex justify-end">
              <HiOutlineDotsVertical />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;