import { motion } from "framer-motion"
import { BsFillSendFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import Charts from "./Charts";
import { FaReceipt } from "react-icons/fa6";
import { MdOutlineWifi } from "react-icons/md";

const Dashboard = () => {

  const navigate = useNavigate()

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

  const data: any = [
    {
      time: "01.46pm",
      name: "Sunday Ohajimmadu",
      type: "Transfer",
      status: "Approved"
    },
    {
      time: "04.00am",
      name: "Christopher Uguru",
      type: "Debit",
      status: "Declined"
    },
    {
      time: "01.46pm",
      name: "Kai Cenat",
      type: "Transfer",
      status: "Approved"
    },
  ]

  return (
    <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[100vh] flex flex-col items-center ">
      <div className="w-[97%] flex flex-col items-center min-h-[100vh] ">
        {/* <hr className="w-full my-5"/>  */}
        <div className="w-full flex  items-center my-2 max-md:hidden">Welcome back <b className="ml-2"> Francis Uzoigwe</b></div>
        <hr className="text-[#40196D] w-full my-2" />
        <div className="w-full grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="h-[200px] min-w-[200px] border rounded-lg max-md:mt-2"></div>
          <div className="h-[200px] min-w-[200px] border rounded-lg max-lg:hidden"></div>
          <div className="h-[200px] min-w-[200px] border rounded-lg max-md:hidden"></div>
        </div>
        <hr className="w-full mt-5" />
        <div className="flex items-center md:center  w-full ">
          <div className="flex flex-col items-center mx-3 my-2 " onClick={() => {
            navigate("/dashboard/send")
          }}>
            <div className="w-[50px] h-[50px] rounded-xl hover:bg-white hover:text-[#40196D] transition-all duration-300 border-[#40196D] border hover:cursor-pointer flex items-center justify-center bg-[#40196D] text-white"><BsFillSendFill className="text-base" /></div>
            <div className="mt-1" >Send</div>
          </div>
          <div className="flex flex-col items-center mx-3 my-2" onClick={() => {
            navigate("/dashboard/pay")
          }}>
            <div className="w-[50px] h-[50px] rounded-xl hover:bg-white hover:text-[#40196D] transition-all duration-300 border-[#40196D] border hover:cursor-pointer flex items-center justify-center bg-[#40196D] text-white"><FaReceipt className="text-base" /></div>
            <div className="mt-1">Pay Bills</div>
          </div>
          <div className="flex flex-col items-center mx-3 my-2" onClick={() => {
            navigate("/dashboard/pay/internet")
          }}>
            <div className="w-[50px] h-[50px] rounded-xl hover:bg-white hover:text-[#40196D] transition-all duration-300 border-[#40196D] border hover:cursor-pointer flex items-center justify-center bg-[#40196D] text-white"><MdOutlineWifi className="text-base" /></div>
            <div className="mt-1">Internet</div>
          </div>
        </div>
        <div className="w-full flex justify-between max-lg:flex-col">
          <div className="w-auto ">
            <div className="font-[Blud] my-2">Bank Balance</div>
            <div className="w-full flex items-center">
              <div className="w-[550px]   flex flex-col items-center">
                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center h-[100px] border rounded-lg shadow-md">
                    <div className="w-[90%]">
                      <div className="mt-3">Total Balance</div>
                      <div className="font-[Blud] text-[25px] ">$2,000</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center h-[100px] border rounded-lg shadow-md">
                    <div className="w-[90%]">
                      <div className="mt-3">Credits</div>
                      <div className="font-[Blud] text-[25px] ">$200</div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-lg:hidden">
                  <div className="mt-4 font-[Blud]">Statistics</div>
                  <div className="h-[300px] rounded-xl w-full border mb-3">
                    <Charts />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="font-[Blud] mt-3">Recent Transactions</div>
            <div className="my-3" />
            <div className="w-full flex-col flex items-center overflow-y-scroll min-h-[420px]">
              {data.map((el: any) => {
                return (
                  <div className="w-[90%] hover:cursor-pointer transition-all duration-300 hover:bg-[#40196D] hover:text-white my-2 shadow-md h-[50px] border rounded-md flex items-center justify-center">
                    <div className="flex items-center w-[95%] justify-between">
                      <div className="flex items-center ">
                        <div className="mr-4 max-md:text-[12px] text-[12px] font-[Blud]">{el.time}</div>
                        <div className="font-[Blud] max-md:text-[12px]">{el.name}</div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-5 max-md:text-[12px]">{el.type}</div>
                        <div className={`${el.status === "Approved" ? "text-[green]" : "text-[red]"} max-md:text-[12px]`}>{el.status}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Dashboard