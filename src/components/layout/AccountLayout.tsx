import { Outlet } from "react-router-dom"
import DashBoardSider from "../../pages/home/dashboard/DashBoardSider"
import MobileDashboard from "../../pages/home/dashboard/MobileDashboard"
import { useSelector } from "react-redux"

const AccountLayout = () => {

    const toggle = useSelector((state: any) => state.mobile)
    return (
        <div className="flex justify-between">
            <div className={`${toggle ? "w-[200px] " : "w-[100px]"} max-lg:hidden bg-[#40196D] text-white`}>
                <DashBoardSider />
            </div>
            <div className={`${toggle ? "w-[250px] " : "w-[0px]"} max-md:flex hidden  text-white`}> <MobileDashboard /></div>
            <Outlet />
        </div>
    )
}

export default AccountLayout