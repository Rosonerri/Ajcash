import { motion } from "framer-motion"
import { FaAngleLeft } from "react-icons/fa";
const Security = () => {
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
          Security
        </div>
        <div className="w-[60%] max-lg:w-full min-h-[80%] rounded-lg flex justify-center items-center">
          <div className="border rounded-md shadow-md w-[500px] h-[350px]">
            <div className="flex p-3 cursor-pointer hover:text-[#40196D]">
              <FaAngleLeft className="text-[21px] mt-[1px]" />
              <p>Back</p>
            </div>
            <div className="flex justify-center items-center flex-col mt-[40px] p-4">
              <p className="font-[900] text-[25px]">Transaction Pin</p>
              <p className="mt-[10px] text-center">
                Please Enter the OTP code sent to your registered phone number
                so you can update your transaction pin
              </p>
              <button className="p-2 bg-[#40196D] text-[white] rounded-md w-[30%] font-[700] mt-[20px] shadow-md">
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
}

export default Security