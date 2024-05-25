import { IoMdNotifications } from "react-icons/io"
import francis from "../../../assets/pos.jpg"
import { CgAddR } from "react-icons/cg"
import { AiOutlineSchedule } from "react-icons/ai"
import { BsArrowRightSquare } from "react-icons/bs"
import image from "../../../assets/team1.png"
import { data } from "../../../apis/TransactionData"
const MobileScreen = () => {
    console.log("This is data: ", data)
    data.price?.toLocalString()
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
                <div className="w-full flex flex-col items-center">
                    <div className="w-full bg-black rounded-tr-[30px] rounded-tl-[30px] text-white h-[100vh] overflow-y-scroll sticky top-1  flex flex-col items-center">
                        <div className="w-[50px] h-[5px] rounded-full bg-white my-3" />
                        <div className="flex items-center justify-between w-[90%] text-[14px]">
                            <div>Transactions</div>
                            <div>View All</div>
                        </div>
                        <div className="flex w-full flex-col items-center">
                            {data.map((el: any) => {
                                return (
                                    <div className="text-[#00FFFF] my-2 flex items-center w-[90%] justify-between ">
                                        <div className="flex items-center">
                                            <div className="mr-[10px] h-[40px] w-[40px] rounded-full">
                                                <img src={image} alt="" className="w-full h-full rounded-full" />
                                            </div>
                                            <div>
                                                <div className="text-[14px]">{el.name}</div>
                                                <div className="text-[11px]">{el.data}</div>
                                            </div>
                                        </div>
                                        <div className="text-[14px]">₦{el.price}</div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileScreen