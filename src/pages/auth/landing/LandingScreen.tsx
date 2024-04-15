import FirstSection from "./FirstSection"
import FourthSection from "./FourthSection"
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"
import { motion } from "framer-motion"


const LandingScreen = () => {
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
        <>
            <div className="w-full min-h-[100vh] flex flex-col items-center">

                <motion.div variants={motionVariant} initial="close" animate="open" className="w-[95%]">
                    <div>
                        <FirstSection />
                        <SecondSection />
                        <ThirdSection />
                        <FourthSection />
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default LandingScreen