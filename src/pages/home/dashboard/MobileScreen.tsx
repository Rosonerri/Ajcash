import { IoMdNotifications } from "react-icons/io"
import francis from "../../../assets/pos.jpg"
import { CgAddR } from "react-icons/cg"
import { AiOutlineSchedule } from "react-icons/ai"
import { BsArrowRightSquare } from "react-icons/bs"
const MobileScreen = () => {
    return (
        <>



        
            <div className="w-full min-h-[100vh] hidden max-md:flex flex-col items-center bg-white relative">
                <div className="w-full flex flex-col h-[370px] items-center ">
                    <div className="my-3 w-full flex items-center flex-col fixed top-0">
                        <div className="w-[95%] flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center  border mr-2">
                                    <img src={francis} alt="" className="w-[50px] h-[50px] object-cover rounded-full object-top " />
                                </div>
                                <div className="font-[Bruv]">Hi!, Francis</div>
                            </div>
                            <div className=""><IoMdNotifications className="text-[20px]" /></div>
                        </div>
                        <div className="w-[90%]  my-2 h-[200px] rounded-lg bg-black">Card Side</div>
                        <div className="w-[85%] flex items-center justify-between my-6">
                            <div className="flex items-center flex-col hover:cursor-pointer">
                                <div><CgAddR className="text-[20px]" /></div>
                                <div className="text-[13px] my-1">Add Money</div>
                            </div>
                            <div className="flex items-center flex-col hover:cursor-pointer">
                                <div><BsArrowRightSquare className="text-[20px]" /></div>
                                <div className="text-[13px] my-1">Send Money</div>
                            </div>
                            <div className="flex items-center flex-col hover:cursor-pointer">
                                <div><AiOutlineSchedule className="text-[20px]" /></div>
                                <div className="text-[13px] my-1">Schedule</div>
                            </div>
                            <div className="flex items-center flex-col hover:cursor-pointer">
                                <div><CgAddR className="text-[20px]" /></div>
                                <div className="text-[13px] my-1">Details</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex bg-black flex-col items-center">
                    <div className="w-full bg-black text-white h-[100vh] sticky top-1  flex flex-col items-center">
                        <div className="w-[50px] h-[5px] rounded-full bg-white my-3" />
                        <div>Transactions</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileScreen