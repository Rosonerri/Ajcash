import { motion } from "framer-motion"
import { useSelector } from "react-redux"
const MobileDashboard = () => {

  const variant = {
    open: {
      width: 200, x: 0, transition: {
        duration: 0.5
      }
    },
    close: {
      width: 0, x: "-200px", transition: {
        duration: 0.5
      }
    }
  }

  const toggle1 = useSelector((state: any) => state.mobile)
  return (
    <motion.div variants={variant} initial={false} animate={toggle1 ? "open" : "close"} className={`${toggle1 ? "w-[200px] " : "w-[0px]"} h-screen bg-black z-[300] backdrop-blur-md `}>Hello</motion.div>
  )
}

export default MobileDashboard