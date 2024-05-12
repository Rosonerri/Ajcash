import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ng from "../../../assets/NG.png";
import JAMB from "../../../assets/JAMB.png";
import { FaAngleLeft } from "react-icons/fa6";
import Input from "../profile/reUse/Input";
import Select from "react-select";
import SpecialInput from "./SpecialInput";
import PayButton from "./PayButton";

interface iSelect {
  value: string;
  label: JSX.Element;
}

const Education: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<iSelect | null>(null);

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const options: iSelect[] = [
    {
      value: "JAMB NG",
      label: (
        <div className="flex items-center gap-3">
          <img src={JAMB} width={30} alt="JAMB" /> JAMB NG
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center text-purple-900">
      <div className="lg:w-[50%] xl:w-[40%] w-[90%]">
        <div className="text-[25px] flex justify-center gap-4 items-center text-center font-bold mt-10 lg:mt-5">
          Pay
        </div>

        <div className="w-full rounded-md border shadow-md mt-5 min-h-[70vh] p-7 py-10 pb-14">
          <div
            onClick={handleBackButtonClick}
            className="flex cursor-pointer items-center gap-1"
          >
            <FaAngleLeft />
            <div>Back</div>
          </div>

          <div className="text-[25px] flex justify-center gap-3 items-center text-center font-bold mt-6 text-black lg:mt-2">
            Education <img src={ng} width={30} />
          </div>

          <div className="w-full flex items-center flex-col">
            <div className="mt-7 text-black text-[17px] w-[90%] space-y-7">
              <div className="space-y-2">
                <div>Server Provider</div>

                <Select
                  options={options}
                  value={selectedOption}
                  onChange={(option: any) => setSelectedOption(option)}
                />
              </div>
              <Input label="Phone Number" placeholder="What phone number?" />
              <Input
                label="Profile Code"
                placeholder="Enter your profile code"
              />

              <SpecialInput
                placeholder="How much?"
                label="Amount"
                letter="₦"
                className=""
              />
            </div>

            <div className="mt-10">
              <PayButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
