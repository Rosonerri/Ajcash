import { BsFillCaretLeftFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { bared, changedBar } from "../../../global/GlobalState"


const DashBoardSider = () => {
    const toggle = useSelector((state: any) => state.bar)
    const dispatch = useDispatch()

    return (
        <>
            <div className={`${toggle ? "w-[200px]" : "w-[100px]"} h-screen `}>
                <div className={`${toggle ? "w-[200px]" : "w-[100px]"} h-screen fixed flex flex-col items-center`}>
                    <div className="my-6 w-full justify-end flex absolute -mr-7 hover:cursor-pointer">
                        {toggle ? <BsFillCaretLeftFill className="text-3xl" onClick={() => {
                            dispatch(changedBar())
                        }} /> : <BsFillCaretLeftFill className="text-3xl rotate-180" onClick={() => {
                            dispatch(bared())
                        }} />}


                    </div>
                    <div> Dash</div>
                </div>
            </div>
        </>
    )
}

export default DashBoardSider