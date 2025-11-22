import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import CustomButton from "../uiComponent/CustomButtom";
import LeftArrow from "../svg/leftArrow";
import RightArrow from "../svg/rightArrow";

const NewsAndEvents = () => {
  const slides = [
    {
      id: 1,
      className: "swiper-slide",
      date: "JAN 30, 2023",
      title: "Cultural Performances",
      desc: "(27–29 January 2025)",
      img: "/assets/news1.jpg",
      type: "NEWS",
    },
    {
      id: 2,
      className: "swiper-slide",
      date: "JAN 21, 2023",
      title: "Prize Distribution & Closing Ceremony",
      desc: "(27–29 January 2025)",
      img: "/assets/news2.jpg",
      type: "NEWS",
    },
    {
      id: 3,
      className: "swiper-slide",
      date: "JAN 15, 2023",
      title: "Rhythm Annual Gathering & Magazine Launch",
      desc: "(27–29 January 2025)",
      img: "/assets/news3.jpg",
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
        <button className="news_prev">
          <LeftArrow />
        </button>
        <button className="news_next">
          <RightArrow />
        </button>
      </div>

      <div className="swiper-container">
        <Swiper
          navigation={{
            nextEl: ".news_next",
            prevEl: ".news_prev",
          }}
          effect="coverflow"
          grabCursor={true}
          spaceBetween={0}
          centeredSlides={false}
          loop={true}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          // mousewheel={{ thresholdDelta: 70 }}
          breakpoints={{
            460: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1201: { slidesPerView: 2 },
            1401: { slidesPerView: 2.5 },
            1600: { slidesPerView: 2.5 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[
            Pagination,
            EffectCoverflow,
            Keyboard,
            Mousewheel,
            Navigation,
          ]}
          className="swiper news-slide"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              className={`${slide.className} ${
                index === 0 ? "first-slide" : "normal-slide"
              }`}
            >
              <img src={slide.img} alt={slide.title} className="slide-news-img"/>

              <div className="slide-content">
              <h5>NEWS - {slide.date}</h5>
                {slide.title && <h3>{slide.title}</h3>}
                {slide.desc && <p>{slide.desc}</p>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </main>
  );
};
export default NewsAndEvents;
