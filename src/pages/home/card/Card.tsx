import { BsCreditCardFill } from "react-icons/bs"
import { FaQuestion } from "react-icons/fa6"
import { MdChevronRight } from "react-icons/md"
import { motion } from "framer-motion"
const Card = () => {

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
      <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[100vh] flex flex-col items-center text-black">
        <div className="my-3 max-lg:my-10" />
        <div className="w-[60%] max-lg:w-[95%] flex items-center justify-between my-3">
          <div className="text-[20px] font-[Blud] text-[#40196D]">Cards</div>
          <button className="text-[#40196D] hover:-translate-y-1 transition-all duration-300 border-[1px] rounded-lg px-7 py-3 bg-gray-100 border-[#40196D]">Get A Card</button>
        </div>
        <div className="w-[60%] max-lg:w-[95%] border rounded-lg min-h-[80%] mb-24 flex flex-col items-center">
          <div className="my-4" />
          <div className="relative">
            <div className="w-[200px] h-[300px] rounded-lg bg-[#40196D] "></div>
            <div className="w-[200px] h-[300px] rounded-lg bg-gray-300 z-[200] top-20 left-28 max-lg:left-20 absolute  "></div>
          </div>
          <div className="my-12 " />
          <div className="text-[15px] font-[Bruv] ">Spend online and offline with your Ajcash cards</div>

          <div className="py-4 px-4 shadow-md hover:cursor-pointer w-[80%] rounded-lg border my-3 flex items-center justify-between">
            <div className="flex items-center w-full">
              <div className="w-[25px] h-[25px] rounded-md flex items-center justify-center bg-gray-200"><BsCreditCardFill /></div>
              <div className="ml-5">
                <div className="font-[Blud] text-[#40196D] text-[15px]">Request A Card</div>
                <div className="text-[12px]">We'll send it to you wherever you are.</div>
              </div>
            </div>
            <div><MdChevronRight /></div>
          </div>
          <div className="py-4 px-4 shadow-md  hover:cursor-pointer w-[80%]  rounded-lg border my-3 flex items-center justify-between">
            <div className="flex items-center w-full">
              <div className="w-[25px] h-[25px] rounded-md flex items-center justify-center bg-gray-200"><FaQuestion className="text-green-400" /></div>
              <div className="ml-5">
                <div className="font-[Blud] text-[#40196D] text-[15px]">Card FAQs</div>
                <div className="text-[12px]">Learn more about Ajcash cards.</div>
              </div>
            </div>
            <div><MdChevronRight /></div>
          </div>

        </div>
      </motion.div>
    </>
  )
}

export default Card