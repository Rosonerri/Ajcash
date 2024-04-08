import { IoClose, IoMenu } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import MobileDashboard from "./MobileDashboard"
import { changedMobile, mobiled } from "../../../global/GlobalState"

const Dashboard = () => {
  const toggle = useSelector((state: any) => state.mobile)
  const dispatch = useDispatch()
  return (
    <>
      {toggle && <MobileDashboard />}
      <div className='w-full min-h-[100vh] text-black max-md:relative'>
        <div className="w-full  justify-end max-md:flex hidden fixed top-3 right-3 hover:cursor-pointer">{!toggle ? <IoMenu className="text-2xl " onClick={() => {
          dispatch(mobiled())
        }} /> : <IoClose className="text-2xl " onClick={() => {
          dispatch(changedMobile())
        }} />}</div>
        <div className=" max-md:my-7  w-[250px]  flex flex-col items-center ">
          <div>Hello World</div>
        </div>
      </div>
    </>
  )
}

export default Dashboard