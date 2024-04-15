import { FaChevronRight } from "react-icons/fa6"
import vite from "../../../assets/react.svg"
const SimpleLife = () => {
    return (
        <div className="w-full flex h-auto flex-col items-center">
            <div className="flex w-[95%] items-center justify-between  max-md:flex-col">
                <div className="w-[450px] max-md:w-full max-md:mt-10 mt-7">
                    <div className="font-[Blud] max-md:text-center text-[#40196D] text-[45px] leading-[50px] mb-3">Ajcash debit card =
                        A simpler life</div>
                    <div className="max-md:text-center mt-2 text-[#40196D]">You can't avoid spending. That's how you pay for your needs. Pick up your Kuda Visa Card or have us deliver it to your address and never pay a card maintenance fee.</div>
                    <div className="flex items-center my-2 hover:cursor-pointer">
                        <div className=" text-[14px] text-[#40196D] underline ">Learn more about Ajcash cards</div>
                        <div className="ml-1"><FaChevronRight className="text-[#40196D]" /></div>
                    </div>
                </div>

                <div className="w-[45%] h-[500px] max-md:w-[95%] flex items-center justify-between">
                    <img className="w-full h-[350px]  object-cover" src={vite} />
                </div>
            </div>
        </div>
    )
}

export default SimpleLife