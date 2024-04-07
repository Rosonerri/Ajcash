import Services from "./Services"
import { RiCustomerServiceFill, RiSecurePaymentFill } from "react-icons/ri"
import { FaLaptopCode, FaLock, FaUmbrella } from "react-icons/fa"
import { GiUpgrade } from "react-icons/gi"
const ThirdSection = () => {
    return (
        <>
            <div className="w-full flex flex-col items-center my-7 h-auto">
                <div className="my-3 text-[40px] font-[Blud] text-gray-600">Why use <span className="text-[#40196D]">Ajcash</span></div>
                <div className="w-full grid grid-cols-3 gap-5 max-md:grid-cols-1 max-lg:grid-cols-2">
                    <Services title="Advanced Safety Measures" text="State-of-the-art security" content="Ajcash uses the up-to-date cybersecurity technology to protect your information and prevent unauthorized use." icon={<RiSecurePaymentFill className="text-2xl text-white" />} />
                    <Services text="Protection and peace of mind." content="Your funds are insured for up to N250,000 by the Nigerian Deposit Insurance Corporation." title="Insurance" icon={<FaUmbrella className="text-2xl text-white" />} />
                    <Services icon={<GiUpgrade className="text-2xl text-white" />} title="Simple Limit Upgrade" content="Reach for the Stars! Effortlessly upgrade your transaction limits and explore new financial possibilities." />
                    <Services title="Virtual Card" text="Extra Layer of Security" content="Stay secure while shopping online with our virtual card feature. Shop confidently, knowing your actual card details are protected." icon={<FaLock className="text-2xl text-white" />} />
                    <Services text="99.5% reliability" content="Pay anywhere with confidence using a banking solution that always never goes offline." title="Say goodbye to downtimes" icon={<FaLaptopCode className="text-2xl text-white" />} />
                    <Services content="We’re always here to talk. Reach our support team however you need to -  by phone, email, in the app, or check out the Help Center." text="Round the Clock support" title="Anytime, anywhere" icon={<RiCustomerServiceFill className="text-white text-2xl"/>} />
                </div>
            </div>
        </>
    )
}

export default ThirdSection