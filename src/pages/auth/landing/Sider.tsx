import { IoMdClose } from "react-icons/io"
import { changedToggle } from "../../../global/GlobalState"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Sider = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full flex-col h-screen fixed   backdrop-blur-md z-[400] top-0 text-white items-center max-md:flex hidden ">
                <div className="w-full h-[60px] flex items-center justify-between ">
                    <div className="w-full h-[60px] flex items-center justify-center fixed">
                        <div className="w-[95%] flex items-center justify-between">
                            <div className="font-[Blud] text-black">Ajcash</div>
                            <div className="hidden max-md:block"><IoMdClose className="text-2xl hover:cursor-pointer text-black " onClick={() => {
                                dispatch(changedToggle())
                            }} /></div>
                        </div>
                    </div>
                </div>
                <div className="text-black font-[Bruv] w-[95%] flex flex-col">
                    <div className="my-5">
                        <button className="mr-5 px-5 text-white py-3 rounded-md bg-[#40196D] hover:bg-white hover:border-[#40196D] hover:border hover:text-[#40196D] transition-all duration-300" onClick={() => {
                            navigate("/auth")
                            dispatch(changedToggle())
                        }}>Login</button>

                        <button className=" px-5 text-white hover:border py-3 rounded-md bg-[#40196D] hover:bg-white hover:border-[#40196D] border hover:text-[#40196D] transition-all duration-300" onClick={() => {
                            navigate("/auth/signup")
                            dispatch(changedToggle())
                        }}>Signup</button>
                    </div>
                </div>
                <div className="flex flex-col w-[95%] ">
                    <div className="font-[Blud]  my-4 hover:cursor-pointer text-black w-[100px]" onClick={() => {
                        navigate("/")
                        dispatch(changedToggle())
                    }}>Home</div>
                    <div className="font-[Blud] my-4 hover:cursor-pointer text-black relative w-[100px]" onClick={() => {
                        navigate("/personal")
                        dispatch(changedToggle())
                    }}>Personal</div>
                    <div className="font-[Blud] my-4 hover:cursor-pointer text-black w-[100px]" onClick={() => {
                        navigate("/business")
                        dispatch(changedToggle())
                    }}>Business</div>
                    <div className="font-[Blud] my-4 hover:cursor-pointer text-black w-[100px]" onClick={() => {
                        navigate("/company")
                        dispatch(changedToggle())
                    }}>Company</div>
                </div>
            </div>
        </>
    )
}

export default Sider