import { motion } from "framer-motion"
import { BsCreditCardFill, BsFillSendFill } from "react-icons/bs"
import { FaHistory } from "react-icons/fa"
import { FaReceipt } from "react-icons/fa6"
import { IoIosLogOut } from "react-icons/io"
import { MdDashboardCustomize } from "react-icons/md"
import { RiAccountCircleFill } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { changedMobile } from "../../../global/GlobalState"
const MobileDashboard = () => {

  const variant = {
    open: {
      width: 200, x: 0, transition: {
        duration: 0.5
      }
    },
    close: {
      width: 0, x: "-200px", transition: {
        duration: 0.5
      }
    }
  }

  const toggle = useSelector((state: any) => state.mobile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const active = location.pathname
  return (
    <motion.div variants={variant} initial={false} animate={toggle ? "open" : "close"} className={`${toggle ? "w-[200px]" : "w-[0px]"} z-[9999] h-screen   bg-white  flex-col items-center fixed max-lg:flex hidden shadow-2xl`}>
      <div className="my-6 font-[Blud] text-[22px]">Ajcash</div>
      <div>
        <div className={`my-[22px] flex items-center  ${active === "/dashboard" ? "bg-[#40196D] text-white" : "text-[#40196D]"}  px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer`} onClick={() => {
          navigate("/dashboard")
          dispatch(changedMobile())
        }}> <div className="mr-2"><MdDashboardCustomize className="text-2xl" />
          </div><div>DashBoard</div></div>
        <div className={`my-[22px] flex items-center  ${active === "/dashboard/send" ? "bg-[#40196D] text-white" : "text-[#40196D]"}  px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer`} onClick={() => {
          navigate("/dashboard/send")
          dispatch(changedMobile())
        }}> <div className="mr-2"><BsFillSendFill className="text-2xl" />
          </div><div>Send Money</div></div>
        <div className={`my-[22px] flex items-center  ${active === "/dashboard/pay" ? "bg-[#40196D] text-white" : "text-[#40196D]"}  px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer`} onClick={() => {
          navigate("/dashboard/pay")
          dispatch(changedMobile())
        }}> <div className="mr-2"><FaReceipt className="text-2xl" />
          </div><div>Pay Money</div></div>
        <div className={`my-[22px] flex items-center  ${active === "/dashboard/card" ? "bg-[#40196D] text-white" : "text-[#40196D]"}  px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer`} onClick={() => {
          navigate("/dashboard/card")
          dispatch(changedMobile())
        }}> <div className="mr-2"><BsCreditCardFill className="text-2xl" />
          </div><div>Card</div></div>
        <div className={`my-[22px] flex items-center  ${active === "/dashboard/budget" ? "bg-[#40196D] text-white" : "text-[#40196D]"}  px-4 py-2 rounded-md transition-all duration-300  hover:cursor-pointer`} onClick={() => {
          navigate("/dashboard/budget")
          dispatch(changedMobile())
        }}> <div className="mr-2"><FaHistory className="text-2xl" />
          </div><div>Budget</div></div>
        <div className={`my-[22px] flex items-center  ${active === "/dashboard/account" ? "bg-[#40196D] text-white" : "text-[#40196D]"}  px-4 py-2 rounded-md transition-all duration-300  hover:cursor-pointer`} onClick={() => {
          navigate("/dashboard/account")
          dispatch(changedMobile())
        }}> <div className="mr-2"><RiAccountCircleFill className="text-2xl" />
          </div><div>Account</div></div>
        <div className="my-[22px] flex items-center hover:cursor-pointer"> <div className="mr-2 ml-3"><IoIosLogOut className="text-3xl" /></div><div>Logout</div></div>
      </div>
    </motion.div>
  )
}

export default MobileDashboard