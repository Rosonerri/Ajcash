import vite from "../../../assets/react.svg"
const FreeTransfers = () => {

    return (
        <div className="w-full flex h-auto flex-col items-center">
            <div className="flex w-[95%] items-center justify-between flex-row-reverse max-md:flex-col">
                <div className="w-[450px] max-md:w-full max-md:mt-10 mt-7">
                    <div className="font-[Blud] max-md:text-center text-[#40196D] text-[45px] leading-[50px] mb-3">Free transfers will make your life easier.</div>
                    <div className="max-md:text-center mt-2 text-gray-600">We believe in moving money quickly and free of charge, so you can count on getting 25 free transfers to other banks every month forever.</div>
                </div>
                <div className="w-[45%] h-[500px] max-md:w-[95%] flex items-center justify-between">
                    <img className="w-full h-[350px]  object-cover" src={vite} />
                </div>
            </div>
        </div>
    )
}

export default FreeTransfers