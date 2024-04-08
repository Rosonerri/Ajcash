import { useSelector } from "react-redux"

const MobileDashboard = () => {

  const toggle = useSelector((state: any) => state.mobile)
  return (
    <div className={`hidden max-md:flex ${toggle ? "w-[250px] " : "w-[0px]"} shadow-md  text-black z-[100] h-[95vh] bottom-0 absolute `}></div>
  )
}

export default MobileDashboard