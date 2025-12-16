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
import Image from "next/image";

const NewsAndEvents = ({heading, subHeading}) => {
  const slides = [
    {
      id: 1,
      className: "swiper-slide",
      date: "JAN 30, 2023",
      title: "Cultural Performances",
      desc: "(27–29 January 2025)",
      img: "/assets/news/cultural performance.jpeg",
      type: "NEWS",
    },
    {
      id: 2,
      className: "swiper-slide",
      date: "JAN 21, 2023",
      title: "Prize Distribution & Closing Ceremony",
      desc: "(27–29 January 2025)",
      img: "/assets/news/prize-distribution.jpeg",
      type: "NEWS",
    },
    {
      id: 3,
      className: "swiper-slide",
      date: "JAN 15, 2023",
      title: "Rhythm Annual Gathering & Magazine Launch",
      desc: "(27–29 January 2025)",
      img: "/assets/news/gathering.jpeg",
      type: "EVENTS",
    },
   {
      id: 4,
      className: "swiper-slide",
      date: "JAN 30, 2023",
      title: "Cultural Performances",
      desc: "(27–29 January 2025)",
      img: "/assets/news/cultural performance.jpeg",
      type: "NEWS",
    },
    {
      id: 5,
      className: "swiper-slide",
      date: "JAN 21, 2023",
      title: "Prize Distribution & Closing Ceremony",
      desc: "(27–29 January 2025)",
      img: "/assets/news/prize-distribution.jpeg",
      type: "NEWS",
    },
    {
      id: 6,
      className: "swiper-slide",
      date: "JAN 15, 2023",
      title: "Rhythm Annual Gathering & Magazine Launch",
      desc: "(27–29 January 2025)",
      img: "/assets/news/gathering.jpeg",
      type: "EVENTS",
    },
  ];

  return (
    <main className="book-main mb-100">
      <div className="content">
        <h2 className="section_heading mb-3">{heading}</h2>
        <p className="section_para mb-4">
          {subHeading}
        </p>

        <CustomButton text="View All" url="/news"/>
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
            500: { slidesPerView: 1.5 },
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
            <div className="news-slide-image-wrapper">
              <Image src={slide.img} alt={slide.title} className="slide-news-img" width={1000} height={1000}/>
              <div className="slide-gradient"></div>
              </div>

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
