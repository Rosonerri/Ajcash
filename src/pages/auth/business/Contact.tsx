import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-[90%] xl:w-[70%] gap-5 items-center grid md:grid-cols-2">
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.249346831264!2d3.3288193463727747!3d6.450190993316835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3b151e1823%3A0xd411315455d4f5b5!2sAjeromi-Ifelodun%20Local%20Government%20Area%20Secretariat!5e0!3m2!1sen!2sng!4v1714907383461!5m2!1sen!2sng"
            title="Google Maps"
            className=" w-full h-[450px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="space-y-10">
          <div className="space-y-2">
            {" "}
            <div className="text-[30px] font-bold">Contact Now</div>
            <div className="line w-[50px] border-violet-500 border border-dashed" />
            <div className="text-gray-800 text-[15px] lg:w-[90%]">
              Ajeromi-Ifelodun Local Government Area Secretariat 1Bale Street,
              Ajegunle, Lagos 102103, Lagos
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-1 flex flex-col items-start">
              <div className="bg-violet-500 p-4 text-[30px] text-white">
                <CgMail />
              </div>

              <div className="text-[20px] font-bold">Email</div>
              <div className="text-[15px] text-gray-600">
                contact@domain.com
              </div>
            </div>

            <div className="space-y-1 flex flex-col items-start">
              <div className="bg-violet-500 p-4 text-[30px] text-white">
                <BiPhone />
              </div>

              <div className="text-[20px] font-bold">Phone</div>
              <div className="text-[15px] text-gray-600">+234 803 427 8200</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
