import { IoMdClose } from "react-icons/io"
import { changedToggle } from "../../../global/GlobalState"
import { useDispatch } from "react-redux"

const Sider = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="w-full flex-col h-screen fixed   backdrop-blur-sm z-[400] top-0 text-white items-center max-md:flex hidden ">
                <div className="w-full h-[60px] flex items-center justify-between ">
                    <div className="w-full h-[60px] flex items-center justify-center fixed">
                        <div className="w-[95%] flex items-center justify-between">

                            <div className="font-[Blud] text-black">Ajcash</div>
                            <div className="hidden max-md:block"><IoMdClose className="text-2xl hover:cursor-pointer " onClick={() => {
                                dispatch(changedToggle())
                            }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sider