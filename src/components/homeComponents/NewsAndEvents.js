import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import CustomButton from "../uiComponent/CustomButtom";

const NewsAndEvents = () => {
  const slides = [
    {
      id: 1,
      className: "swiper-slide",
      date: "JAN 30, 2023",
      title: "Cultural Performances",
      desc: "(27–29 January 2025)",
      img: "/assets/news1.png",
      type: "NEWS",
    },
    {
      id: 2,
      className: "swiper-slide",
      date: "JAN 21, 2023",
      title: "Prize Distribution & Closing Ceremony",
      desc: "(27–29 January 2025)",
      img: "/assets/news1.png",
      type: "NEWS",
    },
    {
      id: 3,
      className: "swiper-slide",
      date: "JAN 15, 2023",
      title: "Rhythm Annual Gathering & Magazine Launch",
      desc: "(27–29 January 2025)",
      img: "/assets/news1.png",
      type: "EVENTS",
    },
  ];

  return (
    <main className="book-main mb-100">
      <div className="content">
        <h2 className="section_heading mb-3">News & Events</h2>
        <p className="section_para mb-4">
          To inspire and empower our students, we regularly organize academic,
          cultural and healthcare-driven events annually. The upcoming Joint
          Annual Gathering, Rhythm 2025 celebrates the spirit of service through
          sports, cultural programs and inspirational sessions by eminent
          guests.
        </p>
        <CustomButton text="View All" />
      </div>

      <div className="swiper-container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          spaceBetween={0}
          centeredSlides={false}
          loop={true}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          mousewheel={{ thresholdDelta: 70 }}
          breakpoints={{
            460: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 },
            1600: { slidesPerView: 2.5 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[Pagination, EffectCoverflow, Keyboard, Mousewheel]}
          className="swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              className={`${slide.className} ${
                index === 0 ? "first-slide" : "normal-slide"
              }`}
            >
              <img src={slide.img} alt={slide.title} />

              {/* <p>{slide.date}</p>
              <div className="slide-content">
                {slide.title && <h3>{slide.title}</h3>}
                {slide.desc && <p>{slide.desc}</p>}
              </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </main>
  );
};
export default NewsAndEvents;
