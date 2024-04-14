import { BsFillSendFill } from "react-icons/bs"
import { FaInbox } from "react-icons/fa6"
import { MdOutlineChevronRight } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
const Send = () => {
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
      <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[100vh] flex-col items-center flex text-black">
        <div className="text-[20px] font-[Blud] text-[#40196D] max-lg:my-10 my-3">Send</div>
        <div className="w-[60%] max-lg:w-[90%] min-h-[220px] shadow-lg border rounded-lg flex flex-col items-center">
          <div className="my-3" />
          <div className="w-[90%] shadow-lg rounded-lg border  py-3 flex items-center justify-between px-5">
            <div>
              <div className="text-[15px] font-[Blud] text-[#40196D]">Send to Beneficiaries</div>
              <div className="text-[11px] font-[Blud]">Add a beneficiary to get started.</div>
            </div>
            <button className="px-5 py-[6px] rounded-md bg-[#40196D] text-white text-[12px]">Add</button>
          </div>
          <div className="my-3" />
          <div className="flex items-center justify-between w-[90%] border px-5 py-3 rounded-lg shadow-lg hover:cursor-pointer" onClick={() => {
            navigate("/dashboard/send/money")
          }}>
            <div className="flex items-center">
              <div className=" h-[25px] w-[25px] mr-3 flex items-center justify-center"><BsFillSendFill className="text-2xl text-[#40196D]" /></div>
              <div className="">
                <div className="text-[15px] font-[Blud] text-[#40196D]">Send to bank account</div>
                <div className="text-[12px] font-[Blud]">Send to local bank</div>
              </div>
            </div>
            <div><MdOutlineChevronRight className="text-2xl" /></div>
          </div>
        </div>
        <div className="w-[60%] flex flex-col items-center max-lg:w-[90%] h-[300px] rounded-lg border shadow-md my-5">
          <div className="w-[85%] flex items-center mt-6 font-[Blud]">Recents</div>
          <div className=" my-5 flex flex-col items-center">
            <div className="w-[70px] h-[70px] rounded-full border my-3 flex items-center justify-center">
              <FaInbox className="text-3xl text-gray-500" />
            </div>
            <div className="my-3 font-[Blud]">Nothing to see yet.</div>
            <div className="text-center text-[#6e6e6e] text-[14px]">Send some money and we'll show you your <br /> recent transactions here.</div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Send