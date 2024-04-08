import { Outlet } from "react-router-dom"
import DashBoardSider from "../../pages/home/dashboard/DashBoardSider"
import MobileDashboard from "../../pages/home/dashboard/MobileDashboard"
import { useSelector } from "react-redux"

const AccountLayout = () => {

    const toggle = useSelector((state: any) => state.bar)
    const toggle1 = useSelector((state: any) => state.mobile)
    return (
        <div className="flex justify-between">
            <div className={`${toggle ? "w-[200px] " : "w-[100px]"} max-lg:hidden bg-[#40196D] text-white`}>
                <DashBoardSider />
            </div>
            <div className={`${toggle1 ? "w-[200px]  " : "w-[0px]"} absolute`}><MobileDashboard /></div>
            <Outlet />
        </div>
    )
}

export default AccountLayout