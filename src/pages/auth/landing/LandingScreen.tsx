import FirstSection from "./FirstSection"
import FourthSection from "./FourthSection"
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"



const LandingScreen = () => {
    return (
        <>
            <div className="w-full min-h-[100vh] flex flex-col items-center">
                
                <div className="w-[95%]">
                    <div>
                        <FirstSection />
                        <SecondSection />
                        <ThirdSection />
                        <FourthSection />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingScreen