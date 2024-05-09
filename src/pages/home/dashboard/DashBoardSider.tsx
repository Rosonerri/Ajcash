import {
  BsCreditCardFill,
  BsFillCaretLeftFill,
  BsFillSendFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { bared, changedBar } from "../../../global/GlobalState";
import { MdDashboardCustomize } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { FaReceipt } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { GiArmorUpgrade } from "react-icons/gi";

const DashBoardSider = () => {
  const toggle = useSelector((state: any) => state.bar);
  const dispatch = useDispatch();
  const location = useLocation();
  const active = location.pathname;
  const navigate = useNavigate();

  return (
    <>
      <div className={`${toggle ? "w-[200px]" : "w-[100px]"} h-screen `}>
        <div
          className={`${
            toggle ? "w-[200px]" : "w-[100px]"
          } h-screen fixed flex flex-col items-center`}
        >
          <div className="my-6 w-full justify-end flex absolute -mr-7 text-[#a0a0a0] hover:cursor-pointer">
            {toggle ? (
              <BsFillCaretLeftFill
                className="text-3xl "
                onClick={() => {
                  dispatch(changedBar());
                }}
              />
            ) : (
              <BsFillCaretLeftFill
                className="text-3xl rotate-180"
                onClick={() => {
                  dispatch(bared());
                }}
              />
            )}
          </div>
          <div className="my-5" />
          <div
            className="text-white font-[Blud]"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Ajcash
          </div>
          <div
            className={`my-[10px] flex items-center  ${
              active === "/dashboard" ? "bg-white text-[#40196D]" : ""
            }  px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer`}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            {" "}
            <div className="mr-2">
              <MdDashboardCustomize className="text-2xl" />
            </div>
            {toggle && <div>DashBoard</div>}
          </div>
          <div
            className={`my-[10px] flex items-center  ${
              active === "/dashboard/send" ? "bg-white text-[#40196D]" : ""
            }  px-4 py-2 rounded-md transition-all duration-300  hover:cursor-pointer`}
            onClick={() => {
              navigate("/dashboard/send");
            }}
          >
            {" "}
            <div className="mr-2">
              <BsFillSendFill className="text-2xl" />
            </div>
            {toggle && <div>Send Money</div>}
          </div>
          <div
            className={`my-[10px] flex items-center  ${
              active === "/dashboard/pay" ? "bg-white text-[#40196D]" : ""
            }  px-4 py-2 rounded-md transition-all duration-300  hover:cursor-pointer`}
            onClick={() => {
              navigate("/dashboard/pay");
            }}
          >
            {" "}
            <div className="mr-2">
              <FaReceipt className="text-2xl" />
            </div>
            {toggle && <div>Pay Money</div>}
          </div>
          <div
            className={`my-[10px] flex items-center  ${
              active === "/dashboard/card" ? "bg-white text-[#40196D]" : ""
            }  px-4 py-2 rounded-md transition-all duration-300  hover:cursor-pointer`}
            onClick={() => {
              navigate("/dashboard/card");
            }}
          >
            {" "}
            <div className="mr-2">
              <BsCreditCardFill className="text-2xl" />
            </div>
            {toggle && <div>Card</div>}
          </div>
          <div
            className={`my-[10px] flex items-center  ${
              active === "/dashboard/budget" ? "bg-white text-[#40196D]" : ""
            }  px-4 py-2 rounded-md transition-all duration-300  hover:cursor-pointer`}
            onClick={() => {
              navigate("/dashboard/budget");
            }}
          >
            {" "}
            <div className="mr-2">
              <FaHistory className="text-2xl" />
            </div>
            {toggle && <div>Budget</div>}
          </div>
          <div
            className={`my-[10px] flex items-center  ${
              active === "/dashboard/account" ? "bg-white text-[#40196D]" : ""
            }  px-4 py-2 rounded-md transition-all duration-300  hover:cursor-pointer`}
            onClick={() => {
              navigate("/dashboard/account");
            }}
          >
            {" "}
            <div className="mr-2">
              <RiAccountCircleFill className="text-2xl" />
            </div>
            {toggle && <div>Account</div>}
          </div>
          <div className="my-[10px] flex items-center hover:cursor-pointer">
            {" "}
            <div className="mr-2">
              <IoIosLogOut className="text-3xl" />
            </div>
            {toggle && <div>Logout</div>}
          </div>
          <div className="w-[80%] my-2 h-[100px] border bg-white rounded-md text-[#40196D] flex-col flex items-center justify-center hover:cursor-pointer">
            <div>
              <GiArmorUpgrade className="text-2xl" />
            </div>
            {toggle && <div className="">Upgrade Account</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardSider;
