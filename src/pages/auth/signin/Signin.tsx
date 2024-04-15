import { useState } from "react";
import student from "../../../assets/undraw_projections_re_ulc6.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineChevronLeft } from "react-icons/md"
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const AuthSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(AuthSchema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    console.log(data);

  })

  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };


  const [inputefilled, setInputfilled] = useState<boolean>(false)

  const handleInputChange = () => {
    const emailInput = document.getElementById("UserEmail") as HTMLInputElement;
    const passwordInput = document.getElementById("UserPassword") as HTMLInputElement;


    if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
      setInputfilled(true)
    } else {
      setInputfilled(false)
    }
  }

  const onHandlePaste = (e: any) => {
    e.preventDefault()
  }


  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#40196D]">
        <div className="w-[90%] items-center flex justify-center h-[520px] rounded-xl bg-white text-black">
          <div className="w-[90%] flex items-center justify-between h-full">
            <form
              onSubmit={onHandleSubmit}
              className="w-[45%]  max-md:w-full h-full flex flex-col items-center rounded-md"
            >
              <div className="flex justify-between items-center w-full my-2">
              <div className="font-[Blud] text-[20px] text-[#40196D] ">Ajcash</div>
                <div className="flex items-center text-[#40196D] hover:cursor-pointer" onClick={() => {
                  navigate(-1)
                }}> <div><MdOutlineChevronLeft className="text-2xl" /></div>Back</div>
              </div>
              <div className="mt-8 text-[40px] font-[Blud] text-center">
                Login to an account
              </div>
              <div className=" text-gray-400 text-[13px]">
                Continue where you stopped
              </div>
              <div className="w-[80%] mt-4">
                <div className="w-full h-[45px] ">
                  <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      onInput={handleInputChange}
                      placeholder="Email"
                      onPaste={onHandlePaste}
                      autoComplete="off"
                      {...register("email")}
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Email
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-[80%] mt-4">
                <div className="w-full h-[45px] ">
                  <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <div
                      className="absolute right-2 hover:cursor-pointer text-[13px]"
                      onClick={() => {
                        onShow();
                      }}
                    >
                      {!show ? "Show" : "Hide"}
                    </div>
                    <input
                      type={`${!show ? "password" : "text"}`}
                      id="UserPassword"
                      onPaste={onHandlePaste}
                      {...register("password")}
                      autoComplete="off"
                      onInput={handleInputChange}
                      placeholder="Password"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Password
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-[80%] my-3 flex items-center">

              </div>
              <button
                className={`w-[80%] rounded-3xl h-[45px] transition duration-300 ${inputefilled ? "bg-[#40196D]  text-white" : "bg-gray-500 text-white"}`}
                type="submit"
                disabled={!inputefilled}
              >
                Sign In
              </button>
              <div className="my-3 text-[15px] flex items-center">Don't have an account ? <span className="ml-1 hover:cursor-pointer" onClick={() => {
                navigate("/auth/signup")
              }}>Signup</span></div>
              <div className="w-full flex items-center justify-center h-[20px] text-[14px] hover:cursor-pointer">
                Forgot Passcode? <div className="ml-2 ">Reset</div>
              </div>
            </form>
            <div className="max-md:hidden w-[50%] border h-[85%] rounded-2xl overflow-hidden">
              <img
                src={student}
                alt=""
                loading="lazy"
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
