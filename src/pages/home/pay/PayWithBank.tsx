import { AiFillQuestionCircle } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import { TbHelpSquareFilled } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const PayWithBank = () => {
  const navigate = useNavigate();

  const data: any = [
    {
      id: 1,
      icon1: <TfiWorld />,
      title: "Make a payment",
      icon2: <FaAngleRight />,
    },
    {
      id: 2,
      icon1: <AiFillQuestionCircle />,
      title: "Get Help/support",
      icon2: <FaAngleRight />,
    },
    {
      id: 3,
      icon1: <BsInfoCircleFill />,
      title: "Learn more about pay ID",
      icon2: <FaAngleRight />,
    },
  ];
  return (
    <div className=" w-full min-h-screen flex justify-center items-center">
      <div className=" w-[90%] md:w-[450px] min-h-[400px] py-10 px-2 rounded-lg shadow-lg border">
        <div className="w-full h-[30px] flex items-center ">
          <div
            className="ml-5 mt-5 flex hover:cursor-pointer hover:underline items-center"
            onClick={() => {
              navigate(-1);
            }}
          >
            <div className="mr-1">
              <IoChevronBack />
            </div>
            <div>Back</div>
          </div>
        </div>
        <div className=" w-full flex flex-col items-center">
          <div className="font-[Blud] text-[20px] ">
            <p>What's this for?</p>
          </div>
          <div className=" mt-6 text-[70px] text-purple-950">
            <TbHelpSquareFilled />
          </div>
          <div className=" my-8 text-[14px] text-gray-400 font-thin">
            Why are you generating a Pay ID
          </div>
          <div className=" flex flex-col gap-3 w-[70%]">
            {data.map((el: any) => (
              <div className=" border h-[50px] rounded-md flex justify-between items-center px-2">
                <div
                  className={`w-[35px] h-[35px] flex justify-center items-center shadow-md  text-[20px] ${
                    el?.id === 1
                      ? "text-green-600"
                      : el?.id === 2
                      ? "text-yellow-500"
                      : el?.id === 3
                      ? "text-blue-400"
                      : ""
                  }`}
                >
                  {el?.icon1}
                </div>
                <div className="w-[200px] text-purple-950">{el?.title}</div>
                <div className="w-[20px] text-gray-400">{el?.icon2}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayWithBank;
