import Options from "./Options";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { GrSolaris } from "react-icons/gr";
import { MdEmojiTransportation, MdOutlineWifi } from "react-icons/md";
import { FaAngleLeft, FaCcMastercard, FaLightbulb, FaUserGraduate } from "react-icons/fa6";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { GiCardAceDiamonds } from "react-icons/gi";
import { TbGiftCardFilled } from "react-icons/tb";
import { BiGame, BiMoneyWithdraw } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { VscTerminalBash } from "react-icons/vsc";
import { SiGooglemybusiness } from "react-icons/si";
import { useNavigate } from "react-router-dom";


const Pay = () => {
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

  const [scroll, setScroll] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredOptions = (options: string[]) => {
    return options.filter((option) =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  interface PaymentOption {
    option: string;
    url: string;
    icon?: any;
  }

  const Words: PaymentOption[] = [
    {
      option: "Airtime",
      url: "/dashboard/pay/airtime",
      icon: <FaCcMastercard />,
    },
    {
      option: "Internet",
      url: "/dashboard/pay/internet",
      icon: <MdOutlineWifi />,
    },
    {
      option: "TV",
      url: "/dashboard/pay/tv",
      icon: <PiTelevisionSimpleLight />,
    },
    {
      option: "Electricity",
      url: "/dashboard/pay/electricity",
      icon: <FaLightbulb />,
    },
    {
      option: "Solar",
      url: "/dashboard/pay/solar",
      icon: <GrSolaris />,
    },
    {
      option: "Betting",
      url: "/dashboard/pay/betting",
      icon: <GiCardAceDiamonds />,
    },
    {
      option: "GiftCards",
      url: "/dashboard/pay/giftcards",
      icon: <TbGiftCardFilled />,
    },
    {
      option: "Transportation",
      url: "/dashboard/pay/transportation",
      icon: <MdEmojiTransportation />,
    },
    {
      option: "Education",
      url: "/dashboard/pay/education",
      icon: <FaUserGraduate />,
    },
    {
      option: "Pay With Bank",
      url: "/dashboard/pay/paywithussd",
      icon: <CiBank />,
    },
    {
      option: "POS Terminal",
      url: "/dashboard/pay/posterminal",
      icon: <VscTerminalBash />,
    },
    {
      option: "ATM Withdrawal",
      url: "/dashboard/pay/witdrawal",
      icon: <BiMoneyWithdraw />,
    },
    {
      option: "Pay A business",
      url: "/payabusiness",
      icon: <SiGooglemybusiness />,
    },
    {
      option: "Gaming",
      url: "/dashboard/pay/gaming",
      icon: <BiGame />,
    },
  ];

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-[100vh]">
      <motion.div
        variants={motionVariant}
        initial="close"
        animate="open"
        className={`p-[20px] w-full flex flex-col items-center`}
      >
        <div className="font-[Blud] text-[20px] my-3  text-[#40196D]">
          Pay
        </div>
        <div className="w-full border rounded-md h-[95%] pb-5 flex flex-col items-center">
          <div className="my-3 w-full ml-3 flex justify-start">
            <div className="flex items-center  hover:cursor-pointer " onClick={() => {
              navigate(-1)
            }}>
              <div className="ml-2"><FaAngleLeft /></div>
              <div className="ml-1">Back</div>
            </div>
          </div>
          <div className="my-4" />
          <div
            className={`w-[90%] h-[50px] border overflow-hidden rounded-md ${scroll ? "sticky top-16 shadow-lg" : "relative"
              }`}
          >
            <div className="absolute left-2 top-[18px]">
              <IoSearchOutline className="text-gray-400" />
            </div>
            <div className="absolute right-2 top-3">
              <IoIosClose className="text-gray-400 hover:cursor-pointer text-2xl" />
            </div>
            <input
              type="search"
              placeholder="Search for bills"
              className="placeholder:text-[13px] w-full h-[50px] outline-none pl-10"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="w-[90%] my-3">Essentials</div>
          <div className="w-[90%] grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-4 gap-3">
            {filteredOptions(Words.map((word) => word.option)).map(
              (word, index) => {
                const matchingOption = Words.find((w) => w.option === word);
                if (matchingOption) {
                  return (
                    <Options
                      key={index}
                      text={word}
                      link={matchingOption.url}
                      icon={matchingOption.icon}
                    />
                  );
                }
                return null;
              }
            )}
          </div>
        </div>
        <div className="my-5" />
      </motion.div>
    </div>
  );
};

export default Pay;
