import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import styles from "../../styles/ImageCarousel.module.css";

const CarouselGallery = ({ images }) => {
  return (
    <div className="container">
      <button className={`swiper-button-prev ${styles.navBtn}`}>←</button>
      <button className={`swiper-button-next ${styles.navBtn}`}>→</button>

      <Swiper
        modules={[Navigation, Pagination]}
        // effect="coverflow"
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
        //   depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        className={styles.swiper}
        
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx} className={styles.card}>
            <img src={item.img} className={styles.image} />

            <div className={styles.overlay}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselGallery;
