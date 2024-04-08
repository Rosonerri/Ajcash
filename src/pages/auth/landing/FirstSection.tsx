import { useNavigate } from "react-router-dom"
import vite from "../../../assets/undraw_projections_re_ulc6.svg"
const FirstSection = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className="w-full h-auto flex-col items-center">
        <div className="flex items-center justify-between">
          <div className="w-[450px] max-md:w-full max-md:mt-10 mt-7">
            <div className="font-[Blud] max-md:text-center text-[#40196D] text-[45px] leading-[50px] mb-3">Get the Bank that works.</div>
            <div className="max-md:text-center mt-2 text-gray-600">Brought to you by the same technology that powers Nigeria’s most trusted POS, <span className="font-[Blud]"> Ajcash</span> offers you a reliable personal banking experience.</div>
            <div className="flex items-center my-6 max-md:w-full max-md:justify-center">
              <button className="px-6 py-3 rounded-md bg-[#40196D] mr-5 text-white hover:bg-white hover:border-[#40196D] border transition-all duration-300 hover:text-[#40196D]" onClick={() => {
                navigate("/auth")
              }}>Login</button>
              <button className="px-6 py-3 hover:bg-white hover:border-[#40196D] border transition-all duration-300 rounded-md bg-[#40196D] text-white hover:text-[#40196D]" onClick={() => {
                navigate("/auth/signup")
              }}>Signup</button>

            </div>
          </div>
          <div className="w-[45%] h-[500px] max-md:hidden flex items-center justify-between">
            <img className="w-full h-[400px]  object-cover" src={vite} />
          </div>
        </div>
        <div className="flex w-full flex-col items-center h-auto max-md:mt-7">
          <div className="w-full flex justify-center text-[40px] font-[Blud] text-gray-700 text-center ">Bank with Ajcash </div>
          <div className="w-[60%] text-center max-md:w-full max-lg:w-[70%]">Enjoy a transfer success rate of 99.5% and experience seamless payment transfers. Need to pay some bills, pay a business or send money to a friend? Ajcash transfers go through every time. We mean it.</div>
        </div>
      </div>
    </>
  )
}

export default FirstSection