import React from "react";
interface iDialogue {
    icon?: any;
    text?: string;
}
const Dialogues: React.FC<iDialogue> = ({ icon, text }) => {
    return (
        <>
            <div className=" border rounded-lg flex items-center shadow-lg relative bg-white hover:cursor-pointer">
                <div className="w-full px-4 py-4">
                    <div className=" flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-300">
                        {icon}
                    </div>
                    <div className="my-3 font-[Blud] text-[#40196D] text-[13px]">{text}</div>
                </div>
            </div>
        </>
    )
}

export default Dialogues