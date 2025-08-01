import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./SwiperComponent.scss";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

interface SwiperComponentProps {
  srcs: string[];
  alt: string;
}

export default function Carrossel({ srcs, alt }: SwiperComponentProps) {
  return (
    <div className="swiper_container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {srcs.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`${alt} - Imagem ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
