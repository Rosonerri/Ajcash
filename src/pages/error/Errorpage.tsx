import { useNavigate } from "react-router-dom"

const Errorpage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center bg-[#40196d]">
                <div className="w-[400px] max-md:w-[90%] min-h-[250px] bg-white text-black shadow-md rounded-xl flex flex-col items-center">
                    <div className="my-4 font-black text-[#40196D] text-[20px]">
                        Ajcash
                    </div>
                    <div className="text-[#40196D] text-[50px] font-[zah] tracking-widest">404</div>
                    <div className="text-[18px] font-black text-center">Sorry page not found 😞</div>
                    <div className="my-3 hover:cursor-pointer hover:underline" onClick={() => {
                        navigate(-1)
                    }}>Click here to return to home</div>
                </div>
            </div>
        </>
    )
}

export default Errorpage
