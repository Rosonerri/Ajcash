import project from "../../../assets/undraw_projections_re_ulc6.svg"
const SecondSection = () => {
    return (
        <>
            <div className="w-full my-10 h-auto flex flex-col items-center">
                <div className="w-full flex items-center justify-between my-10  max-md:flex-col-reverse">
                    <div className="w-[450px] max-lg:w-[400px] max-md:w-full ">
                        <div className="px-4  py-3 w-[180px] rounded-3xl bg-gray-400 my-3">Instant Debit Card</div>
                        <div className="text-[40px] font-[Blud] leading-[50px] max-md:text-[30px] max-md:leading-[35px]">Instant Debit cards that always work</div>
                        <div className="my-2">
                            If transfers aren’t your jam, we get it. Request a debit card and have it delivered to you within 48 hours. Activate it in minutes, and start using it right away.
                        </div>
                        <div className="my-4">
                            <button className="px-5 py-3 hover:bg-white hover:border-[#40196D] border transition-all duration-300 rounded-md bg-[#40196D] text-white hover:text-[#40196D]">Learn More</button>
                        </div>
                    </div>
                    <img className="max-md:w-[90%] border flex justify-center max-lg:w-[350px] w-[600px] h-[400px] max-md:border max-md:shadow-md rounded-2xl max-md:my-3" src={project} />
                </div>
                <div className="w-full flex items-center justify-between my-10  max-md:flex-col-reverse">
                    <div className="w-[450px] max-lg:w-[400px] max-md:w-full ">
                        <div className="px-4  py-3 w-[180px] rounded-3xl bg-gray-400 my-3">Personal Account</div>
                        <div className="text-[40px] font-[Blud] leading-[50px] max-md:text-[30px] max-md:leading-[35px]">One app for all your banking needs</div>
                        <div className="my-2">
                            Need to manage your money with ease? We know that your money is important to you, and we take that seriously. Manage your money, make payments and pay bills all from our banking app.
                        </div>
                        <div className="my-4">
                            <button className="px-5 py-3 hover:bg-white hover:border-[#40196D] border transition-all duration-300 rounded-md bg-[#40196D] text-white hover:text-[#40196D]">Learn More</button>
                        </div>
                    </div>
                    <img className="max-md:w-[90%] border flex justify-center max-lg:w-[350px] w-[600px] h-[400px] max-md:border max-md:shadow-md rounded-2xl max-md:my-3" src={project} />
                </div>
                <div className="w-full flex items-center justify-between my-10  max-md:flex-col-reverse">
                    <div className="w-[450px] max-lg:w-[400px] max-md:w-full ">
                        <div className="px-4  py-3 w-[100px] rounded-3xl bg-gray-400 my-3">Payment</div>
                        <div className="text-[40px] font-[Blud] leading-[50px] max-md:text-[30px] max-md:leading-[35px]">Seamless transactions that always go through</div>
                        <div className="my-2">
                            Enjoy Smooth Money Moves! Transfer funds to loved ones, buy airtime and settle bills effortlessly. At Ajcash, we keep your financial happiness flowing!
                        </div>
                        <div className="my-4">
                            <button className="px-5 py-3 hover:bg-white hover:border-[#40196D] border transition-all duration-300 rounded-md bg-[#40196D] text-white hover:text-[#40196D]">Learn More</button>
                        </div>
                    </div>
                    <img className="max-md:w-[90%] border flex justify-center max-lg:w-[350px] w-[600px] h-[400px] max-md:border max-md:shadow-md rounded-2xl max-md:my-3" src={project} />
                </div>
            </div>
        </>
    )
}

export default SecondSection