import { Link, Outlet, useLocation } from "react-router-dom"
import DashBoardSider from "../../pages/home/dashboard/DashBoardSider"
import { useSelector } from "react-redux"
import { IoHome } from "react-icons/io5"
import { RiAccountPinCircleFill } from "react-icons/ri"
import { BsCreditCard2FrontFill, BsFillSendFill } from "react-icons/bs"
import { FaReceipt } from "react-icons/fa6"
const AccountLayout = () => {
    const toggle = useSelector((state: any) => state.bar)
    const location = useLocation()
    const active = location.pathname

    return (
        <div className="flex justify-between">
            <div className="fixed bottom-0 hidden max-lg:flex z-[500] w-full bg-[#40196D] text-[#40196D] h-[60px] items-center justify-center ">
                <div className="w-[80%] flex items-center justify-between">
                    <Link to="/dashboard/send">
                        <div className={`px-3 py-3 rounded-full flex items-center justify-center transition-all duration-300 ${active === "/dashboard/send" ? "bg-white text-[#40196D] -translate-y-[6px]" : "text-white"}`}><BsFillSendFill className="text-[20px]" /></div>
                    </Link>
                    <Link to="/dashboard/pay">
                        <div className={`px-3 py-3 rounded-full transition-all duration-300 flex items-center justify-center ${active === "/dashboard/pay" ? "bg-white text-[#40196D] -translate-y-[6px]" : "text-white"}`}><FaReceipt className="text-[20px]" /></div>
                    </Link>
                    <Link to="/dashboard">
                        <div className={`px-3 py-3 rounded-full transition-all duration-300 flex items-center justify-center  ${active === "/dashboard" ? "bg-white px-3 py-33 text-[#40196D] -translate-y-[6px]" : "text-white"} `}><IoHome className="text-[20px]" /></div>
                    </Link>
                    <Link to="/dashboard/card">
                        <div className={`px-3 py-3 rounded-full transition-all duration-300 flex items-center justify-center  ${active === "/dashboard/card" ? "bg-white text-[#40196D] -translate-y-[6px]" : "text-white"} `}><BsCreditCard2FrontFill className="text-[20px]" /></div></Link>
                    <Link to="/dashboard/account">
                        <div className={`px-3 py-3 rounded-full transition-all duration-300 flex items-center justify-center ${active === "/dashboard/account" ? "bg-white text-[#40196D] -translate-y-[6px] px-3 py-33" : "text-white"}  `}><RiAccountPinCircleFill className="text-[20px]" /></div>
                    </Link>
                </div>
            </div>
            <div className={`${toggle ? "w-[200px] " : "w-[100px]"} max-lg:hidden bg-[#40196D] text-white`}>
                <DashBoardSider />
            </div>
            <div>
            </div>
            <Outlet />
        </div>
    )
}

export default AccountLayout