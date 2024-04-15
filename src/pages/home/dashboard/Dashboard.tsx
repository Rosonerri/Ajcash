import { motion } from "framer-motion"

const Dashboard = () => {

  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    close: {
      opacity: 0,
      y: "100px",
    },
  };
  return (
    <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[100vh] flex flex-col items-center">
      Hello World
    </motion.div>
  )
}

export default Dashboard