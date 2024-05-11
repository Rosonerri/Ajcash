import { IoChevronBack } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

const Airtime = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full h-screen flex items-center flex-col">
                <div className="max-lg:mt-28 mt-16 mb-3  font-[Blud] text-[25px] text-[#40196D]">Pay</div>
                <div className="w-[60%] max-md:w-[95%] min-h-[450px] border rounded-lg shadow-lg">
                    <div className="w-full h-[30px] flex items-center">
                        <div className="ml-5 mt-5 flex hover:cursor-pointer hover:underline items-center" onClick={() => {
                            navigate(-1)
                        }}>
                            <div className="mr-1"><IoChevronBack /></div>
                            <div>Back</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="font-[Blud] text-[20px]">Airtime</div>
                        <div className="w-[70%] max-md:w-[90%]">
                            <div className="w-full h-[45px]">
                                <label htmlFor="UserEmail" className="block text-[14px] font-[Blud]  text-gray-700"> Amount </label>
                                <input
                                    type="number"
                                    placeholder="How Much? "
                                    className="mt-1 h-full w-full rounded-md border-gray-200 shadow-sm sm:text-sm pl-3 outline-none border"
                                />
                            </div>
                        </div>
                        <div className="w-[70%] max-md:w-[90%] mt-10">
                            <div className="w-full h-[45px]">
                                <label htmlFor="UserEmail" className="block text-[14px] font-[Blud]  text-gray-700"> Phone Number </label>
                                <input
                                    type="number"
                                    id="UserEmail"
                                    placeholder="What Phone Number"
                                    className="mt-1 h-full w-full rounded-md border-gray-200 shadow-sm sm:text-sm pl-3 outline-none border"
                                />
                            </div>
                        </div>
                        <div className="w-[70%] max-md:w-[90%] mt-10">
                            <div className="w-full h-[45px]">
                                <label htmlFor="UserEmail" className="block text-[14px] font-[Blud]  text-gray-700"> Network</label>
                                <select className="w-full h-full shadow-md rounded-md border outline-none pl-3 hover:cursor-pointer">
                                    <option value="" className="hover:cursor-pointer" >Select Network</option>
                                    <option value="" className="hover:cursor-pointer">MTN NG</option>
                                    <option value="" className="hover:cursor-pointer">Airtel NG</option>
                                    <option value="" className="hover:cursor-pointer">Glo NG</option>
                                    <option value="" className="hover:cursor-pointer">9 MOBILE NG</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-16">
                            <button className="py-4 px-16 rounded-md bg-[#40196D] text-white">Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Airtime