import { useNavigate } from "react-router-dom"

const FourthSection = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full h-auto flex flex-col my-2 items-center ">
                <div className="text-[35px] font-[Blud] text-[#40196D] max-md:text-[30px] max-md:text-center">Experience banking that works</div>
                <div className="my-3">
                    <button className="py-3 px-5 rounded-xl bg-[#40196D] hover:bg-white hover:text-[#40196D] transition-all duration-300 text-white hover:border-[#40196D] border " onClick={() => {
                        navigate("/auth/signup")
                    }}>Open Account</button>
                </div>
            </div>
        </>
    )
}

export default FourthSection