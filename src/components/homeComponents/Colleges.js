"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Colleges = ({ colleges }) => {


  return (
    <section className="mb-80">
      <div className="container">
        <h2 className="section_heading text-center mb-3">
          Colleges Under Society
        </h2>

        <p className="section_para text-center mb-5 m-auto college_para">
          We operate a network of institutions offering comprehensive programs in medical, nursing, and allied health sciences. Each college upholds the values of integrity, excellence, and social commitment, preparing students for success in the healthcare sector.
        </p>

        <Swiper
          modules={[ Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          // navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 5000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="college-slider pb-5"
        >
          {colleges.map((college, index) => (
            <SwiperSlide key={index}>
              <div className="college_card">
                <Link href={college.url}>
                  <div className="p-3">
                    <div className="college_img_wrapper">
                      <Image
                        src={college.img}
                        alt={college.title}
                        width={1000}
                        height={1000}
                        
                      />
                      <span className="college_tag">{college.tag}</span>
                    </div>
                  </div>
                  <div className="college_content">
                    <h4>{college.title}</h4>
                    <p className="mb-0">{college.desc}</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Colleges;
