import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const SwiperPage = () => {
    return (
        <div className="w-full h-full -z-20">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                speed={3000}
                effect="fade"
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },

                }}
            >
                <SwiperSlide>
                    <div className="w-[350px] mx-2 h-[200px] rounded-2xl bg-[#40196D] text-white">1</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[350px] h-[200px] rounded-2xl bg-[#40196D] text-white">2</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperPage;
