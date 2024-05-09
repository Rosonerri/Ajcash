import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Params, useNavigate, useParams } from "react-router-dom";
import EmailEdit from "./EmailEdit";
import NOKEdit from "./NOKEdit";
import StatusEdit from "./StatusEdit";
import UserNameEdit from "./UserNameEdit";
import HouseAddressEdit from "./HouseAddressEdit";
import PhoneEdit from "./PhoneEdit";
import AccountName from "./AccountName";
import Identification from "./Identification";
// import MobileSideBar from "../../../Components/blocks/MobileSideBar";
import { changedToggle } from "../../../global/GlobalState";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggle = useSelector((state: any) => state.toggle);

  const { type }: Readonly<Params<string>> | undefined | any = useParams();

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
    <div className="w-full">
      <motion.div
        variants={motionVariant}
        initial="close"
        animate="open"
        className={`w-full min-h-[40vh]  pt-4 flex items-center flex-col ${
          toggle ? "bg-[#d8d8d8]" : "bg-[#FFFFFF]"
        }`}
        onClick={() => {
          dispatch(changedToggle());
        }}
      >
        <div className="w-full flex justify-center text-purple-900">
          <div className="xl:w-[40%] md:w-[60%] w-[90%] ">
            <div className="text-[25px] flex justify-center gap-4 items-center text-center font-bold mt-10 lg:mt-5 capitalize">
              {type?.split("-").length > 1 ? (
                <>
                  <div className="capitalize">{type.split("-").join(" ")}</div>
                </>
              ) : (
                type
              )}
            </div>

            <div className="w-full  rounded-md border shadow-md mt-5 min-h-[60vh] p-7 py-10 pb-14">
              <div
                onClick={() => navigate(-1)}
                className="flex cursor-pointer items-center  gap-1"
              >
                <FaAngleLeft />
                <div>Back</div>
              </div>

              {type.includes("email") ? (
                <EmailEdit />
              ) : type.includes("next-of-kin") ? (
                <NOKEdit />
              ) : type.includes("status") ? (
                <StatusEdit />
              ) : type.includes("user") ? (
                <UserNameEdit />
              ) : type.includes("house") ? (
                <HouseAddressEdit />
              ) : type.includes("phone") ? (
                <PhoneEdit />
              ) : type.includes("account") ? (
                <AccountName />
              ) : type.includes("identification") ? (
                <Identification />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EditProfile;
