import { Outlet } from "react-router-dom"
import DashBoardSider from "../../pages/home/dashboard/DashBoardSider"
import MobileDashboard from "../../pages/home/dashboard/MobileDashboard"
import { useDispatch, useSelector } from "react-redux"
import { changedMobile, mobiled } from "../../global/GlobalState"
import { IoClose, IoMenu } from "react-icons/io5"

const AccountLayout = () => {
    const toggle = useSelector((state: any) => state.bar)
    const toggle1 = useSelector((state: any) => state.mobile)
    const dispatch = useDispatch()
    return (
        <div className="flex justify-between">
            <div className={`${toggle ? "w-[200px] " : "w-[100px]"} max-lg:hidden bg-[#40196D] text-white`}>
                <DashBoardSider />
            </div>
            <div className={`${toggle1 ? "w-[200px]  " : "w-[0px]"} absolute`}><MobileDashboard /></div>
            <div>
            </div>
            <div className="w-full bg-white shadow-sm z-[400] h-[50px] items-center justify-end max-lg:flex  hidden fixed  "><div className="mx-4 font-[Blud]">Francis Uzoigwe</div><img className="mr-3 w-[30px] h-[30px] rounded-full border" alt="Pic" />{!toggle1 ? <IoMenu className="text-2xl mr-3 hover:cursor-pointer " onClick={() => {
                dispatch(mobiled())
            }} /> : <IoClose className="text-2xl hover:cursor-pointer mr-3" onClick={() => {
                dispatch(changedMobile())
            }} />}</div>
            <Outlet />
        </div>
    )
}

export default AccountLayout