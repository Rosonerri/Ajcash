import { motion } from "framer-motion"
const Security = () => {
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
        <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[100vh] flex flex-col items-center ">
            <div className="font-[Blud] text-[20px] text-[#40196D] my-5 max-lg:w-12">Security</div>
            <div className="w-[60%] max-lg:w-full min-h-[80%] border rounded-lg"></div>
        </motion.div>
    )
}

export default Security