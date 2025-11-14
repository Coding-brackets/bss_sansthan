"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Announcement = () => {
  const announcements = [
    {
      title: "Students describe BSS as a place",
      desc: "Students describe BSS as a place where learning meets purpose. From supportive faculty to real-world hospital exposure.",
    },
    {
      title: "Students describe BSS as a place",
      desc: "Students describe BSS as a place where learning meets purpose. From supportive faculty to real-world hospital exposure.",
    },
    {
      title: "Students describe BSS as a place",
      desc: "Students describe BSS as a place where learning meets purpose. From supportive faculty to real-world hospital exposure.",
    },
    {
      title: "Students describe BSS as a place",
      desc: "Students describe BSS as a place where learning meets purpose. From supportive faculty to real-world hospital exposure.",
    },
  ];

  return (
    <div className="mb-80 announcement-wrapper">
      <div className="container">
        <h2 className="section_heading text-center mb-4">Announcement</h2>

        <div className="announcement-swiper-container">
          {/* BLUR LEFT */}
          <div className="blur-left"></div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Navigation, Pagination]}
            className="announcementSwiper"
            breakpoints={{
              0: {
                slidesPerView: 1, // Mobile
              },
              768: {
                slidesPerView: 2, // Tablet
              },
              1024: {
                slidesPerView: 3, // Desktop
              },
            }}
          >
            {announcements.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="announcement-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* BLUR RIGHT */}
          <div className="blur-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
