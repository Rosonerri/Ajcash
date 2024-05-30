import { MdWavingHand } from "react-icons/md";
import MobileScreen from "./MobileScreen";

const Dashboard = () => {
  return (
    <>
      <MobileScreen />
      <div className="w-full min-h-[100vh] max-lg:hidden bg-[#FFFFFF]">
        <div className="w-full flex min-h-[200vh] justify-between">
          <div className="w-[70%] px-1 flex flex-col items-center">
            <div className="flex items-center font-[Blud] text-[20px] w-full my-1">Welcome Back <MdWavingHand className="text-yellow-400 ml-1 text-2xl"/></div>
            <div className="border rounded-lg w-[97%] h-[300px]"></div>
          </div>
          <div className="min-w-[30%] px-1 flex flex-col items-center">
            <div className="sticky top-0 w-full min-h-[100vh] border rounded-md ">
              <div className="flex flex-col items-center mt-10">
                <div className="w-[120px] h-[120px] rounded-full border">
                  <img src="" alt="" />
                </div>
                <div className="my-2 font-[Blud] text-[16px]">Francis Uzoigwe</div>
                <div className="flex items-center">
                  <div className="">Send</div>
                  <div className="mx-4">Receive</div>
                  <div className="">Others</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
