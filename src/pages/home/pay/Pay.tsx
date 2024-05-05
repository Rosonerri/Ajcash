
import Options from "./Options";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { GrSolaris } from "react-icons/gr"
import { MdEmojiTransportation, MdOutlineWifi } from "react-icons/md";
import { FaCcMastercard, FaLightbulb, FaUserGraduate } from "react-icons/fa6";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { GiCardAceDiamonds } from "react-icons/gi";
import { TbGiftCardFilled } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiBank } from "react-icons/ci"
import { VscTerminalBash } from "react-icons/vsc"
import { SiGooglemybusiness } from "react-icons/si"




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
    icon?: any
  }

  const Words: PaymentOption[] = [
    {
      option: "Airtime",
      url: "/airtime",
      icon: <FaCcMastercard />
    },
    {
      option: "Internet",
      url: "/internet",
      icon: <MdOutlineWifi />
    },
    {
      option: "TV",
      url: "/tv",
      icon: <PiTelevisionSimpleLight />
    },
    {
      option: "Electricity",
      url: "/electricity",
      icon: <FaLightbulb />
    },
    {
      option: "Solar",
      url: "/solar",
      icon: <GrSolaris />
    },
    {
      option: "Betting",
      url: "/betting",
      icon: <GiCardAceDiamonds />
    },
    {
      option: "GiftCards",
      url: "/giftcards",
      icon: <TbGiftCardFilled />
    },
    {
      option: "Transportation",
      url: "/transportation",
      icon: <MdEmojiTransportation />
    },
    {
      option: "Education",
      url: "/education",
      icon: <FaUserGraduate />
    },
    {
      option: "Pay With Bank",
      url: "/paywithussd",
      icon: <CiBank />
    },
    {
      option: "POS Terminal",
      url: "/posterminal",
      icon: <VscTerminalBash />
    },
    {
      option: "ATM Withdrawal",
      url: "/witdrawal",
      icon: <BiMoneyWithdraw />
    },
    {
      option: "Pay A business",
      url: "/payabusiness",
      icon: <SiGooglemybusiness />
    },



  ];

  console.log("this is data:", Words);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div className="w-full min-h-[100vh]">
      <motion.div
        variants={motionVariant}
        initial="close"
        animate="open"
        className={`p-[20px] w-full flex flex-col items-center`}
      >
        <div className="font-[Blud] text-[20px] my-3 max-lg:my-10 text-[#40196D]">Pay</div>
        <div className="w-full border rounded-md h-[95%] pb-5 flex flex-col items-center">
          <div className="my-4" />
          <div className={`w-[90%] h-[50px] border overflow-hidden rounded-md ${scroll ? "sticky top-16 shadow-lg" : "relative"}`}>
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
            {filteredOptions(Words.map((word) => word.option)).map((word, index,) => {
              const matchingOption = Words.find((w) => w.option === word);
              if (matchingOption) {
                return (
                  <Options key={index} text={word} link={matchingOption.url} icon={matchingOption.icon} />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="my-5" />
      </motion.div>
    </div>
  );
};

export default Pay;
