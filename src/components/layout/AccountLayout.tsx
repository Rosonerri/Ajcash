import { Outlet } from "react-router-dom"
import DashBoardSider from "../../pages/home/dashboard/DashBoardSider"
import MobileDashboard from "../../pages/home/dashboard/MobileDashboard"
import { useSelector } from "react-redux"

const AccountLayout = () => {

    const toggle = useSelector((state: any) => state.bar)
    return (
        <div className="flex justify-between">
            <div className={`${toggle? "w-[200px] " : "w-[100px]"} max-lg:hidden bg-black text-white`}>
                <DashBoardSider />
            </div>
            <MobileDashboard />
            <Outlet />
        </div>
    )
}

export default AccountLayout