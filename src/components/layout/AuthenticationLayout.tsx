import { Outlet } from "react-router-dom"
import Header from "../static/Header"
import Footer from "../static/Footer"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { Link } from "react-scroll"
import { useState } from "react"

const AuthenticationLayout = () => {

    const [scroll, setScroll] = useState<boolean>(false)
    const onScroll = () => {
        if (window.scrollY >= 40) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener("scroll", onScroll)
    return (
        <div>
            <Header />
            <div>
                <Outlet />
                {scroll ? <Link to="up" smooth={true} duration={1000}>
                    <div className="w-[45px] rounded-lg bg-gray-200 hover:bg-gray-400 hover:cursor-pointer transition-all duration-300 h-[45px] flex items-center justify-center hover:-translate-y-1 font-[Blud] fixed bottom-7 right-10"> <IoMdArrowDropup className="text-3xl text-[#40196D]" /></div>
                </Link> : <Link to="down" smooth={true} duration={1000}>
                    <div className="w-[45px] rounded-lg bg-gray-200 hover:bg-gray-400 hover:cursor-pointer transition-all duration-300 h-[45px] flex items-center justify-center hover:-translate-y-1 font-[Blud] fixed bottom-7 right-10"> <IoMdArrowDropdown className="text-3xl text-[#40196D]" /></div>
                </Link>}
            </div>
            <Footer />
        </div>
    )
}

export default AuthenticationLayout