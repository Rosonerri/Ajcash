import { useNavigate } from "react-router-dom"
import vite from "../../../assets/react.svg"
import { motion } from "framer-motion"
import Dialogues from "./Dialogues"
import { BsCreditCardFill, BsFillSendFill } from "react-icons/bs"
import { HiOutlineLink } from "react-icons/hi"
import FreeTransfers from "./FreeTransfers"
import SimpleLife from "./SimpleLife"

const Personal = () => {

  const navigate = useNavigate()

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
    <>
      <div className="w-full h-auto flex flex-col items-center" >
        <motion.div variants={motionVariant} initial="close" animate="open" className="flex w-[95%] items-center justify-between">
          <div className="w-[450px] max-md:w-full max-md:mt-10 mt-7">
            <div className="font-[Blud] max-md:text-center text-[#40196D] text-[45px] leading-[50px] mb-3">Send money for free anytime.</div>
            <div className="max-md:text-center mt-2 text-[#40196D]">Your Ajcash account comes with 25 free transfers to other banks every month. That’s up to 15,000 naira saved on transfers every year.</div>
            <div className="flex items-center my-6 max-md:w-full max-md:justify-center">
              <button className="px-6 py-3 rounded-md bg-[#40196D] mr-5 text-white hover:bg-white hover:border-[#40196D] border transition-all duration-300 hover:text-[#40196D]" onClick={() => {
                navigate("/auth")
              }}>Join Ajcash</button>
            </div>
          </div>
          <div className="w-[45%] h-[500px] max-md:hidden flex items-center justify-between">
            <img className="w-full h-[400px]  object-cover" src={vite} />
          </div>
        </motion.div>
        <div className="w-[95%] grid grid-cols-3 gap-4 max-lg:grid-cols-2 max max-md:grid-cols-1">
          <Dialogues icon={<BsCreditCardFill className="text-2xl text-[#40196D]" />} text="Withdraw cash for payments free of charge at over 3,000 ATMs." />
          <Dialogues icon={<BsFillSendFill className="text-[#40196D]" />} text="Get 35 free transfers on the first day of every month." />
          <Dialogues icon={<HiOutlineLink className=" text-[#40196D]" />} text="Send money free of charge without an account number." />
        </div>
        <div className="my-4" />
        <FreeTransfers />
        <SimpleLife />
        <div className="w-full flex flex-col items-center">
          <div className="text-center text-[#40196D] font-[Blud] text-[40px]">The Money app for Africans.</div>
          <div className="text-[15px] font-[Blud] text-gray-600 my-1">Save, spend, send and invest money across borders.</div>
          <div className="my-3">
            <button className="px-7 py-3 rounded-lg bg-[#40196D] text-white hover:bg-white border hover:border-[#40196D] hover:text-[#40196D] transition-all duration-300" onClick={() => {
              navigate("/auth/signup")
            }}>Join Ajcash</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Personal