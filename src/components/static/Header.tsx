import { IoCaretDown } from "react-icons/io5"
import { IoMdMenu } from "react-icons/io"
import Sider from "../../pages/auth/landing/Sider"
import { useDispatch, useSelector } from "react-redux"
import { toggled } from "../../global/GlobalState"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const headnavs: any = [
        {
            text: "Personal",
        },
        {
            text: "Business",
        },
        {
            text: "Company",
        }
    ]

    const toggle = useSelector((state: any) => state.toggle)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            {toggle && <Sider />}
            <div className="w-full h-[60px] flex items-center justify-between z-[3]">
                <div className="w-full h-[60px] flex items-center justify-center fixed shadow-md bg-white z-[300]">
                    <div className="w-[95%] flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="font-[Blud] text-[#40196D] hover:cursor-pointer" onClick={() => {
                                navigate("/")
                            }}>Ajcash</div>
                            <div className="ml-10 flex items-center max-md:hidden">
                                {headnavs.map((props: any) => {
                                    return (<div className="flex items-center mx-6 hover:cursor-pointer text-[#40196D]"><nav className="">{props.text}</nav> <div className="ml-1"><IoCaretDown /></div></div>)
                                })}
                            </div>
                        </div>
                        <div className="flex items-center max-md:hidden">
                            <button className="text-[#40196D]" onClick={() => {
                                navigate("/auth")
                            }}>Login</button>
                            <button className="ml-7 px-3  py-2 rounded-lg text-white font-[Bruv] hover:bg-white hover:border-[#40196D] border transition-all duration-300 hover:text-[#40196D] bg-[#40196D]" onClick={() => {
                                navigate("/auth/signup")
                            }}>Join Ajcash</button>
                        </div>
                        <div className="hidden max-md:block"><IoMdMenu className="text-2xl hover:cursor-pointer hover:text-[#40196D] transition-all duration-300" onClick={() => {
                            dispatch(toggled())
                        }} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header