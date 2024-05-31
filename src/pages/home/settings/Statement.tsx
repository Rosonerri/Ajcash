import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoIosRadioButtonOff } from "react-icons/io";
const Statement = () => {
  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    close: {
      opacity: 0,
      y: "100px",
    },
  };
  return (
    <motion.div
      variants={motionVariant}
      initial="close"
      animate="open"
      className="w-full min-h-[100vh] flex flex-col items-center"
    >
      <div className="font-[Blud] text-[20px] text-[#40196D] my-5 max-lg:w-12">
        Statement
      </div>
      <div className="w-[60%] max-lg:w-full min-h-[80%] rounded-lg flex justify-center items-center">
        <div className="border rounded-md shadow-md w-[500px] h-[500px]">
          <div className="flex p-3 cursor-pointer hover:text-[#40196D]">
            <FaAngleLeft className="text-[21px] mt-[1px]" />
            <p>Back</p>
          </div>
          <div className="flex justify-center items-center flex-col p-4">
            <p className="font-[900] text-[25px]">Get Statement</p>
            <p className="text-center">Choose a timeframe for your statement</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="mb-4">
              <p className="font-[700]"> Start Date</p>
              <input
                type="text"
                placeholder="set a date to begin"
                className="shadow-md p-2 w-[400px] border outline-none"
              />
            </div>
            <div className="">
              <p className="font-[700]"> End Date</p>
              <input
                type="text"
                placeholder="set a date to End"
                className="shadow-md p-2 w-[400px] border outline-none"
              />
            </div>
          </div>
          <div className="mt-6">
            <p className="font-[700] ml-[50px]"> File Type</p>
            <div className="flex justify-center items-center mr-[59px] cursor-pointer">
              <div className="border w-[150px] h-[40px] flex justify-center items-center mr-4">
                <RiRadioButtonFill className="text-[21px] mr-2 text-green-700" />
                <p>PDF</p>
              </div>
              <div className="border w-[150px] h-[40px] flex justify-center items-center mr-4 cursor-pointer">
                <IoIosRadioButtonOff className="text-[21px] mr-2 text-green-700" />
                <p>Exell</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="p-2 bg-[#40196D] text-[white] rounded-md w-[30%] font-[700] mt-[20px] shadow-md">
              Get
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Statement;
