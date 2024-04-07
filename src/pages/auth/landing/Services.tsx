import React from 'react'

interface iServe {
    icon?: any;
    title?: string;
    text?: string;
    content?: string;
}

const Services: React.FC<iServe> = ({ icon, text, title, content }) => {
    return (
        <div className=' border h-[310px] rounded-md flex flex-col items-center'>
            <div className="w-[85%] h-[70px] my-5">
                <div className="w-[70px] h-[70px] bg-[#40196D] rounded-3xl flex items-center justify-center">
                    <div className="w-[30px] h-[30px]  rounded-md flex items-center justify-center">{icon}</div>
                </div>
                <div className="my-3 font-[Blud] text-[14px]">{title}</div>
                <div className="my-3 font-[Blud] text-[20px]">{text}</div>
                <div className="my-3">{content}</div>
            </div>
        </div>
    )
}

export default Services